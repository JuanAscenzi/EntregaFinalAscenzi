import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CartItem = ({ product, deleteItem }) => {
    return (
        <Card body>
            <Container>
                <Row>
                    <Col>
                      {product.name}
                    </Col>
                    <Col>
                      Cantidad: {product.quantity}
                    </Col>
                    <Col>
                      $: {product.price} 
                    </Col>
                    <Col>
                    <Button variant='danger' onClick={() => deleteItem(product.id)}>Borrar</Button>
                    </Col>
                    <Link className='btn btn-dark' to='/checkout'>Terminar su compra</Link>
                </Row>
            </Container>
        </Card>
    )
}
