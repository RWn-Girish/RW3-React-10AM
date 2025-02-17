import { useState } from "react";
import { getOldStorage, setLocalStorageData } from "../Services/localStorageData";
import { Button, Card, Container, Table } from "react-bootstrap";
import {FaEye, FaPenToSquare, FaTrash} from 'react-icons/fa6'
import { useNavigate } from "react-router";


const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(getOldStorage());

    const handleView = (id) => {
      navigate(`/view/${id}`);
    }
    const handleEdit = (id) => {
      navigate(`/edit/${id}`);
    }

    const handleDelete = (id) => {
      let updatedData = products.filter((product) => product.id != id);
      setProducts(updatedData);
      setLocalStorageData(updatedData)
    }
    return (
        <>
            <Container className="d-flex gap-4 mt-4" >
                {products.map((product) => (
                    <Card key={product.id}  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {product.desc}
                      </Card.Text>
                      <Button onClick={() => handleView(product.id)} variant="primary">
                        <FaEye />
                        </Button> &nbsp;
                      <Button onClick={() => handleEdit(product.id)} variant="secondary">
                        <FaPenToSquare />
                        </Button> &nbsp;
                      <Button onClick={()=> handleDelete(product.id)} variant="danger">
                        <FaTrash />
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
            </Container>
        </>
    )
};

export default Home;