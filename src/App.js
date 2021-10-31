import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import MyBooking from './Pages/MyBooking/MyBooking';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import AddNewOffer from './Pages/AddNewOffer/AddNewOffer';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import BookingInfo from './Pages/BookingInfo/BookingInfo';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/myBooking">
              <MyBooking></MyBooking>
            </Route>
            <PrivateRoute exact path="/manageBookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/addOffer">
              <AddNewOffer></AddNewOffer>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/offerBooking/:id">
              <BookingInfo></BookingInfo>
            </PrivateRoute>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
