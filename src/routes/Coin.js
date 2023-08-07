import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

function Coin() {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-[#1B1A17] w-full h-auto lg:px-28 text-white flex justify-center min-h-[100vh]">
      <div className="lg:px-28 max-w-[1000px] flex flex-col justify-center w-full px-8 ">
        <div className="max-w-auto">
          <div className="flex justify-center shadow shadow-[#51557E]  h-12 my-5">
            <div className="text-3xl font-bold capi">{coin.id}</div>
          </div>
          <div>
            <div className=" shadow shadow-[#51557E]  my-6 pb-2 h-auto">
              <div className="bg-[#6900ff] flex w-[80px] justify-center border-[#6900ff] rounded-xl my-3 ml-2">
                <span>Rank # {coin.market_cap_rank}</span>
              </div>
              <div className="flex justify-between ml-2 max-w-auto">
                <div className="flex items-center pl-0">
                  {coin.image ? (
                    <img src={coin.image.small} alt="coin-icon" />
                  ) : null}
                  <p className="pl-1">{coin.name}</p>
                  <p className="pl-2 upp">{coin.symbol}/USD</p>
                </div>
                <div className="text-[20px] sm:text-3xl flex items-center font-bold">
                  {coin.market_data?.current_price ? (
                    <p>
                      ${coin.market_data.current_price.usd.toLocaleString()}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-auto">
          <table className="w-full shadow  shadow-[#51557E]">
            <thead>
              <tr>
                <th className="bg-gray-700 border border-black">1hr</th>
                <th className="bg-gray-700 border border-black">24hr</th>
                <th className="bg-gray-700 border border-black">7d</th>
                <th className="bg-gray-700 border border-black">14d</th>
                <th className="bg-gray-700 border border-black">30d</th>
                <th className="bg-gray-700 border border-black">1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-r border-r-gray-400">
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : null}
                </th>
                <th className="border-r border-r-gray-400">
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : null}
                </th>
                <th className="border-r border-r-gray-400">
                  {coin.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : null}
                </th>
                <th className="border-r border-r-gray-400">
                  {coin.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : null}
                </th>
                <th className="border-r border-r-gray-400">
                  {coin.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : null}
                </th>
                <th className="">
                  {coin.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        2
                      )}
                      %
                    </p>
                  ) : null}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="shadow shadow-[#51557E] px-6 my-6 py-2">
          <div className="flex justify-between border-b-[1px]">
            <p>24 hours Low</p>
            {coin.market_data?.low_24h ? (
              <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div className="flex justify-between border-b-[1px]">
            <p>24 hours High</p>
            {coin.market_data?.high_24h ? (
              <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div className="pt-6">
            <div className="flex justify-between border-b-[1px]">
              <p>market cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div className="flex justify-between ">
              <p>Circulating Supply </p>
              {coin.market_data ? (
                <p>${coin.market_data.circulating_supply.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="max-w-auto shadow shadow-[#51557E] text-justify">
          <div className="px-6 py-2">
            <p className="text-2xl font-bold px-3">About</p>
            <p
              className="px-1"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coin;
