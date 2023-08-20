import { Container, Typography, useTheme, Button, Stack, Box } from "@mui/material"

const HomePage = () => {
  const theme = useTheme();
  return (
    <div>
      <Box sx={{ height: "7vh", width: "100%", backgroundColor: theme.palette.primary.main,paddingLeft:"4rem",paddingTop:"1rem" }}>
                <Typography fontFamily={"Ubuntu,sans-serif"} variant="h5" color={"#fff"}>Bienvenido!</Typography>
      </Box>
      <Container style={{color: theme.palette.primary.main}}>
        <Stack spacing={4} marginTop={"16vh"}>
            <img src="https://img.freepik.com/vector-premium/tres-hermanos-riga-edificios-historicos-old-riga-letonia-tres-casas-juntas-arquitectura-moderna-dibujada-mano-cultura-tradiciones-letonia_196895-211.jpg?w=2000" alt="casitas" />
            <Typography textAlign={"justify"} fontFamily={"Ubuntu,sans-serif"} fontSize={"18px"} fontWeight={"600"} variant="h6" color={"inherit"}>¡Usar Roomsite es realmente sencillo! Sigue estos tips para que tu experiencia sea realmente sensacional.</Typography>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Button style={{fontFamily:"ubuntu, sans-serif",width:"45vw", borderRadius:"12px", height:"5vh"}} variant="contained">Siguiente</Button>
            </Box>
        </Stack>

        <Stack spacing={0} marginTop={"12vh"}>
            <Typography fontFamily={"Ubuntu,sans-serif"} textAlign={"center"} variant="h6" color={"inherit"}>¿No quieres ver esto?</Typography>
            <Button style={{fontSize:"18px",boxShadow:"none",border:"none",backgroundColor:"transparent", color:theme.palette.secondary.main, fontFamily:"Ubuntu,sans-serif", textAlign:"center"}} variant="contained">SALTAR</Button>
        </Stack>
    </Container>
    </div>
    
    
  
  )
}

export default HomePage