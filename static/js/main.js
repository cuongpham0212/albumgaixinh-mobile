/* =========================================================
✅ MAIN.JS — Bảo vệ hình ảnh & chặn copy ở mức cao
---------------------------------------------------------
- Ngăn click chuột phải, Ctrl+S, Ctrl+U, Ctrl+Shift+I
- Ngăn kéo thả ảnh, ngăn copy text
- Ngăn save hình từ GLightbox (ở mức cơ bản)
- Không ảnh hưởng SEO hoặc UX
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // 🚫 Chặn chuột phải
  document.addEventListener("contextmenu", e => e.preventDefault());

  // 🚫 Chặn kéo thả ảnh
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("dragstart", e => e.preventDefault());
    img.addEventListener("contextmenu", e => e.preventDefault());
  });

  // 🚫 Chặn phím tắt phổ biến
  document.addEventListener("keydown", e => {
    // Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
    if (
      (e.ctrlKey && ["s", "S", "u", "U"].includes(e.key)) ||
      (e.ctrlKey && e.shiftKey && ["I", "i", "C", "c", "J", "j"].includes(e.key)) ||
      e.key === "F12"
    ) {
      e.preventDefault();
      alert("🚫 Tính năng này đã bị vô hiệu hoá để bảo vệ nội dung!");
    }
  });

  // 🚫 Chặn copy nội dung
  document.addEventListener("copy", e => {
    e.preventDefault();
    alert("🚫 Không được phép sao chép nội dung hoặc hình ảnh!");
  });

  // 🚫 Tự động xoá thuộc tính src khi devtools mở (ẩn ảnh gốc)
  let devToolsOpen = false;
  setInterval(() => {
    const start = performance.now();
    debugger; // gợi phát hiện mở DevTools
    if (performance.now() - start > 100) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        document.querySelectorAll("img").forEach(img => (img.src = ""));
        alert("🚫 Phát hiện DevTools — hình ảnh đã bị ẩn để bảo vệ bản quyền!");
      }
    } else {
      devToolsOpen = false;
    }
  }, 1000);
});
