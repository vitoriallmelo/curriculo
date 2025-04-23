import styles from './Certificacoes.module.css';
import { useState } from 'react'

function Certificacoes (){
    const [, setCount] = useState(0)
    return(
        <div className={styles.certificacoes}>
            <h2 className={styles.titulo}>Certificações</h2>
            <h3 className={styles.tituloTopico}>Front-end</h3>
            <h3 className={styles.tituloTopico}>Back-end</h3>    
            <h3 className={styles.tituloTopico}>Banco de dados</h3>
            <h3 className={styles.tituloTopico}>Inglês intermediário</h3>
            <h3 className={styles.tituloTopico}>Versionamento de código</h3>
            <h3 className={styles.tituloTopico}>Outras conquistas</h3>
        </div>
    )
}
export default Certificacoes;