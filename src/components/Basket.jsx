
import { useQuery } from "react-query";
import { getDataBasket } from "../getDataBasket";
import { useMutation, useQueryClient } from "react-query";


const ElementBasket = ({ productBasket }) => {
  const queryClient = useQueryClient();

  const deleteBasket = () => {
    return fetch(`http://localhost:8081/cartProduct/${productBasket.id}`, {
      method: "DELETE", // Здесь так же могут быть GET, PUT, DELETE
      headers: {
        // Добавляем необходимые заголовки
        "Content-type": "application/json; charset=UTF-8",
      },
    })
  };

  const mutation = useMutation(deleteBasket, {
    onSuccess: () => { 
      queryClient.refetchQueries("productBasket");
    },
  });

  return (
    <div className="basket">
      <h3>{productBasket.product.name}</h3>
      <img src={productBasket.product.image} />
      <p>{productBasket.product.price} руб</p>
      <button onClick={mutation.mutate} className="bay">
      <i class="fa-solid fa-xmark"></i>
      </button>
      <button className="bay3">
     Купить
      </button>
    </div>
  );
};

export const Basket = () => {
  const query = useQuery("productBasket", getDataBasket);
  return (
    <div className="basketContainer">
      <div className="title">
        <h1>Корзина</h1>
      </div>
      <div className="containerProducts">
      {(query.data || []).map((productBasket) => (
        <ElementBasket key={productBasket.id} productBasket={productBasket} />
      ))}
      </div>
      <div/>
    </div>
  );
};
