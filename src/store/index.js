import { createStore , combineReducers} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {flagReducer} from './reducers/flag'


const persistConfig = {
    key: "root",
    storage,
    //blacklist: ["loading"], //设置某个reducer数据不持久化，
    //注意单词的拼写！我就因为写错单词，找了半天,55555~
  };
const reducers =  combineReducers({
    flagReducer,
})

const myPersistReducer = persistReducer(persistConfig, reducers);

const store = createStore(myPersistReducer)

const persistor = persistStore(store);


export {store,persistor}


