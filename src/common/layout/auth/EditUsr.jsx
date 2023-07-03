import { Avatar, Box, Button, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from 'yup'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { purple } from '@mui/material/colors'
import { Link, useNavigate } from 'react-router-dom'
import supabase from "../../sb/Sb"
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { avatarImg, user } from "../../../recoil/Recoil"

export default function EditUsr() {
    const [avatarFile, setAvatarFile] = useRecoilState(avatarImg)
    const [userData, setUserData] = React.useState({name: '', lastname: '', avatar: ''})
    const usr = useRecoilValue(user)
    const navigate = useNavigate()

    React.useEffect( ()=>{
        const getUsrData = async (usr) => {
            const usrData = await supabase
                .from('userdata')
                .select()
                .eq('userId',usr)
                .limit(1)
                .single()
            setUserData(usrData.data)
        }

        if (usr) { getUsrData(usr) }
    },[usr])

    const validateSchema = Yup.object().shape({
        name: Yup.string().max(25,'Too long'),
        lastname: Yup.string().max(35,'Too long').required('Is required'),
        email: Yup.string().email('Enter a valid email').required('Is required')
    })

    const formik = useFormik({
        initialValues: {
            name: userData.name,
            lastname: userData.lastname,
            email: 'gfalav@yahoo.com'
        },
        enableReinitialize: true,
        validationSchema: validateSchema,
        onSubmit:  async (values) => {
            const userDetails = await supabase
                .from('userdata')
                .update([{
                    name: values.name,
                    lastname: values.lastname,
                    avatar: avatarFile.name
                }])
                .eq('userId', userData.userId)
            if (userDetails.error) {
                alert('Error insert userData: '+userDetails.error.message)
            }
            if(avatarFile!=='') {
                await supabase
                    .storage
                    .from('avatars')
                    .remove([userData.userId+'/'+userData.avatar])
                const upAvatar = await supabase
                    .storage
                    .from('avatars')
                    .upload(userData.userId+'/'+avatarFile.name, avatarFile, {
                        cacheControl: '0',
                        upsert: true
                    })
                setAvatarFile(avatarFile.name)
                if (upAvatar.error) {
                    alert('Error uploading avatar: '+upAvatar.error.message)
                }
            }
            navigate('/')
        }
    })

    const handleAvatar = (event) => {
        setAvatarFile(event.target.files[0])
    }

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
            <Typography variant="h4" sx={{ mb: 4}}>Usuario: {formik.values.email}</Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box display='flex'
                    flexDirection='row'
                    flexWrap='nowrap'
                    alignItems='center'>
                    <TextField  type="text" id="name" name="name" label="First Name"
                                fullWidth required
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                sx={{ mr: 0.5 }}
                    />
                    <TextField  type="text" id="lastname" name="lastname" label="Last Name"
                                fullWidth required
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                helperText={formik.touched.lastname && formik.errors.lastname}
                                sx={{ ml: 0.5 }}
                    />
                </Box>
                <TextField type="file" id="avatar" name="avatar"
                    fullWidth
                    //value={}
                    onChange={handleAvatar}
                    sx={{ mt: 1.5}}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2}}>Send</Button>
            </form>
            <Box m={2}
                display='flex'
                flexDirection='row'
                flexWrap='nowrap'
                alignItems='center'>
                <Button component={Link} to='/auth/signin' variant="outlined" sx={{ mr: 1}}>Already have an account? Sign In</Button>
            </Box>
            
        </Box>
    )
}