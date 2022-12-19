import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

export const contextAdd = createContext()
export const useTest=(e) =>{
   return useContext(contextAdd)
} 

let INIT_STATE = {
    contacts:[],
    oneUser: null,
    
    
}

const ContextComp = ({children}) => {
    
    let API = `http://localhost:3000/posts`
    const reducer =(state=INIT_STATE,action)=>{
        switch (action.type) {
            case 'contacts':
                return {...state, contacts:action.payload}
            case 'oneUser':
                return {...state, oneUser:action.payload}
                        
            default:
                break;
        }
    }

    
    
    async function postTodos(user){
        await axios.post(API,user)
        
    } 
    
    const getTodos = async()=>{
        let {data} = await axios(API)
        dispatch({
            type: 'contacts',
            payload: data,
        })
    }

    const deleteTodos = async(id)=>{
        try {
            
            let {data} = await axios.delete(`${API}/${id}`)
            getTodos()
        } catch (error) {
            console.log(error);
        }
    }

    const getOneUser = async(id)=>{
        try {
            let {data}= await axios(`${API}/${id}`)
            dispatch({
                type: 'oneUser',
                payload: data
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const editTodo = async(id, newUser)=>{
        try {
            await axios.patch(`${API}/${id}`, newUser)
            getTodos()
        } catch (error) {
            console.log(error);
        }
    }
    
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const values = {
        postTodos,
        getTodos,
        state,
        deleteTodos,
        getOneUser,
        editTodo,
    }




    return (
        <div>
            <contextAdd.Provider value = {values}>
                {children}
            </contextAdd.Provider>
        </div>
    );
};

export default ContextComp;