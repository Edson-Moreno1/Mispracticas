let users = [];
let nextId = 1;

export function getUsers(req,res){
    res.status(200).json(users);
}

export function addUser(req,res){
    const {name} = req.body;
     if(!name || name.trim() ===''){
        return res.status(400).json({error:'El nombre es obligatorio'});
     }

     const newUser = {
        id:nextId++,
        name:name.trim()
     };

     users.push(newUser);
     res.status(201).json(newUser);

     }

     
