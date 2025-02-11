import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import MobileMenu from './components/MobileMenu.jsx';
import MobileNavbar from './components/MobileNavbar.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import NotificationsPages from './pages/NotificationsPages.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import ReelsPage from './pages/ReelsPage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import LeftSide from './components/LeftSide.jsx';
import RightSide from './components/RightSide.jsx';

export function Root() {

  const location = useLocation();

  return (

    <StrictMode>
      {location.pathname !== "/profile" && <MobileNavbar></MobileNavbar>}

      <div className="relative flex h-screen">
        <div className="sticky top-0 h-screen w-3/12 lg:w-2/12 hidden sm:block border-r border-gray-300">
          <LeftSide />
        </div>

        <div className={`overflow-y-auto h-screen w-12/12 sm:w-9/12 ${location.pathname !== "/" ? "lg:w-10/12" : "lg:w-6/12"} `}>
          <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/profile' element={<ProfilePage></ProfilePage>}></Route>
            <Route path='/notifications' element={<NotificationsPages></NotificationsPages>}></Route>
            <Route path='/messages' element={<MessagesPage></MessagesPage>}></Route>
            <Route path='/reels' element={<ReelsPage></ReelsPage>}></Route>
            <Route path='/explore' element={<ExplorePage></ExplorePage>}></Route>
            <Route path='/create' element={<CreatePage></CreatePage>}></Route>
          </Routes>
        </div>

        <div className={`sticky top-0 h-screen bg-gray-50 w-3/12 hidden lg:block ${location.pathname !== "/" ? "lg:w-0/12" : "lg:w-4/12"}`}>
          {location.pathname === "/" && <RightSide />}
        </div>
      </div>

      <MobileMenu></MobileMenu>
    </StrictMode>
  )
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter> <Root /> </BrowserRouter>);