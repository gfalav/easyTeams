import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import Search from './Search'
import Messages from './Messages'
import Notification from './Notification'
import User from './User'
import { useRecoilState, useRecoilValue } from 'recoil'
import { drawerWidth, toggleMenu } from '../../recoil/Recoil'

export default function Topbar() {
    const [tMenu, setTMenu] = useRecoilState(toggleMenu)
    const dw = useRecoilValue(drawerWidth)

    return(
        <Box>
            <AppBar position='fixed'
                    sx={{
                        width: { sm: `calc(100% - ${dw}px)` },
                        ml: { sm: `${dw}px` },
                        bgcolor: '#1B2635', color: 'secondary'
                    }}>
                <Toolbar>
                    <IconButton onClick={() => setTMenu(!tMenu)}
                        sx={{ display: {sm: 'none'} }} >
                        <MenuIcon color='menuColor' />
                    </IconButton>
                    <Search />
                    <Box sx={{ flexGrow: 1}} />
                    <Messages />
                    <Notification />
                    <User />
                </Toolbar>
            </AppBar>
        </Box>
    )
}