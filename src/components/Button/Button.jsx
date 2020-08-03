import React, { useState, useCallback } from 'react'
import { Loader } from 'components/Loader'
import style from './Button.module.css'

export const Button = React.memo(({ color, children, onClick }) => {
  const [loading, setLoading] = useState(false)

  const onClickHandler = useCallback(async () => {
    if (!onClick) return
    const r = onClick()
    if (!!r && !!r.then) {
      setLoading(true)
      await r
      setLoading(false)
    }
  }, [onClick])

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className={style.container}
      style={{ borderColor: color, color }}
    >
      {loading && (
      <div className={style.loaderContainer}>
        <Loader />
      </div>
      )}
      <div style={{ opacity: Number(!loading) }} className={style.childContainer}>
        {children}
      </div>
    </button>
  )
})
