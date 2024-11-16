import { conexiondb } from "../conf/dataBase.js";

const pruebaBD= async (req,res)=>{
    const [consulta]= await conexiondb.query('select 1+2 as result')
    res.json(consulta)
}

export{pruebaBD};