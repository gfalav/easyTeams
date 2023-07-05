import { Box, Button, Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <Box sx={{
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      mt: 4
    }}>
      <Typography variant="h1">
        Oops!!
      </Typography>
      <Typography variant="h4">
        Sorry, an unexpected error has occurred
      </Typography>
      <Typography>
        Error: {error.statusText || error.message}
      </Typography>
      <Button component={Link} to="/" variant="outlined" sx={{ mt: 5 }}>Return to Home</Button>
    </Box>
  );
}