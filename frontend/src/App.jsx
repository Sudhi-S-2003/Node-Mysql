import React from 'react';
import { MessageProvider } from './components/MessageProvider';
import Form from './components/Form'; 

function App() {
  return (
    <MessageProvider>
      <Form />
    </MessageProvider>
  );
}

export default App;
