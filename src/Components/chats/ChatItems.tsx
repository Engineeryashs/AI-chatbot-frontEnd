import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../../context/Auth-Context'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const ChatItems = ({ role, content }: {
    role: "user" | "assistant",
    content: string
}) => {
    const auth = useAuth();
    /*Here we have to writer a function that can separate code blocks*/
    function givemeCodeBlocks(message: string) {
        console.log(message);
          if (!message) return;
        if (message.includes("```")) {
            const block= message.split("```");
            return block;
        }
    }
    /*Here we have to write a function that will take string and decide whether its code or not */
    function isCodeOrNot(str: string) {
        if (str.includes("=") || str.includes("{") || str.includes("}") || str.includes("[") || str.includes("]") || str.includes(";") || str.includes("//") || str.includes("/*") || str.includes("*/") || str.includes("#")) {
            return true;
        }
        return false;
    }
    const messageBlocks = givemeCodeBlocks(content);
    console.log("YYHS"+messageBlocks)
    console.log("ChatItems component re-rendering")
    return role === "assistant" ? (

        /*Conditional Rendering*/
        /*How does each chatbox looks like */
        <Box sx={{
            display: 'flex',
            p: 2,
            bgcolor: "#004d5612",
            gap: 2,
            borderRadius: 2,
            my: 1,
        }}>
            <Avatar sx={{
                ml: "0"
            }}>
                <img src="openai.png" alt="openAi" width={"30px"} />
            </Avatar>
            <Box>
                    {
                        /*Conditional rendering*/
                        (!messageBlocks && <Typography sx={{ fontSize: "20px" }}>{content}</Typography>)
                    }
                    {messageBlocks && messageBlocks.length > 0 && messageBlocks.map((block: string, index: number) => {
                        return isCodeOrNot(block) ? (
                            <SyntaxHighlighter key={index} style={coldarkDark} language="javascript">
                                {block}
                            </SyntaxHighlighter>
                        ) : (
                            <Typography key={index} sx={{ fontSize: "20px" }}>
                                {block}
                            </Typography>
                        );
                    })
                    }
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
                    ml: "0"
                }}>
                    {auth?.user?.name[0]}
                </Avatar>
                <Box>
                    {
                        /*Conditional rendering*/
                        (!messageBlocks && <Typography sx={{ fontSize: "20px" }}>{content}</Typography>)
                    }
                    {messageBlocks && messageBlocks.length && messageBlocks.map((block: string, index: number) => {
                        return isCodeOrNot(block) ? (
                            <SyntaxHighlighter key={index} style={coldarkDark} language="javascript">
                                {block}
                            </SyntaxHighlighter>
                        ) : (
                            <Typography key={index} sx={{ fontSize: "20px" }}>
                                {block}
                            </Typography>
                        );
                    })
                    }
                </Box>
            </Box>)
}

export default ChatItems
