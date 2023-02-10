import React from 'react';

export const Title = (props: {title: string}) => {
    const {title} = props;

    return <>
        <h1>{title}</h1>
    </>
}