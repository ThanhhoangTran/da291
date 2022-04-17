import "./App.css";
import HomePage from "./pages/home/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Property from "./pages/properties/Property";
import Contact_Header from "./pages/home/Contact_Header";
import Footer from "./pages/home/Footer/Footer";
import BlogPage from "./pages/blogs/BlogPage";
import BlogDetail from "./pages/blogdetail/BlogDetail";
import LoginPage from "./pages/login/LoginPage";
import ContactPage from "./pages/contact/ContactPage";
import RegisterPage from "./pages/register/RegisterPage";
import ListProperty from "./pages/listproperty/ListProperty";
import PropertyDetails from "./pages/propertyDetails/PropertyDetails";
import About from "./pages/about/About";
import Agent from "./pages/agent/Agent";
import AgentDetail from "./pages/agent/agentDetail/AgentDetail";
import Report from "./pages/report/Report";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { userContext } from "./sevices/Provider";
function App() {
  const userData = useContext(userContext);
  return (
    <Router>
      <Contact_Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/property">
          <Property />
        </Route>
        <Route path="/blog" exact>
          <BlogPage />
        </Route>
        <Route path="/blog/:idBlog">
          <BlogDetail />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/listproperty" exact>
          <ListProperty limit={10} />
        </Route>
        <Route path="/listproperty/:idPro">
          <PropertyDetails />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/agent" exact>
          <Agent />
        </Route>
        <Route path="/agent/:idAgent">
          <AgentDetail />
        </Route>
        <Route path="/report">
          <Report />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
