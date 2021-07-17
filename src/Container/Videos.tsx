import React from 'react';
import VideoList from '../Components/VideoList';
import '../Style/Videos.scss'

export default class Videos extends React.Component {
    render() {
        const key = "AIzaSyArfa0MQRbTfo5w1z8w-tH6HNkTM3IOP0A";
        const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PL7AepYvMrp3omUniQDXYaXwMcEanZtdzi&key=${key}`
        const podcastUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCcqcWFtrp3tpUlfqj0phH3A&maxResults=10&order=date&type=video&key=${key}`
        return (
            <>
                <VideoList title="Videos" url={videosUrl}></VideoList>
                <VideoList title="Podcasts" url={podcastUrl}></VideoList>
            </>
        );
    }
}
