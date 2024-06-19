import Productcard from "../../shared/components/cards/Productcard";
import useCart from "../../shared/hooks/useCard";
import { getallprocuts } from "../../services/product/apiproduct";
import { useEffect, useState } from "react";


export default function Shop() {
  const [products, setproducts] = useState([]);
  const {setcount,inc,dec}=useCart();
  const getproducts = async () => {
    const val = await getallprocuts()
    // console.log(val);
    setproducts(val);
  }
  useEffect(() => {
    getproducts();
  }, [])
  console.log(products);

  return (
    <div>
<Productcard products={products} setcount={setcount} inc={inc} dec={dec}/>
    </div>
  )
}
