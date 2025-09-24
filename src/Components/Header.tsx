import React from 'react'
import { AppBar } from '@mui/material'
import {Toolbar} from '@mui/material'
import Logo from './shared/Logo'
import { useAuth } from '../context/Auth-Context'
import NavigationLink from './shared/NavigationLink'
const Header = () => {
  const auth=useAuth();
  return (
    <AppBar sx={{
        bgcolor:"transparent",
        position:"static",
        boxShadow:"none"
    }}>
        <Toolbar sx={{
            display:"flex"
        }}>
        <Logo/>
        <div>
          {auth?.isLoggedin?(<>
            <NavigationLink bg="#00ffcc" to='/chats' text='go to chat' textColour='black'/>
            <NavigationLink bg="#51538f" to='/' text='Log out' textColour='white'/>
          </>):(<>
            <NavigationLink bg="#00ffcc" to='/signup' text='Sign up' textColour='black'/>
            <NavigationLink bg="#51538f" to='/signin' text='Sign in' textColour='white'/>
          </>)}
        </div>
        </Toolbar>
    </AppBar>
  )
}

export default Header
