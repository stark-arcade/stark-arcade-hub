// Eclipse Middle Function
export function ellipseMiddle(
  target: string,
  charsStart = 4,
  charsEnd = 4
): string {
  return `${target.slice(0, charsStart)}...${target.slice(
    target.length - charsEnd
  )}`;
}
// Format Address Starknet
export const formattedContractAddress = (contractAddress: string) => {
  while (contractAddress.trim().length < 66) {
    contractAddress = contractAddress.trim().replace("0x", "0x0");
  }
  return contractAddress.toLowerCase().trim();
};
