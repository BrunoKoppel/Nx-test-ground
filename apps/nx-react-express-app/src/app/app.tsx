import React, { useEffect, useState } from 'react';
import { Post } from '@nx-react-express/api-interfaces';
import ButtonCounter from './components/ButtonCounter'
import InputText from './components/InputText'

import 'bootstrap/dist/css/bootstrap.min.css';
export const App = () => {
  const [pagePost, setPost] = useState<Post>({ title: '', content: {text1: '', text2: '', text3: ''}, date: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setPost);
  }, []);

  return (
    <>
      <div className="border" style={{ alignSelf: 'center', textAlign: 'center', width: 'fit-content'}}>
        <h1>Welcome to Bruno Experience</h1>
        <div>
          <h1>{pagePost.title} {pagePost.date}</h1>
          <p>{pagePost.content.text1}</p>
          <p>{pagePost.content.text2}</p>
          <p>{pagePost.content.text3}</p>
        </div>
        <div>
          <ButtonCounter/>
        </div>
        <div>
          <InputText/>
        </div>
      </div>
      
    </>
  );
};

export default App;
