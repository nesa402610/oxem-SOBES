import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import InfoBlock from "./components/infoBlock";
import FormBlock from "./components/formBlock";

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
            <FormBlock price={price}
                       initial={initial}
                       initialPerc={initialPerc}
                       months={months}
                       setInitial={setInitial}
                       setInitialPerc={setInitialPerc}
                       setMonths={setMonths}
                       setPrice={setPrice}/>
            <InfoBlock isSending={isSending} sendData={sendData} monthPay={monthPay} sum={sum}/>
        </div>
    );
};

export default App;