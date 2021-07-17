import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
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
        getYoutubeVideos().then(({ items: youtubeVideos }) => {
            if (youtubeVideos) {
                const videosFormatted = youtubeVideos.map(mapYoutubeVideos);
                updateVideos(videosFormatted);
            }
        });
        return;
    }, []);

    function getYoutubeVideos(): Promise<{ items: YoutubeVideo[] }> {
        return fetch(url).then(response => response.json());
    }

    function mapYoutubeVideos({ snippet: { title, thumbnails, ...snippet } }: YoutubeVideo): Video {
        const videoId = getVideoId(snippet);
        return {
            videoId,
            title: title,
            imageUrl: thumbnails.medium.url,
        } as Video;
    }

    function getVideoId(snippet: any): string {
        return snippet.resourceId ? snippet.resourceId.videoId : '';
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
                        <div>
                            <a key={index} target="_blank" rel="noreferrer" href={getYoutubeLink(video.videoId)}>
                                <img src={video.imageUrl} alt="" />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
