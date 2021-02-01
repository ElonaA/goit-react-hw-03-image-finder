import image from "../../img/pixabay.png";
 
import s from "./Containers.module.css";


export default function Footer() {
    return (
     <footer>
        <div className={s.containerFooter}>
        <p className={s.inner}>
          <img src={image} alt="Logo Pixabay" className={s.logo} width="70" height="70"/>
        </p>
        <a className={s.link} href="https://pixabay.com/service/license/">Pixabay License</a>
      </div>
    </footer>
  );
          
}
