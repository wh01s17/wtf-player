export type YouTubeVideoId = {
    kind: string;
    videoId: string;
}

export type YouTubeSnippet = {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: YouTubeThumbnail;
        medium: YouTubeThumbnail;
        high: YouTubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
}

export type YouTubeThumbnail = {
    url: string;
    width: number;
    height: number;
}

export type YouTubeVideo = {
    kind: string;
    etag: string;
    id: YouTubeVideoId;
    snippet: YouTubeSnippet;
}

export type YouTubeApiResponse = {
    kind: string;
    etag: string;
    nextPageToken?: string;
    regionCode?: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: YouTubeVideo[];
}