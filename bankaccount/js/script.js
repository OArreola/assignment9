/*eslint-env browser*/

let $ = function (id) {
  "use strict";
  return window.document.getElementById(id);
};

let bankAccount = (ownerName) => {
  "use strict";
  //PRIVATE MEMBERS
  let balance = 0;
  let owner = ownerName;
  const updateInfo = () => {
    //window.console.log(balance, owner);
    $("info").innerHTML =
      "<p>Owner's Name: " +
      ownerName +
      "<br>Balance: $" +
      balance.toFixed(2) +
      "</p>";
  };
  updateInfo();
  //PUBLIC MEMBERS
  return {
    withdrawal: (withdrawalAmount) => {
      if (isNaN(withdrawalAmount) || withdrawalAmount < 0) {
        window.alert("Invalid withdrawal amount");
      } else if (withdrawalAmount > balance) {
        window.alert("Insuficient Funds!");
      } else {
        balance -= withdrawalAmount;
        updateInfo();
        window.alert("Withdrawal completed.");
      }
    },
    deposit: (depositAmount) => {
      if (isNaN(depositAmount) || depositAmount < 0) {
        window.alert("Invalid deposit amount");
      } else {
        balance += depositAmount;
        updateInfo();
        window.alert("Deposit completed.");
      }
    },
    getBalance: () => {
      return balance;
    },
    getOwnerName: () => {
      return owner;
    },
  };
};

window.addEventListener("load", function () {
  "use strict";
  let account = null;
  $("btnName").onclick = function () {
    let owner = window.prompt("Enter Account's Owner Name:");
    if (owner !== null) {
      account = bankAccount(owner);
    }
  };
  $("btnDeposit").onclick = function () {
    if (account !== null) {
      let amount = window.prompt("Enter Deposit Amount:");
      if (amount !== null) {
        account.deposit(Number(amount));
      }
    } else {
      window.alert("Please enter Name first.");
    }
  };
  $("btnWithdrawal").onclick = function () {
    if (account !== null) {
      let amount = window.prompt("Enter Withdrawal Amount:");
      if (amount !== null) {
        account.withdrawal(Number(amount));
      }
    } else {
      window.alert("Please enter Name first.");
    }
  };
});
