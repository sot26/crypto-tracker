import React from "react";

const CoinItems = (props) => {
  return (
    <tr className="mx-6 flex justify-between items-center bg-[#1B1A17] shadow shadow-[#51557E] coin-row my-2 py-3 px-6">
      <td>{props.coins.market_cap_rank}</td>
      <td className="flex w-full justify-end ">
        <img
          className="w-auto h-[30px] pr-3"
          src={props.coins.image}
          alt="coin-icon"
        />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </td>
      <td className="text-right w-full ">
        ${props.coins.current_price.toLocaleString()}
      </td>
      {props.coins.price_change_percentage_24h ? (
        props.coins.price_change_percentage_24h < 0 ? (
          <p className="text-[#FF0000] w-full text-right">
            {props.coins.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-[#00ff37] w-full text-right">
            {props.coins.price_change_percentage_24h.toFixed(2)}%
          </p>
        )
      ) : null}
      <td className="hidden md:block w-full text-right">
        ${props.coins.market_cap.toLocaleString()}
      </td>
    </tr>
  );
};

export default CoinItems;
