import { query } from "express";
import { conexiondb } from "../conf/dataBase.js"

const getCliente= async (req, res) => {
    // obtener los datos del cliete
    const [respuesta]= await conexiondb.query('SELECT * FROM employes');
    res.json(respuesta)
}

// cliente por id
const clienteID= async(req,res)=>{
    const {id}= req.params;
    // const idCliente= Number(id) //tambien funciona sin transformar
    // consuta
    const [respuesta]= await conexiondb.query('SELECT * FROM employes WHERE id= ?', id)
    respuesta.length?
    res.json(respuesta[0])// [0] => solo devuelve un elemento, si devuelme más no le pongas 
    :
    res.status(404).json({message:'cliente no exite'})
}

const postCliente= async (req, res) => {
    // extraer los datos del bady
    const {name, salary}= req.body;
    // ++++PUEDES HACER VALIDACIONES POR LOS TIPOS DE DATOS +++

    // añadir un registro de cliente y guardo solo las filas en una constante
    const [crearCliene]=await conexiondb.query('INSERT INTO employes (name,salary) values (?,?)',[name,salary]);

    // devuelvo ya los datos con el ID en formato json 
    res.json({
        id:crearCliene.insertId,
        name,
        salary
    })
    // console.log(respuesta);
    
    
}

const putCliente= (req, res) => {res.send('edit a client')} 

const deleteCliente= async (req, res) => {
    const {id}=req.params;
    const [respusta]= await conexiondb.query('DELETE FROM employes WHERE id= ?', id)
    respusta.affectedRows == 0 ? res.status(404).json({mensaje:'dato no encontrado'})
    : 
    res.sendStatus(204)
}

export {getCliente,postCliente,putCliente,deleteCliente,clienteID}