import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './cakeSlice';
export const CakeView = () => {
    const numOfCakes = useSelector((state)=> state.cake.numOfCake);
    const dispatch = useDispatch()
  return (
    <>
    <h2>Number of cake - {numOfCakes}</h2>
    <button onClick={()=> dispatch(ordered())}>Order cake</button>
    <button onClick={()=> dispatch(restocked(5))}>restock cake</button>
    </>
  )
}
