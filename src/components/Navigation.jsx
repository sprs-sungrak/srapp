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
import { usePathname } from 'next/navigation'
import NavbarTab from '@/components/NavbarTab'

import HomePage from '@/app/home/page'
import WorshipPage from '@/app/worship/page'
import BiblePage from '@/app/bible/page'
import ContentsPage from '@/app/contents/page'
import MenuPage from '@/app/menu/page'

const Navigation = () => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          {/* 라우터 설정 */}
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

          {/* 하단 탭 UI */}
          <IonTabBar
            slot="bottom"
            className="flex justify-between h-16 rounded-xl border-t border-gray-300"
          >
            <NavbarTab path="home" icon="/icons/navbar/home.svg" label="홈" />
            {/* <IonTabButton
              tab="home"
              href="/home"
              className="w-1/5 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center">
                <img src="/icons/navbar/home.svg" />
              </div>
              <IonLabel className="w-full block text-sm text-center">
                홈
              </IonLabel>
            </IonTabButton> */}
            <IonTabButton
              tab="worship"
              href="/worship"
              className="w-1/5 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center">
                <img src="/icons/navbar/worship.svg" />
              </div>
              <IonLabel className="w-full block text-sm text-center">
                예배
              </IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="bible"
              href="/bible"
              className="w-1/5 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center">
                <img src="/icons/navbar/bible.svg" />
              </div>
              <IonLabel className="w-full block text-sm text-center">
                성경
              </IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="contents"
              href="/contents"
              className="w-1/5 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center">
                <img src="/icons/navbar/contents.svg" />
              </div>
              <IonLabel className="w-full block text-sm text-center">
                콘텐츠
              </IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="menu"
              href="/menu"
              className="w-1/5 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center">
                <img src="/icons/navbar/menu.svg" />
              </div>
              <IonLabel className="w-full block text-sm text-center">
                전체
              </IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default Navigation
