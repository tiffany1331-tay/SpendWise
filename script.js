const salaryInput = document.getElementById('salaryInput');
const totalSalaryEl = document.getElementById('totalSalary');
const totalSpentEl = document.getElementById('totalSpent');
const balanceEl = document.getElementById('balance');
const alertBox = document.getElementById('alertBox');
const form = document.getElementById('form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const list = document.getElementById('list');

let salary = Number(localStorage.getItem('spendwise_salary')) || 0;
let expenses = JSON.parse(localStorage.getItem('spendwise_expenses')) || [];
let alertShown = false;

function setSalary() {
  const val = Number(salaryInput.value);
  if (val <= 0) return;
  salary = val;
  alertShown = false;
  localStorage.setItem('spendwise_salary', salary);
  salaryInput.value = '';
  updateUI();
}

function updateUI() {
  list.innerHTML = '';
  let spent = 0;

  expenses.forEach((item, index) => {
    spent += item.amount;
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.text}</span>
      <span>-₹${item.amount} <button onclick="removeExpense(${index})">x</button></span>
    `;
    list.appendChild(li);
  });

  const balance = salary - spent;
  totalSalaryEl.textContent = salary;
  totalSpentEl.textContent = spent;
  balanceEl.textContent = balance;

  if (salary > 0 && spent >= salary * 0.75) {
    alertBox.classList.remove('hidden');
    if (!alertShown) {
      alert("⚠️ Alert: You have used 75% of your salary!");
      alertShown = true;
    }
  } else {
    alertBox.classList.add('hidden');
    alertShown = false;
  }

  localStorage.setItem('spendwise_expenses', JSON.stringify(expenses));
}

function removeExpense(index) {
  expenses.splice(index, 1);
  updateUI();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = textInput.value.trim();
  const amount = Math.abs(Number(amountInput.value));
  if (!text || !amount) return;

  expenses.push({ text, amount });
  textInput.value = '';
  amountInput.value = '';
  updateUI();
});

updateUI();
