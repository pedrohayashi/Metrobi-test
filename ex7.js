function getMaxValue(carrotTypes, capacity, index = 0, memo = {}) {
  if (capacity <= 0 || index >= carrotTypes.length) return 0;
  const key = `${capacity}-${index}`;
  
  // Check if result is already calculated
  if (memo[key] !== undefined) return memo[key];

  const carrot = carrotTypes[index];

  // Case 1: Skip this carrot type
  let maxValue = getMaxValue(carrotTypes, capacity, index + 1, memo);

  // Case 2: Include this carrot type if there's enough capacity, and add its value
  if (carrot.kg <= capacity) {
    maxValue = Math.max(
      maxValue,
      carrot.price + getMaxValue(carrotTypes, capacity - carrot.kg, index, memo)
    );
  }

  memo[key] = maxValue; // Store the result for memoization
  return maxValue;
}

// Example usage
const carrotTypes = [{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }];
const capacity = 36; // kg
console.log(getMaxValue(carrotTypes, capacity)); // Outputs the maximum value that can fit in the bag
