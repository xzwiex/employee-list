import React, { useEffect, useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { getUsers } from '../../api'
import { User } from '../../model'

import styles from './styles.module.css'

export const UsersList: React.FC = (props) => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const load = async () => {
      const users = await getUsers()
      setUsers(users)
    }

    load()
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.usersList}>{
        users.map(
          (user) =>
            <NavLink className={({ isActive }) =>
              isActive ? `${styles.user} ${styles.active}` : styles.user
            }
              to={`${user.id}`} key={`user_${user.id}`}>
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
            </NavLink>
        )}
      </div>
      <div><Outlet /></div>
    </div>
  )
}