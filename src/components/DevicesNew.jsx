import { Stack, Typography, Grid, Button, Box } from "@mui/material"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"
import { useGetDevices } from "../banner-list-query"
//import { useQuery } from "@tanstack/react-query"
//import axios from "axios"

const DevicesNew = () => {
    /**const { data } = useQuery({
        queryKey: ["devices"],
        queryFn: async () => {
            return await axios.get("https://vapepiapi.shopdoora.com/vapepi/api/Product/GetAllProductListBuyer")
            .then(res => res.data)
        }
    })**/
    const {data} = useGetDevices();
  return (
   <Box
    m={3}
    py={2}
    className="devicesBack"
   >
    {
        data?.mainCategory.map((cate, i) => (
            cate.name === "Devices" && (
                <Stack
                    direction={"column"}
                    key={i}
                >

               
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    p={3}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <img src={cate.url} width={"70px"} height={"70px"} style={{borderRadius: "10px"}}/>
                        <Typography variant="h4" ml={0.5} fontWeight={"bold"} sx={{color: "white"}}>{cate.name}</Typography>
                    </Stack> 
                    <Button endIcon={<ArrowForwardIosOutlinedIcon fontSize="small"/>} id="viewMoreDev">View More</Button>   
                </Stack>
                <Grid container >
                    {
                        cate?.productListBuyers.slice(0, 6).map((product, i) => (
                            <Grid
                                key={i}
                                item
                                lg={2}
                                className="gridItem"
                            >
                                <Stack
                                    direction={"column"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    p={1}
                                    position={"relative"}
                                >
                                    <img src={product.url} width={"167px"} style={{borderRadius: "10px", marginBottom: "10px"}}/>
                                    <Typography sx={{color: "white"}}> 
                                        {product.name}
                                    </Typography>
                                    <Typography sx={{color: "gold"}}>
                                        {product.promotePrice} Ks
                                    </Typography>
                                    <Typography sx={{color: "gold", textDecoration: "line-through", fontSize: "14px"}}>
                                        {product.originalPrice} Ks
                                    </Typography>
                                    <Typography id="percentOffDev">{product.promotePercent}% OFF</Typography>
                                </Stack>
                            </Grid>
                        ))
                    }
                </Grid>
                </Stack>
            )
        ))
    }
   
   </Box>
  )
}

export default DevicesNew