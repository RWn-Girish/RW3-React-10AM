import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Home = () => {
    const { recipes } = useSelector(state => state.recipeReducer)
    console.log("Recipes: ", recipes);
    return (
        <>
            <Container className="mt-3">
                <h1>Home Page</h1>
            </Container>
        </>
    )
};

export default Home;