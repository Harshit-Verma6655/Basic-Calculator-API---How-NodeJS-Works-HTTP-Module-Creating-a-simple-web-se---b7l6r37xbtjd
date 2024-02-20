const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req, res)=>{
    res.send("Hello world!");  
})
app.post('/add',(req, res)=>{
    let {num1, num2}=req.body;
    let sum =num1+num2;
    if(num1<-1000000||num2<-1000000){
        res.json({"message":"Underflow"});
        return;
    }
    if(num1>1000000||num2>1000000){
        res.json({"message":"Overflow"});
        return;
    }
    if(isNaN(num1)||isNaN(num2)){
        res.json({"message":"Invalid data types"});
        return;
    }
    res.json({
        "status": "success",
        "message": "the sum of given two numbers",
        "sum": sum
        })
    
});

app.post('/sub',(req, res)=>{
    let {num1, num2}=req.body;
    if(num1<-1000000||num2<-1000000){
        res.json({"message":"Underflow"});
        return;
    }
    if(num1>1000000||num2>1000000){
        res.json({"message":"Overflow"});
        return;
    }
   
    if(isNaN(num1)||isNaN(num2)){
        res.json({"message":"Invalid data types"});
        return;
    }
    
    res.json({
        "status": "success",
        "message": "the difference of given two numbers",
        "sum": num1-num2,
        })
    
});
app.post('/multiply',(req, res)=>{
    let {num1, num2}=req.body;
    if(num1<-1000000||num2<-1000000){
        res.json({"message":"Underflow"});
        return;
    }
    if(num1>1000000||num2>1000000){
        res.json({"message":"Overflow"});
        return;
    }
    if(isNaN(num1)||isNaN(num2)){
        res.json({"message":"Invalid data types"});
        return;
    }
    res.json({
        "status": "success",
        "message": "the product of given two numbers",
        "sum": num1*num2,
        })
})
app.post('/divide',(req, res)=>{
    let {num1, num2}=req.body;
    if(num2==0){
        res.json({"message":"Cannot divide by zero"});
        return;
    }
    if(num1<-1000000||num2<-1000000){
        res.json({"message":"Underflow"});
        return;
    }
    if(num1>1000000||num2>1000000){
        res.json({"message":"Overflow"});
        return;
    }
   
    if(isNaN(num1)||isNaN(num2)){
        res.json({"message":"Invalid data types"});
        return;
    }
    res.json({
        "status": "success",
        "message": "the division of given two numbers",
        "sum": num1/num2,
        })
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;