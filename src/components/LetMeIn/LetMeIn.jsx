import React from 'react'
import bearFace from 'assets/bear-face.svg'
import { useApi } from 'api'
import { Button } from '../Button'
import style from './LetMeIn.module.css'

export function LetMeIn() {
  const { login } = useApi()

  return (
    <div className={style.container}>
      <img src={bearFace} className={style.image} alt="logo bear" />
      <Button color="white" onClick={login}>
        Let me in
      </Button>
    </div>
  )
}
