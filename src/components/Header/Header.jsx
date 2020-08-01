import React from 'react'
import logo from 'assets/logo.png'
import filterInactive from 'assets/filter-inactive.svg'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const routes = [
  { route: '/jogs', caption: 'JOGS' },
  { route: '/info', caption: 'INFO' },
  { route: '/contactUs', caption: 'CONTACT US' },
]

export function Header() {
  return (
    <>
      <input
        className={style.checkbox}
        type="checkbox"
        id="nav-check"
      />
      <header className={style.container}>
        <img className={style.logo} src={logo} alt="logo" />
        <nav className={style.navContainer}>
          <div className={style.routesContainer}>
            {routes.map(({ route, caption }) => (
              <NavLink to={route} activeClassName={style.activeRoute}>
                <div>{caption}</div>
              </NavLink>
            ))}
          </div>
          <img className={style.filter} src={filterInactive} alt="logo" />
          <div className={style.burger}>
            <label htmlFor="nav-check">
              <span />
              <span />
              <span />
            </label>
          </div>
        </nav>
      </header>
    </>
  )
}
