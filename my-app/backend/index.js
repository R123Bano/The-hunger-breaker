const express=require('express');
const app=express()
const port = process.env.PORT || 5000;
const mongoDB=require('./db.js');
const cors = require('cors');
app.use(cors({
    origin: true,
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true
}));

mongoDB();
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use(express.json());
app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplayData'));
app.use('/api',require('./Routes/OrderData'));

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});
