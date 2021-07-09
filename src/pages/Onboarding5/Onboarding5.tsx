import React, { useRef, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonToolbar,
} from "@ionic/react";

import "./Onboarding5.scss";
import { useHistory } from "react-router";

const Onboarding5: React.FC = () => {
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
    }
  };

  const onGetStarted = () => {
    history.push("/landing");
  };

  const ionSlideWillChange = async (event: any) => {
    const isSlideEnd = await event.target.isEnd();
    setIsSlideEnd(isSlideEnd);
  };

  return (
    <IonPage id="onboarding5" className="onboarding5">
      <IonHeader className="ion-no-border">
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <IonSlides
          pager={true}
          options={slideOpts}
          ref={mySlides}
          onIonSlideDidChange={ionSlideWillChange}
        >
          <IonSlide>
            <IonImg src="assets/image/onboarding5/slide-1@2x.png" />
            <div className="slide">
              <h2>Time for yourself </h2>
              <p>
                You never know what's going to happen in a competition and
                especially here it can be windy.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding5/slide-2@2x.png" />
            <div className="slide">
              <h2>Beauty & Spa Wellness</h2>
              <p>
                You never know what's going to happen in a competition and
                especially here it can be windy.
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding5/slide-3@2x.png" />
            <div className="slide">
              <h2>Take your time Relax</h2>
              <p>
                You never know what's going to happen in a competition and
                especially here it can be windy.
              </p>
            </div>
          </IonSlide>
        </IonSlides>
        <div className="custom-slide-footer">
          <IonRow className="ion-justify-content-between">
            <IonCol size="3"></IonCol>
            <IonCol size="auto">
              {!isSlideEnd && (
                <IonButton
                  color="pale-green"
                  className="next-button"
                  onClick={onNextSlide}
                >
                  Next
                </IonButton>
              )}
              {isSlideEnd && (
                <IonButton
                  color="maroon"
                  className="next-button"
                  onClick={onGetStarted}
                >
                  Start
                </IonButton>
              )}
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
      {/* <IonFooter className="ion-no-border">
       
      </IonFooter> */}
    </IonPage>
  );
};

export default Onboarding5;
