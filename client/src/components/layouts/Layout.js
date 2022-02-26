import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from "@chakra-ui/slider";
import { Flex, Box, bgGradient } from "@chakra-ui/react";
import Header from "../sections/Header";


export default function Layout (props) {
  const [xpos, setXpos] = useState(0);
  const x = useSpring(0, { duration: 0.5 });
  const gradient = [
    'linear(to-tl, yellow.200, red.300)',
    'linear(to-tl, green.200, red.300)',
    'linear(to-tl, blue.200, red.300)',
    'linear(to-tl, purple.200, red.300)',
    'linear(to-tl, orange.200, red.300)',
  ]

  useEffect(() => {
    const random = Math.trunc(Math.random() * (0 - 4) + 4);
    console.log(random);
    setXpos(random);
  }, []);
  useEffect(() => {
    x.set(xpos);
  }, [xpos]);

  const onChange = (val) => {
    setXpos(val);
  };

  return (
    <motion.div>
    <Box 
      width = "100%" 
      height = "100vh"
      bgGradient='linear(to-tl, yellow.200, red.300)'>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        {...props}
      >
      <Header />
      {props.children}
      <Slider
          colorScheme="blackAlpha"
          size="lg"
          aria-label="slider-ex-5"
          onChange={onChange}
          onChangeEnd={(val) => console.log(val)}
          min={0}
          max={4}
          step={1}
          value={xpos}
          defaultValue={xpos}
          width="200px"
          height="50px"
        >
          <SliderTrack
            height="10px"
            borderRadius="10px"
            bg="white"
          >
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb
            w="50px"
            border="0"
            boxSize={6}
            sx={{
              ":focus": {
                boxShadow: "0 0 3px #fff"
              }
            }}
          ></SliderThumb>
        </Slider>
      </Flex>
    </Box>
    </motion.div>
  );
}

