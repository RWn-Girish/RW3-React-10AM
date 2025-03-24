import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logOutAsync } from "../services/actions/auth.action";

const Header = () => {
    const {user} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOutAsync())
    }
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Zommatto</Navbar.Brand>
                    <Navbar.Text><Link to={"/add"}>Add Recipe</Link></Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {user ? <Button onClick={handleLogout}>LogOut</Button> : <Link to={"/signin"}>SignIn</Link>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;