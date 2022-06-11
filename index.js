const express = require('express')
const app = express();
const port =  process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.post('/login', async (req, res)=>{
    const data = req.body;
    const email = data.email;
    const password = data.password;
    if(email && password){
        res.send({ token: "QpwL5tke4Pnpja7X4" });
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