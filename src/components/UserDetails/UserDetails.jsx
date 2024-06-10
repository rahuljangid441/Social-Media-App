


import { useParams } from 'react-router';
import { useState , useEffect } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';




export default function UserDetails() {
  const [user , setUser] = useState({});
  const [loading , setLoading]=useState(true);
  let { userId } =useParams();
  useEffect(()=>{
    axios.get(`https://dummyapi.io/data/v1/user/${userId}` , {
      headers : {'app-id' : '666176bb9840ae3642af62e9'}
    }).then((response)=>{
      console.log(response);
      setUser({...response.data});
      setLoading(false);
    })
  })





  if(loading){
    return (
      <div>Loading...</div>
    )


  }

  else{
    return (
      <>
      <Card sx={{ display: 'flex' }}>
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
           <CardContent sx={{ flex: '1 0 auto' }}>
             <Typography component="div" variant="h5">
               {user.firstName + " " + user.lastName}
             </Typography>
             <Typography variant="subtitle1" color="text.secondary" component="div">
               {user.email}
             </Typography>
           </CardContent>
           
         </Box>
         <CardMedia
           component="img"
           sx={{ width: 151 }}
           image={user.picture}
           alt="Live from space album cover"
         />
       </Card>
      </>
        
        
       
     );
  }
}