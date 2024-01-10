// script.js

document.addEventListener('DOMContentLoaded', () => {
  const walletButton = document.getElementById('walletButton');
  const decreaseAmountButton = document.getElementById('decreaseAmount');
  const increaseAmountButton = document.getElementById('increaseAmount');
  const mintButton = document.getElementById('mintButton');
  let mintAmount = 1;

  walletButton.addEventListener('click', () => {
    // Placeholder for wallet connection logic
    console.log('Connect Wallet clicked');
  });

  decreaseAmountButton.addEventListener('click', () => {
    if (mintAmount > 1) {
      mintAmount -= 1;
      document.getElementById('amount').textContent = mintAmount;
    }
  });

  increaseAmountButton.addEventListener('click', () => {
    mintAmount += 1;
    document.getElementById('amount').textContent = mintAmount;
  });

  mintButton.addEventListener('click', () => {
    // Placeholder for minting logic
    console.log(`Mint ${mintAmount} Doginals`);
  });
});
