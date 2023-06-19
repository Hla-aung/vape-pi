import {Stack, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useGetBestDeals } from "../banner-list-query";

const BestDeals = () => {
    const {data} = useGetBestDeals();
  return (
        <Stack 
            direction={'column'}
            justifyContent={"center"}
            alignItems={"center"}
            my={7}
            mx={1.5}
        >
            <Typography variant="h3" fontWeight={"bold"}>Best Deals</Typography>
            <Typography variant="h6">Just for you</Typography>
            <Grid container spacing={2} my={"30px"} px={'10px'}>
                {data?.slice(0, 6).map((product, i) => (
                    <Grid item key={i} lg={2} md={3} sm={6} xs={12} sx={{position: "relative"}} className="gridItem">
                        <Stack
                            direction={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <img src={product.url} alt={`img${i}`} id="gridImg"/>
                            <Typography>{product.name}</Typography>
                            <Typography>{product.promotePrice} Ks</Typography>
                            <Typography fontSize={"12px"} sx={{textDecoration: "line-through"}}>{product.originalPrice} Ks</Typography>
                        </Stack>
                        <Typography id="percentOff">{product.promotePercent}% OFF</Typography>
                    </Grid>
                ))}
            </Grid>
            <Button endIcon={<ArrowForwardIosOutlinedIcon fontSize="small"/>} id="viewMore">View More</Button>
        </Stack>
  )
}

export default BestDeals