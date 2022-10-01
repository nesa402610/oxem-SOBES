import React from 'react';
import loader from "./UI/Ellipse 112.png";

const InfoBlock = ({sum, monthPay, sendData, isSending}) => {
    return (
        <div className="info">
            <div className="info__item">
                <h4 className={'title'}>Сумма договора лизинга</h4>
                <h2>{sum.toLocaleString()}</h2>
            </div>
            <div className="info__item">
                <h4 className={'title'}>Ежемесячный платеж от</h4>
                <h2>{monthPay.toLocaleString()}</h2>
            </div>
            <div className={'info__item'}>
                <div onClick={sendData} className={'button'}>{!isSending ? 'Оставить заявку' :
                    <img className={'loader'} src={loader} alt="loader"/>}</div>
            </div>
        </div>
    );
};

export default InfoBlock;