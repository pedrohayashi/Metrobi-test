async function itensDelay(arr) {
  let delay = 1000; // Start with a 1-second delay

  for (let item of arr) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(item);
    delay *= 2; // Double the delay each time
  }
}

itensDelay(["a", "b", "c", "d"]); // Will log "a", "b", "c", "d" with 1, 2, 4, 8-second delays
