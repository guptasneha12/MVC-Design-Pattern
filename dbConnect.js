const mongoose=require("mongoose");
module.exports=mongoose.connect("mongodb+srv://guptasneha2003sg:KCpJbKdkj6L7Sd2z@cluster0.ripavke.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Db Connected"))
.catch(err=>console.log(err.message));