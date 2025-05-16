document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    dashboard: document.getElementById("dashboard-content"),
    listKamar: document.getElementById("data-kamar-content"),
    tambahKamar: document.getElementById("tambah-kamar-content"),
    listPenyewa: document.getElementById("penyewa-content"),
    tambahPenyewa: document.getElementById("tambah-penyewa-content"),
    pembayaran: document.getElementById("pembayaran-content"),
  };

  function showSection(sectionName) {
    Object.values(sections).forEach((sec) => {
      if (sec) sec.classList.add("hidden");
    });
    if (sections[sectionName]) {
      sections[sectionName].classList.remove("hidden");
    }
  }

  // Event listeners untuk menu utama
  document
    .getElementById("menu-dashboard")
    .addEventListener("click", () => showSection("dashboard"));
  document
    .getElementById("menu-pembayaran")
    .addEventListener("click", () => showSection("pembayaran"));

  // Event listeners untuk submenu Data Kamar
  document.getElementById("menu-list-kamar").addEventListener("click", () => {
    showSection("listKamar");
    initializeRoomsDisplay();
  });

  document
    .getElementById("menu-tambah-kamar")
    .addEventListener("click", () => showSection("tambahKamar"));

  // Event listeners untuk submenu Penyewa
  document
    .getElementById("menu-list-penyewa")
    .addEventListener("click", () => showSection("listPenyewa"));
  document
    .getElementById("menu-tambah-penyewa")
    .addEventListener("click", () => showSection("tambahPenyewa"));

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
  const roomData = [
    {
      id: 1,
      number: "101",
      type: "Tipe A",
      status: "empty",
      description:
        "Kamar dengan fasilitas AC, kamar mandi dalam, dan free WiFi.",
      price: 800000,
      image: "./assets/hotel.jpg",
    },
    {
      id: 2,
      number: "102",
      type: "Tipe A",
      status: "empty",
      description:
        "Kamar dengan fasilitas AC, kamar mandi dalam, dan free WiFi.",
      price: 800000,
      image: "./assets/hotel.jpg",
    },
    {
      id: 3,
      number: "103",
      type: "Tipe B",
      status: "occupied",
      description:
        "Kamar dengan fasilitas kipas angin, kamar mandi dalam, dan free WiFi.",
      price: 650000,
      tenant: {
        name: "Putra",
        startDate: "1 Mar 2023",
        paymentStatus: "Lunas",
      },
      image: "./assets/hotel.jpg",
    },
    {
      id: 4,
      number: "201",
      type: "Tipe Premium",
      status: "occupied",
      description:
        "Kamar dengan fasilitas AC, TV, kamar mandi dalam, dan free WiFi.",
      price: 1200000,
      tenant: {
        name: "Budi",
        startDate: "15 Feb 2023",
        paymentStatus: "Belum Lunas",
      },
      image: "./assets/hotel.jpg",
    },
    {
      id: 5,
      number: "202",
      type: "Tipe Premium",
      status: "empty",
      description:
        "Kamar dengan fasilitas AC, TV, kamar mandi dalam, dan free WiFi.",
      price: 1200000,
      image: "./assets/hotel.jpg",
    },
    {
      id: 6,
      number: "203",
      type: "Tipe C",
      status: "occupied",
      description:
        "Kamar dengan fasilitas kipas angin dan kamar mandi bersama.",
      price: 500000,
      tenant: {
        name: "Indah",
        startDate: "1 Jan 2023",
        paymentStatus: "Lunas",
      },
      image: "./assets/hotel.jpg",
    },
    {
      id: 6,
      number: "203",
      type: "Tipe C",
      status: "occupied",
      description:
        "Kamar dengan fasilitas kipas angin dan kamar mandi bersama.",
      price: 500000,
      tenant: {
        name: "Indah",
        startDate: "1 Jan 2023",
        paymentStatus: "Lunas",
      },
      image: "./assets/hotel.jpg",
    },
    {
      id: 6,
      number: "203",
      type: "Tipe C",
      status: "empty",
      description:
        "Kamar dengan fasilitas kipas angin dan kamar mandi bersama.",
      price: 500000,
      tenant: {
        name: "Indah",
        startDate: "1 Jan 2023",
        paymentStatus: "Lunas",
      },
      image: "./assets/hotel.jpg",
    },
  ];

  function initializeRoomsDisplay() {
    const emptyRoomsContainer = document.getElementById(
      "empty-rooms-container"
    );
    const occupiedRoomsContainer = document.getElementById(
      "occupied-rooms-container"
    );
    const emptyRoomsTemplate = document.getElementById("empty-room-template");
    const occupiedRoomsTemplate = document.getElementById(
      "occupied-room-template"
    );

    emptyRoomsContainer.innerHTML = "";
    occupiedRoomsContainer.innerHTML = "";

    const emptyRooms = roomData.filter((room) => room.status === "empty");
    const occupiedRooms = roomData.filter((room) => room.status === "occupied");

    document.getElementById("empty-rooms-count").textContent =
      emptyRooms.length;
    document.getElementById("occupied-rooms-count").textContent =
      occupiedRooms.length;

    emptyRooms.forEach((room) => {
      const roomElement = emptyRoomsTemplate.content.cloneNode(true);

      roomElement.querySelector(
        ".room-number"
      ).textContent = `Kamar ${room.number}`;
      roomElement.querySelector(".room-type").textContent = room.type;
      roomElement.querySelector(".room-description").textContent =
        room.description;
      roomElement.querySelector(".room-price").textContent = formatPrice(
        room.price
      );

      if (room.image) {
        roomElement.querySelector(
          ".room-bg"
        ).style.backgroundImage = `url('${room.image}')`;
      }

      emptyRoomsContainer.appendChild(roomElement);
    });

    occupiedRooms.forEach((room) => {
      const roomElement = occupiedRoomsTemplate.content.cloneNode(true);

      const roomNumberElements = roomElement.querySelectorAll(".room-number");
      roomNumberElements.forEach(
        (el) => (el.textContent = `Kamar ${room.number}`)
      );

      roomElement.querySelector(".room-type").textContent = room.type;

      const tenantNameElements = roomElement.querySelectorAll(".tenant-name");
      tenantNameElements.forEach((el) => (el.textContent = room.tenant.name));

      roomElement.querySelector(".tenant-start-date").textContent =
        room.tenant.startDate;

      const paymentStatusElement = roomElement.querySelector(".payment-status");
      paymentStatusElement.textContent = room.tenant.paymentStatus;

      if (room.tenant.paymentStatus === "Lunas") {
        paymentStatusElement.classList.remove(
          "text-yellow-600",
          "text-red-600"
        );
        paymentStatusElement.classList.add("text-green-600");
      } else if (room.tenant.paymentStatus === "Belum Lunas") {
        paymentStatusElement.classList.remove("text-green-600", "text-red-600");
        paymentStatusElement.classList.add("text-yellow-600");
      } else if (room.tenant.paymentStatus === "Terlambat") {
        paymentStatusElement.classList.remove(
          "text-green-600",
          "text-yellow-600"
        );
        paymentStatusElement.classList.add("text-red-600");
      }

      if (room.image) {
        roomElement.querySelector(
          ".room-bg"
        ).style.backgroundImage = `url('${room.image}')`;
      }

      occupiedRoomsContainer.appendChild(roomElement);
    });

    document.querySelectorAll(".room-card").forEach((card) => {
      card.addEventListener("click", function () {
        const roomNumber = this.querySelector(".room-number").textContent;
        console.log(`Clicked on ${roomNumber}`);
        alert(`Detail untuk ${roomNumber} akan ditampilkan`);
      });
    });
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID").format(price);
  }

  document.getElementById("menu-kamar").addEventListener("click", function () {
    initializeRoomsDisplay();
  });
});
