const express = require ("express")

const router = express.Router()

router.post('/add-login', (req, res) => {
    res.send("finalizando")
})


router.post('/add-signup', (req, res) => {

    console.log(req.body)

    /* PEGAR OS DADOS QUE VEM DE JAON (EMAIL, NOME E SENHA) 
    E SALVAR EM UM ARQUIVO JSON*/

    /*1 - Importar fs
   2 - fazer o metodo create - criar o user */




    res.send("cadastro criado")
})





module.exports = router