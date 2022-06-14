// initialize the server with express

const express = require('express')
const app = express()
const cors = require('cors') // Add cors
const PORT = 8000

app.use(cors())


const clients = {
    'albert': {
        'name':'Albert',
        'city': 'LA',
        'industry':'clothing'
    },
    'GB':{
        'name':'GB',
        'city': 'Paris',
        'industry':'food'
    },
    'Pers':{
        'name':'Pers',
        'city': 'Luxembourg',
        'industry':'technology'
    },
    'Kirku':{
        'name':'kirku',
        'city': 'Madrid',
        'industry':'food'
    }
}

// read request
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:clientName',(req,res)=>{
    const clientsName = req.params.clientName.toLowerCase()
    if(clients[clientsName]){
        res.json(clients[clientsName])
    } else {
        res.json('Not a client')
    }
})


app.listen(process.env.PORT || PORT, () =>{
    console.log('Server is running')
})