import React from 'react'
import style from './Loader.module.css'

export function Loader({ color, size }) {
  const sizeNum = parseInt(size, 10)
  const size2 = `${sizeNum + 4}px`

  return (
    <div
      className={style['lds-ring']}
      style={{
        width: size,
        height: size,
      }}
    >
      {Array(4).fill(<div style={{
        borderColor: `${color} transparent transparent transparent`,
        width: size2,
        height: size2,
        borderWidth: `${(sizeNum / 5).toFixed(0)}px`,
      }}
      />)}
    </div>
  )
}
