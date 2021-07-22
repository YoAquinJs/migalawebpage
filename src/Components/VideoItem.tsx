import React from 'react';
import '../Style/VideoItem.scss'
import CalendarToday from '@material-ui/icons/CalendarToday';

function VideoItem({ videoId, imageUrl, title, publishedAt }: { videoId: string, imageUrl: string, title: string, publishedAt: string }) {

    function getYoutubeLink(): string {
        return `https://www.youtube.com/watch?v=${videoId}`;
    }

    function goToYoutubeVideo(): void {
        window.open(getYoutubeLink(), '_blank')
    }

    return (
        <div className="video-container" onClick={() => goToYoutubeVideo()}>
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="information-container">
                <div className="item-container">
                    <CalendarToday />
                    <p>{publishedAt}</p>
                </div>
                <h4>{title}</h4>
            </div>
        </div>
    );
}
export default VideoItem;
