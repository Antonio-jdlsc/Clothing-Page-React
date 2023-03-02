import { useState, React } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

function CollectionForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = firebase.firestore();
    await db.collection('subscribers').add({ email });
    setEmail('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="submit">Suscribirse</button>
    </form>
  );
}

export default CollectionForm;