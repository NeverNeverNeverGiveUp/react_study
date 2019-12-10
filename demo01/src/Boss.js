import React, { Component,Fragment } from 'react';
// import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group'


class Boss extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { 
            isShow:true
         }
        this.toToggle=this.toToggle.bind(this);
    }
    

    
    render() {
        return (
            <Fragment>
                <CSSTransition 
                    in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复
                    unmountOnExit
                >
                    <div>BOSS级人物-孙悟空</div>
                </CSSTransition>
                <div><button onClick={this.toToggle}>召唤boss</button></div>
            </Fragment>
        );
    }

    toToggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}

// 放默认值的地方
// Boss.propTypes = {
    
// };


export default Boss;



