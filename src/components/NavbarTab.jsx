'use client'

import { IonLabel, IonTabButton } from '@ionic/react'

const NavbarTab = ({ path, label, icon }) => {
  return (
    <IonTabButton
      tab={path}
      href={`/${path}`}
      className="w-1/5 flex flex-col items-center justify-center"
    >
      <div className="flex justify-center">
        <img src={icon} />
      </div>
      <IonLabel className="w-full block text-sm text-center">{label}</IonLabel>
    </IonTabButton>
  )
}

export default NavbarTab
