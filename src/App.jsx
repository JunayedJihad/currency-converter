import React,{useState} from "react";
import Card from "./Card";
import useCurrency from "./customHooks/useCurrency";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  function handleSubmit(e) {
    e.preventDefault();
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container position-relative   d-flex flex-column gap-3 ">
        <Card
        label="From"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={setFrom}
        onAmountChange={setAmount}
        selectCurrency={from}
        />
        <button
          type="button"
          onClick={swap}
          className="swap btn btn-primary px-3 py-1"
        >
          <span className="me-2 ">Swap</span>
          <i className="fa-solid fa-rotate"></i>
        </button>
        <Card
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={setTo}
        onAmountChange={setConvertedAmount}
        disabled={true}
        selectCurrency={to}
        />
      </div>
      <div className="convert-btn mt-4">
        <button type="submit" className="btn btn-primary w-100 py-2 ">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </form>
  );
};

export default App;
