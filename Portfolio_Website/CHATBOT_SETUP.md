# AI Chatbot Setup Instructions

## Overview
Your portfolio now includes a fully functional AI chatbot powered by Groq's LLaMA models. The chatbot can answer questions about Jayesh's skills, projects, and experience.

## Setup Steps

### 1. Get Groq API Key
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables
1. Open the `.env.local` file in your project root
2. Replace `your_groq_api_key_here` with your actual Groq API key:
   ```
   GROQ_API_KEY=gsk_your_actual_api_key_here
   ```

### 3. Choose Model (Optional)
You can change the model in `.env.local`:
- `llama-3.3-70b-versatile` - **Recommended**: Higher quality, more natural responses
- `llama-3.1-8b-instant` - Faster responses, but less nuanced

### 4. Test the Chatbot
1. Start your development server: `npm run dev`
2. Visit your portfolio website
3. Click on the floating robot assistant in the bottom-right corner
4. Try asking questions like:
   - "What are Jayesh's technical skills?"
   - "Tell me about his projects"
   - "What's his experience with React?"
   - "What does Jayesh like to do for fun?"
   - "Who's his favorite anime character?"
   - "How can I contact Jayesh?"

## Features
 

 
### ✅ Implemented
- **Real AI Responses**: Powered by Groq's LLaMA 3.3 70B model for natural conversations
- **Fun Personality**: Chill, witty, and engaging responses (not robotic!)
- **Structured Knowledge**: Organized data about Jayesh's skills, projects, and personality
- **Context Awareness**: Knows about Jayesh's skills, projects, experience, and interests
- **Conversation History**: Maintains context throughout the chat
- **Loading States**: Shows spinner while generating responses
- **Error Handling**: Graceful fallbacks for API issues
- **Responsive Design**: Works on desktop and mobile
- **Multiple Robot Variants**: Animated, Pixel, and Floating versions

### 🔧 Technical Details
- **API Route**: `/api/chat` handles secure server-side API calls
- **Client Service**: `lib/groq-service.ts` manages API communication
- **Components**: Updated `RobotChatInterface` and `FloatingAIAssistant`
- **Security**: API key stored server-side, not exposed to client

## Troubleshooting

### Common Issues

1. **"API key not configured" error**
   - Make sure your `.env.local` file has the correct `GROQ_API_KEY`
   - Restart your development server after adding the key

2. **Build Error: "export const dynamic not configured"**
   - This happens if your `next.config.js` has `output: 'export'`
   - API routes require a server and can't be statically exported
   - Remove `output: 'export'` from your `next.config.js` file
   - Redeploy your application

3. **405 Method Not Allowed (Production only)**
   - This happens when deployed to Vercel but works locally
   - The frontend is correctly using POST method, so this is usually a deployment issue
   - Check that your API route file structure is correct: `app/api/chat/route.ts`
   - Redeploy your application after ensuring the file structure is correct
   - Check Vercel function logs for more details

4. **Rate limit errors**
   - Groq has rate limits on free tier
   - Wait a moment and try again
   - Consider upgrading to paid tier for higher limits

5. **Network errors**
   - Check your internet connection
   - Verify Groq API is accessible from your location

6. **Empty responses**
   - Check browser console for error messages
   - Verify API key is valid and has sufficient credits

### Debug Mode
To see detailed error logs, check your browser's developer console and the terminal where your Next.js server is running.

## Customization

### Adding More Context
Edit the system prompt in `app/api/chat/route.ts` to add more information about Jayesh or modify the assistant's personality.

### Changing Models
Update the `GROQ_MODEL` in `.env.local` to switch between different LLaMA models.

### Styling
Modify the chat interface styling in the component files:
- `components/ui/robot-chat-interface.tsx`
- `components/ui/floating-ai-assistant.tsx`

## Cost Considerations
- Groq offers free tier with generous limits
- Monitor your usage in the Groq Console
- Consider upgrading to paid tier for production use

## Support
If you encounter issues:
1. Check the troubleshooting section above
2. Review Groq's documentation: https://console.groq.com/docs
3. Check your API key permissions and usage limits
