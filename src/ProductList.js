import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, divideNumber, modulusNumber, multiplyNumber, subNumber } from './Redux/action';

const ProductList = () => {
    const dispatch = useDispatch();
    const addResult = useSelector((state)=>state.add.result); 
     const subResult = useSelector((state)=>state.subtract.result); 
      const multiResult = useSelector((state)=>state.multiply.result); 
       const divideResult = useSelector((state)=>state.divide.result); 
        const modulusResult = useSelector((state)=>state.modulus.result); 


  return (
    <div>
        <h2>Redux Counter</h2>

        <h3>Add Result : {addResult}</h3>
        <button onClick={() => dispatch(addNumber(5))}>Add 5</button>
         <h3>Sub Result : {subResult}</h3>
         <button onClick={() => dispatch(subNumber(5))}>Sub 5</button>
          <h3>Multiply Result : {multiResult}</h3>
          <button onClick={() => dispatch(multiplyNumber(5))}>Multipy 5</button>
           <h3>Divide Result : {divideResult}</h3>
           <button onClick={() => dispatch(divideNumber(5))}>Divide 5</button>
            <h3>Modulus Result : {modulusResult}</h3>
            <button onClick={() => dispatch(modulusNumber(5))}>Modulus 5</button>


       
        </div>
  )
}

export default ProductList