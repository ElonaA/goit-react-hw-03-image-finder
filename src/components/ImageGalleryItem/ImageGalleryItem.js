import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';


function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  imageClickHandler,
}) {
  return (
    <li
      className={s.item} 
      data-large-image={largeImageURL}
      onClick={() => {
        imageClickHandler(largeImageURL, tags);
      }}
    >
     <img className={s.image}  src={webformatURL} alt={tags}/>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  imageClickHandler: PropTypes.func.isRequired,
};

export default ImageGalleryItem;