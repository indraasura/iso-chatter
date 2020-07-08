const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app) // create server
const io = socketio(server) // create instance of socket
const router = require('./router')
const PORT = process.env.PORT || 5000

app.use(router)


io.on('connection', (socket)=>{
    console.log('We have a new connection!!!')
    console.log(socket)
    socket.on('disconnect', ()=>{
        console.log('User has left!!!')
    })
})


server.listen(PORT, () => console.log(`Server running on port ${PORT}...`))