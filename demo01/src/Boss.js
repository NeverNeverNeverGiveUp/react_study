import React, { Component,Fragment } from 'react';
// import PropTypes from 'prop-types';


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
                <div className={this.state.isShow?'show':'hide'}>boss人物-孙悟空</div>
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



