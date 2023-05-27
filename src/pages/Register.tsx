import { IonButtons, IonFooter, IonButton, IonInput, IonIcon, IonCardContent, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, useIonRouter } from '@ionic/react';
import React from 'react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons'
import bikemoney from '../assets/bike-money.png'

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log(doRegister); // Fake registration.
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/'/>
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <img src={bikemoney} alt='Money Man Bike' width={ '50%' } />
        <IonCard>
          <IonCardContent>
            <form onSubmit={doRegister}> {/*type='email' tells the native OS 
            to display the email keyboard, and type='password' means
            that we have asterisks instead of text.*/}
              <IonInput fill="outline" labelPlacement='floating' label="Email" type='email' placeholder='simon@myapp.com'></IonInput>
              <IonInput className="ion-margin-top" fill="outline" labelPlacement='floating' label="Password" type='password' placeholder='abc123'></IonInput>
              <IonButton type='submit' expand='block' className='ion-margin-top'>
                Create account
                <IonIcon icon={checkmarkDoneOutline} slot='end'></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>.</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;