import styles from './Dados.module.css';

function Dados (){
    return(
        <div>
            <h1 className={styles.titulo}>Currículo</h1>

            <div className={styles.dadosPessoais}>
                <div>
                    <img className={styles.fotoPerfil} src='https://github.com/vitoriallmelo.png'/>
                </div>
                <div>
                    <h2 className={styles.nome}>Vitória Luiza Leitão de Melo</h2>
                    <p>Endereço: Rua Sigismundo Gonçalves, n° 23, apartamento 04, Cordeiro – Recife (PE) | E-mail: vluizalmelo@gmail.com | Telefone: (81) 99351-3831 | Telefone para recado: (81) 99915-6709 | Idade: 21 anos | Estado Civil: Solteira</p>
                    <p>Conecte-se comigo e conheça meu trabalho!</p>
                    <div className={styles.cadaRede}>

                        <ul className={styles.redes}>
                        <li>
                        <a href="https://www.linkedin.com/in/vitória-melo-903a35249" target='blanck'>
                            <img className={styles.linkedin} src="https://static.vecteezy.com/system/resources/previews/018/930/587/large_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="Logo LinkedIn" />
                            <title>Acesse o meu LinkedIn</title>
                        </a>
                        </li>
                        <li>
                        <a href='https://github.com/vitoriallmelo' target='blanck'>
                            <img className={styles.github} src='https://www.pngall.com/wp-content/uploads/13/Github-Logo.png' alt="Logo GitHub"/>
                            <title>Acesse o meu GitHub</title>
                        </a>
                        </li>
                        </ul>
                        
                    </div>
                </div>   
            </div>       
        </div>
    )
}
export default Dados;