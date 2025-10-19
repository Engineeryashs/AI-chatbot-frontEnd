import { Box, Button, Typography } from '@mui/material'
import CustomizedInput from '../Components/shared/CustomizedInput'
import React, { useEffect } from 'react'
import { IoIosLogIn } from 'react-icons/io'
import { useAuth } from '../context/Auth-Context'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const auth=useAuth();
  const navigate=useNavigate();
  const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    const formData=new FormData(e.currentTarget);
    console.log("Jai seetaram bhai");
    const email=formData.get("email") as string;
     console.log(email);
    const password=formData.get("password") as string;
     console.log(password);
    const name=formData.get("name") as string;
     console.log(name);
    const lastName=formData.get("lastName") as string;
     console.log(lastName);

    try {
      console.log("hi bhai");
      console.log(auth);
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name,lastName,email,password);
      navigate("/chats");
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error:any) {
          console.log(error);
          if(axios.isAxiosError(error))
          {
                 toast.error(`Signing Up Failed as ${error.response?.data?.msg}`, { id: "signup" });
          }
          else{
            toast.error("An unexpected error occured!!")
          }
    }
  }
  useEffect(() => {
    if(auth?.user)
    {
     navigate("/chats")
    }
    }, [auth]);
  return (
    <Box height={"100%"} width={"100%"} display={"flex"} flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="airobot.png" alt="airbot" />
      </Box>
      <Box display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={'center'}
        alignItems={'center'}
        padding={2}
        ml={'auto'}
        mt={16}
      >
        <form onSubmit={handleSubmit} 
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Typography variant='h4' textAlign='center' padding={2} fontWeight={600}>Signup</Typography>
          <CustomizedInput name='name' type='text' label='Name' />
           <CustomizedInput name='lastName' type='text' label='lastName' />
          <CustomizedInput name='email' type='email' label='Email' />
          <CustomizedInput name='password' type='password' label='Password' />
          <Button
            type="submit"
            sx={{
              px: 2,
              py: 1,
              mt: 2,
              width: "400px",
              borderRadius: 2,
              bgcolor: "#00fffc",
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
            }}
            endIcon={<IoIosLogIn />}
          >
            Signup
          </Button>
        </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Signup
