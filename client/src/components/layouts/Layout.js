import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Header from "../sections/Header";

const Layout = (props) => {
    return (
        <Box 
          backgroundImage ="url('https://images.hdqwalls.com/download/fish-in-pond-bl-1920x1080.jpg')"  
          width = "100%" 
          height = "100vh"
          backgroundPosition="center">
          <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto"
            {...props}
          >
            <Header />
            {props.children}
          </Flex>
        </Box>
      )
}

export default Layout
