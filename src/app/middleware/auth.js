// ele vai verificar se o token esta presente dentro da nossa requisicao

const jwt = require("jsonwebtoken");
const {promisify} = require("util")

module.exports = async (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message:"token not provided"})
    }

    const [, token] = authHeader.split("");

    try {
        const decoded = await promisify(jwt.verify)(token,process.env.APP_SECRET)

        req.userId = decoded.id
    } catch (error) {
        return res.status(401).json({message:"token invalid"})
    }

    return next()
}