const form = document.getElementById('form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const list = document.getElementById('list');
const balanceEl = document.getElementById('balance');

let transactions = JSON.parse(localStorage.getItem('spendwise_tx')) || [];

function updateUI() {
  list.innerHTML = '';
  let total = 0;

  transactions.forEach((tx, index) => {
    total += tx.amount;
    const li = document.createElement('li');
    const sign = tx.amount >= 0 ? '+' : '-';
    li.innerHTML = `
      <span>${tx.text}</span>
      <span>${sign}₹${Math.abs(tx.amount)} <button onclick="removeTx(${index})">x</button></span>
    `;
    list.appendChild(li);
  });

  balanceEl.textContent = total;
  localStorage.setItem('spendwise_tx', JSON.stringify(transactions));
}

function removeTx(index) {
  transactions.splice(index, 1);
  updateUI();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = textInput.value.trim();
  const amount = Number(amountInput.value);
  if (!text || !amount) return;

  transactions.push({ text, amount });
  textInput.value = '';
  amountInput.value = '';
  updateUI();
});

updateUI();
