export const getFormatWalletAddress = (address: string) => {
  return (
    address.substring(0, 5) +
    "..." +
    address.substring(address.length - 4, address.length)
  );
};
