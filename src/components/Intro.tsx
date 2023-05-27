// swiper implementation
import { IonText, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Intro.css';
import chair from '../assets/chair.png'
import clipper from '../assets/clipper.png'
import salon from '../assets/salon.png'

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}> {children} </IonButton>
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {

  return (
    <Swiper>
      <SwiperSlide>
        <img src={salon} alt="Intro 1"/>
        <IonText>
          <h3>The greatest app of all time.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={chair} alt="Intro 2"/>
        <IonText>
          <h3>The greatest app of all time.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={clipper} alt="Intro 3"/>
        <IonText>
          <h3>The greatest app of all time.</h3>
        </IonText>
        <IonButton onClick= {() => onFinish()}>Finish</IonButton>
      </SwiperSlide>

    </Swiper>

    

    
  )
};

export default Intro;