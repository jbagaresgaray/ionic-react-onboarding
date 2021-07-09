import React, { useRef, useState } from "react";
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonPage,
  IonSlide,
  IonSlides,
  IonToolbar,
  IonButtons,
} from "@ionic/react";

import "./Onboarding3.scss";
import { useHistory } from "react-router";

const Onboarding3: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
  };
  const [isSlideEnd, setIsSlideEnd] = useState(false);
  const mySlides: any = useRef(null);
  const history = useHistory();

  const onNextSlide = async () => {
    const len = await mySlides.current.length();
    const index = await mySlides.current.getActiveIndex();
    const isEnd = await mySlides.current.isEnd();

    if (index !== len) {
      mySlides.current.slideNext();
      if (isEnd) {
        history.push("/landing");
      }
    } else {
      history.push("/landing");
    }
  };

  const onSkipSlides = async () => {
    const len = await mySlides.current.length();
    mySlides.current.slideTo(len - 1);
  };

  const ionSlideWillChange = async (event: any) => {
    const isSlideEnd = await event.target.isEnd();
    setIsSlideEnd(isSlideEnd);
  };

  return (
    <IonPage id="onboarding3" className="onboarding3">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            {!isSlideEnd && (
              <IonButton
                fill="clear"
                color="medium"
                className="skip-button"
                onClick={onSkipSlides}
              >
                Skip
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" scrollY={false}>
        <IonSlides
          pager={true}
          options={slideOpts}
          ref={mySlides}
          onIonSlideDidChange={ionSlideWillChange}
        >
          <IonSlide>
            <IonImg src="assets/image/onboarding3/slide-1@2x.png" />
            <div className="slide">
              <h2>Organized in one place</h2>
              <p>
                Work from home never gets easier, everything is organized in one
                place
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding3/slide-2@2x.png" />
            <div className="slide">
              <h2>Stay connected</h2>
              <p>
                Stay connected with your team members while working from home
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding3/slide-3@2x.png" />
            <div className="slide">
              <h2>Keep project on track</h2>
              <p>
                Get your things done with ease, work better together with your
                teams
              </p>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar className="slide-footer-toolbar">
          <IonButton
            className="slide-button"
            color="royal"
            expand="block"
            shape="round"
            size="large"
            onClick={onNextSlide}
          >
            Next
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Onboarding3;
