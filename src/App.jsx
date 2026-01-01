import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ReactBasics from './Pages/ReactBasics'
import Components from './Pages/Components'
import APIIntegration from './Pages/APIIntegration'
import ConditionalRendering from './Pages/ConditionalRendering'
import CustomHooks from './Pages/CustomHooks'
import JSX from './Pages/JSX'
import ListsKeys from './Pages/ListsKeys'
import Props from './Pages/Props'
import Routing from './Pages/Routing'
import Styling from './Pages/Styling'
import UseContext from './Pages/UseContext'
import UseEffect from './Pages/UseEffect'
import UseId from './Pages/UseId'
import UseRef from './Pages/UseRef'
import UseState from './Pages/UseState'
import UseReducer from './Pages/UseReducer'
import Forms from './Pages/Forms'
import ContextAPI from './Pages/ContextAPI'
import Footer from './Components/Footer'



function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
     setSidebarOpen(prev => !prev);
  };

  return (
    <>
      <BrowserRouter>

        <div className="app-layout">

          <Header toggleSidebar={toggleSidebar}  sidebarOpen={sidebarOpen}/>

          <div className="content-wrapper">

                
            <SideBar  isOpen={sidebarOpen}
                closeSidebar={() => setSidebarOpen(false)} />

              <main className="main-content">
                      <div className="page-content">
                        <Routes>
                          <Route path="/" element={<Home/>} />
                          <Route path="/react" element={<ReactBasics/>} />
                          <Route path="/components" element={<Components/>} />
                          <Route path="/jsx" element={<JSX/>} />
                          <Route path="/props" element={<Props/>} />

                          {/* hooks */}

                          <Route path="/hooks/use-state" element={<UseState />} />
                          <Route path="/hooks/use-effect" element={<UseEffect />} />
                          <Route path="/hooks/use-ref" element={<UseRef />} />
                          <Route path="/hooks/use-context" element={<UseContext />} />
                          <Route path="/hooks/use-reducer" element={<UseReducer />} />
                          <Route path="/hooks/use-id" element={<UseId />} />

                          {/* others */}
                          
                          <Route path="/forms" element={<Forms />} />
                          <Route path="/lists" element={<ListsKeys />} />
                          <Route path="/conditional-Rendaring" element={<ConditionalRendering />} />
                          <Route path="/context-API" element={<ContextAPI/>} />
                          <Route path="/Custom-hooks" element={<CustomHooks/>} />
                          <Route path="/API-Integration" element={<APIIntegration/>} />
                          <Route path="/routings" element={<Routing/>} />
                          <Route path="/stylings" element={<Styling/>} />

                        </Routes>
                      </div>

                      <Footer/>
              </main>

          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
