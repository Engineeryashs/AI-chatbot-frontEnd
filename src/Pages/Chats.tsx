import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react'
import { useAuth } from '../context/Auth-Context';
import { red } from '@mui/material/colors';
import ChatItems from '../Components/chats/ChatItems';
import { IoMdSend } from 'react-icons/io';

const Chats = () => {
  const auth = useAuth();
  type Message = {
    role: "user" | "assistant",
    content: string
  }
  const chatMessages: Message[] = [
    { role: "user", content: "Hi there!" },
    { role: "assistant", content: "Hello! How can I help you today?" },
    { role: "user", content: "Tell me a joke." },
    { role: "assistant", content: "Why did the developer go broke? Because he used up all his cache!" },
    { role: "user", content: "Hi there!" },
    { role: "assistant", content: "Hello! How can I help you today?" },
    { role: "user", content: "Tell me a joke." },
    { role: "assistant", content: "Why did the developer go broke? Because he used up all his cache!" },
    { role: "user", content: "Hi there!" },
    { role: "assistant", content: "Hello! How can I help you today?" },
    { role: "user", content: "Tell me a joke." },
    { role: "assistant", content: "Why did the developer go broke? Because he used up all his cache!" }
  ]
/*Here we are creating chat page s frontend*/
  return (
    <Box sx={{
      display: 'flex',
      flex: 1,
      height: '100%',
      width: '100%',
      mt: 3,
      gap: 3
    }}>

      <Box sx={{
        display: { md: 'flex', sm: 'none', xs: 'none' },
        flex: 0.2,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '60vh',
          width: '100%',
          mx: 3,
          borderRadius: 5,
          bgcolor: "rgb(17,29,39)"
        }}>
          <Avatar sx={{
            mx: "auto",
            my: 2,
            bgcolor: "white",
            color: "black",
            fontWeight: 700,
          }}>
            {auth?.user?.name[0]}
          </Avatar>
          <Typography sx={{
            mx: 'auto',
            fontFamily: "work-sans"
          }}>
            Hello, I am your Virtual Assistant
          </Typography>
          <Typography sx={{
            mx: 'auto',
            fontFamily: "work-sans",
            my: 2,
            p: 3
          }}>
            You can ask some questions related to Knowledge, Business, Advices, Education, etc. But avoid sharing personal information
          </Typography>
          <Button sx={{
            mx: 'auto',
            my: 'auto',
            borderRadius: 3,
            color: 'white',
            fontWeight: 700,
            bgcolor: red[400],
            width: '200px',
            ":hover": {
              bgcolor: red.A400,
            },
          }}>
            Clear Conversation
          </Button>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: { md: 0.8, sm: 1, xs: 1 },
        px: 3
      }}>

        <Typography sx={{
          mx: 'auto',
          mb: 2,
          color: 'white',
          fontSize: '35px',
          fontWeight: 600
        }}>
          Model - GPT 3.5 Turbo
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          borderRadius: 3,
          mx: 'auto',
          overflow: 'scroll',
          overflowX: "hidden",
          overflowY: 'auto',
          scrollBehavior: 'smooth'
        }}>
          {
            chatMessages.map(function (ele, index: number) {
              return <ChatItems role={ele.role} content={ele.content} key={index} />
            })
          }
        </Box>
        <Box sx={{
          width: "100%",
          borderRadius: 8,
          display: 'flex',
          margin: 'auto',
          backgroundColor: "rgb(17,27,39)",
          mb:3
        }}>
          {" "}
          <input type="text" placeholder='Ask anything' style={{
            width: "100%",
            backgroundColor: "transparent",
            padding: "30px",
            border: "none",
            outline: "none",
            color: "white",
            fontSize: "20px",
          
          }} />

          <IconButton sx={{ color: "white", mx: 1
          }}>
            <IoMdSend />
          </IconButton>
        </Box>

      </Box>

    </Box>
  )
}

export default Chats;
