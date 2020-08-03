import React from 'react'
import logo from 'assets/logo.png'
import filterInactive from 'assets/filter-inactive.svg'
import filterActive from 'assets/filter-active.svg'
import { NavLink } from 'react-router-dom'
import { useApi } from 'api'
import style from './Header.module.css'

const routes = [
  { route: '/jogs', caption: 'JOGS' },
  { route: '/info', caption: 'INFO' },
  { route: '/contactUs', caption: 'CONTACT US' },
]

export function Header() {
  const { token, filter, toggleFilter } = useApi()
  return (
    <>
      <input
        className={style.checkbox}
        type="checkbox"
        id="nav-check"
      />
      <header className={style.container}>
        <img className={style.logo} src={logo} alt="logo" />
        {!!token && (
        <nav className={style.navContainer}>
          <div className={style.routesContainer}>
            {routes.map(({ route, caption }) => (
              <NavLink key={route} to={route} activeClassName={style.activeRoute}>
                <div>{caption}</div>
              </NavLink>
            ))}
          </div>
          <img
            onClick={toggleFilter}
            className={style.filter}
            src={filter ? filterActive : filterInactive}
            alt="filter-icon"
          />
          <div className={style.burger}>
            <label htmlFor="nav-check">
              <span />
              <span />
              <span />
            </label>
          </div>
        </nav>
        )}
      </header>
    </>
  )
}
