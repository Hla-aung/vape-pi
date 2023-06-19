import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetBannerList } from "../banner-list-query";

const Home = () => {
  const {data} = useGetBannerList("heroBanner", 1, {
    onSuccess(data){

      console.log(data)
    }
  })
  return (
    <div id="home">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={4}
        infinite={true}
        isPlaying={true}
        id="desCar"
      >
        <Slider>
          {
            data?.map((banner, i) => (
            banner.isWeb === 1 && (
              <Slide key={i} index={i}>
                <img src={banner.url} className="desImg" />
              </Slide>)
            ))
          }
        </Slider>
        <DotGroup className="dotGp"></DotGroup>
        <ButtonBack id="buttonBack">
          <ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
        </ButtonBack>
        <ButtonNext id="buttonNext">
          <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
        </ButtonNext>
      </CarouselProvider>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1.4}
        totalSlides={3}
        infinite={true}
        id="mobCar"
      >
        <Slider>
          {
            data?.map((banner, i) => (
              banner.isWeb === 0 && (
                <Slide key={i} index={i}>
                  <img src={banner.url} className="mobImg"/>
                </Slide>
              )
            ))
          }
          {/**<Slide index={0}>
              <img src="/images/banner1-mobile.jpg" alt="banner1" className="mobImg"/>
          </Slide>
          <Slide index={1}>
              <img src="/images/banner2-mobile.jpg" alt="banner2" className="mobImg"/>
          </Slide>**/}
        </Slider>
        <DotGroup className="dotGp"></DotGroup>
        <ButtonBack id="buttonBack">
          <ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
        </ButtonBack>
        <ButtonNext id="buttonNext">
          <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
        </ButtonNext>
      </CarouselProvider>
      {/**<Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        className="slideText"
      >
        <Typography sx={{ color: "white", typography: {lg: 'h5', xs: 'body1'} }}>
          The Best Look
        </Typography>
        <Typography sx={{ color: "white", typography: {lg: 'h2', xs: 'h5'} }}>
          Anytime Anywhere
        </Typography>
        <Typography sx={{ color: "white", typography: {xs: 'body2'} }}>Starts from 10,000 MMK</Typography>
        <Button id="slideButton">View</Button>
      </Stack>**/}
    </div>
  );
};

export default Home;
