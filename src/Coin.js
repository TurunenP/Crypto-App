// import React from "react";
// import "./Coin.css";

// const Coin = ({
//   image,
//   name,
//   symbol,
//   price,
//   volume,
//   priceChange,
//   marketcap,
// }) => {
//   return (
//     <div className="coin-container">
//       <div className="coin-row">
//         <div className="coin">
//           <img src={image} alt="crypto" />
//           <h1>{name}</h1>
//           <p className="coin-symbol">{symbol}</p>
//         </div>
//         <div className="coin-data">
//           {/* <p className="coin-price">€{price}</p> */}
//           <p className="coin-volume">€{volume.toLocaleString()}</p>
//           {priceChange < 0 ? (
//             <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
//           ) : (
//             <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
//           )}
//           <p className="coin-marketcap">
//             Mkt Cap : € {marketcap.toLocaleString()}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Coin;

//Vercel
import React from "react";
import "./Coin.css";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            {price !== null && price !== undefined
              ? `$${price.toLocaleString()}`
              : "N/A"}
          </p>

          <p className="coin-volume">
            {volume !== null && volume !== undefined
              ? `€${volume.toLocaleString()}`
              : "N/A"}
          </p>

          {priceChange !== null && priceChange !== undefined ? (
            <p className={`coin-percent ${priceChange < 0 ? "red" : "green"}`}>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent">N/A</p>
          )}

          <p className="coin-marketcap">
            {marketcap !== null && marketcap !== undefined
              ? `Mkt Cap: €${marketcap.toLocaleString()}`
              : "Mkt Cap: N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
