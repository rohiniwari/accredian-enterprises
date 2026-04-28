import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// In-memory store as fallback (resets on server restart)
const leads: object[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Basic validation
    const { name, email, company, teamSize, interest } = body
    if (!name || !email || !company || !teamSize || !interest) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const lead = {
      id: `lead_${Date.now()}`,
      ...body,
      submittedAt: new Date().toISOString(),
      source: 'enterprise-website',
    }

    // Store in memory
    leads.push(lead)

    // Optionally persist to a JSON file (works on Vercel with /tmp)
    try {
      const filePath = path.join('/tmp', 'leads.json')
      const existing = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        : []
      existing.push(lead)
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2))
    } catch {
      // File write is best-effort; don't fail the request
    }

    console.log('New lead captured:', { name, email, company })

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully', id: lead.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  // Simple endpoint to view captured leads (protect in production!)
  return NextResponse.json({ leads, count: leads.length })
}
