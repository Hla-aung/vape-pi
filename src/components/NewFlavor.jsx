import { Box } from "@mui/material";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetBannerList } from "../banner-list-query";

const NewFlavor = () => {
  const {data} = useGetBannerList("adsBanner", 2)
  return (
    <Box mx={3}>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.2}
        totalSlides={2}
        visibleSlides={1.05}
        isPlaying={true}
        infinite={true}
        id="newflavor"
      >
        <Slider>
          {
            data?.map((banner, i) => (
              banner.isWeb === 1 && (
                <Slide key={i} index={i}>
                    <img src={banner.url} width={"1110px"} style={{borderRadius: "10px"}}/>
                </Slide>
              )
            ))
          }
        </Slider>
        <DotGroup className="dotGp"></DotGroup>
        {/**<Slider>
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
                </Slider>**/}
        <ButtonNext id="buttonNewF">
          <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
        </ButtonNext>
      </CarouselProvider>
    </Box>
  );
};

export default NewFlavor;
