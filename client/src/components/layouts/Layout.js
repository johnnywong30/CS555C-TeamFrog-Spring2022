import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from "@chakra-ui/slider";
import { Flex, Box } from "@chakra-ui/react";
import Header from "../sections/Header";


export default function Layout (props) {
  const [xpos, setXpos] = useState(0);
  const x = useSpring(0, { duration: 0.5 });
  //const background = useTransform(x, [0, 100], ["#E97272 ", "#E1E972"]);

  const gradient = [
    `linear-gradient(to right, #ee9ca7, #ffdde1`,
    `linear-gradient(to right, #2193b0, #6dd5ed`,
    `linear-gradient(to right, #b92b27, #1565C0`,
    `linear-gradient(to right, #2980B9, #6DD5FA`,
    `linear-gradient(to right, #3A1C71, #FFAF7B`,
    `linear-gradient(to right, #A770EF, #FFAF7B`,
    `linear-gradient(to right, #004FF9, #FFF94C`,
    `linear-gradient(to right, #0052D4, #6FB1FC`,
    `linear-gradient(to right, #799F0C, #ACBB78`,
    `linear-gradient(to right, #00bf8f, #001510`,
  ]

  useEffect(() => {
    x.set(xpos)
  }, []);
  useEffect(() => {
    x.set(xpos);
  }, [xpos]);

  const onChange = (val) => {
    setXpos(val);
  };

  return (
    <motion.div style = {{width: '100vw', height: '100vh', backgroundImage: gradient[xpos]}}>
      <Box w='100%' h='100vh'>
        <Flex
          direction="column"
          align="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
          {...props}>
          <Header />
          {props.children}
          <Slider
            colorScheme="white"
            aria-label="slider-ex-5"
            onChange={onChange}
            onChangeEnd={(val) => console.log(val)}
            min={0}
            max={9}
            step={1}
            value={xpos}
            defaultValue={xpos}
            width="200px"
            height="10px"
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
            >
            </SliderThumb>
          </Slider>
        </Flex>
      </Box>     
    </motion.div>   
  );
}