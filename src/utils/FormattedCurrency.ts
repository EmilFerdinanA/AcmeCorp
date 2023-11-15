export const formatCurrency = (amount: string | undefined): string => {
  if (amount === undefined) {
    return "";
  }
  const parsedAmount = parseFloat(amount);

  return parsedAmount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};
