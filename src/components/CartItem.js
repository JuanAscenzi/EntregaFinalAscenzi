import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

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
                </Row>
            </Container>
        </Card>
    )
}
