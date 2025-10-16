// const express = require('express');
// const userdata = require('./userdata.json');
// const userActivity = require('./routes/userActivity')
const mongoose = require('mongoose');

// const {age} = require('./controlers/userByAge')
// const homepage = require('./routes/home')

// const {role} = require()
// const route = require('./routes/home')
// const server = express();
const port = 4000; 


//  server.use('/',homepage)

//   server.get('/personal',(req,res)=>{
//     const data = {
//         name:"pandarinath",
//         age:25,
//         degree:'MCA'

//     }
//     res.status(200).json(data);
//  })

//  ///query param 
//  server.use('/api/v1/userdata/search',userActivity)
//  server.get("/api/v1/userdata/search", (req, res) => {
//   const { isActive } = req.query;

//   // Convert query string → boolean
//   if (isActive !== undefined) {
//     const isActiveBool = isActive === "true";
//     const filterUser = userdata.filter(user => user.isActive === isActiveBool);
//     return res.status(200).json(filterUser);
//   }

//   // If no query param, return all users
//   res.status(200).json(userdata);
// });
// //params
// server.get("/api/v1/userdata/:age",age);

 
// server.listen(port,()=>{
//     console.log(`listening to the ${port}`);
// })
const express = require('express');
const server = express();
server.use(express.json());
const userActivity = require('./routes/userActivity');
const blogRouter = require('./routes/blog')

// Mount the routes
server.use('/api/v1/userdata/search', userActivity);

server.use('/api/v1/blog',blogRouter)

//db connection
mongoose.connect('mongodb://localhost:27017/blog').then(()=>{
  console.log('compass connected')
}).catch((err)=>{
  console.error("Error connecting to mongodb",err)
});

server.listen(port, () => {
  console.log("Server running at port 4000");
});
