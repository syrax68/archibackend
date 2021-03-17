import styled from 'styled-components';
import {
    TextField,
} from '@material-ui/core';

export const CustomTextField = styled(TextField)`
    label: {
        color: #8c8c8c;
    },
    label.Mui-focused: {
         color: #8c8c8c;
    },
    .MuiOutlinedInput-root: {
        '&.Mui-focused fieldset': {
            border-color: '#8c8c8c';
        },
    },
`

export const CustomWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const LoginBody = styled.div`
    padding: 60px 68px 40px;
    position: relative;
    max-width: 450px;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    h2 {
        font-size: 32px;
        font-weight: 750;
        color: #fff;
        margin-top: 0;
        margin-bottom: 20px;
    };
    input {
        height: 50px;
        width: 100%;
        font-size: 15px;
        border-radius: 3px;
        color: #fff;
        background: #333;
        border: 1px solid #333;
        padding-left: 15px;
        box-sizing: border-box;
        outline: none;
    }
    button {
        height: 50px;
        color: #fff !important;
        background-color: #3f51b5 !important;
        border-radius: 3px;
        font-weight: 500;
        font-size: 16px;
    }
    .content {
        padding: 0px !important;
    }
`;

export const LoginBox = styled.div`
    margin-bottom: 50px;
`;