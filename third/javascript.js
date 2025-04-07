let users = [];

function showAddUser() {
  document.getElementById("addUserSection").style.display = "block";
  document.getElementById("removeUserSection").style.display = "none";

  document.getElementById("firstName").style.display = "inline-block";
  document.getElementById("lastName").style.display = "inline-block";
  document.getElementById("submitBtn").style.display = "inline-block";
}

function showRemoveUser() {
  document.getElementById("addUserSection").style.display = "none";
  document.getElementById("removeUserSection").style.display = "block";
  renderUserList();
}

function addUser() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  if (firstName && lastName) {
    users.push({ firstName, lastName });
    firstNameInput.value = "";
    lastNameInput.value = "";
    alert("User added successfully!");

    firstNameInput.style.display = "none";
    lastNameInput.style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
  } else {
    alert("Please enter both first and last name.");
  }
}

function renderUserList() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  if (users.length === 0) {
    userList.innerHTML = "<p>No users to display.</p>";
    return;
  }

  users.forEach((user, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" value="${index}" /> 
      ${user.firstName} ${user.lastName}
    `;
    userList.appendChild(label);
  });
}

function removeSelectedUsers() {
  const checkboxes = document.querySelectorAll(
    '#userList input[type="checkbox"]:checked'
  );
  const indexesToRemove = Array.from(checkboxes).map((cb) =>
    parseInt(cb.value)
  );

  indexesToRemove
    .sort((a, b) => b - a)
    .forEach((index) => users.splice(index, 1));
  renderUserList();
}
