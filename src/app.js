import express from 'express';

const app = express();

app.use(express.json())
const produtos = [
    {id: 1, produto: 'Teclado'},
    {id: 2, produto: 'Mouse'}
]

app.get('/', (req, res)=>{
    res.status(200).json('Curso de node mongoDb');
});

app.get('/produtos', (req, res)=>{
    res.status(200).json(produtos)
})

app.get('/produtos/:id', (req, res)=>{
    let index = buscaProduto(req.params.id);
    res.status(200).json(produtos[index]);
})

app.post('/produtos', (req, res)=>{
    produtos.push(req.body);
    res.status(200).json(`Produto cadastrado com sucesso!`);
})

app.put('/produtos/:id', (req, res)=>{
    let index = buscaProduto(req.params.id);
    produtos[index].produto = req.body.produto;
    res.status(200).json(produtos);
})

app.delete('/produtos/:id', (req, res)=>{
    let {id} = req.params;
    let index = buscaProduto(id);
    produtos.splice(index, 1)
    res.status(200).json(`Produto ${id} removido com sucesso!`);
})



function buscaProduto(id){
    return produtos.findIndex(produto => produto.id == id);
}

export default app