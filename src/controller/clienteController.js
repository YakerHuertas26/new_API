import { conexiondb } from "../conf/dataBase.js"

const getCliente= (req, res) => {res.send('hello fron the client')}

const postCliente= async (req, res) => {
    // extraer los datos del bady
    const {name, salary}= req.body;
    // ++++PUEDES HACER VALIDACIONES POR LOS TIPOS DE DATOS +++
    
    // añadir un registro de cliente y guardo solo las filas en una constante
    const [crearCliene]=await conexiondb.query('INSERT INTO employes (name,salary) values (?,?)',[name,salary]);

    // devuelvo ya los datos con el ID en formato json 
    res.send({
        id:crearCliene.insertId,
        name,
        salary
    })
    // console.log(respuesta);
    
    
}

const putCliente= (req, res) => {res.send('edit a client')} 

const deleteCliente= (req, res) => {res.send('delete a client')}

export {getCliente,postCliente,putCliente,deleteCliente}