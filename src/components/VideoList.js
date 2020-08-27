import React from 'react'
import VideoItem from './VideoItem'

const videoList = (props) => {
    var videos = props.videoArray.map(video => {
        return <VideoItem getSelectedVideo = {props.getSelectedVideo} key={video.id.videoId} data={video}></VideoItem>
    })
    return (
        <div className='ui divided relaxed list'>
            {videos}
        </div>
    )
}

export default videoList;