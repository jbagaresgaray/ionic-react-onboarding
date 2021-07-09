import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import Onboarding1 from "./pages/Onboarding1/Onboarding1";
import Onboarding2 from "./pages/Onboarding2/Onboarding2";
import Onboarding3 from "./pages/Onboarding3/Onboarding3";
import Onboarding4 from "./pages/Onboarding4/Onboarding4";
import Landing from "./pages/Landing/Landing";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";
import Onboarding5 from "./pages/Onboarding5/Onboarding5";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/onboarding1">
          <Onboarding1 />
        </Route>
        <Route path="/onboarding2">
          <Onboarding2 />
        </Route>
        <Route path="/onboarding3">
          <Onboarding3 />
        </Route>
        <Route path="/onboarding4">
          <Onboarding4 />
        </Route>
        <Route path="/onboarding5">
          <Onboarding5 />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
