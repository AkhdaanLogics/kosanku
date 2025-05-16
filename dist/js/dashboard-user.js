document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    beranda: document.getElementById("beranda-user-content"),
    pembayaran: document.getElementById("pembayaran-user-content"),
    faq: document.getElementById("faq-user-content"),
  };

  function showSection(sectionName) {
    Object.values(sections).forEach((sec) => sec.classList.add("hidden"));
    sections[sectionName].classList.remove("hidden");
  }

  document
    .getElementById("user-menu-dashboard")
    .addEventListener("click", () => showSection("beranda"));
  document
    .getElementById("user-menu-pembayaran")
    .addEventListener("click", () => showSection("pembayaran"));
  document
    .getElementById("user-menu-faq")
    .addEventListener("click", () => showSection("faq"));

  // ========================
  // QRIS Modal Logic
  // ========================
  const qrisModal = document.getElementById("qrisModal");
  const closeQrisModal = document.getElementById("closeQrisModal");

  // Handle all "Bayar Sekarang" buttons
  document.querySelectorAll("button").forEach((btn) => {
    if (btn.textContent.includes("Bayar Sekarang")) {
      btn.addEventListener("click", () => {
        qrisModal.classList.remove("hidden");
        qrisModal.classList.add("flex");
      });
    }
  });

  closeQrisModal.addEventListener("click", () => {
    qrisModal.classList.remove("flex");
    qrisModal.classList.add("hidden");
  });

  // Optional: Close modal when clicking outside of it
  qrisModal.addEventListener("click", (e) => {
    if (e.target === qrisModal) {
      qrisModal.classList.remove("flex");
      qrisModal.classList.add("hidden");
    }
  });
});
