interface ChatResponse {
  message: string
}

interface ChatError {
  error: string
}

export class GroqService {
  private async fetchWithRetry(url: string, options: RequestInit, retries = 3): Promise<Response> {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, options)
        if (response.ok) return response
        
        if (response.status === 429 && i < retries - 1) {
          // Rate limit - wait before retry
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000))
          continue
        }
        
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      } catch (error) {
        if (i === retries - 1) throw error
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
      }
    }
    throw new Error('Max retries exceeded')
  }

  async generateResponse(userMessage: string, conversationHistory: Array<{role: 'user' | 'assistant', content: string}> = []): Promise<string> {
    try {
      const response = await this.fetchWithRetry('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory
        }),
      })

      if (!response.ok) {
        const errorData: ChatError = await response.json().catch(() => ({ error: 'Unknown error' }))
        
        // Log specific error types for debugging
        if (response.status === 405) {
          console.error('405 Method Not Allowed - Check if API route is properly configured')
        }
        
        throw new Error(`API error: ${response.status} - ${errorData.error}`)
      }

      const data: ChatResponse = await response.json()
      return data.message
    } catch (error) {
      console.error('Chat API Error:', error)
      
      // Fallback responses based on error type
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          return "I'm having trouble connecting to my AI service. Please make sure the API key is configured correctly."
        }
        if (error.message.includes('rate limit') || error.message.includes('429')) {
          return "I'm getting a lot of requests right now. Please try again in a moment!"
        }
        if (error.message.includes('network') || error.message.includes('fetch')) {
          return "I'm having network issues. Please check your connection and try again."
        }
      }
      
      return "I'm experiencing some technical difficulties right now. Please try again later, or feel free to explore Jayesh's portfolio directly!"
    }
  }
}

// Export a singleton instance
export const groqService = new GroqService()
