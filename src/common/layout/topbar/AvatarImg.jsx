import { Avatar, Box } from "@mui/material"
import { useRecoilValue } from "recoil"
import { avatarImg, user } from "../../recoil/Recoil"
import React from "react"
import supabase from "../../sb/Sb"

export default function AvatarImg() {
    const usr = useRecoilValue(user)
    const avatarFile = useRecoilValue(avatarImg)
    const [urlImage, setUrlImage] = React.useState(null)

    const getUrlImage = async (usr) => {
        if (usr) {
            const usrAvatarFile = await supabase
                .from('userdata')
                .select()
                .eq('userId', usr)
                .limit(1)
                .single()
            if (usrAvatarFile.data.avatar) {
                const url = await supabase.storage.from('avatars').getPublicUrl(usr+'/'+usrAvatarFile.data.avatar)
                setUrlImage(url.data.publicUrl)
            }
        } else {
            setUrlImage(null)
        }
    }

    React.useEffect( () => {
        getUrlImage(usr)
    }, [usr, avatarFile])

    return(
        <Box>
            <Avatar src={urlImage} />
        </Box>
    )
}