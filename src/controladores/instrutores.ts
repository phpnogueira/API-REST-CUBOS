import { Request, Response } from "express"
import bancodedados from '../bancodedados'


export const listar = (req:Request , res:Response) => {
    return res.status(200).json(bancodedados.instrutores)
}

export function detalhar(req:Request, res:Response) {
   const  { id } = req.params

   const instrutor = bancodedados.instrutores.find((item) =>{
    return item.id === Number(id)
   })

   if (!instrutor) {
    return  res.status(404).json({mensaagem:"instrutor não encontrado"})
   }


   return res.status(200).json(instrutor)
}

export function cadastrar (req:Request, res:Response){
    const { nome, email } = req.body


    const novoInstrutor = ({
        id: bancodedados.proximoIdentificador++,
        nome,
        email
      })

    bancodedados.instrutores.push(novoInstrutor)
    
    return res.status(201).json(novoInstrutor)
}


export function atualizar (req:Request, res:Response){
    
    // desestrutura o id do parametro passado
    const { id } = req.params

    // desestrutura o nome e email digitado/enviado no body 
    const { nome, email } = req.body

    // busca o id no objeto  e converte para number 
    const instrutor = bancodedados.instrutores.find((item) =>{
        return item.id === Number(id)
       })
       

       // condicional para verificar se o id existe
       if (!instrutor) {
        return  res.status(404).json({mensaagem:"instrutor não encontrado"})
       }
    
       // atualiza as propriedades nome e email
       instrutor.nome = nome 
       instrutor.email = email
    
    return res.status(204).send()
}

export function excluir (req:Request, res:Response){
    
    // desestrutura o id do parametro passado
    const { id } = req.params


    // busca o id no objeto  e retorna em qual index ele está 
    const instrutorIndice = bancodedados.instrutores.findIndex((item) =>{
        return item.id === Number(id)
       })
       

       // condicional para verificar se o index existe
       if (instrutorIndice === -1) {
        return  res.status(404).json({mensaagem:"instrutor não encontrado"})
       }
        

       // remove o instrutor passando o indice inicial e quantos itens deletar 
       bancodedados.instrutores.splice(instrutorIndice, 1)
    
    return res.status(204).send()
}

export function atualizarEmail (req:Request, res:Response){
    
    // desestrutura o id do parametro passado
    const { id } = req.params

    // desestrutura o nome e email digitado/enviado no body 
    const { email } = req.body

    // busca o id no objeto  e converte para number 
    const instrutor = bancodedados.instrutores.find((item) =>{
        return item.id === Number(id)
       })
       

       // condicional para verificar se o id existe
       if (!instrutor) {
        return  res.status(404).json({mensagem:"instrutor não encontrado"})
       }
    
       // atualiza as propriedade email
       instrutor.email = email
    
    return res.status(204).send()
}