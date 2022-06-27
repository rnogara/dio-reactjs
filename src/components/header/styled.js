import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    padding: 4px;
    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 90%;
        height: 44px;
    }
    button {
        background-color: #ccc;
        color: #000;
        padding: 10px;
        margin: 0 auto;
        border-radius: 8px;
        &:hover {
            background-color: transparent;
            color: #ccc;
            border: 1px solid #ccc;
            transform: scale(0.86);
            transition: 300ms;
        }
    }
`;