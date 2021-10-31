import React, { useContext } from "react";

import Container from "../components/container";
import Header from "../components/header";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPicture";
import UserDetails from "../components/userDetails";
import UserNumber from "../components/userNumber";

import { context } from "../context";

export default function Home() {
    const ctx = useContext(context);
    return (
        <Container>
            <Header />
            <UserContainer>
                {ctx.userData?.name ? (
                    <React.Fragment>
                        <UserPicture
                            url={ctx.userData?.avatar_url}
                            alternativeText={ctx.userData?.login}
                        ></UserPicture>
                        <UserDetails
                            name={ctx.userData?.name}
                            login={ctx.userData?.login}
                            bio={ctx.userData?.bio}
                        ></UserDetails>
                        <UserNumber
                            repos={ctx.userData?.public_repos}
                            followers={ctx.userData?.followers}
                            following={ctx.userData?.following}
                        ></UserNumber>
                    </React.Fragment>
                ) : undefined}
            </UserContainer>
        </Container>
    );
}
