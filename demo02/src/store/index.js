import {createStore} from 'redux';
import reducer from './reducer';
const store=createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   // 创建数据存储仓库,这句话的意思就是看window里有没有这个方法，有则执行这个方法（不要被大写的方法名吓到）。
    );

export default store;