import React, {useState} from 'react';

const FormItem = ({title, value, setValue, children, min, max, type, percent}) => {
    const [active, setActive] = useState(false);

    return (
        <div className={'form__item'}>
            <h4 className={'title'}>{title}</h4>
            <div className={'form__inputs'}>
                <input className={'form__input'} value={!active ? value.toLocaleString() : value}
                       onFocus={() => setActive(true)}
                       onBlur={() => setActive(false)}
                       onChange={e => setValue(+(e.target.value))}
                       type="text"/>
                {!children ?
                    <input type="range"
                           onChange={e => setValue(+(e.target.value))}
                           value={value}
                           min={min}
                           max={max}/>
                    : children
                }
                {type === 0 &&
                    <span className={'form__input__ext'}>мес.</span>
                }
                {type === 1 &&
                    <span className={'form__input__ext block'}>
                        <div className={'block'}>
                            {percent}%
                        </div>
                    </span>
                }
                {type === 2 &&
                    <span className={'form__input__ext'}>₽</span>

                }
            </div>
        </div>
    );
};

export default FormItem;