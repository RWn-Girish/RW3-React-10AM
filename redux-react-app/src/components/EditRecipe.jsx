import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { addRecipe, getRecipe, updateRecipe } from "../services/actions/recipe.action";
import { useNavigate, useParams } from "react-router";


const EditRecipe = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { recipe, isUpdate } = useSelector(state => state.recipeReducer);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        id: "",
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

        dispatch(updateRecipe(inputData))
    }

    useEffect(() => {
        if(isUpdate){
            navigate("/")
        }
    }, [isUpdate])

    useEffect(() => {
        if(id){
            dispatch(getRecipe(id))
        }
    }, [id]);

    useEffect(() => {
        if(recipe){
            setInputData(recipe)
        }
    }, [recipe])
    return (
        <>
            <Container className="mt-3">
                <h2 className="mb-4">Edit Recipe</h2>
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
                    <Button type="submit">Edit Recipe</Button>
                </Form>
            </Container>
        </>
    )
};

export default EditRecipe;