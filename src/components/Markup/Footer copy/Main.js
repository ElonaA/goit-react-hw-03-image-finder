import img from '../../../img/Search-pana.svg';

import { Wrapper, Image, Title, Inner } from './Main.styled';

export default function Main() {
  return (
    <Wrapper>
      <Inner>
        <Title>The gallery is empty. Use search field.</Title>
        <Image src={img} alt="Search image" width="550" />
      </Inner>
    </Wrapper>
  );
}
