import { initializeApp} from "firebase/app";
import 'firebase/firestore';
import NarvaroInfo from './Components/NarvaroInfo';
import CollectionForm from './Components/CollectionForm';
import Footer from './Components/Footer';
import ImageCard from './Components/ImageCards'
import Header from './Components/Header'

const firebaseConfig = {
  apiKey: "AIzaSyCvgvZpx_xqLOJl220s5TY5IzH2fllhGGQ",
  authDomain: "crud-app-firebase-cc8bd.firebaseapp.com",
  projectId: "crud-app-firebase-cc8bd",
  appId: "1:965541733498:web:55a1c4a9d1810a161f47c3",
  collection: "vOXoZguRLnZSqi1demK6"
}

initializeApp([firebaseConfig])

function App() {
  const images = [
    'https://via.placeholder.com/1200x600/000000/FFFFFF/?text=Imagen+1',
    'https://via.placeholder.com/1200x600/000000/FFFFFF/?text=Imagen+2',
  ]

  return (
    <div>
      < Header />
      <NarvaroInfo />
      <CollectionForm />
      <Footer />
      <ImageCard images = {images}/>
      
    </div>
  );
}

export default App;