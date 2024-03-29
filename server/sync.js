import { sequelize } from "./connectDatabase.js";
import { Product } from "./productModel"
import { Size } from "./sizeModel";
import { CartProduct } from "./cartModel";
import { Color } from "./colorModel.js";
import { Categories } from "./colorModel.js";

await sequelize.sync({alter:true})
// await sequelize.sync({alter:true}) - это метод в библиотеке Sequelize, которая является ORM (Object-Relational Mapping) для Node.js, предназначенной для работы с базами данных. 
//Этот метод используется для синхронизации моделей данных вашего приложения с структурой базы данных.
// Когда вы вызываете sequelize.sync({alter:true}), Sequelize анализирует определения моделей данных вашего приложения и сравнивает их с текущей структурой базы данных.
// Если какие-то изменения были внесены в модели данных
// (например, добавлены новые поля или изменена структура таблиц), Sequelize попытается автоматически изменить структуру базы данных, 
//чтобы отразить эти изменения.
