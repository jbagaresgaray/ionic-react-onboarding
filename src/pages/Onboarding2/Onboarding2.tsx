import React from "react";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";

import "./Onboarding2.scss";

const Onboarding2: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };

  return (
    <IonPage id="onboarding2" className="onboarding2">
      <IonContent fullscreen scrollY={false}>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonImg src="assets/image/onboarding2/slide-1.jpg" />
            <div className="slide">
              <h2>Welcome</h2>
              <p>
                The <b>ionic conference app</b> is a practical preview of the
                ionic framework in action, and a demonstration of proper code
                use.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding2/slide-2.jpg" />
            <div className="slide">
              <h2>What is Ionic?</h2>
              <p>
                <b>Ionic Framework</b> is an open source SDK that enables
                developers to build high quality mobile apps with web
                technologies like HTML, CSS, and JavaScript.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding2/slide-3.jpg" />
            <div className="slide">
              <h2>What is Appflow?</h2>
              <p>
                <b>Appflow</b> is a powerful set of services and features built
                on top of Ionic Framework that brings a totally new level of app
                development agility to mobile dev teams.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding2/slide-4.jpg" />
            <div className="slide-bottom">
              <h2>Ready to Play?</h2>
              <IonButton
                expand="block"
                color="dark"
                className="slide-button"
                routerLink="/landing"
              >
                Continue <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonButton>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding2;
