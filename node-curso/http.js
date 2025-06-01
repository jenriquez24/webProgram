const http = require('http')

const server = http.createServer(function(request, response){

    console.log(request.url)
    if(request.url === '/'){
        response.write('welcome to server')
        return response.end()
    }
       

    if(request.url === '/about'){
        response.write('acerca de ')
        return response.end()
    }

    response.write(`<h1>Not Found</h1>
        <p>No se encontro esta pagina</p>
        <a href= "/"> volver a la pagina de Inicio </a>`)
    response.end()
})

server.listen(3000)

console.log('servidor escuchando en el puerto 3000');