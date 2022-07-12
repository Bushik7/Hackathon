import {Redirect, Route, Switch} from "react-router-dom";
import NavBar from "./app/components/ui/navBar";
import Breadcrumbs from "./app/components/common/breadcrumbs";
import Main from "./app/components/layouts/main";
import NotFound from "./app/components/page/notFound";
import UserPage from "./app/components/page/userPage";
import Users from "./app/components/layouts/users";
import Favorites from "./app/components/layouts/favorites";
import AppLoader from "./app/hok/AppLoader";
import Footer from "./app/components/ui/footer";

function App() {
  return (
    <div className="page">
      <AppLoader>
        <NavBar/>
        <Breadcrumbs/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/users/:userId?" component={UserPage}/>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/404" component={NotFound}/>
          <Redirect to="404"/>
        </Switch>
        <Footer/>
      </AppLoader>
    </div>
  );
}

export default App;
