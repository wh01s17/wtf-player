import { create } from 'zustand'

type VideoStoreProps = {
    activeVideoId: string
    isPlaying: boolean
    setActiveVideoId: (id: string) => void
    setIsPlaying: (isPlaying: boolean) => void
    playVideo: (id: string) => void
    stopVideo: () => void
}

export const useVideoStore = create<VideoStoreProps>((set) => ({
    activeVideoId: 'ntRXE7oLVf8',
    isPlaying: true,

    setActiveVideoId: (activeVideoId) => set({ activeVideoId }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    playVideo: (id) => set({ activeVideoId: id, isPlaying: true }),
    stopVideo: () => set({ isPlaying: false }),
}))