import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react";
import { Menu, MenuList, MenuButton, MenuItem, IconButton, useDisclosure } from "@chakra-ui/react";
// import { MusicMenuItem } from './MusicMenuItem'
import { AiFillDownCircle } from "react-icons/ai";

const f1 = "https://imgur.com/cScfraF.png";
const f2 = "https://i.natgeofe.com/k/c8382031-1663-41b1-b450-813612e9aaa0/ww-frogs-budgetts.jpg";
const f3 = "https://www.canr.msu.edu/contentAsset/image/413c2f46-7fa5-4a0b-b667-c36ddef5908f/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80";

const index = 0;
const imgList = [f1, f2, f3];
// import { frogs } from "../shufflefrogs.js";

// let frogList = new frogs();

// class myComponent extends React.Component {
//     constructor() {
//         super();

//         this.onClickForward = this.onClickForward.bind(this);
//         this.onClickBackward = this.onClickBackwawrd.bind(this);

//         const f1 = require("../constants/frog01.jpg");
//         const f2 = require("../constants/frog02.jpg");
//         const f3 = require("../constants/frog03.jpg");

//         this.state = {
//             index: 0,
//             imgList: [f1, f2, f3],
//         };
//     }

//     onClickForward() {
//         if (this.state.index + 1 >= this.state.imgList.length) this.setState({ index: 0 });
//         else this.setState({ index: this.state.index + 1 });
//     }

//     onClickBackward() {
//         if (this.state.index - 1 < 0) this.setState({ index: this.state.index.imgList.length - 1 });
//         else this.setState({ index: this.state.index - 1 });
//     }

//     render() {
//         <div>
//             <img src={this.state.imgList[this.state.index]} alt="" />
//             <br />
//             <button onClick={this.onClickBackward}>Back</button>
//             <button onClick={this.onClickForward}>Forward</button>
//         </div>;
//     }
// }

// export default function Shop({ title, subtitle, image, ctaLink, ctaText, ...rest }) {
//     return (
//         <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16} {...rest}>
//             <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
//                 <Heading as="h1" size="xl" fontWeight="bold" color="primary.1000" textAlign={["center", "center", "left", "left"]}>
//                     {title}
//                 </Heading>
//                 <Heading as="h2" size="md" color="primary.1000" opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
//                     {subtitle}
//                 </Heading>
//                 <Link to={ctaLink}>
//                     <Button colorScheme="primary" borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
//                         {"Hello"}
//                     </Button>
//                 </Link>
//                 <Menu>
//                     <MenuButton as={Button} rightIcon={<AiFillDownCircle />}>
//                         Frogs
//                     </MenuButton>
//                     <MenuList>
//                         <MenuItem minH="40px">
//                             <Image boxSize="2rem" borderRadius="full" src="https://placekitten.com/120/120" alt="Simon the pensive" mr="12px" />
//                             <span>Simon the pensive</span>
//                         </MenuItem>
//                         <MenuItem minH="40px">
//                             <Image boxSize="2rem" borderRadius="full" src="https://placekitten.com/120/120" alt="Simon the pensive" mr="12px" />
//                             <span>Simon the pensive</span>
//                         </MenuItem>
//                         <MenuItem minH="40px">
//                             <Image boxSize="2rem" borderRadius="full" src="https://placekitten.com/120/120" alt="Simon the pensive" mr="12px" />
//                             <span>Simon the pensive</span>
//                         </MenuItem>
//                         <MenuItem onClick={() => (image = "https://placekitten.com/120/120")}>Create a Copy</MenuItem>
//                     </MenuList>
//                 </Menu>
//             </Stack>
//         </Flex>
//     );
// }

class myComponent {
    constructor() {
        this.onClickForward = this.onClickForward.bind(this);
        this.onClickBackward = this.onClickBackwawrd.bind(this);

        this.state = {
            index: 0,
            imgList: [f1, f2, f3],
        };
    }

    onClickForward() {
        if (this.state.index + 1 >= this.state.imgList.length) this.setState({ index: 0 });
        else this.setState({ index: this.state.index + 1 });
    }

    onClickBackward() {
        if (this.state.index - 1 < 0) this.setState({ index: this.state.index.imgList.length - 1 });
        else this.setState({ index: this.state.index - 1 });
    }
}

// let comp = new myComponent();

export default function Shop({ title, subtitle, image, ctaLink, ctaText, ...rest }) {
    return (
        <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16} {...rest}>
            <Image src={imgList[index]} alt="" />
        </Flex>
    );
}

// {/* <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
// {/* TODO: Make this change every X secs */}
// <Image src={frogList.state.imgList[frogList.state.index]} size="100%" rounded="1rem" shadow="2xl" />
// </Box> */}

// Shop.propTypes = {
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     image: PropTypes.string,
//     ctaText: PropTypes.string,
//     ctaLink: PropTypes.string,
// };

// Shop.defaultProps = {
//     title: "React landing page with Chakra UI",
//     subtitle: "This is the subheader section where you describe the basic benefits of your product",
//     image: "https://source.unsplash.com/collection/404339/800x600",
//     ctaText: "Create your account now",
//     ctaLink: "/signup",
// };
