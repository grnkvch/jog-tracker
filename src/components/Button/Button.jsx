import React from 'react'
import style from './Button.module.css'

export const Button = React.memo(({ color, children }) => (
  <div className={style.container} style={{ borderColor: color, color }}>
    {children}
  </div>
))
