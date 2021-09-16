import logo from '../../../img/pixabay.png';

import { Wrapper, Image, Link, Inner } from './Foter.styled';

export default function Footer() {
  return (
    <footer>
      <Wrapper>
        <Inner>
          <Image src={logo} alt="Logo Pixabay" width="30" height="30" />
        </Inner>
        <Link href="https://pixabay.com/service/license/">Pixabay License</Link>
      </Wrapper>
    </footer>
  );
}
