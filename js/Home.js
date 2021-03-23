window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml =
    "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>" +
    "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";

  let employeePayrollData = createEmployeePayrollJSON()[1];
  const innerHtml = `${headerHtml} 
  <tr>
    <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
    <td>${employeePayrollData._name}</td>
    <td>${employeePayrollData._gender}</td>
    <td>
        <div class='dept-label'>${employeePayrollData._department[0]}</div>
        <div class='dept-label'>${employeePayrollData._department[1]}</div>
    </td>
    <td>${employeePayrollData._salary}</td>
    <td>${employeePayrollData._startDate}</td>
    <td>
        <img id="${employeePayrollData._id}" onclick="remove(this)" alt="delete"
            src="../asserts/assets/icons/delete-black-18dp.svg">
        <img id="${employeePayrollData._id}" alt="edit" onclick="update(this)"
            src="../asserts/assets/icons/create-black-18dp.svg">
    </td>
</tr>
`;

  document.querySelector("#table-display").innerHTML = innerHtml;
};

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      _name: "Ashwani Khonde",
      _gender: "Female",
      _department: ["HR", "sales"],
      _salary: "500000",
      _startDate: "29 Oct 2019",
      _id: new Date().getTime(),
      _profilePic: "../asserts/assets/profile-images/Ellipse -1.png",
    },
    {
      _name: "Vikrant Chitte",
      _gender: "male",
      _department: ["HR", "Finance"],
      _salary: "6000000",
      _startDate: "28 nov 2019",
      _id: new Date().getTime(),
      _profilePic: "../asserts/assets/profile-images/Ellipse -2.png",
    },
  ];
  return empPayrollListLocal;
};
