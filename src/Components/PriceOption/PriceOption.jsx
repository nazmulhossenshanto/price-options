import React from 'react';

const PriceOption = ({priceOption}) => {
    return (
        <div className='border-2 border-amber-500 m-5 p-4'>
            <h1 className='font-bold text-2xl'>{priceOption.name}</h1>
            <h3 className='font-bold text-2xl'>Price : {priceOption.price}/mon</h3>
            <h3 className='font-bold text-2xl'>Features : </h3>
            <ul>

                {priceOption.features.map(feature => <li className='font-medium'>{feature}</li>)}
            </ul>
        </div>
    );
};

export default PriceOption;