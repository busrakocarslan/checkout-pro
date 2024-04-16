import axios from "axios";
import Table from "react-bootstrap/Table";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../helpers/data";
import Product from "./Product";

function Show() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCount, setProductCount] = useState({}); // her bir ürün için adetleri tutacak ve güncelleyecek state.id sini anahtar olarak almak gerek.
  

  const toplamTotalPrice = () => {
    let total = 0; //başlangıç değeri
    data.map((product) => {
      total += (productCount[product.id] || 0) * product.price;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    // productCount değiştikçe yani ürün adedi değiştikçe toplamtotalPrice'in değişeceğini ayarlıyoruz.
    toplamTotalPrice();
  }, [productCount]);

  const handleCountChange = (id, count) => {
    setProductCount({ ...productCount, [id]: count }); //ProductCountun önceki bütün değerlerini alıp id ile belrtilen count değerini güncelliyor. /7 eğer id mevcut ise güncelleme oluyor, id yeni bir key ise key-value olarak ekleniyor.
  };

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-evenly">
        {data.map(({ id, name, image, price }) => (
          <Product
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            handleCountChange={handleCountChange}
          />
        ))}
      </div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>{(totalPrice - totalPrice * 0.18).toFixed(2)}$</td>
          </tr>
          <tr>
            <td>Tax(18%)</td>
            <td>{(totalPrice * 0.18).toFixed(2)}$</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>{totalPrice > 500 ? 0 : 25}$</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{totalPrice.toFixed(2)}$</td>
          </tr>
        </tbody>
      </Table>
      <Outlet />
    </div>
  );
}

export default Show;
