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
    }
    render() {
        return (
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} style={{width:'200px',marginRight:"10px"}}></Input>
                    <Button type="primary">增加</Button>
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
}

export default TodoList;