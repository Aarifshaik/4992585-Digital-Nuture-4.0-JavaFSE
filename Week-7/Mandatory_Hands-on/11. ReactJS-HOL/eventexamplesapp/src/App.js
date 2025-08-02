import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [inr, setInr] = useState("0");
  const [eur, setEur] = useState("0");

  const incrementValue = () => setCounter((c) => c + 1);
  const sayHello = () => alert("Hello! This is a static message.");

  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  const handleDecrement = () => {
    setCounter((c) => c - 1);
  };

  const sayWelcome = (word) => {
    alert("Welcome user")
  };

  const handleSyntheticPress = (e) => {
    alert("I was Clicked")
  };

  const handleConvertToEuro = (e) => {
    e.preventDefault();
    const inrVal = parseFloat(inr);
    if (isNaN(inrVal)) {
      alert("Invalid INR amount");
      return;
    }
    const converted = inrVal * 1/101.2;
    setEur(converted.toFixed(4));
    alert(`Converted ₹${inrVal.toLocaleString()} to €${converted.toFixed(4)}`);
  };

  const handleConvertToINR = (e) => {
    e.preventDefault();
    const eurVal = parseFloat(eur);
    if (isNaN(eurVal)) {
      alert("Invalid EUR amount");
      return;
    }
    const converted = eurVal *101.2;
    setInr(Math.round(converted).toString());
    alert(`Converted €${eurVal.toFixed(4)} to ₹${Math.round(converted).toLocaleString()}`);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Counter with Multiple Actions</h2>
      <div className="flex items-center gap-4">
        <div>
          <p className="mb-1">Counter: <span className="font-mono">{counter}</span></p>
          <div className="flex gap-2">
            <button
              onClick={handleIncrement}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Increment
            </button>
            <button
              onClick={handleDecrement}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Say Welcome</h3>
        <button
          onClick={() => sayWelcome("welcome")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Say Welcome
        </button>
      </div>

      <div>
        <h3 className="font-semibold">Synthetic Event (OnPress)</h3>
        <button
          onClick={handleSyntheticPress}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Trigger OnPress
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold">Currency Converter (INR ↔ EUR)</h2>
        <form onSubmit={handleConvertToEuro} className="space-y-2">
          <div className="flex gap-2 items-end">
            <div className="flex flex-col flex-1">
              <label className="text-sm">Indian Rupees (₹)</label>
              <input
                type="text"
                value={inr}
                onChange={(e) => setInr(e.target.value)}
                className="border p-2 rounded"
                placeholder="Amount in INR"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Convert to Euro
              </button>
            </div>
          </div>
        </form>

        <form onSubmit={handleConvertToINR} className="space-y-2">
          <div className="flex gap-2 items-end">
            <div className="flex flex-col flex-1">
              <label className="text-sm">Euros (€)</label>
              <input
                type="text"
                value={eur}
                onChange={(e) => setEur(e.target.value)}
                className="border p-2 rounded"
                placeholder="Amount in EUR"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
              >
                Convert to INR
              </button>
            </div>
          </div>
        </form>
        <p className="text-sm text-gray-600">
          Using rate: 1 EUR = {101.2} INR
        </p>
      </div>

    </div>
  );
};

export default App;
