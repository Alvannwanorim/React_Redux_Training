import React from 'react'
import {useSelector} from 'react-redux'
export const CakeView = () => {
    const numOfCakes = useSelector((state)=> state.cake.numOfCake)
  return (
    <>
    <h2>Number of cake - {numOfCakes}</h2>
    <button>Order cake</button>
    <button>restock cake</button>
    </>
  )
}
