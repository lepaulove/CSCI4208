//import 'http' module and initialuze the server
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const url = require('url')
const path = require('path')
const fileSystem = require('fs')
const mimeTypes = {
    ".html": "text/html",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpg",
    ".png": "image/png",
    ".js": "text/javascript",
    ".css": "text.css"
}

//http handler(callback function)
//A callback function the server invokes when it 
//receives an HTTP request. The server passes the 
//request object and an empty response object to the 
//function. The callback defnes the response's 
//attrinutes.
function httpHandler(request, response){
    let urlObject = url.parse(request.url)
    let uri = urlObject.pathname
    let fileName = path.join(process.cwd(), uri)
    console.log('Loading ' + uri)  
    
    let stats
    try{
        stats = fileSystem.lstatSync(fileName)
        if(stats.isFile()){
            serverFile(response, fileName)
        }else if(stats.isDirectory()){
            serverIndex(response)
        }else{
            serverError()
        }
    }catch(e){
        fileNotFound(response)
    }
}

function serverIndex(response){
    response.writeHead(302, {'Location': 'index.html'})
    response.end()
}

function serverError(response){
    response.writeHead(500, {'Content-type': 'text/plain'})
    response.write('500 Internal Error\n')
    response.end()
}

function serverFile(response, fileName){
    let fileExtension = path.extname(fileName)
    let mimeType = mimeTypes[fileExtension]
    response.writeHead(200, {'Content-type': mimeType})
    let fileStream = fileSystem.createReadStream(fileName)
    fileStream.pipe(response)
}

function fileNotFound(response){
    response.writeHead(404, {'content-type': 'text/plain'})
    response.write('404 Not Found\n')
    response.end()
    return
}

//A callback function the server invokes when it 
//initially launches.
function serverMessage(){
    console.log(`Server running at http://${hostname}:${port}/`)
}

//Create a web server that handles HTTP requests via
//the callback function. The server listens on the
//port and hostname. When it launches it triggers the
//given callback function.
const server = http.createServer(httpHandler)
server.listen(port, hostname, serverMessage)