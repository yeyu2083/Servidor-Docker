import validateHelper from "../../helpers/validate.helper.js"
import Schema from "../../schema/user/create.schema.js"
//funcion para dar de alta un usuario 
const createUser = async (req, res, next) => {
    //validar un schema se conectara con un servicio y validara con la base de datos, no el controlador
    try {
       await validateHelper(Schema,req.body)
    }catch (error) {
        next(error)
    }
   

}

export default createUser