import styles from './Certificacoes.module.css';
import { useState } from 'react'

function Certificacoes (){
    const [, setCount] = useState(0)
    return(
        <div className={styles.certificacoes}>
            <h2 className={styles.titulo}>Certificações</h2>

            <h3 className={styles.tituloTopico}>Front-end</h3>
                <a href='https://app.rocketseat.com.br/certificates/8fd2ad66-7074-4c3c-b60d-4635eae886f9'>
                    <img className={styles.horizontais} src='public/react.png' title='Clique para verificar a autenticidade'/>
                </a>
                <a href='https://cursos.alura.com.br/certificate/24514763-db8d-4430-bb3a-d059c0b46123'>
                    <img className={styles.horizontais} src='public/JS2alura.png' title='Clique para verificar a autenticidade'/>
                </a>
                <a href='https://cursos.alura.com.br/certificate/382f723c-0d60-49a1-b1d8-9a43a53ae3f4'>
                    <img className={styles.horizontais} src='public/JS1alura.png' title='Clique para verificar a autenticidade'/>
                </a>
                <a href='https://cursos.alura.com.br/certificate/7914b9fd-9207-47b7-b45d-472b2ea74afc'>
                    <img className={styles.horizontais} src='public/html.png' title='Clique para verificar a autenticidade'/>
                </a>
            <h3 className={styles.tituloTopico}>Back-end</h3>    
                <a href='https://cursos.alura.com.br/certificate/b5f139e0-fe25-4b6d-b907-b45aa351cf4f?lang'>
                    <img className={styles.horizontais}  src='public/JS6alura.png' title='Clique para verificar a autenticidade'/>
                </a>
                <a href='https://cursos.alura.com.br/certificate/598ccde5-0c70-4b1d-9e9f-ad2a4b74314c?lang'>
                    <img className={styles.horizontais} src='public/JS5alura.png' title='Clique para verificar a autenticidade'/>
                </a>
                <a href='https://cursos.alura.com.br/certificate/a32f657d-2a83-49eb-a28f-57020a308267?lang'>
                    <img className={styles.horizontais} src='public/JS4alura.png' title='Clique para verificar a autenticidade'/>
                </a>
                <a href='https://cursos.alura.com.br/certificate/c401241c-9c22-4425-9e00-6fb35aca4131'>
                    <img className={styles.horizontais} src='public/JS3alura.png' title='Clique para verificar a autenticidade'/>
                </a>
            <h3 className={styles.tituloTopico}>Banco de dados</h3>

                <img className={styles.horizontais} src='public/modelagemDados.png' title='Credencial: 81667030-5F33-4DB5-BA4D-C8C71D2CFC76'/>
                
            <h3 className={styles.tituloTopico}>Inglês intermediário</h3>
                
                <img className={styles.verticais} src='public/ingles.png' />

            <h3 className={styles.tituloTopico}>Versionamento de código</h3>
                <a href='https://cursos.alura.com.br/certificate/de94fbc9-73ec-4b33-ad64-976c2d23fe45?lang'>
                    <img className={styles.horizontais} src='public/git.png' title='Clique para verificar a autenticidade'/>
                </a>
            <h3 className={styles.tituloTopico}>Outras conquistas</h3>
                <a href='https://enem.inep.gov.br/participante/#!/autenticidade'>
                    <img className={styles.quadrados} src='public/enem2023.png' title='Chave de validação: j5+KbKrfR4+Mln+z0oBy3w=='/>
                </a>
                <a href='https://enem.inep.gov.br/participante/#!/autenticidade'>
                    <img className={styles.quadrados} src='public/enem2022.png' title='Chave de validação: VFoRgTnk/tQFbwsofeqQZA=='/>
                </a>
                <a href='https://enem.inep.gov.br/participante/#!/autenticidade'>
                    <img className={styles.quadrados} src='public/enem2021.png' title='Chave de validação: n3En5eJjSJIuHesBE+IW+g=='/>
                </a>
        </div>
    )
}
export default Certificacoes;