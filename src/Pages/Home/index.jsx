import { Redirect, useHistory } from "react-router-dom";
import Button from "../../Components/Button";
import { Container, Content } from "./styles";
function Home({ authenticated, setAuthenticated }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  if (authenticated) {
    return <Redirect to="/mainPage" />;
  }

  return (
    <Container>
      <Content>
        <h1>
          ID<span>\ /</span>DEV
        </h1>
        <span>Este local deveria conter uma frase inspiradora</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")}>
            Cadastrar-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
