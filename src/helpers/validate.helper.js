import errorHelper from "./error.helper.js"
const validateHelper = async(schema, data) => {
    try {
     await schema.validateAsync(data)   
    }catch(error) {
        errorHelper.badRequestError(error.details[0]?.message) //obtengo el primer error
    }
}

export default validateHelper