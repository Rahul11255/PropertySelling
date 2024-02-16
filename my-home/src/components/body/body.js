import React from 'react'
import Landing from '../landing/Landing'
import Hiv from './Hiv'
import CustomI from './CustomI'
import Schedule from './Schedule'
import NeighborHood from './NeighborHood'
import SquareArea from './SquareArea'
import VistForm from './VistForm'
// import ChooseP from './ChooseP'

                                                                    
const Body = () => {
  // hey this is body
  return (
    <div>
     <Landing/>
     <Hiv/>
     <CustomI/>
     <Schedule/>
    <NeighborHood/>
    <SquareArea/>
    {/* <ChooseP/> */}
    <VistForm/>
    </div>
  )
}

export default Body