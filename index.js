const express=require("express"); //importing express
var app=express();  //variable for express
const session=require('express-session');
const bodyParser=require("body-parser");
var books=[
    {
        "id": "5",
        "name": "Operating System",
        "author": "Galvin",
        "version": "9th"
      },
      {
        "id": "4",
        "name": "CN",
        "author": "Sonw",
        "version": "10"
      }

]
//syntax----: app.METHODNAME('path',handler()=>{})
app.get("",function(req,res){
    res.send("Library-Portal");  //send any type of response
    //res.json("") //send only json type data

})

app.use(bodyParser.json());  //convert to readable form
//sample middleware function  //called for everyone..therefore setHeader will be for all
app.use("*",(req,res,next)=>{
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin',"*"); //used for cors,what kind of data is coming
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Access-Control-Allow-Headers,Authorisation,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methos","*");
    next();  //goes to next line of code otherwise it will freeze in the middleware
})
app.get("/bookList",(req,res)=>{
    res.send(books);
})
app.post("/AddBook",(req,res)=>{
    //var id=(Math.random(0,10)*1000)
    console.log("add books ",req.body);
    // res.setHeader('Access-Control-Allow-Origin',"*");
    books.push(req.body);
    res.send(req.body);
})
app.delete("/Delete/:id",(req,res)=>{   //:id is dynamic params
    let bookId = req.params.id;
    console.table(`id to be deleted is ${req.params.id}`);
    books=books.filter(books=>books.id !==bookId);
    res.send(req.body);
    /*
    let book=[];
    books.forEach(book1=>{
        if(book1.id!==req.params.id){
            book.push(book1);
        }
    })
    books=book;
    res.send(books);
    */
})
app.listen(8081,()=>{   
    console.log("server is listening at port 8081");
})

//on running localhost we got...cannot get /..means we dont got the get request
//every request create a seperate session 