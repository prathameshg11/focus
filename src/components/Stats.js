import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

function Stats() {
    return (
        <>
            <div>
                <CircularProgress value={40} color='green.400' size='100px'>
                    <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
            </div>
            <div>
                Daily Streak
            </div>
        </>

    )
}

export default Stats