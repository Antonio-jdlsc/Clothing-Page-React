import firebase from 'firebase/app';
import 'firebase/firestore';
import NarvaroInfo from './Components/NarvaroInfo';
import CollectionForm from './Components/CollectionForm';
import Footer from './Components/Footer';
import ImageCard from './Components/ImageCards'

const firebaseConfig = {
  // Credenciales
}

firebase.initializeApp(firebaseConfig);

function App() {
  const images = [
    'https://via.placeholder.com/1200x600/000000/FFFFFF/?text=Imagen+1',
    'https://via.placeholder.com/1200x600/000000/FFFFFF/?text=Imagen+2',
  ]
  return (
    <div>
      <NarvaroInfo />
      <CollectionForm />
      <Footer />
      <ImageCard images = {images}/>
      
    </div>
  );
}

export default App;