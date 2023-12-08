import { Carro } from "./dados.js";
import express from 'express'
import cors from 'cors'

let carros = [

    new Carro (1, 'corsa', 'bmw', 'branco', '2000'),
    new Carro (2, 'fusca', 'ford', 'preto', '2010'),
    new Carro (3, 'astra', 'honda', 'prata', '2020')


]
const app = express();

//Essa função é responsável por analisar o corpo das solicitações HTTP 
//que têm um tipo de conteúdo (Content-Type) definido como application/json. 
//Ela pega os dados JSON enviados na solicitação e os converte em um objeto JS.
app.use(express.json());

//  Habilita o protocolo CORS para a troca front-back
//  npm i cors
app.use(cors());

//Forma comum de codificar dados enviados em solicitações HTTP.
//Usado quando os dados são enviados de um formulário HTML para uma API. 
//Nesse formato, os dados são codificados como pares chave-valor, semelhantes aos parâmetros em uma URL.
app.use(express.urlencoded({ extended : true }));

app.get("/produtos",(req, res)=>{
    return res.status(200).json(listaProdutos)
})

// Rota POST para login
app.post('/rota', (req, res) => {
    const { email, senha } = req.body;
  
    console.log(req.bod);

    // Verificar se o e-mail e senha são correspondentes

    if (email === 'alunoSesi' && senha === '1234') {
      return res.status(200).json({ message: 'Login realizado com sucesso!' });
    } else {
      return res.status(401).json({ message: 'Usuário ou senha incorretos!' });
    }
    
  });
  
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });

