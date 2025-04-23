import styles from './Sobre.module.css';

function Sobre (){
    return(
        <div className={styles.container}>        
            <h2 className={styles.titulo}>Objetivo</h2>
            <p className={styles.textosCentralizados}>Estágio para desenvolvedor/ Desenvolvedor Junior</p>
            <h2 className={styles.titulo}>Principais áreas de interesse</h2>
            <p className={styles.textosCentralizados}>Desenvolvimento Back-end: Java, JavaScript/Node.js</p>
            <p className={styles.textosCentralizados}>Desenvolvimento fullstack</p>
            
            <h2 className={styles.titulo}>Sobre</h2>
            <p className={styles.textosJustificados}>Meu nome é Vitória, tenho 21 anos e estou no 2º período de Análise e Desenvolvimento de Sistemas pelo Embarque Digital - programa de bolsas de estudo e formação em tecnologia pelo Porto Digital (Recife - PE). </p>
            <p className={styles.textosJustificados}>Sou técnica em química, pelo IFPE, em transição de carreira para me tornar desenvolvedora. Portanto, utilizo hoje as habilidades analíticas e capacidade de aprofundamento teórico exercitados na minha formação anterior. </p>
            <p className={styles.textosJustificados}>Ultimamente, foco no estudo de JavaScript/Node.js e, por meio deles, lógica de programação; já tive contato com linguagem C, React, metodologias ágeis e banco de dados academicamente, assim como HTML e CSS (com os quais publiquei o projeto de um site no GitHub - nele, explorarei diversos recursos da documentação do HTML no site W3C). </p>
            <p className={styles.textosJustificados}>Ademais, tenho aptidão quanto a comunicação oral e escrita com clareza e qualidade, pois meu esforço nessa área me proporcionou as notas 900, 920 e 940 na redação do ENEM (2021 a 2023). Também estudo inglês há alguns anos e meu nível é classificado como intermediário.</p>
            <p className={styles.textosJustificados}>Em suma, sou uma pessoa focada nos estudos e resultados, de fácil convivência, gosto de aprender coisas novas e busco me aprimorar enquanto profissional. Viso o estágio para evoluir na área e proporcionar bons frutos à minha equipe. </p>
        </div>
    )
}
export default Sobre;