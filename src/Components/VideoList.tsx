import React, { useEffect, useState } from 'react';
import { YoutubeVideo } from 'youtube.ts';
import '../Style/VideoList.scss'

interface Video {
    videoId: string;
    title: string;
    imageUrl: string;
}

export default function VideoList({ url, title }: { url: string, title: string }) {

    const [videos, updateVideos] = useState<Video[]>([]);

    useEffect(() => {
        function getYoutubeVideos(): Promise<{ items: YoutubeVideo[] }> {
            return fetch(url).then(response => response.json());
        }

        function mapYoutubeVideos({ id, snippet: { title, thumbnails, ...snippet } }: YoutubeVideo): Video {
            const videoId = getVideoId(snippet, id);
            return {
                videoId,
                title: title,
                imageUrl: thumbnails.medium.url,
            } as Video;
        }

        getYoutubeVideos().then(({ items: youtubeVideos }) => {
            if (youtubeVideos) {
                const videosFormatted = youtubeVideos.map(mapYoutubeVideos);
                updateVideos(videosFormatted);
            }
        });
        return;
    }, [url]);

    function getVideoId(snippet: any, id: any): string {
        return snippet.resourceId ? snippet.resourceId.videoId : id.videoId;
    }

    function getYoutubeLink(id: string): string {
        return `https://www.youtube.com/watch?v=${id}`;
    }

    return (
        <div className="videos-list-container">
            <h2 className="title">Últimos <b>{title}</b></h2>
            <div className="list">
                {
                    videos.map((video, index) => (
                        <div key={index}>
                            <a target="_blank" rel="noreferrer" href={getYoutubeLink(video.videoId)}>
                                <img src={video.imageUrl} alt="" />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
