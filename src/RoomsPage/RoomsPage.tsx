import { AccountCircle, Add, ArrowDropDownOutlined, BeenhereOutlined, CalendarMonthOutlined, EmailOutlined, FaceOutlined, FavoriteBorderOutlined, PersonAddAltOutlined, SearchOutlined, TuneOutlined } from "@mui/icons-material";
import { Container, Stack, Typography, Box, Button, useTheme, Input, ImageList, ImageListItem, ImageListItemBar, Fab } from "@mui/material";

const RoomsPage = () => {
    const theme = useTheme();
    return (
        <div style={{ color: theme.palette.primary.main }}>
            <Box sx={{ height: "7vh", width: "100%", backgroundColor: theme.palette.primary.main,paddingLeft:"4rem",paddingTop:"1rem" }}>
                <Typography fontFamily={"Ubuntu,sans-serif"} variant="h5" color={"#fff"}>Home</Typography>
            </Box>
            <Fab style={{ backgroundColor: theme.palette.secondary.main, color: "#000", position: "fixed", top: "87vh", left: "168.5px" }} aria-label="add">
                <Add />
            </Fab>

            <Box sx={{ backgroundColor: theme.palette.primary.main, height: "26vh", display: "flex", justifyContent: "center", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" }}>
                <Stack spacing={1} marginTop={"1rem"}>
                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-around", backgroundColor: "#fff", width: "90vw", height: "3rem", borderRadius: "10px" }}>
                        <SearchOutlined sx={{ color: theme.palette.primary.main, mr: 1, my: 0.5 }} />
                        <Input placeholder="Ingrese ubicación" style={{ color: theme.palette.primary.main, height: "4rem" }} />
                        <TuneOutlined sx={{ color: theme.palette.primary.main, mr: 1, my: 0.5 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-around", backgroundColor: "#fff", width: "90vw", height: "3rem", borderRadius: "10px" }}>
                        <PersonAddAltOutlined sx={{ color: theme.palette.primary.main, mr: 1, my: 0.5 }} />
                        <Input placeholder="Selecccione huespedes" style={{ color: theme.palette.primary.main, height: "4rem" }} />
                        <ArrowDropDownOutlined sx={{ color: theme.palette.primary.main, mr: 1, my: 0.5 }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-around", backgroundColor: "#fff", width: "90vw", height: "3rem", borderRadius: "10px" }}>
                        <CalendarMonthOutlined sx={{ color: theme.palette.primary.main, mr: 1, my: 0.5 }} />
                        <Input placeholder="Ingrese fechas" style={{ color: theme.palette.primary.main, height: "3.3rem" }} />
                        <AccountCircle sx={{ color: "transparent", mr: 1, my: 0.5 }} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
                        <Button style={{ fontFamily: "ubuntu, sans-serif", width: "45vw", borderRadius: "10px", height: "5vh", backgroundColor: theme.palette.primary.light, fontWeight: "600", color: theme.palette.secondary.light }} variant="contained">Buscar</Button>
                    </Box>
                </Stack>
            </Box>

            <Box borderTop={"solid .15rem"} borderColor={theme.palette.primary.light} sx={{ marginTop: "2.5rem", marginLeft: "20px", marginRight: "20px", paddingTop: "0.5rem" }}>
                <Typography fontFamily={"Ubuntu,sans-serif"} variant="h6" color={"inherit"} fontWeight={"600"}>Vistos anteriormente</Typography>
            </Box>
            <Box sx={{ height: "18vh", width: "100%", marginLeft: "20px" }}>
                <ImageList sx={{ display: "flex", flexDirection: "row", height: "23vh", overflow: "scroll", margin: "0px", marginTop: ".4rem" }}>
                    {itemData.map((item) => (
                        <ImageListItem style={{ height: "16vh", width: "45vw", marginRight: "5px" }} key={item.img}>
                            <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", alignContent: "center", position: "absolute", width: "3rem", height: "1.3rem", right: "10px", bottom: "25px", backgroundColor: theme.palette.secondary.main, borderRadius: "20px" }}>
                                <Typography fontFamily={"Ubuntu,sans-serif"} variant="body1" fontWeight={600} color={"#000"} fontSize={"12px"}>75</Typography>
                                <BeenhereOutlined sx={{ color: "#000", fontSize: "18px" }} />
                            </Box>
                            <Box sx={{ paddingLeft: "5px", display: "flex", flexDirection: "column", alignContent: "left", position: "absolute", width: "10rem", height: "4rem", left: "0px", bottom: "-50px" }}>
                                <Typography marginBottom={"-3px"} fontFamily={"Ubuntu,sans-serif"} variant="h6" fontSize={"12px"} fontWeight={"600"}>{item.author}</Typography>
                                <Typography fontFamily={"Ubuntu,sans-serif"} variant="h6" fontSize={"13px"} fontWeight={"600"}>{item.title}</Typography>
                                <Typography fontFamily={"Ubuntu,sans-serif"} variant="h6" fontSize={"12px"} fontWeight={"100"}>{item.price}</Typography>
                            </Box>
                            <img style={{ height: "16vh", width: "45vw", borderRadius: "15px" }}
                                src={`${item.img}`}
                                srcSet={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar sx={{ padding: "0px" }}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>

            <Box borderTop={"solid .15rem"} borderColor={theme.palette.primary.light} sx={{ marginTop: "2.5rem", marginLeft: "20px", marginRight: "20px", paddingTop: "0.5rem" }}>
                <Typography fontFamily={"Ubuntu,sans-serif"} variant="h6" color={"inherit"} fontWeight={"600"}>Sitios cercanos</Typography>
            </Box>
            <Box sx={{ width: "90vw", height: "25vh", marginTop: ".5rem", marginLeft: "20px", marginRight: "20px", marginBottom: "5rem" }}>
                <img style={{ width: "90vw", height: "25vh", borderRadius: "15px" }} src="https://a.cdn-hotels.com/gdcs/production37/d1139/a8a147d0-c31d-11e8-825c-0242ac110006.jpg" />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "100vw", height: "4rem", position: "fixed", bottom: "0", backgroundColor: "#fff", paddingTop: "7px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "5rem" }}>
                    <SearchOutlined sx={{ color: theme.palette.primary.main, my: -0.5 }} />
                    <Typography fontFamily={"Ubuntu,sans-serif"} variant="body1" fontWeight={600}>Busqueda</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "5rem" }}>
                    <EmailOutlined sx={{ color: theme.palette.primary.main, my: -0.5 }} />
                    <Typography fontFamily={"Ubuntu,sans-serif"} variant="body1" fontWeight={600}>Mensajes</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "5rem" }}>
                    <FavoriteBorderOutlined sx={{ color: theme.palette.primary.main, my: -0.5 }} />
                    <Typography fontFamily={"Ubuntu,sans-serif"} variant="body1" fontWeight={600}>Favoritos</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "5rem" }}>
                    <FaceOutlined sx={{ color: theme.palette.primary.main, my: -0.5 }} />
                    <Typography fontFamily={"Ubuntu,sans-serif"} variant="body1" fontWeight={600}>Perfil</Typography>
                </Box>
            </Box>

        </div>
    )
}


const itemData = [
    {
        img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20152451/Mandarin-Oriental-Hong-Kong-3.jpg',
        title: 'Dormitorio individual',
        author: "EDUARDO M.",
        price: "120 CLP / MES",
    },
    {
        img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20152644/The-Resort-at-Pedregal-1.jpg',
        title: 'Espectacular dormitorio',
        author: "ANTONIO S.",
        price: '150 CLP / MES',
    },
    {
        img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20152346/Hotel-de-Crillon-A-Rosewood-Hotel-3.jpg',
        title: 'Dormitorio barato',
        author: "ROSANA F.",
        price: '90 CLP / MES',
    },
    {
        img: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20152832/The-Alpina-Gstaad-2.jpg',
        title: 'Comodo dormitorio',
        author: "DAMIAN B.",
        price: '110 CLP / MES',
    }
];


export default RoomsPage