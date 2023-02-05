import styled from 'styled-components';
import { Form } from 'formik';

export const StyleForm = styled(Form) `
    margin-left: auto;
    margin-right: auto;
    width:400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px 0;
    margin-bottom: 20px;
    background-color: #f0f0f7;
    box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2);
                

    label{
        font-weight: 500;
    }

    input{
        width: 300px;
        padding: 3px;
        margin-bottom:20px;
        font-size: 20px;
        border-radius: 5px;
    }

    button{
        width: 100px;
        padding: 5px 0;
        cursor: pointer;
        border: 1px solid blue;
        background-color: transparent;
        border-radius: 5px;

        :hover, :focus {
            background-color: blue;
            color: white;
        }
    }

    div {
        color: red;
        margin-bottom: 20px;
        width: 360px;
        text-align: center;
    }
`
        
     