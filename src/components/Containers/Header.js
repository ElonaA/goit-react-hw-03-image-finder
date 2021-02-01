import image from "../../img/pixabay.png";
 
import s from "./Containers.module.css";


export default function Header() {
    return (
      <div className={s.title}>
          <img src={image} alt="Logo Pixabay" className={s.logo} width="150" height="150"/>
          <p className={s.text}>Stunning free images & royalty free stock from Pixabay.</p>
          <p className={s.subtitle}>Over 1.8 million+ high quality stock images and videos shared by talented community of Pixabay.</p>  
        </div>
  );
          
}
