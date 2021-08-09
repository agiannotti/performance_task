import React, { FC } from 'react';
import Main from './ui/layout/Main';
import Navigation from './ui/layout/Navigation';

const App: FC = () => {
  return (
    <div className='App container'>
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
