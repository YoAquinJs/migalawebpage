import React from 'react';

export default class Videos extends React.Component<{}, {videos: any, podcast: any}> {
    constructor(props: any) {
        super(props);
        this.state = {
            videos: [],
            podcast: [],
        };
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        const key = "";
        const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PL7AepYvMrp3omUniQDXYaXwMcEanZtdzi&key=${key}`
        const podcastUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCcqcWFtrp3tpUlfqj0phH3A&maxResults=10&order=date&type=video&key=${key}`
        let podcast: any[] = [];
        let videos: any[] = [];
        (async () => {
            try {
                const fetchVideos = await fetch(videosUrl).then(response => response.json());
                fetchVideos.items.map((r: any) => {
                    if (videos.length < 3){
                        videos.push(r);
                    }
                    return r;
                })
                const fetchPodcast = await fetch(podcastUrl).then(response => response.json());
                fetchPodcast.items.map((r: any) => {
                    if (r.snippet.title.startsWith("PODCAST") && podcast.length < 3){
                        podcast.push(r);
                    }
                    return r;
                })
            } catch (e) {
                console.error(e)
            }
            this.setState({
                videos: videos,
                podcast: podcast,
            });
        })();

    }
    render() {
        if (this.state.videos.length < 1 && this.state.podcast.length < 1) {
            return <h1>Error loading videos</h1>
        }
        return (
            <div id="videos">
                {
                    this.state.videos.map((r:any) => <img src={r.snippet.thumbnails.default.url} />)
                }
                {
                    this.state.podcast.map((r:any) => <img src={r.snippet.thumbnails.default.url} />)
                }
            </div>
        );
    }
}