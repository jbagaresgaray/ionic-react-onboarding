import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonSlide,
  IonSlides,
  IonToolbar,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";

import "./Onboarding1.scss";

const Onboarding1: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
  };

  return (
    <IonPage id="onboarding1" className="onboarding1">
      <IonHeader className="ion-no-border">
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" scrollY={false}>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <div className="slide">
              <IonImg src="assets/image/onboarding1/slide-1.png" />
              <h2>Welcome</h2>
              <p>
                The <b>ionic conference app</b> is a practical preview of the
                ionic framework in action, and a demonstration of proper code
                use.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding1/slide-2.png" />
            <h2>What is Ionic?</h2>
            <p>
              <b>Ionic Framework</b> is an open source SDK that enables
              developers to build high quality mobile apps with web technologies
              like HTML, CSS, and JavaScript.
            </p>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding1/slide-3.png" />
            <h2>What is Appflow?</h2>
            <p>
              <b>Appflow</b> is a powerful set of services and features built on
              top of Ionic Framework that brings a totally new level of app
              development agility to mobile dev teams.
            </p>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding1/slide-4.png" />
            <h2>Ready to Play?</h2>
            <IonButton fill="clear" routerLink="/landing">
              Continue <IonIcon slot="end" icon={arrowForward}></IonIcon>
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding1;
