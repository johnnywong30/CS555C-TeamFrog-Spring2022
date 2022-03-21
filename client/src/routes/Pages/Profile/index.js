import React from "react";
import { Container } from "@chakra-ui/react";

import Layout from "../../../components/layouts/Layout";
import Form from "./Form";

export const Profile = () => {
	return (
		<Layout>
			<Container
				maxW="lg"
				py={{
					base: "12",
					md: "24",
				}}
				px={{
					base: "0",
					sm: "8",
				}}
			>
				<Form />
				{/* // TODO Make editable profile form of relevant info  */}
				{/* // TODO Make water history section  */}
				{/* // TODO Make completed challenge history section  */}
				{/* // TODO Make title section here or put with frogs*/}
			</Container>
		</Layout>
	);
};
