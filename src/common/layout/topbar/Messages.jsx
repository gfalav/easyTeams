import { Badge, Box, IconButton } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email'

export default function Messages() {
    return(
        <Box>
            <IconButton size="large">
                <Badge badgeContent={4} color="primary">
                    <EmailIcon color="menuColor"/>
                </Badge>
            </IconButton>
        </Box>
    )
}