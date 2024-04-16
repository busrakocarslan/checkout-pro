import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { TiPlusOutline, TiMinusOutline } from "react-icons/ti";


const Product = ({id,name,image,price,handleCountChange}) => {
    const [count, setCount] = useState(0);
    const handleMinus=()=>{
        setCount(count>0? count-1:0)
        handleCountChange(id,count>0 ? count -1:0)
    }
    const handlePlus=()=>{
        setCount(count + 1);
        handleCountChange(id,count +1)
    }

  return (
    <div>
         <Card style={{ width:"15rem", margin:"2rem"}} key={id}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <span>{price} $</span>
              <p>
                <TiMinusOutline type='button' className='me-1' onClick={handleMinus} />
                {count}
                <TiPlusOutline type="button" className='ms-1' onClick={handlePlus} />
              </p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


    </div>
  )
}

export default Product