function startCounting() {
  let count = 0;
  let counter = setInterval(() => {
    count += 1;
    console.log(count);
    if (count >= 10) clearInterval(counter);
  }, 50);
}

function stopCounting(counter) {
  clearInterval(counter);
}


startCounting();