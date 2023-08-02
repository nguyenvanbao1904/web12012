let table = document.getElementById("table");
let tr, th, td;

table.innerHTML = `<caption>
        <h2>Bảng cửu chương</h2>
    </caption>`;
let count = 2;
for (let i = 0; i < 2; i++) {
    tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
        td = document.createElement("td");
        for (let k = 2; k <= 9; k++) {
            // Fix the loop range
            let p = document.createElement("p");
            p.textContent = `${count} x ${k} = ${count * k}`;
            td.appendChild(p); // Append each paragraph to the table cell
        }
        count++; // Move this inside the inner loop
        tr.appendChild(td);
    }
    table.appendChild(tr); // Append each row to the table
}
