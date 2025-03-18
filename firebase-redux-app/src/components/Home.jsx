import { useEffect } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipeAsync, getAllRecipesAsync } from "../services/actions/recipe.action";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { recipes, isLoading } = useSelector(state => state.recipeReducer);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelete = (id) => {
        dispatch(deleteRecipeAsync(id))
    }

    useEffect(() => {
        dispatch(getAllRecipesAsync())
    }, [])
    return (
        <>
            <Container className="mt-3">
                <h1>Home Page</h1>
                {isLoading ? <Spinner className="spinner-border text-danger"></Spinner> : <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Recipe Title</th>
                            <th>Instructions</th>
                            <th>Ingredients</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.map((recipe) => (
                                <tr key={recipe.id}>
                                    <td>{recipe.id}</td>
                                    <td>{recipe.title}</td>
                                    <td>{recipe.instructions}</td>
                                    <td>{recipe.ingredients}</td>
                                    <td><img src={recipe.image} height={80} /></td>
                                    <td>{recipe.category}</td>
                                    <td><Button onClick={()=> handleEdit(recipe.id)}>Edit</Button></td>
                                    <td><Button onClick={()=> handleDelete(recipe.id)}>Delete</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>}
            </Container>
        </>
    )
};

export default Home;