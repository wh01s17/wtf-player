import { NextResponse, NextRequest } from "next/server"
import axios from 'axios'

const apiKey = process.env.YOUTUBE_API_KEY
const videosUrl = 'https://www.googleapis.com/youtube/v3/videos'

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl
    const ids = searchParams.get('ids')

    if (!ids) {
        return NextResponse.json({ error: 'Missing video IDs' }, { status: 400 })
    }

    try {
        const response = await axios.get(videosUrl, {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: ids, // IDs de videos separados por coma
                key: apiKey,
            },
        })

        return NextResponse.json(response.data)
    } catch (error) {
        console.error('Error fetching video details:', error)
        return NextResponse.json({ error: 'Error fetching video details from YouTube' }, { status: 500 })
    }
}