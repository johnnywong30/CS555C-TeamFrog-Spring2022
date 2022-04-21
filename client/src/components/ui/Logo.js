import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import Lottie from 'reactjs-lottie'
import froggyAnimation from '../../constants/lotties/froggy.json'

export default function Logo(props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: froggyAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <Box {...props}>
            {/* <Lottie
                options={defaultOptions}
                height={50}
                width={50}
                isClickToPauseDisabled={true} // here
            >
            </Lottie> */}
            <Text fontSize="lg" fontWeight="bold">
                Frog Nanny
            </Text>

        </Box>
    );
}