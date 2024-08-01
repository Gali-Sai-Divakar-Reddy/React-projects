import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled=false,
    currencyDisabled=false,
    className=""
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2 mr-3'>
            <label htmlFor="currency" className='text-black/40 mb-2 inline-block'>From</label>
            <input 
            id="currency"
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            disabled={amountDisabled}
            value={amount}
            placeholder='Amount'
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 flex flex-col justify-center items-end text-right'>
            <label className='text-black/40 mb-2 w-full inline-block'>Currency Type</label>
            <select 
            className='rounded-lg px-1 py-1 w-3/4 bg-gray-100 cursor-pointer outline-none'
            value={selectedCurrency}
            onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled={currencyDisabled}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox