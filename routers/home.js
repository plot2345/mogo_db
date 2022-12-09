const express = require('express');
const Router = express.Router();
const Club = require('../models/club')


Router.get('/',(req,res)=>{
    res.render('index');
})

Router.get('/pass',(req,res)=>{

res.render('pass');

})

Router.get('/Admin',(req,res)=>{
Club.find((err,docs)=>{

if(err) throw err;
 console.log(docs);
 res.render('Admin',{

     studentdetails : docs
 })


})

 
})

Router.get('/Sin',(req,res)=>{
  res.render('sign');
})


Router.get('/login',(req,res)=>{


res.render('login');


})

Router.post('/changepas',async(req,res)=>{
try{
const newp = req.body.newp;
const oldp = req.body.oldp;


console.log(newp,oldp);

const pass = await Club.findOne({Password:oldp});

if(pass.Password==oldp){
  var item = {

   Password : newp

  }
   console.log("yes");
   
   Club.updateOne({Password:oldp},{$set:item},(err,resutt)=>{

    res.redirect('/')

   } )

   
}
else{
console.log("not valid");

}


// res.send(pass);
console.log(pass);
}catch(error){

console.log("invalid");
res.status(400).send("invalid")

}



})








Router.post('/login1',(req,res)=>{

const pass = req.body.Password;

try{
Club.findOne({Password:pass},(err,docs)=>{
console.log("docs");
  console.log(docs);
 if(docs.Password==pass){
  console.log(docs);
     res.render('login1',{

       studentdetails:docs
     })
    }

    else{

      console.log("no");
      res.redirect('/login')
    }
  
  
  })
}
catch(error){


}




})





Router.post('/action',(req,res)=>{

  





const username = req.body.uname;
const name = req.body.name;
const Password = req.body.Password;
const Phoneno = req.body.Pno;
const email = req.body.email;

// Club.find({username:username},(err,docs)=>{


// redirect('/Sin')

// })



const club = new Club({
username,
name,
email,
Phoneno,
Password


})

club.save(err=>{
if(err) throw err

else{

  res.redirect('/')
}



})

})

// Router.post('/add',(req,res)=>{
//     const email = req.body.email;
//     const name =  req.body.name;
    

    // console.log(name,email);
//  const club = new Club({

//     name,
//     email

// })
// club.save(err=>{

// if(err){
//   console.log("err is ")

// }
// else{
// res.redirect('/show')

// }

// })
// })




///find data

// Router.get('/show',(req,res)=>{

// Club.find((err,docs)=>{

// if(err) throw err;
//  console.log(docs);
//  res.render('show',{

//      studentdetails : docs
//  })


// })
// });
// /////update
//  Router.get('/edit/:id',(req,res)=>{

//  console.log(req.params.name);
//  Club.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>{

//  if(err){

//    console.log("cant update")
//  }else{
//    res.render('edit',{studentdata:docs})
//    console.log("Done")
//  }

//  })

// })

// Router.post('/edit/:id',(req,res)=>{
// Club.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
//   if(err){

//     console.log("error")
//   }
//   else{
//  res.redirect('/show')

//   }
// })



// })


// Router.post('/sear',(req,res)=>{

// const search = req.body.search;

// Club.find({name:search},(err,docs)=>{

//   if(err){

// console.log("error");
//   } 
  


// else{
//   console.log(docs[0]);
//     res.render('result',{

//       item:docs
//     })
// }
  
  
//   })
  
//  })


// Router.get('/delete:id',(req,res)=>{

// Club.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{

// if(err){

//   console.log("error")
  
// }

// else{

//   // res.redirect('/show')
// }


// })


// })





module.exports = Router;