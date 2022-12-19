import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddTodos from './components/AddTodos';
import EditUsers from './components/EditTodos/EditUsers';
import UsersList from './components/Users/UsersList';
import ContextComp from './ContextComp';

function App() {
  return (
    <div>
      <ContextComp>
        <BrowserRouter>
        <Routes>
          <Route path='add-todos' element={<AddTodos/>}/>
          <Route path='todos' element={<UsersList/>}/>
          <Route path='edit-user/:id' element={<EditUsers/>}/>
    </Routes>
    </BrowserRouter>
      </ContextComp>
     
    </div>
  );
}

export default App;
