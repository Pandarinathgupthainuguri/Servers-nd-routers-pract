const userdata = require('../userdata.json')

export function age (req, res){
  const  {age} = req.params;
  const findAge = Number(age);
    const filterUser = userdata.filter(user => user.age === findAge);
    
    if(filterUser){
      return res.status(200).json({userdata: filterUser});
    }else{
      res.status(404).json({mesg:"user not found"});

    }

  // If no query param, return all users
}