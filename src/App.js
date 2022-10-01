import React, {useEffect, useState} from 'react';
import './App.css';
import FormItem from "./components/UI/form__item";
import loader from './components/UI/Ellipse 112.png';
import axios from "axios";

const App = () => {
    const [price, setPrice] = useState(3300000);
    const [initial, setInitial] = useState(420000);
    const [initialPerc, setInitialPerc] = useState(13);
    const [months, setMonths] = useState(60);
    const [sum, setSum] = useState(0);
    const [monthPay, setMonthPay] = useState(0);
    const [isSending, setSending] = useState(false);

    const sendData = () => {
        if (!isSending) {
            setSending(true);
            axios.post('https://eoj3r7f3r4ef6v4.m.pipedream.net',
                {price, initial, months, sum, monthPay})
                .then(() => setSending(false)).catch(() => setSending(false));
        }
    };

    useEffect(() => {
        const monthPay = (price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1));
        setMonthPay(Math.round(monthPay));

        setSum(Math.round(initial + (months * monthPay)));
    }, [initial, months, price]);

    useEffect(() => {
        setInitial(Math.round(initialPerc / 100 * price));
    }, [initialPerc, price]);
    return (
        <div className={'container'}>
            <h1>Рассчитать стоимость <br/>
                автомобиля в лизинг</h1>
            <div className={'form'}>
                <FormItem title={"Стоимость автомобиля"} value={price} setValue={setPrice} min={1000000} max={6000000} type={2}/>
                <FormItem title={"Первоначальный взнос"} value={initial} setValue={setInitial} type={1} percent={initialPerc}>
                    <input type="range"
                           onChange={e => setInitialPerc(+(e.target.value))}
                           value={initialPerc}
                           min={10}
                           max={60}/>
                </FormItem>

                <FormItem title={"Срок лизинга"} value={months} setValue={setMonths} min={1} max={60} type={0} />

            </div>
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
        </div>
    );
};

export default App;