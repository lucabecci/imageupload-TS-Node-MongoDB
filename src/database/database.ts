import { connect } from 'mongoose'

export async function startConnection(){
    try{
        await connect('mongodb://localhost/images-gallery-db', {
        useNewUrlParser: <boolean> true,
        useUnifiedTopology: <boolean> true
        })
        console.log('db is connected')
    }
    catch(e){
        console.log(e)
    }
}
