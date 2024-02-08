"use client";
import Button from "@/components/Button.component";
import { TokenTransfersListView } from "@covalenthq/goldrush-kit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <h1 className="text-xl font-medium">COVALENT</h1>
      <Button />

      <TokenTransfersListView
        chain_name="eth-sepolia" //chain name
        address="0xE3876f1D0D0DbC782d7844FdE8675c75628E36a2" //sample address
        contract_address="0xc4bF5CbDaBE595361438F8c6a187bDc330539c60" //contract address
      />
    </main>
  );
}
