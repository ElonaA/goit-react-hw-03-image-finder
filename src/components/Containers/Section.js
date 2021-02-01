import s from "./Containers.module.css";


export default function Section({children}) {
    return (
      <section className={s.container}>
        {children}
      </section>
  );
          
}
