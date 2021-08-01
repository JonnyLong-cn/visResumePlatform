// 通过 rc-redux-model 官方文档介绍：在 model 中，action 以及 reducer 我们均可忽略不写
import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import globalModel from './globalModel';
// 这里只需要调用RcReduxModel实例化一下得到最后的reduxModel
const reduxModel = new RcReduxModel([globalModel]);
// 无侵入式的使用Redux，即使你写最原始的reducer也照样支持
const reducerList = combineReducers(reduxModel.reducers);
export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));