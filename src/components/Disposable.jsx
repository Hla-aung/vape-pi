import {Box, Typography, Stack} from "@mui/material";
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"
import StarIcon from "@mui/icons-material/Star"

const Disposable = () => {
    const images = ["../images/mint.png", "../images/vape.png", "../images/blue.png", "../images/citrus.png", "../images/green.png", "../images/strawberry.png"]
  return (
    <Box
        my={3}
        mx={3}
        className="flexBox"
        id="disposableBackground"
    >
        <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={"20px"}
        >
            <img src="../images/vapedisposable.png" alt="vapedevice" id="vapedisposable"/>
            <Stack
                direction={"column"}
                alignItems={"center"}
            >
                <Typography variant="h4" sx={{color: "white"}}>Disposable</Typography>
                <Typography sx={{color: "white"}}>Easy, clean & superb flavor</Typography>
            </Stack>
        </Box>
        <CarouselProvider
                naturalSlideWidth={10}
                naturalSlideHeight={30}
                totalSlides={6}
                visibleSlides={4.5}
                id="carousel"
        >
                <Slider>
                    {images.map((img, i) => (
                        <Slide index={i} key={i}>
                            
                            <Stack
                                direction={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <img src={img} alt="slide" className="deviceSlideImg" />
                                <Typography sx={{color: "white", fontSize: "14px", typography: {xs: 'body2'}}}>Refreshing Mint</Typography>
                                <Typography sx={{color: "white", typography: {xs: 'body2'}}}>30,000 MMK</Typography>
                                <Typography fontSize={"10px"} color={"gold"} fontWeight={"bold"}>
                                    <StarIcon sx={{fontSize: "10px"}}></StarIcon> 600 Points
                                </Typography>
                            </Stack>
                            
                        </Slide>
                    ))}
                </Slider>
                <ButtonNext id="buttonNextDevice"><ArrowForwardIosOutlinedIcon sx={{color: "white"}}/></ButtonNext>
        </CarouselProvider>
        <CarouselProvider
                naturalSlideWidth={10}
                naturalSlideHeight={15}
                totalSlides={6}
                visibleSlides={3.2}
                id="carouselMob"
        >
                <Slider>
                    {images.map((img, i) => (
                        <Slide index={i} key={i}>
                            
                            <Stack
                                direction={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <img src={img} alt="slide" className="deviceSlideImg" />
                                <Typography sx={{color: "white", fontSize: "14px", typography: {xs: 'body2'}}}>Refreshing Mint</Typography>
                                <Typography sx={{color: "white", typography: {xs: 'body2'}}}>30,000 MMK</Typography>
                                <Typography fontSize={"10px"} color={"gold"} fontWeight={"bold"}>
                                    <StarIcon sx={{fontSize: "10px"}}></StarIcon> 600 Points
                                </Typography>
                            </Stack>
                            
                        </Slide>
                    ))}
                </Slider>
                <ButtonNext id="buttonNextDevice"><ArrowForwardIosOutlinedIcon sx={{color: "white"}}/></ButtonNext>
        </CarouselProvider>
    </Box>
  )
}

export default Disposable