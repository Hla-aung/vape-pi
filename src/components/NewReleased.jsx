import {Stack, Typography, Grid, Button} from "@mui/material"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"

const NewReleased = () => {
    const images = ["./images/strawberry.png", "./images/citrus.png", "./images/blue.png", "./images/green.png"]
  return (
        <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            my={7}
            mx={3}
        >
            <Typography variant="h2" id="red" fontWeight={"bold"}> Released</Typography>
            <Typography variant="h6">Try Out Our Latest Flavour Here</Typography>
            <Grid container my={"30px"} px={"10px"}>
                {images.map((img, i) => (
                    <Grid item key={i} md={3} lg={3} sm={6} xs={12} px={"5px"} py={"5px"}>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"flex-end"}
                            id={`newReleased${i}`}
                            sx={{borderRadius: "10px"}}
                        >
                            <Stack 
                                direction={"column"}
                                p={"10px"}
                            >
                                <Typography sx={{color: "white"}}>Strawberry Yougurt with Refreshing flavour</Typography>
                                <Typography sx={{color: "white"}}>Nic 3 Percent</Typography>
                                <Typography sx={{color: "white"}} fontSize={"12px"}>30,000 MMK</Typography>
                            </Stack>
                            <img src={img} alt="" id="gridImg" style={{background: "none", borderRadius: "none", width: "140px"}}/>
                        </Stack>
                    </Grid>    
                ))}
            </Grid>
            <Button endIcon={<ArrowForwardIosOutlinedIcon fontSize="small"/>} id="viewMore">View More</Button>
        </Stack>
  )
}

export default NewReleased