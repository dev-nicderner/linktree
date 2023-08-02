import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
 background: red;
 height: 90px;
`;

interface PropsActive {
    active: boolean;
}

export const ListItem = styled.li<PropsActive>`
 list-style: none;
 color: ${({active}) => active? '#fff' : '#333'};
`;