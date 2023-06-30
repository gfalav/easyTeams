import { Badge, Box, IconButton } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications'

export default function Notification() {
    return(
        <Box>
            <IconButton size="large">
                <Badge badgeContent={6} color="primary">
                    <NotificationsIcon color="menuColor"/>
                </Badge>
            </IconButton>
        </Box>
    )
}