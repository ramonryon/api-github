import Container from "../components/container";
import Header from "../components/header";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPicture";
import UserDetails from "../components/userDetails";
import UserNumber from "../components/userNumber";

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture
                    url="https://avatars.githubusercontent.com/u/26188366?v=4"
                    alternativeText="image"
                ></UserPicture>
                <UserDetails
                    name="Ramon Ryon"
                    login="#ramonryon"
                    bio="texto qualquer"
                ></UserDetails>
                <UserNumber></UserNumber>
            </UserContainer>
        </Container>
    );
}
