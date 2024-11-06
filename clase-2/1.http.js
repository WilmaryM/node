const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenido a mi pagina de inicio</h1>')
  } else if (req.url === '/imagen-cacballo.jpg') {
    fs.readFile('./14472.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 internal Server Error<h1>')
      } else {
        res.setHeader('content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404</h1>')
  }
})

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
