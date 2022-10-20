import React, {useContext} from 'react';

import { AuthContext } from '../contexts/auth';

import './styles.css'




const HomePage = () =>{
    const {  logout }  = useContext(AuthContext);
    
    const handleLogout = ()=>{
        logout();
    }

    return (
       <div id='home'>
        <h1 className='title'>Sobre Mim</h1>
        <p className='paragrafo'>Meu nome é Deivid, Sou estudante de Análise e Desenvolvimento de
            Sistemas. Estou fazendo a Prova do Professor Ezzerfert Desenvovimento
            Web I e aprendendo um pouco sobre a biblioteca React.
        </p>
        <button className='btn' OnClick={handleLogout}>Logout</button>
        <h1 className="title">Sobre Meu Codigo e como foi feitas as 
        rotas</h1>
        <p className="paragrafo">Criei uma pasta separada para criar
        a página de Login, fiz um breve form definido as classes para
        fazer um style básico e coloquei valores no login para realizar
        a autenticação. Criei um arquivo separado para realizar as rotas
        para cada index criado um chamado AppRouter e criei
        um input com autenticação com o nome do arquivo chamado 'auth'
          </p>
       </div>
    )
}


export default HomePage;