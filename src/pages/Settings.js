import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Configure from '../components/Configure';

function Settings() {
  return (
    <div>
      <Grid
        h='600'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(7, 1fr)'
        gap={4}
      >
        <GridItem className='card' colSpan={7} ><Configure/></GridItem>
        <GridItem className='card nav' colSpan={1} ><Navbar/></GridItem>
        <GridItem className='card ' colSpan={6} />
      </Grid>
    </div>
  )
}

export default Settings