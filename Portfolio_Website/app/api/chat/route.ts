import { NextRequest, NextResponse } from 'next/server'

interface GroqMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface GroqResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
}

// Handle GET requests with helpful error message
export async function GET() {
  return NextResponse.json(
    { 
      error: 'Method not allowed. This endpoint only accepts POST requests.',
      message: 'Please use POST method to send chat messages.',
      example: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Hello', conversationHistory: [] })
      }
    },
    { status: 405 }
  )
}

export async function POST(request: NextRequest) {
  try {
    // Log the request for debugging
    console.log('Chat API called with method:', request.method)
    
    const { message, conversationHistory = [] } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GROQ_API_KEY
    const model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile'

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Groq API key not configured' },
        { status: 500 }
      )
    }

    // Structured Jayesh data as knowledge base
    const jayeshData = {
      background: "Passionate Full-Stack Developer and AI Engineer from Bengaluru. Turned academics around from failing in school to 9+ CGPA in college. Specializes in modern web technologies, machine learning, and creating seamless user experiences.",
      skills: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
        backend: ["Python", "FastAPI", "Java", "Spring Boot", "Node.js", "Express"],
        databases: ["MySQL", "MongoDB", "Firebase Realtime Database"],
        ml: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "XGBoost"],
        devops: ["Firebase", "Vercel", "Render", "GitHub", "Git", "REST APIs", "Authentication", "SEO Optimization"]
      },
      projects: {
        healthpredict: "AI-powered disease prediction platform using FastAPI, React, and ML models",
        hcf_website: "Full-stack website with multi-role authentication and 97 Lighthouse score",
        threatpeek: "Open-source API endpoint scanner for cybersecurity",
        job_portal: "Backend-driven job portal with MySQL",
        loan_prediction: "ML system for financial predictions"
      },
      experience: {
        lead_dev: "Lead Software Developer at Humans Care Foundation (June-July 2025)",
        ml_intern: "Python & ML Intern at Humans Care Foundation (Feb-Mar 2025)",
        backend_intern: "Backend Developer Intern at WhyDigit Pvt. Ltd (Jan-Feb 2025)"
      },
      achievements: [
        "Completed 35+ Python projects specializing in Machine Learning and Data Analysis",
        "Led training sessions on NumPy, Pandas, Matplotlib, and Scikit-Learn",
        "Achieved 100+ active users within first month of website launch",
        "Strong expertise in GitHub collaboration and real-world project development"
      ],
      personality: {
        traits: "High Openness (curious, idea-driven), High Conscientiousness (disciplined, goal-oriented), Balanced Extraversion, Warm but assertive Agreeableness, Low Neuroticism (calm, stable)",
        approach: "Attention to detail, collaborative spirit, passion for meaningful software solutions. Enjoys mentoring others and contributing to open-source projects."
      },
      favorites: {
        anime: "One Piece",
        hero: "Kiyotaka Ayanokōji (Classroom of the Elite)",
        motivator: "Naruto's journey",
        roleModels: ["My Dad", "Myself (tomorrow's me)"]
      },
      fun_facts: [
        "Survives on coffee ☕",
        "Invites friends to 24-hour no-sleep hackathons and calls it 'fun' 🤣",
        "Loves anime, novels, and vibing over random startup ideas",
        "Loves to code and learn new things",
        "Loves going on bike rides with his friend"
      ],
      contact: {
        portfolio: "https://jayeshportfolio-rose.vercel.app/",
        github: "https://github.com/Aspect022",
        twitter: "@Jayesh25279350"
      }
    }

    // Fun, chill system prompt
    const systemPrompt = `You are Jayesh RL's AI assistant. 

Your personality: fun, chill, a little witty, but professional when needed. Talk like a friendly human, not like a stiff chatbot.

Your job: 
- Answer ONLY using the info provided about Jayesh below
- Be warm, conversational, and engaging
- If asked something outside the data, say: "I don't have that info about Jayesh, but you can check jayeshrl.dev for more!"
- Keep answers natural - short if casual question, longer if needed
- Never make up facts
- Use emojis occasionally to keep it fun 😊

Here's the structured profile you know about Jayesh:
${JSON.stringify(jayeshData, null, 2)}`

    // Build messages array
    const messages: GroqMessage[] = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message }
    ]

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 500,
        temperature: 0.7,
        stream: false,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Groq API error:', response.status, errorData)
      
      return NextResponse.json(
        { error: `Groq API error: ${response.status}` },
        { status: response.status }
      )
    }

    const data: GroqResponse = await response.json()
    
    if (!data.choices || data.choices.length === 0) {
      return NextResponse.json(
        { error: 'No response generated from Groq API' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: data.choices[0].message.content.trim()
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
