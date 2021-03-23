window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  console.log("table dipaly");
  const innerHtml = ` 
  <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>
<tr>
    <td><img class="profile" alt="" src="../asserts/assets/profile-images/Ellipse -2.png"></td>
    <td>Ashwini Khonde</td>
    <td>Female</td>
    <td>
        <div class='dept-label'>HR</div>
        <div class='dept-label'>Finance</div>
    </td>
    <td>300000</td>
    <td>1 nov 2020</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
            src="../asserts/assets/icons/delete-black-18dp.svg">
        <img id="2" alt="edit" onclick="update(this)"
            src="../asserts/assets/icons/create-black-18dp.svg">
    </td>
</tr>
`;

  document.querySelector("#table-display").innerHTML = innerHtml;
};
