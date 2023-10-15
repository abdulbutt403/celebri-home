import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/users" element={<Users />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogPost/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Navigate to="/admin/links" />} />
        <Route path="/admin/links" element={<Admin />} />
        <Route path="/admin/appearance" element={<Appearance />} />
        <Route path="/admin/account" element={<Account />} />
        <Route path="/admin/settings" element={<Settings />} />

        <Route path="/admin/analytics" element={<Analytics />} />
  
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
  );
}

export default App;


