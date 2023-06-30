import { Box } from "@mui/material"
import bg from "../../images/bg.jpg"

export default function Home () {

    return(
        <Box>
            <Box component="img" src={bg} alt="bg img" sx={{ width: '100%'}} />
        </Box>
    )
}