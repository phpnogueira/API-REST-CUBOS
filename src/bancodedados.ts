type TInstrutores = {
    id:number
    nome:string
    email:string
    aulas?: TAulas[]
}

type TIdentificador = number

type TAulas = {
    id: number
    nome: string
}

type TBancodedados = {
    proximoIdentificador: TIdentificador
    proximoIdentificadorAula: TIdentificador
    instrutores :TInstrutores[]
}

const bancodedado:TBancodedados={
    proximoIdentificador: 3,
    proximoIdentificadorAula: 2,
    instrutores:[
    {
        id: 1,
        nome: 'Philip',
        email: 'philip@email.com',
        aulas:[ {
            id: 1, nome: 'Aula de API REST'
        }]
    },
    {
        id: 2,
        nome: 'Maria',
        email: 'maria@email.com',
        aulas:[]
    },
]
}

export let proximoIdentificador = 3

export default bancodedado