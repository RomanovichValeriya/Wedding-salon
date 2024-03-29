import express, { request } from "express";
import cors from "cors";
import { Product } from "./productModel.js";
// import { Size } from "./productModel.js";
// import { Basket } from "./productModel.js";
import { CartProduct } from "./cartModel.js";
import { queries } from "@testing-library/react";
import { Size } from "./sizeModel.js";
import { Color } from "./colorModel.js";
import { Categories } from "./categoriesModel.js";
//Импортируются необходимые модули express, cors, модели (Product, CartProduct, Size, Color, Categories)
// и функции из библиотеки @testing-library/react.



const port = 8081; 
const app = express(); //Создается экземпляр приложения Express с помощью вызова функции express().
app.use(cors()); //Добавляется middleware cors для обработки CORS (Cross-Origin Resource Sharing).
app.use(express.json()); //Добавляется middleware express.json() для обработки JSON данных.




app.get("/product", async function (req, res) { 
  const result = await Product.findAll({ include: [Size , Color , Categories]  });
  res.send(result);
});
//Объявляются роуты:
//- GET /product: Возвращает все продукты с информацией о размере, цвете и категории и выводит их в фомате json на порте 8081.


app.get("/cartProduct", async function (req, res) {
  const result = await CartProduct.findAll({ include: [Product] });
  res.send(result);
});
// GET /cartProduct: Возвращает все продукты в корзине с информацией о продукте.

app.delete("/cartProduct/:id" , async function(req , res){
 await CartProduct.destroy({
  where:{
    id: req.params.id
  }
})
res.end()
});// - DELETE /cartProduct/:id: Удаляет продукт из корзины по его идентификатору.

app.post("/carts", async function (req, res) {
  const product = await Product.findOne({ where: { id: req.body.id } });

  await CartProduct.create(
    { quantity: 1, productId: req.body.id  }
  );
  res.end()
});//- POST /carts: Добавляет продукт в корзину по идентификатору продукта.



app.listen(port, () => {  //Устанавливается прослушивание порта 8081 с помощью метода app.listen().
  console.log(`Example app listening on port ${port}`);
});
