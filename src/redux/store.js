import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from 'redux-saga';
import sagaData from "./saga";

const sagaMiddleWare = createSagaMiddleWare()
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleWare]
})
sagaMiddleWare.run(sagaData)
export default store;