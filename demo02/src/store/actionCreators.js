import {CHANGE_INPUT,ADD_ITEM,DEL_ITEM,GET_LIST} from './actionTypes';
import axios from "axios";

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction =(value)=>({
    type:ADD_ITEM,
    value
})

export const deleteItemAction =(index)=>({
    type:DEL_ITEM,
    index
})

export const getListAction   =(data)=>({
    type:GET_LIST,
    data
})

export const getTodoList=(callback)=>{
    axios.get("https://mock.yonyoucloud.com/mock/3316/react/react-list").then(res=>{
        console.log("点了",res);
        const data=res.data.data;
        callback(data);
    })
}
