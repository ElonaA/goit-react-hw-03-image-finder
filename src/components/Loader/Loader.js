import Loader from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Preloader = () => (
  <Wrapper>
    <Loader type="Grid" color="#43a047" height={100} width={100} />
  </Wrapper>
);

export default Preloader;
