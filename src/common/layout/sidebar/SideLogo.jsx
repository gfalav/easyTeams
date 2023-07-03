import { Box } from "@mui/material"
import logo from '../../../images/Easy Teams Logo.png'
import { Link } from "react-router-dom"

export default function SideLogo() {

    return(

        <Box 
            component={Link} to='/'
            sx={{
                display: 'flex', alignItems: 'center', justifyContent: "center", mt: 0.5
            }}>
                <Box component='img'
                    src={logo}
                    alt="logo"
                    sx={{
                        height: 66, width: 235
                    }} />
        </Box>
    )
}