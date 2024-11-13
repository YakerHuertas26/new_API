const getCliente= (req, res) => {res.send('hello fron the client')}

const postCliente= (req, res) => {res.send('create a client')}

const putCliente= (req, res) => {res.send('edit a client')} 

const deleteCliente= (req, res) => {res.send('delete a client')}

export {getCliente,postCliente,putCliente,deleteCliente}