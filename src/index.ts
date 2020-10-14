import app from './app'
const PORT = app.get('port')

async function main(){
    await app.listen(PORT)
    console.log('Server on port:', PORT)
}

main()