import React from 'react';
import FormItem from "./UI/form__item";

const FormBlock = ({price, setPrice, initial, setInitial, initialPerc, setInitialPerc, months, setMonths}) => {
    return (
        <div className={'form'}>
            <FormItem title={"Стоимость автомобиля"}
                      value={price}
                      setValue={setPrice}
                      min={1000000}
                      max={6000000}
                      type={2}/>
            <FormItem title={"Первоначальный взнос"}
                      value={initial}
                      setValue={setInitial}
                      type={1}
                      percent={initialPerc}>
                <input type="range"
                       onChange={e => setInitialPerc(+(e.target.value))}
                       value={initialPerc}
                       min={10}
                       max={60}/>
            </FormItem>
            <FormItem title={"Срок лизинга"} value={months} setValue={setMonths} min={1} max={60} type={0}/>
        </div>
    );
};

export default FormBlock;