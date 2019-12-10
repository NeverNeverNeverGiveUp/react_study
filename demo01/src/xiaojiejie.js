import React, { Component, Fragment } from "react";
import "./style.css";
import axios from 'axios';

import XiaojiejieItem from './XiaojiejieItem';
export class xiaojiejie extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: "", // input中的值
      list: [] ,//服务列表
      fileName:"《爱有来生》"
    };
  }
  UNSAFE_componentWillMount(){
    
    // console.log('componentWillMount----组件将要挂载到页面的时刻')
  }
  render() {
    console.log('【父组件】3-render---组件挂载中.......')
    return (
      <Fragment>
        
        {
          // 哈哈
        }
        <div>
          <label htmlFor="jspang">加入服务：</label>
          <input
            className="input"
            id="jspang"
            ref={(input)=>{this.input=input}}
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        <ul ref={ul=>this.ul=ul}>
          
          {this.state.list.map((item, index) => {
            return (
            

             <Fragment key={index + Math.random()}>
              {/* <li
                key={index + Math.random()}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={this.deleteItem.bind(this, index)}
              ></li>
             */}
             <XiaojiejieItem content={item} index={index} deleteItem={this.deleteItem.bind(this)} fileName={this.state.fileName}/>
             </Fragment>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  
  componentDidMount(){
    // console.log('componentDidMount----组件挂载完成的时刻执行')
    // 请求数据的阶段：
    axios.get("http://yapi.demo.qunar.com/mock/48192/api/index").then(res=>{
      console.log('axios 获取数据成功:',res);
      this.setState({
        list:["大秦帝国","走向共和","人间正道是沧桑"]
      })

    }).catch(err=>{
      console.log('axios 获取数据失败:',err);
      
    })
  }
  // shouldComponentUpdate(){
  //   // console.log('1-shouldComponentUpdate---组件发生改变前执行')
  //   // 它要求返回一个布尔类型的结果，必须有返回值，这里就直接返回一个true了（真实开发中，这个是有大作用的）。
  //   return true
  // }
  getDerivedFromProps(){
    
  }
  //shouldComponentUpdate返回true才会被执行。
  UNSAFE_componentWillUpdate(){
    // console.log('2-componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
  }

  componentDidUpdate(){
    // console.log('4-componentDidUpdate----组件更新之后执行')
  }

  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps---父组件触发')
  // }



  inputChange(e) {
    // console.log("input改变的时候",e.target.value );
    this.setState({
      inputValue: this.input.value
    });
  }
  addList() {
    let list=[...this.state.list];
    list[0]=this.state.inputValue;
    this.setState({
      list: list
    },()=>{
      console.log(this.ul.querySelectorAll("div").length);
    });

    // this.state.fileName
    // this.setState({
    //   fileName:"《爱有来生》"+Math.random()
    // })

  }
  deleteItem(index) {
    console.log(index);
    let list = [...this.state.list];
    // let list =JSON.parse(JSON.stringify(this.state.list));
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default xiaojiejie;
