export enum CONTRACT_ADDRESS {
  STRK = '0x04718f5a0Fc34cC1AF16A1cdee98fFB20C31f5cD61D6Ab07201858f4287c938D',
  ETH = '0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7',
  USDC = '0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
  USDT = '0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8',
  USER_POINT = '0x7bd89ba87f34b47facaeb4d408dadd1915d16a6c828d7ba55692eb705f0a5cc',
}

export enum RPC_PROVIDER {
  MAINET = 'https://starknet-mainnet.public.blastapi.io/rpc/v0_7',
  TESTNET = 'https://starknet-sepolia.public.blastapi.io/rpc/v0_7',
}
export type optionEventType = {
  value: string;
  label: string;
};
export const tokenInfos: optionEventType[] = [
  { value: CONTRACT_ADDRESS.STRK, label: 'STRK' },
  { value: CONTRACT_ADDRESS.ETH, label: 'ETH' },
  { value: CONTRACT_ADDRESS.USDC, label: 'USDC' },
  { value: CONTRACT_ADDRESS.USDT, label: 'USDT' },
];
