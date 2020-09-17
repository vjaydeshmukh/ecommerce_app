import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Productlist from "./Components/Productlist";
import MenSupplement from "./Components/MenSupplement";
import WomenSupplement from "./Components/WomenSupplement";
import KidAndTeenSupplement from "./Components/KidAndTeenSupplement";
import HeadacheAndDizziness from "./Components/HeadacheAndDizziness";
import SleepAids from "./Components/SleepAids";
import GeneralPain from "./Components/GeneralPain";
import OralProduct from "./Components/OralProduct";
import InjuryAndBonePain from "./Components/InjuryAndBonePain";
import SoftTissueAndNervePain from "./Components/SoftTissueAndNervePain";
import Inflammation from "./Components/Inflammation";
import Fever from "./Components/Fever";
import Cough from "./Components/Cough";
import Sneezing from "./Components/Sneezing";
import SinusCongestion from "./Components/SinusCongestion";
import Details from "./Components/Detail";
import Cart from "./Components/Cart/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import login from "./Components/Login/login";
import register from "./Components/Login/register";
import Slider from "./Components/Fragment/slider";
import CheckOut from "./Components/Cart/CheckOut";
import SearchBarHandler from "./Components/SearchBarHandler";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Slider /> */}
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route exact path="/oral" component={OralProduct} />
        <Route exact path="/menSupplement" component={MenSupplement} />
        <Route exact path="/womenSupplement" component={WomenSupplement} />
        <Route exact path="/kidandteen" component={KidAndTeenSupplement} />
        <Route path="/sleepaids" component={SleepAids} />
        <Route
          exact
          path="/headacheanddizziness"
          component={HeadacheAndDizziness}
        />
        <Route path="/generalpain" component={GeneralPain} />
        <Route path="/injuryandbonepain" component={InjuryAndBonePain} />
        <Route
          path="/softtissueandnervepain"
          component={SoftTissueAndNervePain}
        />
        <Route exact path="/inflammation" component={Inflammation} />
        <Route path="/fever" component={Fever} />
        <Route path="/cough" component={Cough} />
        <Route path="/sneezing" component={Sneezing} />
        <Route path="/sinuscongestion" component={SinusCongestion} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={login} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/register" component={register} />
        <Route exact path="/search/" component={Productlist} />
        <Route path={"/search/:str"} component={SearchBarHandler} />
        <Route exact path={"/?search=:str"} component={SearchBarHandler} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
