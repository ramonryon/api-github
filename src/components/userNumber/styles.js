import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NumberContainer = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 20px;
        text-align: center;
        color: #444;
    }

    h2 {
        font-size: 12px;
        text-align: center;
        color: #777;
    }

    &:hover {
        cursor: pointer;
        background: rgb(0, 0, 0, 0.03);
        transition: 0.4 ease;
        border-radius: 10px;
    }
`;