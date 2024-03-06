import React,{useEffect, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext} from './store/FirebaseContext'
import Post from './store/PostContext'

function App() {
  const {user, setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      {/* Wrapping all routes with the Router component */}
      <Router>
        {/* Using a single Routes component to contain all Route components */}
        <Routes>
          {/* Defining a Route for the Home component */}
          <Route exact path='/' element={<Home />} />

          {/* Defining a Route for the Signup component */}
          <Route path='/signup' element={<Signup />} />

          {/* Defining a Route for the Signup component */}
          <Route path='/login' element={<Login />} />

          {/* Defining a Route for the Signup component */}
          <Route path='/create' element={<Create />} />

          {/* Defining a Route for the Signup component */}
          <Route path='/view' element={<View />} />
        </Routes>
      </Router>
    </Post>
    </div>
  );
}

export default App;

