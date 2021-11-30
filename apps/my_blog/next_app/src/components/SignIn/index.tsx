import { SiGithub } from 'react-icons/si'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignIn ({ user }) {
  const isUserLoggedIn = true
  const username = user ? user : 'Alisson Oliveira'

  return (
    <button className={styles.signin}>
      {
        isUserLoggedIn ?
        <>
          <SiGithub color="#04d361"/>
          {username}
          <FiX className={styles.closeIcon} color="#737380"/>
        </> :
        <>
          <SiGithub color="#eba417"/>
          Sign in with Github
        </>
      }
    </button>
  )
}
