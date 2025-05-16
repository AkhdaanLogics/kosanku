document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    beranda: document.getElementById("beranda-user-content"),
    pembayaran: document.getElementById("pembayaran-user-content"),
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
});
