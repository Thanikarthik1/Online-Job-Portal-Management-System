const mongo=require('mongoose');
mongo.connect('mongodb://127.0.0.1:27017/db')

const Schema=new mongo.Schema({
    user_Id:String,
    Serial_Number:Number,
    Company:String,
    email:String,
    Number:Number,
    Job_Name:String,
    Salary:Number,
    Location:String,
    Eligibility:String,
    Deadline:Date,
    // Registered_Number:Number,
    myarray:Array
})
 module.exports=mongo.model('Employer',Schema);


 