//importar o fs
//criar os métodos para salvar o nosso user

const fs = require("fs")

//Classe contructor que cria o nosso arquivo
//Usamos o modeule.exports

// este repositorio sera utilizado para criar os metodos comuns

module.exports = class Repository {
    //constructor, vou verificar se recebo um nome de arquivo

    constructor(filename) {
        if (!filename) {
            throw new Error("Você precisa informar o nome doe um arquivo")
        }

        //atributo da classe 
        this.filename = filename

        try {
            fs.accessSync(this.filename)
        } catch (error) {
            fs.writeFileSync(this.filename, "[]")
        }
    }
    //metodos
    async create(atributos) {
        // ?criar o user?
        // ler todos arquivos
        const records = await this.getAll()
        // os dados da lista, entao add os dados recebidos na lista
        records.push(atributos)
        // escreve dew voltra noa rquivo
        await this.writeAll(records)

    }
    async getAll() {
        return JSON.parse(await fs.promises.readFile(this.filename))
    }
    async writeAll() {
        return fs.promises.writeFile(this.filename, JSON.stringify(records))
    }
}