import React from 'react'
import { CreateJogaDialog } from 'components'
import style from './CreateJoga.module.css'

export function CreateJoga() {
  return (
    <div className={style.container}>
      <CreateJogaDialog />
    </div>
  )
}
