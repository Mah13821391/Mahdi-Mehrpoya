(function () {
  var root = document.documentElement;
  // ذخیره کردن المنت‌ها در یک متغیر برای جلوگیری از جستجوی مکرر در DOM
  var toggles = document.querySelectorAll("[data-toggle-mode]");

  function apply(mode) {
    root.setAttribute("data-mode", mode);
    var isRed = mode === "red";
    
    // استفاده از متغیر ذخیره شده به جای جستجوی مجدد
    toggles.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(isRed));
    });

    try { localStorage.setItem("mode", mode); } catch (e) {}
  }

  function toggle() {
    // استفاده از حالت فعلی برای تصمیم‌گیری
    var current = root.getAttribute("data-mode") || "mono";
    apply(current === "red" ? "mono" : "red");
  }

  toggles.forEach(function (el) {
    el.addEventListener("click", toggle);
  });

  // لود اولیه
  apply(root.getAttribute("data-mode") || "mono");
})();
