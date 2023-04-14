function submitData() {
    // Ambil nilai-nilai input
    var nama = document.getElementById("nama").value;
    var nis = document.getElementById("nis").value;
    var mapel = document.getElementById("mapel").value;
    var nohp = document.getElementById("nohp").value;
    
    // Buat objek data siswa
    var siswa = {
        nama: nama,
        nis: nis,
        mapel: mapel,
        nohp: nohp
    };
    
    // Simpan data siswa ke dalam array
    var siswaList = JSON.parse(localStorage.getItem("siswaList")) || [];
    siswaList.push(siswa);
    localStorage.setItem("siswaList", JSON.stringify(siswaList));
    
    // Reset form
    document.getElementById("siswaForm").reset();
    
    // Tampilkan data siswa ke dalam tabel
    showData();
}

function showData() {
    // Ambil data siswa dari local storage
    var siswaList = JSON.parse(localStorage.getItem("siswaList")) || [];
    
    // Kosongkan tabel
    var tableBody = document.getElementById("siswaTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    
    // Tampilkan data siswa ke dalam tabel
    for (var i = 0; i < siswaList.length; i++) {
        var siswa = siswaList[i];
        var row = tableBody.insertRow(i);
        var namaCell = row.insertCell(0);
        var nisCell = row.insertCell(1);
        var mapelCell = row.insertCell(2);
        var nohpCell = row.insertCell(3);
        namaCell.innerHTML = siswa.nama;
        nisCell.innerHTML = siswa.nis;
        mapelCell.innerHTML = siswa.mapel;
        nohpCell.innerHTML = siswa.nohp;
    }
}
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableHeadRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  const nama = data.get('nama');
  const nim = data.get('nis');
  const hp = data.get('hp');
  const mapel = data.get('mapel')

  const headers = ['Nama', 'NIS', 'mapel', 'Nomor HP'];
  const values = [nama, nim, mapel, hp];

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    const value = values[i];

    const tableHeadCell = document.createElement('th');
    const tableBodyRow = document.createElement('tr');
    const tableBodyHeader = document.createElement('td');
    const tableBodyValue = document.createElement('td');

    tableHeadCell.textContent = header;
    tableBodyHeader.textContent = header;
    tableBodyValue.textContent = value;

    tableHeadRow.appendChild(tableHeadCell);
    tableBodyRow.appendChild(tableBodyHeader);
    tableBodyRow.appendChild(tableBodyValue);

    tableHead.appendChild(tableHeadRow);
    tableBody.appendChild(tableBodyRow);
  }

  table.appendChild(tableHead);
  table.appendChild(tableBody);
  
  result.innerHTML = '';
  result.appendChild(table);
  
  form.reset();
  });
