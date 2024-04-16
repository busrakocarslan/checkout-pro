import axios from "axios";
import Table from "react-bootstrap/Table";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../helpers/data"
import Product from "./Product";

function Show() {
  const [products, setProducts] = useState("");
  
  // const handleMinus=(id)=>{
  //   const product = data.find((item) => item.id === id);
  //   if (product && count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  // const handlePlus= (id)=>{
  //   const product= data.find((item)=>item.id===id);
  //   if(product){
  //     setCount(count+1)
  //   }
  // }
    

  return (
    <div>
        <div className="d-flex flex-wrap justify-content-evenly">
      {data.map(({ id, name, image, price }) => (
        <Product key={id} id={id} name={name} image={image} price={price}     />
      ))}
      </div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Tax(18%)</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </Table>
      <Outlet />
    </div>
  );
}

export default Show;
