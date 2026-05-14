"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    const sqrtD = Math.sqrt(discriminant);
    const root1 = (-b + sqrtD) / (2 * a);
    const root2 = (-b - sqrtD) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentNum = Number(percent);
  const contributionNum = Number(contribution);
  const amountNum = Number(amount);
  const countMonthsNum = Number(countMonths);
  
  if (isNaN(percentNum) || isNaN(contributionNum) || isNaN(amountNum) || isNaN(countMonthsNum)) {
    return false;
  }
  
  const creditBody = amountNum - contributionNum;
  if (creditBody <= 0) {
    return 0;
  }
  
  const monthlyRate = (percentNum / 100) / 12;
  const payment = creditBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonthsNum) - 1)));
  const totalAmount = payment * countMonthsNum;
  
  return Number(totalAmount.toFixed(2));
}