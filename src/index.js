import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import PostPage from './PostPage';
import FindQuestions from './FindQuestions';
import PlansPage from './PlansPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="post" element={<PostPage />} />
        <Route path="find_question" element={<FindQuestions />} />
        <Route path="postpage" element={<PostPage />} />
        <Route path="plan" element={<PlansPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
