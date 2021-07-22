import React, { useEffect, useState } from 'react';
import { YoutubeVideo } from 'youtube.ts';
import '../Style/VideoList.scss'
import VideoItem from './VideoItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Video {
    videoId: string;
    title: string;
    imageUrl: string;
    publishedAt: string;
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1620 },
        items: 6
    },
    
    smallDesktop: {
        breakpoint: { max: 1620, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1200, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

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
                publishedAt: snippet.publishedAt.substr(0, 10)
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

    return (
        <div className="videos-list-container">
            <h2 className="title">Últimos <b>{title}</b></h2>
            <Carousel containerClass="carousel-container" responsive={responsive}>
                    {
                        videos.map((video, index) => (
                            <VideoItem key={index} {...video}></VideoItem>
                        ))
                    }
            </Carousel>
        </div>
    )
}
