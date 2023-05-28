import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';   
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import bikemoney from '../assets/bike-money.png'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen'

const Login: React.FC = () => {
  const router = useIonRouter()
  const [introSeen, setIntroSeen] = useState(true)
  
  useEffect(() => {
    const checkStorage = async () => {
      const seen =  await Preferences.get({ key: INTRO_KEY });
      console.log('check storage ~ seen')
      setIntroSeen(seen.value === 'true')
    };
    checkStorage();
  })

  const doLogin = (event: any) => {
    event.preventDefault()
    console.log('doLogin') // Fake login
    router.push('/app', 'root')
  } 

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: 'true' })
  }

  const seeIntroAgain = () => {
    setIntroSeen(false)
    Preferences.remove({ key: INTRO_KEY })
  }

  return (
    <>
    {!introSeen ? (
      <Intro onFinish={finishIntro}/>
    ) : (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle>My App Title</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <img src={bikemoney} alt='Money Man Bike' width={ '50%' } />
        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}> {/*type='email' tells the native OS 
            to display the email keyboard, and type='password' means
            that we have asterisks instead of text.*/}
              <IonInput fill="outline" labelPlacement='floating' label="Email" type='email' placeholder='simon@myapp.com'></IonInput>
              <IonInput className="ion-margin-top" fill="outline" labelPlacement='floating' label="Password" type='password' placeholder='abc123'></IonInput>
              <IonButton type='submit' expand='block' className='ion-margin-top'>
                Login
                <IonIcon icon={logInOutline} slot='end'></IonIcon>
              </IonButton>
              <IonButton routerLink='/register' color='secondary' type='button' expand='block' className='ion-margin-top'>
                Create account
                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
              </IonButton>
              <IonButton onClick={seeIntroAgain} fill="clear" size="small" routerLink='/register' color='medium' type='button' expand='block' className='ion-margin-top'>
                Watch Intro
                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>.</IonToolbar>
      </IonFooter>
    </IonPage>
    )}
    </>
  );
};

export default Login;