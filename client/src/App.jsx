import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Login from './component/Signup/Login'
import Project from './component/Project/Project';
import { useEffect } from 'react'; 
import {useDispatch, useSelector} from "react-redux"
import { getUser, loadUser } from './action/user';
import AdminPanel from './component/AdminPanel/AdminPanel.jsx';
import About from './component/About/About'
import Timeline from './component/AdminPanel/Timeline.jsx';
import Projects from './component/AdminPanel/Projects.jsx';
import Contact from './component/Contact/Contact.jsx';
import Intro from './component/AdminPanel/Intro.jsx';
import Achievement from './component/AdminPanel/Achievement.jsx';
import Passionate from './component/passionate/Passionate.jsx';
import Passionates from './component/AdminPanel/Passionate.jsx';

function App() {

  const dispatch = useDispatch();
  const {isAuthenticate} = useSelector((state) => state.login);
  const {loading, user} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser);
  }, [dispatch]);

  return (
    <Router>
      {loading ? <div>Loading...</div>: (
        <> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home timelines={user.timeline} skills={user.skills} project={user.projects} about={user.about} intro={user.intro} achievement={user.achievements} passionate={user.passionate}/>} />
          <Route path='/Project' element={<Project projects={user.projects}/>} />
          <Route path='/About' element={<About about={user.about}/>} />
          <Route path='/Passionate' element={<Passionate/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/account' element={isAuthenticate ? <AdminPanel/> : <Login/>} />
          <Route path='/admin/achievements' element={isAuthenticate ? <Achievement/> : <Login/>} />
          <Route path='/admin/intro' element={isAuthenticate ? <Intro/> : <Login/>} />
          <Route path='/admin/passionate' element={isAuthenticate ? <Passionates/> : <Login/>} />
          <Route path='/admin/timeline' element={isAuthenticate ? <Timeline/> : <Login/>} />
          <Route path='/admin/project' element={isAuthenticate ? <Projects/> : <Login/>} />
        </Routes>
        </>
      ) };
  </Router>
  )
}

export default App