import { useState, React } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function CollectionForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const credential = await firebase.auth().createUserWithEmailAndPassword(email, 'password');
        console.log(credential.user.uid);
        setEmail('');
        setError(null);
        } catch (error) {
        setError(error.message);
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
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
