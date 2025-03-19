import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { addRecipe, AddRecipeAsync } from "../services/actions/recipe.action";
import { useNavigate } from "react-router";


const AddRecipe = () => {
    const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.recipeReducer);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        title: "",
        instructions: "",
        ingredients: "",
        image: "",
        category: ""
    })

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputData);
        // let id = Math.floor(Math.random() * 1000000).toString()
        dispatch(AddRecipeAsync({ ...inputData }))
    }

    useEffect(() => {
        if(isCreated){
            navigate("/")
        }
    }, [isCreated]);
    return (
        <>
            <Container className="mt-3">
                <h2 className="mb-4">Add Recipe</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" name="title" value={inputData.title} onChange={handleChanged} placeholder="Enter Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Instructions
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" name="instructions" value={inputData.instructions} onChange={handleChanged} placeholder="Enter Instructions" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Ingredients
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" name="ingredients" value={inputData.ingredients} onChange={handleChanged} placeholder="Enter Ingredients" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Recipe Image
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" name="image" value={inputData.image} onChange={handleChanged} placeholder="Enter Image URL" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="4">
                            <Form.Select aria-label="Default select example" name="category" onChange={handleChanged}>
                                <option>Select One Menu</option>
                                <option value="Gujarati">Gujarati</option>
                                <option value="Punjabi">Punjabi</option>
                                <option value="Chinese">Chinese</option>
                                <option value="South Indian">South Indian</option>
                                <option value="Maxican">Maxican</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Button type="submit">Add Recipe</Button>
                </Form>
            </Container>
        </>
    )
};

export default AddRecipe;