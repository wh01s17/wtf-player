import { NextResponse, NextRequest } from "next/server"
import axios from 'axios'

const apiKey = process.env.YOUTUBE_API_KEY
const baseUrl = 'https://www.googleapis.com/youtube/v3/search'

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl
    const q = searchParams.get('q')

    if (!q) {
        return NextResponse.json({ error: 'Missing search query' }, { status: 400 })
    }

    try {
        const response = await axios.get(baseUrl, {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 10,
                q,
                key: apiKey,
            },
        })

        return NextResponse.json(response.data)
    } catch (error) {
        console.error('YouTube API error:', error)
        return NextResponse.json({ error: 'Error fetching data from YouTube' }, { status: 500 })
    }
}