import React from 'react'
import icon from 'assets/joga-icon.svg'
import { useHistory } from 'react-router-dom'

import { useApi } from 'api'
import style from './JogaCard.module.css'

export const JogaCard = React.memo(({ joga }) => {
  const { date, distance, time } = joga
  const dateString = new Date(date).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: 'numeric' })
  const speed = (distance / (time / 60)).toFixed(0)

  const api = useApi()
  const history = useHistory()

  function handleClick() {
    api.setCurrentJoga(joga)
    history.push('/create_joga')
  }

  return (
    <div className={style.container} onClick={handleClick}>
      <img src={icon} alt="joga icon" className={style.icon} />
      <div className={style.dataContainer}>
        <span className={style.date}>{dateString}</span>
        <div className={style.dataRow}>
          <span>Speed</span>
          <span>{speed}</span>
        </div>
        <div className={style.dataRow}>
          <span>Distance</span>
          <span>{`${distance} km`}</span>
        </div>
        <div className={style.dataRow}>
          <span>Time</span>
          <span>{`${time} min`}</span>
        </div>
      </div>
    </div>
  )
})
