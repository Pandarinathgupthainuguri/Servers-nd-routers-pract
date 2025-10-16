
export function role(req,res){
    const {role} = req.query;
    // console.log(param.role);
    const filteruser = userdata.filter(user=>user.role=role)
    res.status(200).send(filteruser);
}