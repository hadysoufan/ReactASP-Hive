import React from "react";
import Catalog from "../features/Catalog/Catalog.tsx";
import ProductNav from "../components/ProductsNavBar/ProductNav.component.tsx";

function Products() {
  // const {setBasket} = useStoreContext();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const buyerId = getCookie('buyerId')
  //   if(buyerId) {
  //     agent.Baskets.get()
  //     .then(basket => setBasket(basket))
  //     .catch(error => console.log(error))
  //     .finally(() => setLoading(false))
  //   }
  // }, [setBasket])

  // if(loading) return  <Loader />

  return (
    <>
      <ProductNav />
      <Catalog />
    </>
  );
}

export default Products;
