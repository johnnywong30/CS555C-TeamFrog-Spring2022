import * as React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, useEditableControls } from '@chakra-ui/react'

import { GrFormCheckmark, GrFormClose, GrFormEdit } from 'react-icons/gr';

export const Field = ({defaultValue, value, onSubmit}) => {
    const EditableControls = () => {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()
        return isEditing
            ? (
                <ButtonGroup justifyContent='right' size='sm'>
                    <IconButton icon={<GrFormCheckmark />} {...getSubmitButtonProps()} onSubmit={onSubmit}/>
                    <IconButton icon={<GrFormClose />} {...getCancelButtonProps()} />
                </ButtonGroup>
            )
            : (
                <Flex justifyContent='right'>
                    <IconButton size='sm' icon={<GrFormEdit />} {...getEditButtonProps()} />
                </Flex>
            )
    }
    return (
        <Editable
            textAlign='center'
            defaultValue={defaultValue}
            fontSize='md'
            isPreviewFocusable={false}
            value={value}
            onSubmit={onSubmit}
        >
            <EditablePreview />
            <EditableInput />
            <EditableControls />
        </Editable>
    )

}