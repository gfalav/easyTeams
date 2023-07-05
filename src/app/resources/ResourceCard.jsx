import { Avatar, Box, Card, CardHeader, IconButton, Typography } from "@mui/material"
import img from '../../common/images/foto fondo blanco.jpg'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import React from "react"

export default function ResourceCard(props) {
    const [expand, setExpand] = React.useState()
    const cargo = props.resource.cargo
    const nombre = props.resource.nombre
    const email = props.resource.email
    const cel = props.resource.cel


    const handleClick = () => {
        setExpand(!expand)
    }

    return(
        <Box sx={{ width: '100%', height: window.innerHeight-66 , backgroundColor:'#ebeced' }}>
            <Card sx={{ width: 300, mt: 2, ml: 2 }}>
                <CardHeader
                    avatar={ <Avatar src={img} sx={{ width: 60, height: 60}} /> } 
                    title={
                        <Typography variant="h6"><b>{cargo}</b></Typography>
                    }
                    subheader={
                        <Box>
                            <Typography>{nombre}</Typography>
                            {expand && <Box display='flex' flexDirection='column'>
                                <Typography variant="caption">email: <b>{email}</b></Typography>
                                <Typography variant="caption">Cel: <b>{cel}</b></Typography>
                            </Box>}
                        </Box>
                    }
                    action={
                        <IconButton onClick={handleClick}>
                            { !expand? <ControlPointIcon /> : <RemoveCircleOutlineIcon /> }
                        </IconButton>
                    } />
            </Card>
        </Box>
    )
}