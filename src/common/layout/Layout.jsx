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
    const [mleft, setMLeft] = React.useState(dw)
    const [widthBar, setWidthBar] = React.useState(0)

    React.useEffect( ()=> {
        const setMarg = () => {
            setMb(isMobile)
            if (isMobile) {
                setMLeft(0)
                setWidthBar(window.innerWidth)
            } else {
                setMLeft(dw)
                setWidthBar(window.innerWidth-dw+1)
            }
        }

        setMarg()

    }, [isMobile])

    return(
        <Box>
            <Topbar mleft={mleft} widthBar={widthBar}/>
            <Sidebar />
            <Box sx={{
                width: { sm: `calc(100% - ${dw}px)` },
                ml: { sm: `${dw}px` },
                mt: { xs: '59px', sm: '64px' },
                color: 'black'
            }}>
                <Outlet />
            </Box>
        </Box>
    )
}