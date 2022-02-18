import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text fontSize="lg" fontWeight="bold">
                Frog Nanny
            </Text>
        </Box>
    );
}