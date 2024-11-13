import { createPool } from "mysql2/promise";

const conexion= createPool({

    host:'localhost',
    user:'root',
    password:'huertasya99',
    port:3306,
    database:'api_express'
  

})
export {conexion};