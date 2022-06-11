const express = require('express')
const app = express();
var jwt = require('jsonwebtoken');
const port = 5000 || process.env.PORT;
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());

app.post('/login', (req, res)=>{
    const data = req.body;
    const email = data.email;
    const password = data.password;
    if(email && password){
        var token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
        res.send({ token });
    }else{
        res.send({error: "missing password"});
    }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})