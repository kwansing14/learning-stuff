function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  let total = 0;
  total += meal_cost;
  total += meal_cost * (tip_percent / 100);
  total += meal_cost * (tax_percent / 100);
  console.log(Math.round(total));
}

solve(12.0, 20, 8); // 15
