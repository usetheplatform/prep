/**
 * @param {number[]} prices
 * @return {number}
 */
export default function optimalStockTrading(prices) {
  let min_price = Number.POSITIVE_INFINITY;
  let max_profit = 0;

  for (const price of prices) {
    if (price < min_price) {
      min_price = price;
    } else {
      const profit = price - min_price;

      if (profit > max_profit) {
        max_profit = profit;
      }
    }
  }
}

console.log(optimalStockTrading([1, 2, 3, 4]));

// console.log(optimalStockTrading([4, 3, 2, 1]));
