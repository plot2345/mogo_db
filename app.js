const express = require('express');
const mongoos = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;
mongoos.set('strictQuery', true);


//////////
const connection_url =
"mongodb://localhost:27017/studentDb";
// mongoos.connect(connection_url, {
// //   useCreateIndex: true,
//   userFindAndModify:false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const homeRouter  = require('./routers/home');
///////////////////
app.use( express.static( "image" ) )

//////////
mongoos.connect("mongodb://localhost:27017/studentDb",(err)=>{

if(err) {console.log("mongode not working")}
else{
   console.log('Mongose succesfull')}
})
// const db = mongoos.connection;
// db.on('err',()=>{


// console.log("err is");

// })

// db.once('open',()=>{

// console.log("connected");

// })




// app.get('/',(req,res)=>{


// res.send("hello");


// })
app.set('view engine','ejs');
// app.use(express.static('public'))


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.use('/',homeRouter)

app.listen(port);