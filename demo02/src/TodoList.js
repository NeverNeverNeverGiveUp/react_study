import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Input,Button,List } from 'antd';
import store from "./store/index";

const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
];
class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state=store.getState();
        this.changeInputValue=this.changeInputValue.bind(this);
        this.clickBtn=this.clickBtn.bind(this);
        this.storeChange=this.storeChange.bind(this);
        store.subscribe(this.storeChange);  //订阅Redux的状态
    }
    render() {
        return (
            <div>
                <div>
                    <Input value={this.state.inputValue} placeholder="请输入内容" style={{width:'200px',marginRight:"10px"}} onChange={this.changeInputValue}></Input>
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{marginTop:"10px",width:"300px"}}>
                    <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                           {item}
                        </List.Item>
                      )}
                    />
                    
                
                </div>
            </div>
        );
    }

    changeInputValue(e){
        console.log(e.target.value);
        const action={
            type:"change-input-value",
            value:e.target.value
        };
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    clickBtn(){
        console.log("点了");
        const action={
            type:"addItem"
        };
        store.dispatch(action)
    }
}

export default TodoList;