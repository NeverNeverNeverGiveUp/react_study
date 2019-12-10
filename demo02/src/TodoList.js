import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Input } from 'antd'

class TodoList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Input placeholder="renzhiwei" style={{width:'200px'}}></Input>
            </div>
        );
    }
}

export default TodoList;