import app from './app'
import dotenv from 'dotenv'
dotenv.config()
//db import connection
import { startConnection } from './database/database'


const PORT: number = app.get('port')

async function main(){
    await startConnection()
    await app.listen(PORT)
    console.log('Server on port:', PORT)
}

main()