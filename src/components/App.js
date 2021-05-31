import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideo from '../hooks/useVideos'
 
const App = () => {
     const [selectedVideo, setSelectedVideo] = useState(null);

    const [searchArray, getSearchParameter ] = useVideo('cars');
     
    useEffect(() => {
        setSelectedVideo(searchArray[0]);
    }, [searchArray])

    const getSelectedVideo = (data) => {
        setSelectedVideo(data)
    }

    return (
        <div className='ui container'>
            <SearchBar onSubmit={getSearchParameter}></SearchBar>
            <div className='ui grid'>
                <div className='ui row'>
                <div className='ten wide column'>
                    <VideoDetail video={selectedVideo} ></VideoDetail>
                </div>
                <div className='six wide column'>
                    <VideoList getSelectedVideo={getSelectedVideo} videoArray={searchArray}></VideoList>
                </div> 
                </div>    
            </div>
        </div>
    )

}


export default App;
