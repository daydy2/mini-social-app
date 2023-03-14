import react from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'

function App() {
 const [user, setUser] = useState(false);
 return (
  <div className="App">
   {user ? (
    <div className="no-user">
     <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
     </Routes>
    </div>
   ) : (
    <>
     <div className="sidebar">
      <LandingPage />
     </div>
     <div className="main-area">
      <div className="feed-area">
       <Routes>
        <Route path="/" element={<Feedlane />} />
        <Route path="/profile" element={<ProfilePage />} />
       </Routes>
      </div>
      <div className="newpost">
       <Date />
       <NewPost />
      </div>
     </div>
    </>
   )}
  </div>
 );
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
    setOpenComment(false);
  };

  return (
    <Apph className="App">
      <header className="landing">
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <Sidedrawer show={sideDrawerOpen} />
        {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
      </header>

      <section className="landingpage__sidenav">
        <Sidenav />
        <Profile />
      </section>
      <LandingPage backdrop={backdropClickHandler} />
    </Apph>
  );
}

export default App
