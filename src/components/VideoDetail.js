import React from 'react'

const videoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    var id = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
         <div>
            <div className='ui embed'>
                <iframe width="560" title={video.snippet.title} height="315" src={id} />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default videoDetail;

 