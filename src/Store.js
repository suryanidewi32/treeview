// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// import rootReducer from './Controllers/Redux/reducer';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;


import { configureStore } from '@reduxjs/toolkit'
import treeReducer from 'Controllers/Services/Tree/module_tree.service'

const reducer = {
  trees: treeReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;