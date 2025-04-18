import { create } from 'zustand'

type VideoStoreProps = {
    activeVideoId: string
    setActiveVideoId: (id: string) => void
}

export const useVideoStore = create<VideoStoreProps>((set) => ({
    activeVideoId: '',

    setActiveVideoId: (id) => set({ activeVideoId: id })
}))