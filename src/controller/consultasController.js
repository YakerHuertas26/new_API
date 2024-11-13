import { conexion } from "../conf/dataBase.js";

const pruebaBD= async (req,res)=>{
    const [consulta]= await conexion.query('select 1+2 as result')
    res.json(consulta)
}

export{pruebaBD};