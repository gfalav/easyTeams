import { Box, useMediaQuery } from "@mui/material"
import Topbar from "./topbar/Topbar"
import { Outlet } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { drawerWidth, isMb } from "../../recoil/Recoil"
import React from "react"
import Sidebar from "./sidebar/SideBar"

export default function Layout() {
    const dw = useRecoilValue(drawerWidth)
    const isMobile = useMediaQuery( (theme)=> theme.breakpoints.down('sm'))
    const setMb = useSetRecoilState(isMb)
   
    React.useEffect( ()=> {
        const setMarg = () => {
            setMb(isMobile)
        }

        setMarg()

    }, [isMobile])

    return(
        <Box>
            <Topbar />
            <Sidebar />
            <Box sx={{
                width: { sm: `calc(100% - ${dw}px)` },
                ml: { sm: `${dw}px` },
                mt: { xs: '59px', sm: '64px' },
                color: 'black',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
            }}>
                <Outlet />
            </Box>
        </Box>
    )
}