import { Box, Drawer } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { drawerWidth, isMb, toggleMenu } from "../../recoil/Recoil";
import SideLogo from "./SideLogo";
import SideMenu from "./SideMenu";
import { user } from "../../recoil/Recoil"


export default function Sidebar() {
    const dw = useRecoilValue(drawerWidth)
    const isMobile = useRecoilValue(isMb)
    const [tMenu, setTMenu] = useRecoilState(toggleMenu)
    const usr = useRecoilValue(user)

    return(
        <Box>
            <Drawer
                variant={isMobile ? 'temporary' : 'persistent'}
                anchor="left"
                open={isMobile ? tMenu : true}
                onClose={() => setTMenu(false)}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', 
                                            width: dw, 
                                            backgroundColor: '#1B2635',
                                            color: '#b8b8b8' 
                                          },
                }}>
                    <Box sx={{
                        width: dw, height: window.innerHeight, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start'
                    }}>
                        <SideLogo />
                        {usr && <SideMenu />}
                    </Box>
            </Drawer>
        </Box>
    )
}