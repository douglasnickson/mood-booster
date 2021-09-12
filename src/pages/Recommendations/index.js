/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Recommendations() {
  const location = useLocation();
  const { data } = location.state;

  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(data);
  }, [data]);

  return (
    <>
      {content.length > 0 &&
        content.map((item) => (
          <div key={item.session}>
            <h1>{item.session}</h1>
            {item.data &&
              item.data.map((session) => (
                <div>
                  <img src={session.image} alt={session.title} />
                  <h2>{session.title}</h2>
                  <p>{session.description}</p>
                </div>
              ))}
          </div>
        ))}
    </>
  );
}
