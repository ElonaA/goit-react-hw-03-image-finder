import PropTypes from "prop-types";
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({image, onImageClick}) {
  return (
    <GalleryItem
      data-large-image={image.largeImageURL}
      onClick={() => {onImageClick(image.largeImageURL)
      }}
    >
     <Image src={image.webformatURL} alt={image.tags}/>
    </GalleryItem>
  );
}



ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
};

