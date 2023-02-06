import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../body/style.css';

export default function Body() {
    return (
        <>
       
            
            <Card style={{background: 'black'}}>
            <div className="lista-itens">
             <Card.Img className='foto-item' variant="top" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom2.jpg?ts=1657368380&ims=326x" />
                 <Card.Body >
                     <Card.Text className='descricao-item'>
                      Tênis de Caminhada Leve
                      Confortável
                     </Card.Text>
                     <Card.Title className='preco-item'>R$ 179,90</Card.Title>

                    <Button className='qtde-item' variant="primary">1</Button>
                    <Button className='adiciona-item' variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
                </div>

                <div className="lista-itens">
                <Card.Img className='foto-item' variant="top" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom2.jpg?ts=1657368380&ims=326x" />
                 <Card.Body>
                     <Card.Text className='descricao-item'>
                      Tênis de Caminhada Leve
                      Confortável
                     </Card.Text>
                     <Card.Title className='preco-item'>R$ 179,90</Card.Title>

                    <Button className='qtde-item' variant="primary">1</Button>
                    <Button className='adiciona-item' variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
                </div>

                <div className="lista-itens">
                <Card.Img className='foto-item' variant="top" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom2.jpg?ts=1657368380&ims=326x" />
                 <Card.Body>
                     <Card.Text className='descricao-item'>
                      Tênis de Caminhada Leve
                      Confortável
                     </Card.Text>
                     <Card.Title className='preco-item'>R$ 179,90</Card.Title>

                    <Button className='qtde-item' variant="primary">1</Button>
                    <Button className='adiciona-item' variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
                </div>

                <div className="lista-itens">
                <Card.Img className='foto-item' variant="top" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom2.jpg?ts=1657368380&ims=326x" />
                 <Card.Body>
                     <Card.Text className='descricao-item'>
                      Tênis de Caminhada Leve
                      Confortável
                     </Card.Text>
                     <Card.Title className='preco-item'>R$ 179,90</Card.Title>

                    <Button className='qtde-item' variant="primary">1</Button>
                    <Button className='adiciona-item' variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
                </div>

                <div className="lista-itens">
                <Card.Img className='foto-item' variant="top" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom2.jpg?ts=1657368380&ims=326x" />
                 <Card.Body>
                     <Card.Text className='descricao-item'>
                      Tênis de Caminhada Leve
                      Confortável
                     </Card.Text>
                     <Card.Title className='preco-item'>R$ 179,90</Card.Title>

                    <Button className='qtde-item' variant="primary">1</Button>
                    <Button className='adiciona-item' variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
                </div>

                <div className="lista-itens">
                <Card.Img className='foto-item' variant="top" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom2.jpg?ts=1657368380&ims=326x" />
                 <Card.Body>
                     <Card.Text className='descricao-item'>
                      Tênis de Caminhada Leve
                      Confortável
                     </Card.Text>
                     <Card.Title className='preco-item'>R$ 179,90</Card.Title>

                    <Button className='qtde-item' variant="primary">1</Button>
                    <Button className='adiciona-item' variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
                </div>
                </Card>
               
   
    
        </>
        );
}