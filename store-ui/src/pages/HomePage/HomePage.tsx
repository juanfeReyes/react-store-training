import { Container, Stack } from '@mui/material';
import React from 'react';
import { SearchButton } from '../../components/Button/Button';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Title } from '../../components/Title/Title';


export const HomePage = () => {

    return <>
        <Container maxWidth="lg">
            <Stack spacing={2}>
                <Title title='Stream Game Store' />
                <SearchBar />
                <SearchButton />
            </Stack>
        </Container>


    </>
}
