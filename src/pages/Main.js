import React from 'react'
import { useState } from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import Timer from '../components/Timer'
import Cal from '../components/Heatmap'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { TbWindowMinimize } from "react-icons/tb";
import { appWindow, LogicalSize } from '@tauri-apps/api/window';

function Main() {
    const [minMized, setminMized] = useState(false);
    const reSizeWin = async () => {
        if (!minMized){
            await appWindow.setSize(new LogicalSize(300, 400));
        }
        else{
            await appWindow.setSize(new LogicalSize(800, 600));
        }
        setminMized(!minMized);
    }
    return (
        <div>
            <Grid
                h='600'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(7, 1fr)'
                gap={4}
            >
                <GridItem className='card streak' colSpan={4} ><Banner /></GridItem>
                <GridItem className='card tmr' colSpan={3} style={{ display: 'grid', placeItems: 'center' }}>
                    <div className='minBtn'>
                        <div className='minBtn-child'>
                            <TbWindowMinimize onClick={reSizeWin}/>
                        </div>
                    </div>
                    <Timer />
                </GridItem>
                <GridItem className='card nav' colSpan={1} ><Navbar /></GridItem>
                <GridItem className='card heatmap' colSpan={6} style={{ display: 'grid', placeItems: 'center' }}><Cal /></GridItem>
            </Grid>
        </div>
    )
}

export default Main