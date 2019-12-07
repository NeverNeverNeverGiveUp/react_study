import React, { Component, Fragment } from "react";
import "./style.css";
export class xiaojiejie extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: "", // input中的值
      list: ["服务1", "服务2"] //服务列表
    };
  }

  render() {
    return (
      <Fragment>
        {" "}
        {
          // 哈哈
        }{" "}
        <div>
          <label htmlFor="jspang">加入服务：</label>
          <input
            className="input"
            id="jspang"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />{" "}
          <button onClick={this.addList.bind(this)}> 增加服务 </button>{" "}
        </div>{" "}
        <ul>
          {" "}
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index + Math.random()}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={this.deleteItem.bind(this, index)}
              ></li>
            );
          })}{" "}
        </ul>{" "}
      </Fragment>
    );
  }

  inputChange(e) {
    console.log(e.target.value, "哈哈");
    this.setState({
      inputValue: e.target.value
    });
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    });
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
