import logo from '../../../img/pixabay.png';

import { Wrapper, Image, Title, Subtitle } from './Header.styled';

export default function Header() {
  return (
    <Wrapper>
      <Image src={logo} alt="Logo Pixabay" width="50" height="50" />
      <Title>Stunning free images & royalty free stock from Pixabay.</Title>
      <Subtitle>
        Over 1.8 million+ high quality stock images and videos shared by
        talented community of Pixabay.
      </Subtitle>
    </Wrapper>
  );
}
