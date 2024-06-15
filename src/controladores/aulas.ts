import { Request, Response } from "express"
import bancodedados from '../bancodedados'



export function cadastrarAula (req:Request, res:Response){
    
    //desestrutura o id do instrutor 
    const { id } =  req.params
    
    //desestrutura o nome da aula do body da resquisição
    const { nome } = req.body

    const instrutor = bancodedados.instrutores.find((item) =>{
        return item.id === Number(id)
       })
    
       if (!instrutor) {
        return  res.status(404).json({mensaagem:"instrutor não encontrado"})
       }

       const novaAula = {
        id:bancodedados.proximoIdentificadorAula++,
        nome
       }


       if(instrutor.aulas){
        instrutor.aulas.push(novaAula)
        return res.status(201).json(novaAula) 
       }

      instrutor.aulas = [novaAula]
      return res.status(201).json(novaAula) 
}

export function excluirAula (req:Request, res:Response){

    //desestrutura e pega o id do instrutor e da aula
    const { id, idAula } = req.params

    const instrutor = bancodedados.instrutores.find((item) =>{
        return item.id === Number(id)
       })
    
       if (!instrutor) {
        return  res.status(404).json({mensaagem:"instrutor não encontrado"})
       }

       if (!instrutor.aulas){
        return  res.status(404).json({mensaagem:"Aula não encontrada"})
       }

       const aulaIndex = instrutor.aulas.findIndex((item) =>{
        return item.id === Number(idAula)
       })

       if (aulaIndex === -1) {
        return  res.status(404).json({mensaagem:"Aula não encontrada para o instrutor selecionado"})
       }

       instrutor.aulas?.splice (aulaIndex, 1)
    
    return res.status(204).send()

}