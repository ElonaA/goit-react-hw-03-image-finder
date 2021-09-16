import PropTypes from "prop-types";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { List, Inner} from './ImageGallery.styled';


const ImageGallery = ({ images, onImageClick }) => (
  <Inner>
  <List>
    {images.map(image => {
      return (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      );
    })}
    </List>
    </Inner>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;



// export default class ImageGallery extends Component {
//   static propTypes = {
//   search: PropTypes.string,
//   };

//   state = {
//     gallery: [],
//     page: 1,
//     error: null,

//     showModal: false,
//     modalImage: {
//       src: "",
//       alt: "",
//     },

//     status: Status.IDLE,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const prevSearch = prevProps.search;
//     const nextSearch = this.props.search;

//     if (prevSearch !== nextSearch) {
 
//       await this.setState({
//         gallery: [],
//         page: 1,
//         status: Status.PENDING
//       });

//       this.updatingGallery(nextSearch);
//     }
//   }

//   handleLoadMore = () => {
//     this.updatingGallery(this.props.search);
//     this.setState({ status: Status.PENDING });
//   }

// updatingGallery = nextSearch => {
//     const { page } = this.state;
//     fetchGallery(nextSearch, page)
//       .then(response => {
//         if (response.hits.length === 0) {
//           this.setState({ status: Status.IDLE });
//           return toast.error('Sorry, Pictures for your request not found');
//         }
//         this.setState(
//           prevState => ({
//             gallery: [...prevState.gallery, ...response.hits],
//             status: Status.RESOLVED,
//             page: prevState.page + 1,
//           }));
//         this.scrollToBottom();
//       })
//       .catch(({ message }) =>
//         this.setState({ error: message, status: Status.REJECTED }),
//       )
//   }
  
//   scrollToBottom = () => {
//     if (this.state.page !== 1)
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//   };

//   imageClickHandler = (src, alt) => {
//     this.toggleModal();
//     this.setState({
//       modalImage: { src, alt },
//     });
//   };

//   handlerClickEsc = e => {
//     if (e.key === 'Escape' && this.state.modal.show) this.openModal();
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { gallery, status, error, showModal, modalImage } = this.state;

//     if (status === 'idle') {
//       return <Title />;
//     }

//     if (status === 'pending') {
//       return <Preloader />;
       
//     }

//     if (status === 'rejected') {
//       return <h1>{error}</h1>
//     }

//     if (status === 'resolved') {
//       return (
//         <div className={s.container}>
//         <ul className={s.gallery}>
//           {gallery.map(({ webformatURL, largeImageURL, tags }, index) => (
//             <ImageGalleryItem key={index}
//               webformatURL={webformatURL}
//               largeImageURL={largeImageURL}
//               tags={tags}
//                imageClickHandler={this.imageClickHandler}
//             />
//           ))}
//           </ul>

//           {showModal && (
//           <Modal image={modalImage} toggleModal={this.toggleModal} />
//         )}
//           <Button onClick={this.handleLoadMore} />
          
//           </div>
//       );
//     }
//   }
// }


// ImageGallery.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,
//   ),
//   onDeleteButton: PropTypes.func.isRequired,
// };