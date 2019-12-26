import React, { Component } from 'react';
import store from "./store/index";
// import {CHANGE_INPUT,ADD_ITEM,DEL_ITEM} from './store/actionTypes';
import {changeInputAction,addItemAction,deleteItemAction,getTodoList,getMyListAction  } from './store/actionCreators';
import TodoListUI from "./TodoListUI";
// import axios from "axios";

class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state=store.getState();  //取出store中的数据到当前组件中
        this.changeInputValue=this.changeInputValue.bind(this);
        this.clickBtn=this.clickBtn.bind(this);
        this.delItem=this.delItem.bind(this);

        this.storeChange=this.storeChange.bind(this);
        store.subscribe(this.storeChange);  //订阅Redux的状态
    }
    render() {
        return (
            <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            delItem={this.delItem}
            />
        );
    }

    changeInputValue(e){
        console.log(e.target.value);
        const action=changeInputAction(e.target.value);
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    clickBtn(){
        // console.log("点了");
        // const action={
        //     type:ADD_ITEM
        // };
        const action=addItemAction();

        store.dispatch(action)
    }

    delItem(n){
        // console.log('====================================');
        // console.log(n);
        // console.log('====================================');
        // const action={
        //     type:DEL_ITEM,
        //     index:n
        // };
        const action=deleteItemAction(n);
        store.dispatch(action)

    }

    componentDidMount(){
        // const action=getTodoList();
        // store.dispatch(action);

        const action=getMyListAction();
        store.dispatch(action);
        console.log("action",action);


    }
}

export default TodoList;