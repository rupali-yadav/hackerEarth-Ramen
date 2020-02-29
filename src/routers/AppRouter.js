import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';
import RamenPage from "../components/RamenPage";

const AppRouter = () => (
    <BrowserRouter>
        <div className="jioFacebookPageContainer">
            <Switch>
                <Route path="/" component={RamenPage} exact={true}></Route>
               
            </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter;