import React, { useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonToolbar,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";

import "./Onboarding4.scss";
import { useHistory } from "react-router";

const Onboarding4: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
  };
  const [isSlideEnd, setIsSlideEnd] = useState(false);
  const mySlides: any = useRef(null);
  const history = useHistory();

  const onSkipSlides = async () => {
    const len = await mySlides.current.length();
    mySlides.current.slideTo(len - 1);
  };

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
    <IonPage id="onboarding4" className="onboarding4">
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
      <IonContent fullscreen scrollY={false}>
        <IonSlides
          pager={true}
          options={slideOpts}
          ref={mySlides}
          onIonSlideDidChange={ionSlideWillChange}
        >
          <IonSlide>
            <IonImg src="assets/image/onboarding4/slide-1@2x.png" />
            <div className="slide">
              <h2>Creative Solutions</h2>
              <p>
                Facilisis at vero eros et accui msan et iusto odio dignissim qui
                blandit praesent luptatum zril delenit
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding4/slide-2@2x.png" />
            <div className="slide">
              <h2>Integrated Teamwork</h2>
              <p>
                Facilisis at vero eros et accui msan et iusto odio dignissim qui
                blandit praesent luptatum zril delenit
              </p>
            </div>
          </IonSlide>
          <IonSlide>
            <IonImg src="assets/image/onboarding4/slide-3@2x.png" />
            <div className="slide">
              <h2>Excellent Developer</h2>
              <p>
                Facilisis at vero eros et accui msan et iusto odio dignissim qui
                blandit praesent luptatum zril delenit
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
                  color="white"
                  className="circle-button"
                  onClick={onNextSlide}
                >
                  <IonIcon slot="icon-only" icon={arrowForward}></IonIcon>
                </IonButton>
              )}
              {isSlideEnd && (
                <IonButton
                  color="white"
                  className="get-started-button"
                  shape="round"
                  onClick={onGetStarted}
                >
                  Get Started <IonIcon slot="end" icon={arrowForward}></IonIcon>
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

export default Onboarding4;
