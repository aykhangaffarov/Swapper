import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CategoryService from "./services/category-service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import ProductDetails from './pages/ItemsMenu/ProductDetails/ProductDetails';
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import 'react-app-polyfill/stable';
import ItemsMenu from './pages/ItemsMenu/ItemsMenu';
import WarehouseMenu from "./pages/WarehouseMenu/WarehouseMenu";
import WhItemDetails from "./pages/WhItemDetails/WhItemDetails";
import MyItems from "./pages/MyItems/MyItems";
import MyProductDetails from "./pages/MyProductDetails/MyProductDetails";
import AddItem from "./pages/AddItem/AddItem";
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Swapper
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>


              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/items"} className="nav-link">
                    Items
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/warehouse"} className="nav-link">
                    Warehouse
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/myitems"} className="nav-link">
                    My Items
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/items" component={ItemsMenu} />
              <Route exact path="/myitems" component={MyItems} />
              <Route exact path={'/items/:id'} component={ProductDetails}/>
              <Route exact path={'/myitems/:id'} component={MyProductDetails}/>
              <Route exact path="/warehouse" component={WarehouseMenu}/>
              <Route exact path="/addItem" component={AddItem}/>
              <Route exact path={'/warehouse/:id'} component={WhItemDetails}/>
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
