import { Box, IconButton, TextField } from "@mui/material"
import { useFormik } from "formik"
import SearchIcon from '@mui/icons-material/Search'

export default function Search() {

    const formik = useFormik({
        initialValues: {
            busca: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    return(
        <Box sx={{ ml: {sx: 2, sm: 0} }}>
            <form onSubmit={formik.handleSubmit}>
                <TextField type="text" id="busca" name="busca" onChange={formik.handleChange} value={formik.values.busca}
                    size="small" color="menuColor" focused sx={{ input: { color: 'white', width: {xs: 100, sm: 150} }}}/>
                <IconButton color="menuColor"><SearchIcon /></IconButton>
            </form>
        </Box>
    )
}