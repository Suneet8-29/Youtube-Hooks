import { useEffect, useState } from 'react'
import YouTube from '../api/YouTube'

const KEY = 'AIzaSyBMliNENi4ZLANx2Ki4yYwJxXWxSlN9vn4';


const useVideos = (defaultSearchTerm) => {
    const [searchArray, setSearchArray] = useState([]);

    useEffect(() => {
        getSearchParameter(defaultSearchTerm);
    }, [defaultSearchTerm])

    const getSearchParameter = async (searchText) => {
        const videoList = await YouTube.get('/search', {
           params: {
               q: searchText,
               type: 'video',
               part: 'snippet',
               maxResults: 5,
               key: KEY
           }
        })
        
        setSearchArray(videoList.data.items);
    }

    return [searchArray, getSearchParameter]

}

export default useVideos;