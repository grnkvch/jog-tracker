import React from 'react'
import icon from 'assets/joga-icon.svg'
import style from './JogaCard.module.css'

export function JogaCard() {
  return (
    <div className={style.container}>
      <img src={icon} alt="joga icon" className={style.icon} />
      <div className={style.dataContainer}>
        <span className={style.date}>20.12.2017</span>
        <div className={style.dataRow}>
          <span>KEY</span>
          <span>VALUE</span>
        </div>
        <div className={style.dataRow}>
          <span>KEY</span>
          <span>VALUE</span>
        </div>
        <div className={style.dataRow}>
          <span>KEY</span>
          <span>VALUE</span>
        </div>
      </div>
    </div>
  )
}
