import styles from './Header.module.css'

function Header (){
    return (
        <div >   
            <ul className={styles.redes}>
                <li>
                    <a href="https://www.linkedin.com/in/vitória-melo-903a35249" target='blanck'>
                        <img className={styles.linkedin} title='Acesse meu LinkedIn' src="https://loghi-famosi.com/wp-content/uploads/2020/04/Linkedin-Logo.png" />
                    </a>
                </li>
                <li>
                    <h1 className={styles.titulo}>Currículo</h1>
                </li>
                <li>
                    <a href='https://github.com/vitoriallmelo' target='blanck'>
                        <img className={styles.github} title='Acesse o meu GitHub' src='https://pngimg.com/uploads/github/github_PNG65.png' alt="Logo GitHub"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Header;