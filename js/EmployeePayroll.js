let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = " ";
      return;
    }
    try {
      new EmployeePayrollData().name = name.value;
      textError.textContent = " ";
    } catch (e) {
      textError.textContent = e;
    }
  });

  const salary = document.querySelector("#salary");
  const output = document.querySelector(".salary-output");
  output.textContent = salary.value;
  salary.addEventListener("input", function () {
    output.textContent = salary.value;
  });

  checkForUpdate();

});

const save = () => {
  try {
    if(employeePayrollObj._id != undefined){
      let empList =JSON.parse( localStorage.getItem('EmployeePayrollList'));
      console.log(employeePayrollObj);
      let index = empList.find(emp => emp._id == employeePayrollObj.id);
      empList.splice(index, 1);
      empList.push(employeePayrollObj);
      localStorage.setItem('EmployeePayrollList',JSON.stringify(empList));
    }
    else{   let employeePayrollData = createEmployeePayroll();
    createAndUpdateStorage(employeePayrollData);
  } }
  catch (e) {
    console.log(e);
    return;
  }
};

function createAndUpdateStorage(employeePayrollData) {
  let employeePayrollList = JSON.parse(
    localStorage.getItem("EmployeePayrollList")
  );
  if (employeePayrollList != undefined) {
    employeePayrollList.push(employeePayrollData);
  } else {
    employeePayrollList = [employeePayrollData];
  }
  alert(employeePayrollList.toString());
  localStorage.setItem(
    "EmployeePayrollList",
    JSON.stringify(employeePayrollList)
  );
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try {
    employeePayrollData.name = getInputValueById("#name");
  } catch (e) {
    setTextValue(".text-error", e);
    throw e;
  }
  employeePayrollData.id = createId();
  employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
  employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
  employeePayrollData.department = getSelectedValues("[name=department]");
  employeePayrollData.salary = getInputValueById("#salary");
  employeePayrollData.note = getInputValueById("#notes");
  let date =
    getInputValueById("#day") +
    " " +
    getInputValueById("#month") +
    " " +
    getInputValueById("#year");
  employeePayrollData.date = Date.parse(date);
  console.log(Date.parse(date));
  alert(employeePayrollData.toString());
  return employeePayrollData;
};

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach((item) => {
    if (item.checked) selItems.push(item.value);
  });
  return selItems;
};

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

const resetForm = () => {
  setValue("#name", "");
  unsetSelectedValues("[name=profile]");
  unsetSelectedValues("[name=gender]");
  unsetSelectedValues("[name=department]");
  setValue("#salary", "");
  setValue("notes", "");
  setValue("#day", "1");
  setValue("#month", "January");
  setValue("#year", 2020);
};

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelector(id);
  allItems.foEach((item) => {
    item.checked = false;
  });
};

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
};

const createId = () => {
  var id = localStorage.getItem("currentId");
  if (id == undefined) {
    localStorage.setItem("currentId", 1);
    return 2;
  } else {
    id = id + 1;
    localStorage.setItem("currentId", id);
    return id;
  }
};

const checkForUpdate = () => {
  const employeePayrollJSON = localStorage.getItem('editEmp');
  isUpdate = employeePayrollJSON ? true : false;
  if (!isUpdate) return;
  employeePayrollObj = JSON.parse(employeePayrollJSON);
  setForm();
};

const setForm = () => {
  setValue("#name", employeePayrollObj._name);
  setSelectedValues("[name=profile]", employeePayrollObj._profilePic);
  setSelectedValues("[name=gender]", employeePayrollObj._gender);
  setSelectedValues("[name=department]", employeePayrollObj._department);
  setValue("#salary", employeePayrollObj._salary);
  setTextValue(".salary-output", employeePayrollObj._salary);
  setValue("#notes", employeePayrollObj._note);
  let date = stringifyDate(employeePayrollObj._startDate).split("");
  setValue("#day", date[0]);
  setValue("#month", day[1]);
  setValue("#year", date[2]);
};

const setSelectedValues = (propertyValue, value) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach((item) => {
    if (Array.isArray(value)) {
      if (value.includes(item.value)) {
        item.checked = true;
      }
    } else if (item.value === value) item.checked = true;
  });
};
