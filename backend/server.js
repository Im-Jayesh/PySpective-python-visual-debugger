const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
require("dotenv").config()
const cors = require('cors')
const visualizationRoutes = require('../backend/routes/visualization')

app.use(cors({
    origin: 'http://localhost:3000', // Frontend runs on port 5173
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allows cookies, if needed
  }));

app.use(express.json()); // For parsing JSON requests
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (CSS, JS)
app.use('/api/visualize', visualizationRoutes) // visualization api
app.get('/',(req, res)=>{
    
})

const PORT =  process.env.PORT
app.listen(PORT, ()=>{
    console.log(`The server is running on http://127.0.0.1:${PORT}`);
})