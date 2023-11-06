import React from 'react';

const Card = ({
     label,
     amount,
     onAmountChange,
     onCurrencyChange,
     currencyOptions=[],
     selectCurrency,
     disabled=false
}) => {
     return (
          <div className='d-flex px-4 pb-4 pt-2 gap-2 bg-light rounded-3 '>
               <div className="left">
                    <p className='text-secondary mb-1  '>{label}</p>
                    <input type="number" value={amount}  onChange={e=>{onAmountChange(Number(e.target.value))}} className='form-control' name="number" min='0' placeholder='Amount' disabled={disabled} />
               </div>
               <div className="right">
                    <p className=' text-secondary mb-1'>Currency</p>
                    <select value={selectCurrency} onChange={e=>{onCurrencyChange(e.target.value)}} name="" id="" className='form-select '>
                         {currencyOptions.map(currency=>(
                              <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                         ))}
                    </select>
               </div>
          </div>
     );
};

export default Card;
