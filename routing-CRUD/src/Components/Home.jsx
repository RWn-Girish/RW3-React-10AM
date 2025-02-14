import { useState } from "react";
import { getOldStorage } from "../Services/localStorageData";
import { Button, Card, Container, Table } from "react-bootstrap";

const Home = () => {
    const [products, setProducts] = useState(getOldStorage());
    return (
        <>
            <Container>
                {products.map((product) => (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <Button variant="primary">View</Button>
                      <Button variant="secondary">Edit</Button>
                      <Button variant="danger">Delete</Button>
                    </Card.Body>
                  </Card>
                ))}
            </Container>
        </>
    )
};

export default Home;