import { useState, useEffect } from 'react';
import { db } from '~/config/firebase';

export const useCollection = (collection, setLoading) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    setLoading(true);
    const unsub = db
      .collection(collection)
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
  }, [collection, setLoading]);
  return docs;
};

export default { useCollection };
