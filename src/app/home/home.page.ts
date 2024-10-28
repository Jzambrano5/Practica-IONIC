import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonDatetime, IonDatetimeButton, IonModal, IonFabList, IonFab, IonFabButton, IonIcon, IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent, IonAlert, IonApp, IonButtons, IonInput, IonBadge, IonCheckbox, IonNote, IonText, IonActionSheet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from 'ionicons/icons';
import { chevronForward, listCircle } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonActionSheet, IonText, IonNote, IonCheckbox, IonBadge, IonInput, IonButtons, IonApp, IonAlert, IonInfiniteScrollContent, IonInfiniteScroll, IonLabel, IonAvatar, IonItem, IonList, IonIcon, IonFabButton, IonFab, IonFabList, IonModal, IonDatetimeButton, IonDatetime, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    addIcons({ chevronDownCircle, chevronForward, listCircle,chevronForwardCircle, chevronUpCircle, colorPalette, document, globe });
  }
    public alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');
        },
      },
    ];
  
    setResult(ev:any) {
      console.log(`Dismissed with role: ${ev.detail.role}`);
    }

    public actionSheetButtons = [
      {
        text: 'Delete',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Share',
        data: {
          action: 'share',
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];
  
}
