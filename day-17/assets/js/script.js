// Salary Slip Logic
let empName = document.getElementById('empName');
let empSalary = document.getElementById('empSalary');
let display = document.querySelector('#tbldata');

let slips = JSON.parse(localStorage.getItem('slips')) || [];
let editId = null;

const generateSlip = () => {
  if (!empName.value.trim() || !empSalary.value.trim()) {
    alert("Please enter both fields!");
    return;
  }

  let basic = parseFloat(empSalary.value);

  // Allowances
  let hra = basic * 0.20;
  let da  = basic * 0.10;
  let ta  = basic * 0.05;

  // Deductions
  let pf  = basic * 0.12;
  let tax = basic * 0.10;

  let netSalary = basic + hra + da + ta - (pf + tax);

  if (editId === null) {
    let slip = { 
      id: Date.now(), 
      name: empName.value, 
      basic, hra, da, ta, pf, tax, netSalary 
    };
    slips.push(slip);
  } else {
    slips = slips.map(slip => slip.id == editId 
      ? { ...slip, name: empName.value, basic, hra, da, ta, pf, tax, netSalary } 
      : slip
    );
    editId = null;
  }

  localStorage.setItem('slips', JSON.stringify(slips));
  displayData();

  empName.value = "";
  empSalary.value = "";
  empName.focus();
};

const displayData = () => {
  display.innerHTML = '';
  slips.forEach((slip, index) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${slip.name}</td>
      <td>${slip.basic.toFixed(2)}</td>
      <td>${slip.hra.toFixed(2)}</td>
      <td>${slip.da.toFixed(2)}</td>
      <td>${slip.ta.toFixed(2)}</td>
      <td>${slip.pf.toFixed(2)}</td>
      <td>${slip.tax.toFixed(2)}</td>
      <td><b>${slip.netSalary.toFixed(2)}</b></td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteSlip(${slip.id})">Delete</button>
        <button class="btn btn-warning btn-sm" onclick="editSlip(${slip.id})">Edit</button>
      </td>
    `;
    display.appendChild(row);
  });
};

const deleteSlip = (id) => {
  slips = slips.filter(slip => slip.id !== id);
  localStorage.setItem('slips', JSON.stringify(slips));
  displayData();
};

const editSlip = (id) => {
  editId = id;
  let slipToEdit = slips.find(slip => slip.id === id) || {};
  empName.value = slipToEdit.name || "";
  empSalary.value = slipToEdit.basic || "";
  empName.focus();
};

displayData();
