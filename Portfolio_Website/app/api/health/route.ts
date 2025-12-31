import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    message: 'API is working correctly',
    timestamp: new Date().toISOString(),
    endpoints: {
      chat: '/api/chat (POST only)',
      health: '/api/health (GET)'
    }
  })
}

export async function POST() {
  return NextResponse.json({
    status: 'healthy',
    message: 'POST method also works',
    timestamp: new Date().toISOString()
  })
}
