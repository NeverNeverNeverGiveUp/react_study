import React, { Component } from 'react';

export class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    render() {
        return (
            <div onClick={this.handleClick} >
                {this.props.content}
            </div>
        );
    }

    handleClick(){
        // 子组件修改父组件的数据，核心为传个函数，函数内部 执行
        console.log("子组件事件触发了");
        console.log(this.props.index);
        this.props.deleteItem(this.props.index);
        
    }
}

export default XiaojiejieItem;
