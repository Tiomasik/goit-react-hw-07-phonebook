import styled from 'styled-components';
import { BsFillEmojiSmileFill, BsFillTelephoneFill } from "react-icons/bs";

export const Item = styled.p `
    display: flex;
    align-items: center;
    gap: 10px;
`
export const IconSmile = styled(BsFillEmojiSmileFill) `
    color: tomato;
`

export const IconPhone = styled(BsFillTelephoneFill) `
    color: tomato;
`