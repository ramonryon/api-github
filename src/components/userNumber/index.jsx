import { Container, NumberContainer } from "./styles";

const UserNumber = (props) => (
    <Container>
        <NumberContainer>
            <h1>13</h1>
            <h2>Repositórios</h2>
        </NumberContainer>
        <NumberContainer>
            <h1>23</h1>
            <h2>Seguindo</h2>
        </NumberContainer>
        <NumberContainer>
            <h1>54</h1>
            <h2>Seguidores</h2>
        </NumberContainer>
    </Container>
);

export default UserNumber;
