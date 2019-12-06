import React, { Component,Fragment } from 'react';
 
export class xiaojiejie extends Component {
   constructor(props, context) {
       super(props, context);
       this.state={
        inputValue:'input中的值' , // input中的值
        list:[]    //服务列表
       }
   }
   

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button>增加服务</button>
                </div>
                <ul>
                    <li>服务1</li>
                    <li>服务2</li>
                    <li>服务3</li>
                </ul>
            </Fragment>
        );
    }

    inputChange(e){
        console.log(e.target.value,"哈哈");
        this.setState({
            inputValue:e.target.value
        })
    }
}

export default xiaojiejie;
