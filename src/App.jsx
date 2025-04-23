import { useState } from 'react'
import styles from'./App.module.css'
import Dados from './Dados'
import Sobre from './Sobre'
import Certificacoes from './Certificacoes.jsx'
import Header from './Header.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Dados/>
      <div className={styles.apresentacao}>
        <Sobre/>
        <Certificacoes/>
      </div>  
    </div>
  )
}

export default App
