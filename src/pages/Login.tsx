import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';   
const Login: React.FC = () => {
  const doLogin = (event: any) => {
    event.preventDefault()
    console.log('doLogin') // Fake login
  } 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle>My App Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            asd
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>asdas</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;