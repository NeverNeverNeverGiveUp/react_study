import React, { Component } from 'react';
import store from './store'
import {connect} from "react-redux";


class TodoList extends Component {

constructor(props) {
    super(props);
    this.state=store.getState();
}

    
    render() {
        return (
            <div>
                <div><input type="text" value={this.props.inputValue}/> <button>提交</button></div>
                <ul>
                    <li>renzhiwei</li>
                </ul>
            </div>
        );
    }
}

const stateToProps=(state)=>{
    return {
        inputValue:state.inputValue
    }
}

export default connect(stateToProps,null)(TodoList);