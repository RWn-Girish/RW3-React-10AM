import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getOldStorage, setLocalStorageData } from "../Services/localStorageData";
import { useNavigate, useParams } from 'react-router';




const EditProduct = () => {
    const {id} = useParams();
    
    const navigate = useNavigate();
    const initalProduct = {
        id: "",
        title: "",
        desc: "",
        price: "",
        category: "",
        image: "",
        quantity: "",
      };
      let [inputForm, setInputForm] = useState(initalProduct);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setInputForm({
          ...inputForm,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(" updateSubmit", inputForm)
            let data = getOldStorage();
            let updateData = data.map(product => {
                if(product.id == inputForm.id){
                    return inputForm
                }else{
                    return product
                }
            });
            setLocalStorageData(updateData);
            navigate("/");
      }

      useEffect(()=> {
        let data = getOldStorage();
        let singleProduct = data.find(product => product.id == id);
        setInputForm(singleProduct)
      }, []);
  return (
    <>
      <Container className="mt-3">
        <h2>Edit Product</h2>
        <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Title
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    value={inputForm.title}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter Description"
                    name="desc"
                    value={inputForm.desc}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Price
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter price"
                    name="price"
                    value={inputForm.price}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Quantity
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter Quantity"
                    name="quantity"
                    value={inputForm.quantity}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Product Image
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Enter Image URL"
                    name="image"
                    value={inputForm.image}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Category
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    aria-label="Default select example"
                    name="category"
                    onChange={handleChange}
                    
                  >
                    <option value="">Select Category</option>
                    <option value="Fashion" selected= {inputForm.category == "Fashion"}>Fashion</option>
                    <option value="Electronics" selected= {inputForm.category == "Electronics"}>Electronics</option>
                    <option value="Jwellary" selected= {inputForm.category == "Jwellary"}>Jwellary</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <Button type="submit">Edit Product</Button>
                </Col>
              </Form.Group>
            </Form>
      </Container>
    </>
  );
};

export default EditProduct;
