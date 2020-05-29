
const {User} = require("../models")

class SessionController{
    async store(req,res){

        const {email, password} = req.body

        const user = await User.findOne({where:{email}})


        if(!user){ // se user nao existir
            return res.status(401).json({message:"User not found"})
        }

            // se a senha for incorreta
        if(!(await user.checkPassword(password))){
            return res.status(401).json({message:"incorrect password"})
        }

            // retorna o token
        return res.json({
            user,
            token:user.generateToken()
        })
    }
}

module.exports = new SessionController()