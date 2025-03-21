import { useState, useEffect } from 'react';
import Button from "./button/Button";
import ImageGallery from "./imageGallery/ImageGallery";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";
import Searchbar from "./searchbar/Searchbar";
import axios from 'axios';

const API_KEY = '47193227-eb3ce661dcb56760e85b83cac';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages((prev) => [...prev, ...res.data.hits]);
      setIsLoading(false);
    };
    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  const handleImageClick = (url) => {
    setLargeImageURL(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {showModal && <Modal largeImageURL={largeImageURL} onClose={closeModal} />}
    </div>
  );
}