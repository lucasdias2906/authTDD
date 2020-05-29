// criptografar senha

const bcrypt = require("bcryptjs")

const {User} = require("../../src/app/models")
const truncate = require("../utils/truncate")

describe("User",()=>{
    beforeEach(async()=>{
        await truncate()
    })

    it("shoulf encrypt user password",async()=>{
        const user = await User.create({
            name:"Lucas",
            email:"Lucas@gmail.com",
            password_hash:"123456"})

            // compare é comparar

            const compareHash = await bcrypt.compare("123456",user.password_hash)

            expect(compareHash).toBe(true)
    })

})