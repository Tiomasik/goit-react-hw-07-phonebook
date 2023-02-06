import { RotatingLines } from 'react-loader-spinner'
import { LoaderStyle } from './Loader.styled'


const Loader = () => (
    <LoaderStyle>
        <RotatingLines
        strokeColor="tomato"
        strokeWidth="4"
        animationDuration="0.75"
        width="56"
        visible={true}/>
    </LoaderStyle>)

export default Loader;