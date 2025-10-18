document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");
  const openBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.getElementById("menuClose");

  // Ẩn menu khi load
  menu.classList.remove("show");
  overlay.style.display = "none";

  // ✅ Mở menu
  openBtn?.addEventListener("click", () => {
    menu.classList.add("show");
    overlay.style.display = "block";
    setTimeout(() => (overlay.style.opacity = "1"), 10);
  });

  // ✅ Đóng menu
  const closeMenu = () => {
    menu.classList.remove("show");
    overlay.style.opacity = "0";
    setTimeout(() => (overlay.style.display = "none"), 300);
  };
  closeBtn?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);

  // ✅ Toggle submenu khi bấm nút riêng
  document.querySelectorAll(".submenu-toggle").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      e.preventDefault();
      const li = btn.closest("li");
      const submenu = li?.querySelector(".submenu");
      const icon = btn.querySelector("i");

      if (!submenu) return;

      const isOpen = submenu.classList.contains("show");
      document.querySelectorAll("#mobileMenu .submenu").forEach(s => s.classList.remove("show"));
      document.querySelectorAll("#mobileMenu .submenu-toggle i").forEach(i => {
        i.classList.remove("fa-chevron-up");
        i.classList.add("fa-chevron-down");
      });

      if (!isOpen) {
        submenu.classList.add("show");
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });
});
