
import MainContainer from './MainContainer/ManiContainer'
import Input from './Input/Input'
import PostCardContext from '../providers/PostsProvider'
import { useState,useEffect } from 'react'
import axios from 'axios'

function SocialApp(){
    const[posts,setPosts] = useState([]);

    useEffect(() => {
        //we will download the data from dummy.io

        axios.get("https://dummyapi.io/data/v1/post" , {
            headers : {'app-id' : '666176bb9840ae3642af62e9'}
        })
        .then(response => {
            const responseObject= response.data;
            setPosts([...responseObject.data]);
        })
    } ,[])
    return(
        <div>
        
            <PostCardContext.Provider value ={ {posts,setPosts} }>
           
            <Input />
            <MainContainer />
            </PostCardContext.Provider>
       
           
        </div>
    );
}

export default SocialApp;