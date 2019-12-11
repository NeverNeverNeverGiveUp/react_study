import {CHANGE_INPUT,ADD_ITEM,DEL_ITEM} from './actionTypes';
const defaultState={
    inputValue : '',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]



};  //默认数据


export default (state=defaultState,action)=>{
    console.log("reducer",state,action);
    
    if (action.type===CHANGE_INPUT) {
        let newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    } else if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.push( newState.inputValue);
        newState.inputValue="";
        return newState;
    }else if (action.type===DEL_ITEM) {
        let newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1)
        return newState;
    }
    return state
}
