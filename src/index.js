import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './components/Layout';
import StocksImages from './components/StocksImages';
import Single from './components/Single';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import reportWebVitals from './reportWebVitals';
import Provider from './context/FireStoreContext';
import AuthProvider,{ useAuthContext } from './context/AuthContext';

function AppRoutes() {
  const { currentUser } = useAuthContext() 
  return(
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/image/:id" element={<Single />}/>
      <Route path="*" element={<NotFound />}/>
      <Route path="/profile" element={<Profile />}/>
      {currentUser && <Route path="/stocks" element={<StocksImages />}/>} 
    </Routes>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <Layout>
            <AppRoutes/>
          </Layout>
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
