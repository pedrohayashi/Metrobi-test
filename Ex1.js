const array = [1, 2, 3, 2, 4, 5, 2, 5, 6, 8, 7, 9, 8];
const uniqueSet = new Set(array);
const duplicates = array.filter(item => {
  if (uniqueSet.has(item)) {
    uniqueSet.delete(item);
    return false; // Not a duplicate yet, remove from Set to catch next occurrence
  }
  return true; // Already removed from Set, thus a duplicate

});

console.log(duplicates); 