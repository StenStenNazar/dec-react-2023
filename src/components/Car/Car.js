import React from 'react';

import css from './Car.module.css'

const Car = ({car, remove, setCarForUpdate}) => {
    const {brand, price, year, id} = car
    return (
        <div className={css.car}>
            <li><b>id:</b>{id}</li>
            <li><b>brand:</b>{brand}</li>
            <li><b>price:</b>{price}</li>
            <li><b>year:</b>{year}</li>
            <button onClick={() => remove(id)}>delete</button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
        </div>
    );
};
export default Car;