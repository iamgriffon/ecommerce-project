import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => ( // o {...otherSectionProps} retorna TODOS OS OUTROS parametros e os deixa disponíveis
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}> 
    {/* history.push() vai redirecionar a rota
    matchUrl = '/' É A BARRA
    linkUrl é a página que está definida no estado inicial do directory */}
       <div
       className='background-image' 
       style={{ backgroundImage: `url(${imageUrl})` }}/> 
       
    <div className='background-'></div>
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span><strong>SHOP NOW</strong></span>
        </div>
    </div>
);

export default withRouter(MenuItem); //Ele retorna um componente que tem acesso aos parametros do router (match, history etc)