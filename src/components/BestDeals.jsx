import {Stack, Typography, Grid, Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const BestDeals = () => {
    const images = ["../images/mint.png", "../images/vape.png", "../images/blue.png", "../images/citrus.png", "../images/green.png", "../images/strawberry.png"]
  return (
        <Stack 
            direction={'column'}
            justifyContent={"center"}
            alignItems={"center"}
            my={7}
            mx={3}
        >
            <Typography variant="h2" fontWeight={"bold"}>Best Deals</Typography>
            <Typography variant="h6">Just for you</Typography>
            <Grid container spacing={2} my={"30px"} px={'10px'}>
                {images.map((img, i) => (
                    <Grid item key={i} lg={2} md={3} sm={6} xs={12} sx={{position: "relative"}}>
                        <Stack
                            direction={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <img src={img} alt={`img${i}`} id="gridImg"/>
                            <Typography>Refreshing Mint</Typography>
                            <Typography>30,000 MMK</Typography>
                            <Typography fontSize={"12px"} sx={{textDecoration: "line-through"}}>30,000 MMK</Typography>
                            <Typography fontSize={"10px"} color={"gold"} fontWeight={"bold"}>
                                <StarIcon sx={{fontSize: "10px"}}></StarIcon> 600 Points
                            </Typography>
                        </Stack>
                        <Typography id="percentOff">25% Off</Typography>
                    </Grid>
                ))}
            </Grid>
            <Button endIcon={<ArrowForwardIosOutlinedIcon fontSize="small"/>} id="viewMore">View More</Button>
        </Stack>
  )
}

export default BestDeals