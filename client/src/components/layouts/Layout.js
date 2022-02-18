import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";

const Layout = (props) => {
    return (
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
      )
}

export default Layout
