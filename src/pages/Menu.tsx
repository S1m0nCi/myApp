import { IonContent, IonHeader, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import{ Redirect, Route } from 'react-router'
import Settings from './Settings';
import List from './List';
import { homeOutline, newspaperOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
  const paths = [
    { name: 'Home', url: 'app/list', icon: homeOutline },
    { name: 'Settings', url: '/app/settings', icon: newspaperOutline }
]


  return (
    <IonPage>
        <IonMenu contentId='main'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                Menu
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding'>
            {paths.map((path, index) => (
              <IonMenuToggle>
                <IonItem routerLink={path.url} key={index} routerDirection="none">
                  {IonItem.name}
                </IonItem>
              </IonMenuToggle>
            ))}

            
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id='main'>
          <Route exact path="/app/list" component={List} />
          <Route path="/app/settings" component={Settings} />
          <Route exact path = "/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
    </IonPage>
  );
};

export default Menu;