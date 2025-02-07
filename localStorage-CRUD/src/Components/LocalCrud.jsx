import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const getOldStorage = () => {
  return JSON.parse(localStorage.getItem('products')) || []
}

const LocalCrud = () => {
  const initalProduct = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
  };
  let [inputForm, setInputForm] = useState(initalProduct);
  const [storage, setStorage] = useState(getOldStorage());
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEdit){
      let updateData = storage.map(item => {
        if(item.id == inputForm.id){
          return inputForm;
        }else{
          return item;
        }
      })
      setStorage(updateData);
      setIsEdit(!isEdit)
    }else{
      let id = Math.floor(Math.random() * 100000);
      let newProduct = { ...inputForm, id: id };
      setStorage([...storage, newProduct]);
    }
    setInputForm(initalProduct);
  };

  const handleDelete = (id) => {
    let updatedStorage = storage.filter((product) => product.id != id);
    setStorage(updatedStorage);
  }
  const handleEdit = (id) => {
    let singleProduct = storage.find(product => product.id == id);
    // console.log(singleProduct)
    setInputForm(singleProduct)
    setIsEdit(!isEdit)
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(storage));
  }, [storage]);
  return (
    <>
      <Container>
        <Row>
          <Col sm="4">
            <h2>{isEdit ? "Edit" :"Add"} Product </h2>
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
                  Category
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    aria-label="Default select example"
                    name="category"
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Jwellary">Jwellary</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <Button type="submit">{isEdit ? "Update" :"Add"} Product</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col sm="8">
            <h2>View Products</h2>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Desciption</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  storage.map((product) => (
                    <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.desc}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td><Button variant="warning" onClick={() => handleEdit(product.id)}><FaEdit /></Button></td>
                  <td><Button variant="danger" onClick={() => handleDelete(product.id)}><FaTrash /></Button></td>
                </tr>
                  ))
                }
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LocalCrud;
