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
import { useDispatch, useSelector } from 'react-redux';
import { setGradient } from "../../redux/actions/common";


export default function Layout (props) {
  // const [xpos, setXpos] = useState(0);
  const dispatch = useDispatch()
  const { gradientPos } = useSelector(({ common }) => common)
  const x = useSpring(0, { duration: 0.5 });

  const gradient = [
    // light nav bar
    `linear-gradient(to right, #2193b0, #6dd5ed`, // light blue 
    `linear-gradient(to right, #799F0C, #ACBB78`, // puke green 
    `linear-gradient(to right, #3A1C71, #FFAF7B`, // sunset 
    `linear-gradient(to right, #b92b27, #1565C0`, // dark red + blue 
    `linear-gradient(to right, #00bf8f, #001510`, // dark green
    // dark nav bar 
    `linear-gradient(to right, #ee9ca7, #ffdde1`, // pink
    `linear-gradient(to right, #2980B9, #6DD5FA`, // lightish blue
    `linear-gradient(to right, #A770EF, #FFAF7B`, // sunrise
    `linear-gradient(to right, #004FF9, #FFF94C`, // swamp
    `linear-gradient(to right, #0052D4, #6FB1FC`, // blue
    
  ]

  useEffect(() => {
    x.set(gradientPos)
  }, []);
  useEffect(() => {
    x.set(gradientPos);
  }, [gradientPos]);

  const onChange = (val) => {
    dispatch(setGradient(val))
  };

  return (
    <motion.div style = {{width: '100vw', height: '100vh', backgroundImage: gradient[gradientPos]}}>
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
            value={gradientPos}
            defaultValue={gradientPos}
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