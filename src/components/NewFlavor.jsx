import { Box, Stack, Typography, Button } from "@mui/material";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const NewFlavor = () => {
  return (
    <Box mx={3}>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.4}
        totalSlides={2}
        visibleSlides={1.1}
        id="newflavor"
      >
        <Slider>
          <Slide index={0}>
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}
              mr={1}
              className="newFlavorStack"
            >
              <img
                src="/images/citrusMon.png"
                alt="citrusMon"
                className="newFlavorImg"
              />
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  sx={{
                    color: "white",
                    typography: { lg: "h2", xs: "subtitle2" },
                  }}
                  fontWeight={"bold"}
                >
                  Try New Flavor
                </Typography>
                <Typography
                  sx={{ color: "white", typography: { lg: "h6", xs: "body2" } }}
                >
                  Citrus Monster
                </Typography>
                <Button id="slideButton">View</Button>
              </Stack>
            </Stack>
          </Slide>
          <Slide index={0}>
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}
              mr={1}
              className="newFlavorStack"
            >
              <img src="/images/coke.png" alt="coke" className="newFlavorImg" />
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  sx={{
                    color: "white",
                    typography: { lg: "h2", xs: "subtitle2" },
                  }}
                  fontWeight={"bold"}
                >
                  Try New Flavor
                </Typography>
                <Typography
                  sx={{ color: "white", typography: { lg: "h6", xs: "body2" } }}
                >
                  Cokeholic
                </Typography>
                <Button id="slideButton">View</Button>
              </Stack>
            </Stack>
          </Slide>
        </Slider>
        <ButtonNext id="buttonNewF">
          <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
        </ButtonNext>
      </CarouselProvider>
    </Box>
  );
};

export default NewFlavor;
