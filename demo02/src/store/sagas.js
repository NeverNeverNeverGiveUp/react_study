import { takeEvery,put  } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from "./actionCreators"
import axios from "axios";

function* mySaga() {
      //等待捕获action
      yield takeEvery(GET_MY_LIST, getList)
};

function* getList(params) {
    console.log('jspang')
    const res = yield axios.get('https://mock.yonyoucloud.com/mock/3316/react/react-list')
    debugger
    const action = getListAction(res.data.data)
    yield put(action)
}
export default mySaga;