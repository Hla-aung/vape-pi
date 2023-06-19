import {Stack, Typography, Grid, Button, Box} from "@mui/material"
//import { useQuery } from "@tanstack/react-query"
//import axios from "axios"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"
import { useGetNewReleased } from "../banner-list-query"

const NewReleased = () => {
    const { data } = useGetNewReleased();
  return (
        <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            my={7}
            mx={1.5}
        >
            <Typography variant="h3" id="red" fontWeight={"bold"}> Released</Typography>
            <Typography variant="h6">Try Out Our Latest Flavour Here</Typography>
            <Grid container my={"30px"} px={"10px"}>
                {data?.slice(0, 4).map((product, i) => (
                    <Grid item key={i} md={3} lg={3} sm={6} xs={12} px={"5px"} py={"5px"} className="gridItem">
                        <Box width={"276.83px"} height={"180px"} overflow={"hidden"} borderRadius={"10px"} position={"relative"}>
                            <img src={product.url} width={"100%"}/>
                            <Stack
                                direction={"column"}
                                className="newTypo"
                            >
                                <Typography>
                                    {product.name}
                                </Typography>
                                <Typography>
                                    {product.originalPrice} MMK
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>    
                ))}
            </Grid>
            <Button endIcon={<ArrowForwardIosOutlinedIcon fontSize="small"/>} id="viewMore">View More</Button>
        </Stack>
  )
}

export default NewReleased