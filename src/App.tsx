import React, { useEffect } from 'react';

import './App.css';
import styles from "./App.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearStore, getPostsApi } from './store/actions';
import { removePost } from './store/slices';

import { stateSelector } from './store/selectors';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();

  const state = useSelector(stateSelector);

  useEffect(() => {
    dispatch(getPostsApi({ limit: 10 }));
  }, []);

  


  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
     </Routes>
    </div>
  );
}

export default App;
