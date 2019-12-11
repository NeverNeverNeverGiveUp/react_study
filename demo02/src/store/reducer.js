const defaultState={
    inputValue : '',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]



};  //默认数据
export default (state=defaultState,action)=>{
    console.log("reducer",state,action);
    
    if (action.type==="change-input-value") {
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    } else if(action.type==="addItem"){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push( newState.inputValue);
        newState.inputValue="";
        return newState;
    }
    return state
}
