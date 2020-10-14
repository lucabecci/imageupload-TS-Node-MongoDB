import { connect } from 'mongoose'

const userDB = process.env.DB_USER
const nameDB = process.env.DB_NAME

export async function startConnection(){
    try{
        await connect(`mongodb://${userDB}/${nameDB}`, {
        useNewUrlParser: <boolean> true,
        useUnifiedTopology: <boolean> true,
        useFindAndModify: false
        })
        return console.log('db is connected')
    }
    catch(e){
        return console.log(e)
    }
}
