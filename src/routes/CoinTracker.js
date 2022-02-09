import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const handleSelect = (e) => {
    const coin = coins.filter((coin) => coin.id === e.target.value);
    setSelectedCoin({
      name: coin[0].name,
      price: coin[0].quotes.USD.price,
    });
  };
  const onChange = (e) => {
    setMoney(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id} onClick={handleSelect} value={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h2>My Money</h2>
      <span>가진 돈은? </span>
      <input
        type={"number"}
        placeholder="가진 돈 입력"
        onChange={onChange}
        style={{ display: "", width: "120px" }}
      />
      <p>
        만약에 {money}달러가 있다면{" "}
        {selectedCoin ? selectedCoin.name : " 선택된 코인"}을(를){" "}
        {selectedCoin ? money / selectedCoin.price : "n"}개 살 수 있다.
      </p>
    </div>
  );
}

export default CoinTracker;
