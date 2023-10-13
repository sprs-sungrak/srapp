'use client'

import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'

import { IonReactRouter } from '@ionic/react-router'
import { Route, Redirect } from 'react-router-dom'

import HomePage from '@/app/home/page'
import WorshipPage from '@/app/worship/page'
import BiblePage from '@/app/bible/page'
import ContentsPage from '@/app/contents/page'
import MenuPage from '@/app/menu/page'

const Navigation = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs className="bg-red-300">
          <IonRouterOutlet>
            <Redirect exact path="/" to="/home" />
            <Route path="/home" render={() => <HomePage />} exact={true} />
            <Route
              path="/worship"
              render={() => <WorshipPage />}
              exact={true}
            />
            <Route path="/bible" render={() => <BiblePage />} exact={true} />
            <Route
              path="/contents"
              render={() => <ContentsPage />}
              exact={true}
            />
            <Route path="/menu" render={() => <MenuPage />} exact={true} />
          </IonRouterOutlet>

          <IonTabBar
            slot="bottom"
            className="flex justify-between h-10 divide-x"
          >
            <IonTabButton
              tab="home"
              href="/home"
              className="w-1/5 flex items-center justify-center"
            >
              <IonLabel className="">Home</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="worship"
              href="/worship"
              className="w-1/5 flex items-center justify-center"
            >
              <IonLabel className="">Worship</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="bible"
              href="/bible"
              className="w-1/5 flex items-center justify-center"
            >
              <IonLabel className="">Bible</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="contents"
              href="/contents"
              className="w-1/5 flex items-center justify-center"
            >
              <IonLabel className="">Contents</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="menu"
              href="/menu"
              className="w-1/5 flex items-center justify-center"
            >
              <IonLabel className="">Menu</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default Navigation
