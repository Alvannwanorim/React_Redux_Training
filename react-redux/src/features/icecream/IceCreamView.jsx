import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
export const IceCreamView = () => {
   const [value, setValue] =  useState(1)
    const numOfIceCreams = useSelector((state)=> state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <>
    <h2>Number of ice creams - {numOfIceCreams}</h2>
    <button onClick={()=> dispatch(ordered())}>Order ice cream</button>
    <input type="number" value={value} onChange={(e)=> setValue(parseInt(e.target.value))} />
    <button onClick={()=> dispatch(restocked(value))}>restock ice cream</button>
    </>
  )
}
