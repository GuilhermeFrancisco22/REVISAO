const express = require ("express")

const router = express.Router()

const userRepo = require("../repositories/users")

router.post('/add-login', (req, res) => {
    res.send("finalizando")
})


router.post('/signup', (req, res) => {

    console.log(req.body)
    userRepo.create(req.body)

    /* PEGAR OS DADOS QUE VEM DE JAON (EMAIL, NOME E SENHA) 
    E SALVAR EM UM ARQUIVO JSON*/

    /*1 - Importar fs
   2 - fazer o metodo create - criar o user */




    res.send("cadastro criado")
})





module.exports = router