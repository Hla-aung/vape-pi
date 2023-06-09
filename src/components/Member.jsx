import { Box, Grid, Stack, Typography, Button } from "@mui/material"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined"

const Member = () => {
  return (
    <Grid container spacing={1} my={7} px={3}>
        <Grid item lg={7} xs={12}>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                id="member"
            >
                <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    ml={3}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                    >
                        <img src="/images/diamond.png" alt="diamond" className="prizeImg"/>
                        <img src="/images/coin.png" alt="gold" className="prizeImg" />
                        <img src="/images/silver.png" alt="silver" className="prizeImg"/>
                    </Stack>
                    <Typography sx={{color: "white", typography: {lg: 'h3', xs: 'h4'}}} fontWeight={"bold"}id="h3">Membership Program</Typography>
                    <Typography sx={{color: "white"}}>Be a Vape Pi member and get our exclusive offers</Typography>
                    <Button id='slideButton'>View</Button>
                </Stack>
                <img src="/images/premium.png" alt="premium" className="premiumImg"/>
            </Stack>
        </Grid>
        <Grid item lg={2.5} xs={6}>
            <Stack
                direction={"column"}
                justifyContent={"space-between"}
                alignItems={"center"}
                id="devices"
            >
                <img src="/images/vapedevice.png" alt="vapedevice" width={"120px"}/>
                <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    p={2}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                    >
                        <Typography sx={{color: "white", typography: {lg: 'subtitle1', xs: 'subtitle2'}}}>Devices</Typography>
                        <ArrowForwardIosOutlinedIcon sx={{color: "white", fontSize: "12px"}}/>
                    </Stack>
                    <Typography variant="body2" sx={{color: "white"}}>Find the best for you here!</Typography>
                </Stack>
            </Stack>
        </Grid>
        <Grid item lg={2.5} xs={6}>
            <Stack
                direction={"column"}
                rowGap={1}
            >
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"flex-end"}
                    id="pods"
                >
                    <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    p={2}
                    sx={{backgroundColor: "#312f2f", opacity: "80%"}}
                    >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                    >
                        <Typography sx={{color: "white", typography: {lg: 'subtitle1', xs: 'subtitle2'}}}>Pods</Typography>
                        <ArrowForwardIosOutlinedIcon sx={{color: "white", fontSize: "12px"}}/>
                    </Stack>
                    <Typography variant="body2" sx={{color: "white"}}>Find the best for you here!</Typography>
                    </Stack>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"flex-end"}
                    id="disposable"
                >
                    <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    p={2}
                    sx={{backgroundColor: "#312f2f", opacity: "80%"}}
                    >
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        width={"100%"}
                    >
                        <Typography sx={{color: "white", typography: {lg: 'subtitle1', xs: 'subtitle2'}}}>Pods</Typography>
                        <ArrowForwardIosOutlinedIcon sx={{color: "white", fontSize: "12px"}}/>
                    </Stack>
                    <Typography variant="body2" sx={{color: "white"}}>Find the best for you here!</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Grid>
    </Grid>
  )
}

export default Member