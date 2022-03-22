import './App.css';
import HomePage from './pages/home/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Property from './pages/properties/Property';
import Contact_Header from './pages/home/Contact_Header';
import Footer from './pages/home/Footer/Footer';
import BlogPage from './pages/blogs/BlogPage';
import BlogDetail from './pages/blogdetail/BlogDetail'
import LoginPage from './pages/login/LoginPage'
import ContactPage from './pages/contact/ContactPage'
import RegisterPage from './pages/register/RegisterPage';
import ListProperty from './pages/listproperty/ListProperty';
function App() {
  return (
    <Router>
      <Contact_Header/>
      <Switch>
        <Route path="/" exact><HomePage/></Route>
        <Route path="/property"><Property/></Route>
        <Route path="/blog" exact><BlogPage/></Route>
        <Route path="/blog/:idBlog"><BlogDetail/></Route>
        <Route path="/login"><LoginPage/></Route>
        <Route path="/contact"><ContactPage/></Route>
        <Route path="/register"><RegisterPage/></Route>
        <Route path="/listproperty"><ListProperty/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;