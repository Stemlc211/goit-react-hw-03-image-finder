import { Circles } from 'react-loader-spinner';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <Circles color="#3f51b5" height={80} width={80} />
    </div>
  );
}
