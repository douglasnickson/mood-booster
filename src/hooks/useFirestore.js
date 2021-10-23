import { useState, useEffect } from 'react';
import { db } from '~/config/firebase';

import { useAuth } from '~/contexts/AuthContext';

export const useCollection = (collection, setLoading) => {
  const [docs, setDocs] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    setLoading(true);
    const unsub = db
      .collection(collection)
      .where('uid', '==', currentUser.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setDocs(documents);
        setLoading(false);
      });
    return () => unsub();
  }, [collection, setLoading, currentUser]);
  return docs;
};

export default { useCollection };
