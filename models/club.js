const mongoos = require('mongoose');

const schema = mongoos.Schema;

let clubScheema = new schema({


   username:{
     type:String

   },

    name :{

        type:String
    },
    email:{

        type:String
    },
    Phoneno:{

        type:Number
    },
    Password:{


        type:String
    }





})
module.exports = mongoos.model('employee',clubScheema)

