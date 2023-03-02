// import firebase from 'firebase/app';
// import 'firebase/firestore';
import NarvaroInfo from './Components/NarvaroInfo';
import CollectionForm from './Components/CollectionForm';
import Footer from './Components/Footer';

const firebaseConfig = {
  // Credenciales
}

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <NarvaroInfo />
      <Footer />
    </div>
  );
}

export default App;