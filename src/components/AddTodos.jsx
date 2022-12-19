import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTest } from '../ContextComp';

const AddTodos = () => {
    const {postTodos} = useTest()
    // console.log(props);
    let API = `http://localhost:3000/posts`
    
    const [user, setUser] = useState({
        name: '',
        surname: '',
        phone: ''
    })
    let navigate= useNavigate()



      
    //    console.log(user);
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '500px',margin: '50px 0 0 100px'}}>
            <input style={{ height: '25px', padding: '5px' }}  value={user.name} type="text" onChange={(e)=>setUser({...user, name: e.target.value})}  placeholder='name'/>
            <input style={{ height: '25px', padding: '5px' }} value={user.surname} type="text"  onChange={(e)=>setUser({...user, surname: e.target.value})} placeholder='Surname'/>
            <input style={{ height: '25px', padding: '5px' }} value={user.phone} type="text"  onChange={(e)=>setUser({...user, phone: e.target.value})} placeholder='Age'/>
            <button onClick={()=>postTodos(user)}>Add</button>
            <button onClick={()=>navigate('/todos')}>Пользователи</button>

           
        </div>
    );
};

export default AddTodos;