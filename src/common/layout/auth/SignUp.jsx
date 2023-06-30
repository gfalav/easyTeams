import { Box } from "@mui/material";
import { useFormik } from "formik";

export default function SignUp() {

    const formik = useFormik({

        onSubmit: values => {
            console.log(values)
        }
    })

    return(
        <Box>
            SignUp
        </Box>
    )
}