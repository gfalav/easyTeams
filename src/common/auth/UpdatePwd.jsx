import { Avatar, Box, Button, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from 'yup'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { purple } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import supabase from "../sb/Sb"
import React from "react"

export default function UpdatePwd() {
    const navigate = useNavigate()

    const validateSchema = Yup.object().shape({
        password: Yup.string().min(8,'Too short').required('Is required'),
        passconf: Yup.string().required('Is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const formik = useFormik({
        initialValues: {
            name: 'Gustavo',
            lastname: 'Falavigna',
            email: 'gfalav@yahoo.com',
            password: 'pppppppp',
            passconf: 'pppppppp'
        },
        validationSchema: validateSchema,
        onSubmit:  async (values) => {
            const newUser = await supabase.auth.updateUser({
                password: values.password
            })
            if (newUser.error) {
                alert('Error updating Pwd: ' + newUser.error.message)
            } else {
                navigate('/')
            }
        }
    })

    return(
        <Box id="SignUpRoot"
            maxWidth={450}
            m={2}
            display='flex'
            flexDirection='column'
            flexWrap='nowrap'
            alignItems='center'
            >
            <Avatar sx={{ mb: 2, bgcolor: purple[500]}}><LockOpenIcon /></Avatar>
            <Typography variant="h4" sx={{ mb: 4}}>Update Password</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField  type="password" id="password" name="password" label="password"
                            fullWidth required
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            sx={{ mt: 1.5 }}
                />
                <TextField  type="password" id="passconf" name="passconf" label="conf password"
                            fullWidth required
                            value={formik.values.passconf}
                            onChange={formik.handleChange}
                            error={formik.touched.passconf && Boolean(formik.errors.passconf)}
                            helperText={formik.touched.passconf && formik.errors.passconf}
                            sx={{ mt: 1.5 }}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2}}>Send</Button>
            </form>            
        </Box>
    )
}