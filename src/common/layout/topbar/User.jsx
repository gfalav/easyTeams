import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import Person2Icon from '@mui/icons-material/Person2'
import React from "react";

export default function User() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget) }

    const handleClose = (opt) => { 
        console.log(opt)
        setAnchorEl(null) 
    }

    return(
        <Box>
            <IconButton size="large" onClick={handleClick}>
                <Person2Icon color="menuColor" fontSize="large"/>
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
                <MenuItem onClick={() => {handleClose('signin')}}>SignIn</MenuItem>
                <MenuItem onClick={() => {handleClose('signup')}}>SignUp</MenuItem>
                <MenuItem onClick={() => {handleClose('signout')}}>SignOut</MenuItem>
            </Menu>
        </Box>
         
    )
}