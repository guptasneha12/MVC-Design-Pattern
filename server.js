require("./utils/dbConnect");    // database connection
const express=require("express");
const router=require("./routes/router");

const app=express();


// middleware
app.use(express.json());    // to pass the incoming data

// app.use supports anytype of http method
app.use("/employees",router);


const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is running on port " + PORT);
});