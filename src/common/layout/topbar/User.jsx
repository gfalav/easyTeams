import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import React from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../sb/Sb";
import { useRecoilState } from "recoil";
import { user } from "../../../recoil/Recoil";
import AvatarImg from "./AvatarImg";

export default function User() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [usr, setUsr] = useRecoilState(user)
    const open = Boolean(anchorEl)

    const authEvents = () => {
        supabase.auth.onAuthStateChange( (event, session)=> {
            if (session) {
                setUsr(session.user.id)                    
            } else {
                setUsr(null)
            }
        })
    }

    const navigate = useNavigate()

    const handleClick = (event) => { setAnchorEl(event.currentTarget) }

    const SignOutClick = async () => {
        await supabase.auth.signOut()
    }

    const handleClose = (opt) => { 
        setAnchorEl(null)
        switch (opt) {
            case 'signup':
                navigate('/auth/signup')
                break
            case 'signin':
                navigate('/auth/signin')
                break
            case 'signout':
                SignOutClick()
                navigate('/')
                break
            case 'editusr':
                navigate('/auth/editusr')
                break
            default:
                navigate('/')
        }

    }

    React.useEffect( ()=> {
        authEvents()
    })

    return(
        <Box>
            <IconButton size="large" onClick={handleClick}>
                <AvatarImg />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                { !usr && <MenuItem onClick={() => {handleClose('signin')}}>SignIn</MenuItem> }
                { !usr && <MenuItem onClick={() => {handleClose('signup')}}>SignUp</MenuItem> }
                { usr && <MenuItem onClick={() => {handleClose('editusr')}}>EditUsr</MenuItem> }
                { usr && <MenuItem onClick={() => {handleClose('signout')}}>SignOut</MenuItem> }
            </Menu>
        </Box>
         
    )
}