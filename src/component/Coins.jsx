import React from "react";
import CoinItems from "./CoinItems";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

const Coins = (props) => {
  return (
    <div className="max-w-[1100px] m-auto mt-6 ">
      <table className="w-full ">
        <tr className="mx-6 bg flex justify-between items-center my-2 py-3 px-6">
          <td className="border-r-black ">#</td>
          <td className="border-r-black  w-full text-right">Coins</td>
          <td className="border-r-black  w-full text-right">price</td>
          <td className="border-r-black  w-full text-right">24h</td>
          <td className="hidden md:block border-r-black w-full text-right">
            market cap
          </td>
        </tr>
        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItems coins={coins} />
            </Link>
          );
        })}
      </table>
    </div>
  );
};

export default Coins;
