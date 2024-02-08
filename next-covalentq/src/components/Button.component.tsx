"use client";

import {
  CovalentClient,
  GetTokenBalancesForWalletAddressQueryParamOpts,
} from "@covalenthq/client-sdk";

const CovalentAPIKey = process.env.NEXT_PUBLIC_COVALENT_API_KEY || '';

export default function Button() {
  const getTokenBalancesForWalletAddress = async () => {
    console.log('key', CovalentAPIKey);
    const client = new CovalentClient(CovalentAPIKey);
    const chainName = "eth-sepolia";
    const walletAddress = "0xE3876f1D0D0DbC782d7844FdE8675c75628E36a2";
    const options: GetTokenBalancesForWalletAddressQueryParamOpts = {
      quoteCurrency: "USD",
      noSpam: true,
    };
    const resp = await client.BalanceService.getTokenBalancesForWalletAddress(
      chainName,
      walletAddress,
      options
    );
    console.log(resp.data);
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => {
        await getTokenBalancesForWalletAddress();
      }}
    >
      Click
    </button>
  );
}
