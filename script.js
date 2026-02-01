const d = new Date();
const pad = (n) => String(n).padStart(2, "0");

document.getElementById("year").textContent = d.getFullYear();

const updated = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
document.getElementById("updated").textContent = updated;
