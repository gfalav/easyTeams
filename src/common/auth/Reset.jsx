import { Avatar, Box, Button, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from 'yup'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { purple } from '@mui/material/colors'
import { Link, useNavigate } from "react-router-dom"
import supabase from "../sb/Sb"
import { useRecoilValue } from "recoil"
import { server } from "../recoil/Recoil"

export default function Reset() {
    const navigate = useNavigate()
    const httpserver = useRecoilValue(server)

    const validateSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email').required('Is required')
    })

    const formik = useFormik({
        initialValues: {
            email: 'gfalav@yahoo.com'
        },
        validationSchema: validateSchema,
        onSubmit: async (values) => {
            const resetPwd = await supabase.auth.resetPasswordForEmail(values.email, {
                redirectTo: httpserver+'/auth/update-password',
              })
            if (resetPwd.error) {
                alert('Error send Reset Pwd: '+resetPwd.error.message)
            } else {
                navigate('/')
            }
        }
    })

    return(
        <Box id="loginRoot"
            maxWidth={450}
            m={2}
            display='flex'
            flexDirection='column'
            flexWrap='nowrap'
            alignItems='center'
            >
            <Avatar sx={{ mb: 2, bgcolor: purple[500]}}><LockOpenIcon /></Avatar>
            <Typography variant="h4" sx={{ mb: 4}}>Reset Password</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField  type="email" id="email" name="email" label="email"
                            fullWidth required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2}}>Send</Button>
            </form>
            <Box m={2}
                display='flex'
                flexDirection='row'
                flexWrap='nowrap'
                alignItems='center'>
                <Button component={Link} to='/auth/signin'  variant="outlined" sx={{ mr: 1}}>Have an account? Sign In</Button>
                <Button component={Link} to='/auth/signup' variant="outlined">Need Account?</Button>
            </Box>
            
        </Box>
    )
}