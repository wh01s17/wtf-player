import axios from 'axios'

export const getResults = async (searchTerm: string) => {
    try {
        const response = await axios.get('/api/youtube', {
            params: { q: searchTerm },
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return response.data
    } catch (error) {
        console.error('Error fetching videos:', error)
        throw new Error('Error fetching videos')
    }
}

export const getVideoDetails = async (videoIds: string[]) => {
    try {
        const response = await axios.get('/api/youtube/videoDetails', {
            params: { ids: videoIds.join(',') }, // Los IDs de los videos separados por coma
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return response.data
    } catch (error) {
        console.error('Error fetching video details:', error)
        throw new Error('Error fetching video details')
    }
}