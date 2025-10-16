const userdata = require('../userdata.json')

function user(req, res) {
  res.send(userdata);
}

function age(req, res) {
  const { age } = req.params;   // you're expecting a param but in routes you didn't pass it
  const findAge = Number(age);

  const filterUser = userdata.filter(user => user.age === findAge);

  if (filterUser.length > 0) {   // filter always returns an array (truthy even if empty)
    return res.status(200).json({ userdata: filterUser });
  } else {
    res.status(404).json({ mesg: "user not found" });
  }
}

module.exports = { user, age };   // ✅ should be `exports` not `export`
