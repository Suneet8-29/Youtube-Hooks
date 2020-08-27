import React from 'react'


const videoItem = ({getSelectedVideo, data}) => {
    
    const onVideoClick = (data) => {
        getSelectedVideo(data);
    }

    return (
        <div className='item' style={{ cursor: 'pointer' , display : 'flex'}} onClick={()=> onVideoClick(data)}>
            <img className="ui image" alt='cool' src={data.snippet.thumbnails.default.url} />
            <div className='content'>
                <div className="header">{data.snippet.title}</div>
                <br/>
                <div className="meta">{data.snippet.channelTitle}</div>
              </div>
        </div>
    ) 
}


export default videoItem;