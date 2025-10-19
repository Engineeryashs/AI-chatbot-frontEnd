import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../../context/Auth-Context'

const ChatItems = ({ role, content }: {
    role: "user" | "assistant",
    content: string
}) => {
    const auth=useAuth();
    return role === "assistant" ? (

        /*Conditional Rendering*/

        <Box sx={{
            display: 'flex',
            p: 2,
            bgcolor: "#004d5612",
            gap: 2,
            borderRadius: 2,
            my: 1,
        }}>
        <Avatar sx={{
            ml:"0"
        }}>
            <img src="openai.png" alt="openAi" width={"30px"}/>
        </Avatar>
        <Box>
            <Typography sx={{fontSize:"20px"}}>{content}</Typography>
        </Box>
        </Box>)
        :
        (

        /*Conditional Rendering*/

        <Box sx={{
            display: 'flex',
            p: 2,
            bgcolor: "#004d56",
            gap: 2,
            borderRadius: 2,
        }}>
        <Avatar sx={{
            ml:"0"
        }}>
        {auth?.user?.name[0]}
        </Avatar>
        <Box>
            <Typography sx={{fontSize:"20px"}}>{content}</Typography>
        </Box>
        </Box>)
}

export default ChatItems
