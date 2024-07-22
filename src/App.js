import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React, {useState, useEffect } from "react";
import "./App.css";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
// import Analytics from "./pages/Analytics";
import Appearance from "./pages/Appearance";
import Browse from "./pages/Browse";
import Contact from "./pages/Contact";
import Cookie from "./pages/Cookie";
import Help from "./pages/Help";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MarketPlace from "./pages/Marketplace";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Report from "./pages/Report";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
import TrustCenter from "./pages/TrustCenter";
import Users from "./pages/Users";
import { Toaster } from "react-hot-toast";
import Reset from "./pages/Reset";
import PrivateRoutes from "./PrivateRoute";
import ShareProfile from "./pages/ShareProfile";
import Success from "./pages/Success";
import ComingSoon from "./components/coming-soon";
function App() {
  const [currentPageType, setCurrentPageType] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    checkCurrentState()
  },[])
  // let navigateNew = useNavigate();
  
  const checkCurrentState = () => {
    fetch(`https://celebri-backend.onrender.com/users/pageState`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          if (res.currentPageType ) {
            // navigate('/soon', { replace: true })
            setCurrentPageType(res.currentPageType || '');
            console.log(res.currentPageType)
            setLoading(false);

          } else {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (loading) {
    // You can show a loading spinner or some other indicator here
    return <div>Loading...</div>;
  }

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
            zIndex: 99999999,
          },
        }}
      />
      <Router>
        <Routes>
        <Route path="/" element={<ComingSoon />}/>
      {/* {currentPageType === "simple" && <Route path="/" element={<Home />} /> } */}

          <Route path="/soon" element={<ComingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/users" element={<Users />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogPost/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<Navigate to="/admin/links" />} />
            <Route path="/admin/links" element={<Admin />} />
            <Route path="/user/:id" element={<ShareProfile />} />
            <Route path="/admin/appearance" element={<Appearance />} />
            <Route path="/admin/account" element={<Account />} />
            <Route path="/admin/settings" element={<Settings />} />
            {/* <Route path="/admin/analytics" element={<Analytics />} /> */}
          </Route>

          <Route path="/help" element={<Help />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/trust-center" element={<TrustCenter />} />
          <Route path="/report-problem" element={<Report />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
