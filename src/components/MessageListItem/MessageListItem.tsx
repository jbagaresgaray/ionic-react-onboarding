import { IonItem, IonLabel, IonNote } from "@ionic/react";
import "./MessageListItem.scss";

interface MessageListItemProps {
  title: string;
  routePath?: string;
}

const MessageListItem: React.FC<MessageListItemProps> = ({
  title,
  routePath,
}) => {
  return (
    <IonItem routerLink={routePath} detail>
      <IonLabel className="ion-text-wrap">
        <h2>{title}</h2>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;
