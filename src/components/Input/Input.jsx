import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState , useContext } from "react";
import axios from "axios";
import PostCardContext from '../../providers/PostsProvider'
// import LoadingButton from '@mui/lab/LoadingButton';

function Input() {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
//   const[loading,setLoading] = useState(false);
const {posts ,  setPosts} = useContext(PostCardContext);


  async function createPost(){
    console.log("post is created");4

    axios.post("https://dummyapi.io/data/v1/post/create" , 
    {
        owner : '60d0fe4f5311236168a109ca',
        text : postText , 
        image : imageUrl,
        likes : 0,
        publishDate : new Date()
    },{
        headers : {'app-id' : '666176bb9840ae3642af62e9'}
    })
    .then(response => {
        // const responseObject= response;
        // console.log(responseObject);
        console.log(response.data);
        setPosts([ response.data , ...posts  ]);
        setPostText("fdsa");
        setImageUrl("asdf")
    })
  }
  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="your next post..."
        variant="outlined"
        onChange={(e) => setPostText(e.target.value)}
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="outlined-basic"
        label="Image for your post..."
        variant="outlined"
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <Button loading variant="contained" onClick={createPost}>Submit</Button>
    </Box>
  );
}

export default Input;
