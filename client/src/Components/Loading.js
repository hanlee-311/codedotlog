import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Styled from 'styled-components';

const Loading = () => {
    return (
        <>
            <LoadScreen>
                <ClimbingBoxLoader color={'#FFC947'} loading={true} size={40} />
            </LoadScreen>
        </>
    )
};

const LoadScreen = Styled.div 
`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`


export default Loading;