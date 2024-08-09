import React from 'react';
import { MessageProvider } from './components/MessageProvider';
import Form from './components/Form'; 
import Table from './components/Table';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
function App() {
  return (
    <MessageProvider>
<BrowserRouter >
<Navbar/>
<Routes>
  <Route path="/" element={<Form />} />
  <Route path="/Data" element={<Table />} />
</Routes>

</BrowserRouter>
    </MessageProvider>
  );
}

export default App;
