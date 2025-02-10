import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import MobileMenu from './components/MobileMenu.jsx';
import MobileNavbar from './components/MobileNavbar.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import NotificationsPages from './pages/NotificationsPages.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import ReelsPage from './pages/ReelsPage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import CreatePage from './pages/CreatePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MobileNavbar></MobileNavbar>

      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/profile' element={<ProfilePage></ProfilePage>}></Route>
        <Route path='/notifications' element={<NotificationsPages></NotificationsPages>}></Route>
        <Route path='/messages' element={<MessagesPage></MessagesPage>}></Route>
        <Route path='/reels' element={<ReelsPage></ReelsPage>}></Route>
        <Route path='/explore' element={<ExplorePage></ExplorePage>}></Route>
        <Route path='/create' element={<CreatePage></CreatePage>}></Route>
      </Routes>

      <MobileMenu></MobileMenu>
    </BrowserRouter>
  </StrictMode>,
)
