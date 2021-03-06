import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    
    render() {
        console.log('【子组件的render】child-render')
        return (
            <div onClick={this.handleClick} >
                {this.props.content}
                {this.props.fileName}

            </div>
        );
    }
    // static getDerivedStateFromProps(props, state){
    //     // componentWillReceiveProps不触发的原因：
    //     // 原因是因为在react中，不是根据数据内容变化来判断是否变化，而是根据数据的引用是否变化。而这里this.props.images是一个数组，数组内容发生变化，可是引用没变，所以react认为它没变
    //     console.log('【子组件触发】componentWillReceiveProps---子组件触发')

    //     return true
    // }
    handleClick(){
        // 子组件修改父组件的数据，核心为传个函数，函数内部 执行
        // console.log("子组件事件触发了");
        // console.log(this.props.index);
        this.props.deleteItem(this.props.index);
        
    }
    // UNSAFE_componentWillMount(){
    
    //     // console.log('【子组件】componentWillMount----组件将要挂载到页面的时刻')
    //   }
    componentDidMount(){
    // console.log('【子组件】componentDidMount----组件挂载完成的时刻执行')
    }
    shouldComponentUpdate(nextProps, nextState){
    console.log('【子组件】1-shouldComponentUpdate---组件发生改变前执行')
        console.log(nextProps.content!==this.props.content);
        
       if (nextProps.content!==this.props.content) {
           return true
       } else {
          return false 
       }
    }
    //当组件从页面中删除的时候执行
    componentWillUnmount(){
        // console.log('child - componentWillUnmount',"当组件从页面中删除的时候执行")
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
