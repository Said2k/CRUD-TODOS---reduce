import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTest } from '../../ContextComp';

const UsersList = () => {
const navigate = useNavigate()

    const {state,getTodos,deleteTodos} = useTest()
    useEffect(()=>{
        getTodos()
    },[])

    console.log(state.contacts);
    
    return (
        <div>

        {state.contacts.map((item)=>(
            <ul key={item.id}>
                <li>{item.name}</li>
                <li>{item.surname}</li>
                <li>{item.phone}</li>
                <button onClick={()=>navigate(`/edit-user/${item.id}`)}>Edit</button>
                <button  onClick={()=>deleteTodos(item.id)}>Delete</button>
            </ul>
                ))}
                <button onClick={()=>navigate('/add-todos')}>Назад</button>
        

        </div>
    );
};

export default UsersList;