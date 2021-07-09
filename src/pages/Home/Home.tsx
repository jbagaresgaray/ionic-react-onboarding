import MessageListItem from "../../components/MessageListItem/MessageListItem";
import {
  IonContent,
  IonHeader,
  IonItemDivider,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Onboarding & Slides</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Onboarding & Slides</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <MessageListItem title="Onboarding 1" routePath="/onboarding1" />
          <MessageListItem title="Onboarding 2" routePath="/onboarding2" />
          <MessageListItem title="Onboarding 3" routePath="/onboarding3" />
          <MessageListItem title="Onboarding 4" routePath="/onboarding4" />
          <MessageListItem title="Onboarding 5" routePath="/onboarding5" />
          <IonItemDivider></IonItemDivider>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
