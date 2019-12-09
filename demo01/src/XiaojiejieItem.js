import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    render() {
        return (
            <div onClick={this.handleClick} >
                {this.props.content}
                {this.props.fileName}

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

// 设置参数类型和是否必填
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func,
    fileName:PropTypes.string.isRequired
}
// 设置参数默认值
XiaojiejieItem.defaultProps={
    fileName:"美国往事" 
}

export default XiaojiejieItem;
