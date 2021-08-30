import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    border-radius: 10px;
    border: 2px solid black;
    padding: 20px;
    background-color: #fffffa;
    text-align: center;

    p {
        font-size: 1rem;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    :hover {
        opacity: 0.8;
    }
    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
            correct
                ? "linear-gradient(90deg, #56ffa4, #59bc86)"
                : !correct && userClicked
                ? "linear-gradient(90deg, #ff5656, #c16868)"
                : "linear-gradient(90deg, #f5f7d5, #e9ee93)"};
        border: 2px solid #5f5f5d;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`;
