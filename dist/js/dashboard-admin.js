document.addEventListener("DOMContentLoaded", function () {
  const occupancyCtx = document
    .getElementById("occupancyChart")
    .getContext("2d");
  const occupancyChart = new Chart(occupancyCtx, {
    type: "doughnut",
    data: {
      labels: ["Terisi", "Kosong"],
      datasets: [
        {
          data: [50, 10],
          backgroundColor: ["#3dadfd", "#dabc5a"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });

  const incomeCtx = document.getElementById("incomeChart").getContext("2d");
  const incomeChart = new Chart(incomeCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
      datasets: [
        {
          label: "Pemasukan (Rp Juta)",
          data: [4.2, 5.1, 4.8, 5.3, 5.0, 5.5, 8.9, 10],
          borderColor: "#55c55e",
          backgroundColor: "rgba(85, 197, 94, 0.2)",
          tension: 0.4,
          fill: true,
          pointBackgroundColor: "#55c55e",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: "Pemasukan Bulanan (Rp Juta)",
          font: {
            size: 16,
            weight: "bold",
          },
          padding: {
            bottom: 20,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Juta Rupiah",
          },
        },
      },
    },
  });

  const roomTypeCtx = document.getElementById("roomTypeChart").getContext("2d");
  const roomTypeChart = new Chart(roomTypeCtx, {
    type: "pie",
    data: {
      labels: ["Tipe A", "Tipe B", "Tipe C", "Tipe Premium"],
      datasets: [
        {
          data: [20, 15, 15, 10],
          backgroundColor: ["#4b77a9", "#5f255f", "#d21243", "#ff8c00"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });

  const paymentStatusCtx = document
    .getElementById("paymentStatusChart")
    .getContext("2d");
  const paymentStatusChart = new Chart(paymentStatusCtx, {
    type: "doughnut",
    data: {
      labels: ["Lunas", "Belum Lunas", "Terlambat"],
      datasets: [
        {
          data: [35, 10, 5],
          backgroundColor: ["#55c55e", "#dabc5a", "#cb655a"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    dashboard: document.getElementById("dashboard-content"),
    kamar: document.getElementById("data-kamar-content"),
    penyewa: document.getElementById("penyewa-content"),
    pembayaran: document.getElementById("pembayaran-content"),
  };

  function showSection(sectionName) {
    Object.values(sections).forEach((sec) => sec.classList.add("hidden"));
    sections[sectionName].classList.remove("hidden");
  }

  document
    .getElementById("menu-dashboard")
    .addEventListener("click", () => showSection("dashboard"));
  document
    .getElementById("menu-kamar")
    .addEventListener("click", () => showSection("kamar"));
  document
    .getElementById("menu-penyewa")
    .addEventListener("click", () => showSection("penyewa"));
  document
    .getElementById("menu-pembayaran")
    .addEventListener("click", () => showSection("pembayaran"));
});
