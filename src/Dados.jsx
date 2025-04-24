import styles from './Dados.module.css';

function Dados (){
    return(
        <div>
            <div className={styles.dadosPessoais}>
                <div>
                    <img className={styles.fotoPerfil} src='https://github.com/vitoriallmelo.png'/>
                </div>
                <div>
                    <h2 className={styles.nome}>Vitória Luiza Leitão de Melo</h2>
                    <p className={styles.endereco}> Recife (PE) | E-mail: vluizalmelo@gmail.com | Telefone: (81) 99351-3831 | Telefone para recado: (81) 99915-6709 | Idade: 21 anos | Estado Civil: Solteira</p>
                    <p>Conecte-se comigo e conheça meu trabalho!</p>
                </div>   
            </div>       
        </div>
    )
}
export default Dados;