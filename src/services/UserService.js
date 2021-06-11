import firebase from 'firebase/app';
import { db, credentials } from '~/config/firebase';

const ref = db.collection('users');

const createNewConnection = () => {
  let secondaryConnection;
  try {
    secondaryConnection = firebase.initializeApp(credentials, 'authentication');
  } catch {
    secondaryConnection = firebase.app('authentication');
  }
  return secondaryConnection;
};

export function createProfile(user, setError, setSuccess, setLoading) {
  try {
    const timestamp = firebase.firestore.Timestamp.fromDate(new Date());
    return ref
      .add({
        uid: user.uid,
        name: user.name,
        email: user.email,
        createdAt: new Date().toISOString(),
        updatedAt: '',
        timestamp,
      })
      .then(() => {
        setLoading(false);
        return setSuccess('Usuário criado com sucesso.');
      })
      .catch((err) => {
        setLoading(false);
        return setError(
          `Ocorreu um erro ao criar o perfil do usuário. ${err.code}`
        );
      });
  } catch (err) {
    return setError(
      `Ocorreu um erro ao criar o perfil do usuário. ${err.code}`
    );
  }
}

export function createUser(user, setError, setSuccess, setLoading, signUp) {
  try {
    const secondaryConnection = createNewConnection();
    return secondaryConnection
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
        const userWithUid = { uid: res.user.uid, ...user };
        return createProfile(userWithUid, setError, setSuccess, setLoading);
      })
      .catch((err) => {
        setLoading(false);
        return setError(`Ocorreu um erro ao criar o usuário. ${err.code}`);
      });
  } catch (err) {
    setLoading(false);
    return setError(`Ocorreu um erro ao criar o usuário. ${err.code}`);
  }
}
