import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTest } from '../../ContextComp';

const EditUsers = () => {
    const [newUser, setNewUser] = useState('')
    const {getOneUser,state,editTodo} = useTest()
    let navigate = useNavigate()
    const {id}= useParams()
    let oneUser = state.oneUser
    
    useEffect(()=>{
        getOneUser(id)
    },[])
    
    useEffect(()=>{
        if(oneUser){
            setNewUser({
                name: oneUser.name,
                surname: oneUser.surname,
                phone: oneUser.phone
            })
        }
    },[oneUser])
// console.log(newUser);

    function handleSave(){

        let newObj ={
            name: newUser.name,
            surname: newUser.surname,
            phone: newUser.phone,
        } 
    

        if(!newUser.name.trim()|| !newUser.surname.trim() || !newUser.phone.trim()){
            alert("запоните поля")
            return
    }
    editTodo(id, newUser)
    navigate("/todos")
}

    return (
        <div>
            <input 
            value={newUser.name} 
            onChange={(e)=>setNewUser({...newUser, name: e.target.value})} 
            type="text" 
            placeholder='name'/>

            <input 
            value={newUser.surname}  
            onChange={(e)=>setNewUser({...newUser, surname: e.target.value})}  
            type="text" 
            placeholder='surname'/>

            <input 
            value={newUser.phone} 
             onChange={(e)=>setNewUser({...newUser, phone: e.target.value})}  
             type="text"
              placeholder='phone'/>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditUsers;