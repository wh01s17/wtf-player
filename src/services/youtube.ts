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