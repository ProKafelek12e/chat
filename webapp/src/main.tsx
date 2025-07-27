import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './pages/App.tsx'
import Login from './pages/Login.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chats" element={<p>Chats</p>} />
      <Route path="/login" element ={<Login/>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
);