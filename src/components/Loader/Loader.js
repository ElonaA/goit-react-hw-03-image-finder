import { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';


export default class Preloader extends Component {
  
  render() {
    return (
      <div className={s.container}>
      <Loader
        className={s.loader}
       type="Grid"
        color="#43a047"
        height={80}
        width={80}
        />
      </div>
    );
  }
}
