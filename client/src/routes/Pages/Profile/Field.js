import * as React from "react";

import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, FormLabel, IconButton, useEditableControls } from "@chakra-ui/react";

import { GrFormCheckmark, GrFormClose, GrFormEdit } from "react-icons/gr";

export const Field = ({ defaultValue, value, onSubmit, id, label }) => {
	const EditableControls = () => {
		const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls();
		return isEditing ? (
			<ButtonGroup justifyContent="right" size="sm" marginLeft="auto" marginBottom={"10px"}>
				<IconButton icon={<GrFormCheckmark />} {...getSubmitButtonProps()} onSubmit={onSubmit} />
				<IconButton icon={<GrFormClose />} {...getCancelButtonProps()} />
			</ButtonGroup>
		) : (
			// <Flex justifyContent='stretch'>
			<IconButton marginLeft="auto" size="sm" icon={<GrFormEdit />} {...getEditButtonProps()} />
			// </Flex>
		);
	};
	return (
		<>
			<FormLabel marginBottom="-12px" htmlFor={id}>
				{label}
			</FormLabel>
			<Editable id={id} textAlign="left" defaultValue={defaultValue} fontSize="md" isPreviewFocusable={false} value={value} onSubmit={onSubmit} style={{ minWidth: "80%" }}>
				<EditableControls />
				<EditablePreview paddingLeft="10px" />
				<EditableInput paddingLeft="10px" />
			</Editable>
		</>
	);
};
