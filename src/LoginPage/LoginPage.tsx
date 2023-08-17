import { Box, Button, Container, Stack, TextField, Typography, useTheme } from "@mui/material"
import { red } from "@mui/material/colors";

const LoginPage = () => {
    const theme = useTheme();
    return (
        <Container style={{ color: theme.palette.primary.main }}>
            <Stack spacing={"2rem"} marginTop={"20vh"}>
                <Typography marginBottom={"-15px"} fontFamily={"Ubuntu,sans-serif"} variant="h5" color={"inherit"} fontSize={"30px"}>Ingresa a tu cuenta</Typography>
                <TextField id="standard-basic" label="Correo electroníco" variant="standard"/>
                <TextField id="standard-basic" label="Contraseña" variant="standard" type="password"/>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button style={{ marginTop:"1.5rem", fontFamily: "ubuntu, sans-serif", width: "45vw", borderRadius: "12px", height: "5vh" }} variant="contained">Iniciar sesión</Button>
                </Box>
            </Stack>

            <Stack spacing={0} marginTop={"25vh"}>
                <Typography fontFamily={"Ubuntu,sans-serif"} textAlign={"center"} variant="h6" color={"inherit"}>¿Olvidaste tu contraseña?</Typography>
                <Button style={{ fontSize: "18px", boxShadow: "none", border: "none", backgroundColor: "transparent", color: theme.palette.secondary.main, fontFamily: "Ubuntu,sans-serif", textAlign: "center" }} variant="contained">RECUPERALA</Button>
            </Stack>
        </Container>
    )
}

export default LoginPage