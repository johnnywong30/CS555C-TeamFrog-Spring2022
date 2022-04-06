import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Select, FormLabel } from '@chakra-ui/react'
import Mongo from '../../../services/mongo';

const Titles = () => {
    const dispatch = useDispatch()
    const { email, title, titles } = useSelector(({ auth }) => auth.user)

    const onChange = e => {
        e.preventDefault()
        dispatch(Mongo.updateTitle(email, e.target.value))
    }
    return (
        <>
            <Select onChange={onChange} variant={'unstyled'} w={'30%'} m={5} size={'sm'} value={title}>
                {titles.map((title, i) => {
                    return (
                        <option textAlign={'center'} key={title} value={i}>{title}</option>
                    )
                })}
            </Select>
        </>
    );
}

export default Titles