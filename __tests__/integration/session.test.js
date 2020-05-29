const request = require("supertest")

const app = require("../../src/app")

const truncate = require("../utils/truncate")

const factory = require("../factories")


// describe("autheticated",()=>{ // pode lidar com varias coisa no mesmo aquivo, como fosse a categorias dos tests
//     it("should sum two number",()=>{ // da o nome pro test, retorna um token JWT, it(isso)
//         const x = 2;
//         const y = 4;

//         const sum = x + y

//         // expect ele espera que  .....
//         expect(sum).toBe(6)
//     })
// })

// beforeAll que executa automaticamente antes de tds os teste de session
//  alterEach que executa depois de cada teste 
// allterAll que executa depois de tds os testes
// beforeEach que executa antes de cada teste

describe("Authentication",()=>{

    beforeEach(async()=>{
        await truncate()
    })


    it("deve somar dois números", async ()=>{
        const user = await factory.create("User",{
            password:"123456"
        })

        const response = await request(app)
        .post("/sessions")
        .send({
            email:user.email,
            password:"123456"
        })

        expect(response.status).toBe(200) 
    })
        
      it(" não deve autenticar com credenciais inválidas",
        async()=>{
            const user = await factory.create("User",{
                password:"123456"
            })
            
        const response = await request(app)
            .post("/sessions")
            .send({
             email:user.email,
            password:"123777"
        })

        expect(response.status).toBe(401)}

      )

        it(" deve retornar o token jwt quando autenticado",
             async()=>{
                const user = await User.create({
                    name: "lucas", 
                    email:"lucas@gamil.com", 
                    password:"123456"
            
            });
    
            const response = await request(app)
                .post("/sessions")
                .send({
                 email:user.email,
                password:"123456"
            })
    
            expect(response.body).toHaveProperty("token")} 
             

        );

        it("deve poder acessar rotas privadas quando autenticado",
            async ()=>{
                const user = await User.create({
                    name: "lucas", 
                    email:"lucas@gamil.com", 
                    password:"123456"
            
            });
    
            const response = await request(app)
                .get("/dashboard")
                .set("Authentication",`Bearer ${user.generateToken()}`)
    
            expect(response.status).toBe(200)
        });

        it("não deve poder acessar rotas privadas sem o token jwt",
            async()=>{
                
                const response = await request(app)
                .get("/dashboard");
                
    
            expect(response.status).toBe(401)
           
        })

        it(" não deve poder acessar rotas privadas com token jwt inválido",
            async ()=>{
                const response = await request(app)
                .get("/dashboard")
                .set("Authentication",`Bearer 123123`)
    
            expect(response.status).toBe(401
                )
            
            })

})
