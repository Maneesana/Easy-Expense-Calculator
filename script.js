//expense-date
//new-item-price
//new-item-name
const newExpenseDate = document.querySelector(".expense-date");
const newItemName = document.querySelector(".new-item-name");
const newItemPrice = document.querySelector(".new-item-price");
const submitButton = document.querySelector(".form-submit-button");

const selectedYear = document.querySelector(".select-years");
const selectedMonths = document.querySelector(".select-months");
const expenseDataOutput = document.querySelector(".expenses__data");

const expenseData = [
  {
    date: new Date(2020, 10, 24),
    "item-name": "Mac Book Pro",
    "item-price": 1200000,
  },
  {
    date: new Date(2021, 3, 12),
    "item-name": "Dinner",
    "item-price": 1200,
  },
  {
    date: new Date(2019, 5, 23),
    "item-name": "Medicine",
    "item-price": 450,
  },
  {
    date: new Date(2021, 0, 12),
    "item-name": "Books",
    "item-price": 1000,
  },
  {
    date: new Date(2022, 5, 14),
    "item-name": "Dating",
    "item-price": 5455,
  },
  {
    date: new Date(2021, 0, 14),
    "item-name": "Trip",
    "item-price": 5455,
  },
  {
    date: new Date(2021, 2, 14),
    "item-name": "Fees",
    "item-price": 5455,
  },
  {
    date: new Date(2021, 4, 14),
    "item-name": "Alcohol",
    "item-price": 5455,
  },
  {
    date: new Date(2021, 3, 14),
    "item-name": "Shopping",
    "item-price": 5455,
  },
];

// function displaying all expenses
function displayAllExpenses() {
  let totalAmount = 0;
  if (expenseFiltered.length > 0) {
    expenseFiltered.forEach((exp) => {
      totalAmount += exp["item-price"];
      let toInsertHTML = `<div class="each__expense">
  <div class="each__expense--date">${exp.date.toDateString()}</div>
  <div class="each__expense--name">${exp["item-name"]}</div>
  <div class="each__expense--price">Rs. ${exp["item-price"]}</div>
  </div>`;
      expenseDataOutput.insertAdjacentHTML("afterbegin", toInsertHTML);
    });
    let totalExpenditure = ` <div class="total__expenditure">
  <div class="total--amount">
    <p>Total Expenditure</p>
    <p>Rs${totalAmount}</p>
  </div>
</div>`;
    expenseDataOutput.insertAdjacentHTML("beforeend", totalExpenditure);
  } else {
    expenseDataOutput.insertAdjacentHTML(
      "afterbegin",
      `<p class="no-expense">There is no expense for this year and month</p>`
    );
  }
}
// function for removing unnessary expenses
function removeExpenses() {
  expenseDataOutput.innerHTML = "";
}

var expenseFiltered;
const filterAllExpenses = () => {
  expenseFiltered = expenseData.filter((exp) => {
    return (
      (exp.date.getFullYear() == selectedYear.value) &
      (exp.date.getMonth().toString() == selectedMonths.value)
    );
  });
  console.log(expenseFiltered);
  console.log(selectedYear.value);
  console.log("selected months", selectedMonths.value);
  removeExpenses();
  displayAllExpenses();
};

// options event listeners
selectedYear.addEventListener("change", filterAllExpenses);
selectedMonths.addEventListener("change", filterAllExpenses);

// submit button
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const expenseNewObj = {
    date: new Date(newExpenseDate.value),
    "item-name": newItemName.value,
    "item-price": parseInt(newItemPrice.value),
  };

  // load expense data
  // function
  expenseData.push(expenseNewObj);
  //   console.log(expenseNewObj);
  newItemName.value = "";
  newExpenseDate.value = "";
  newItemPrice.value = "";
  console.log(expenseData);
});
