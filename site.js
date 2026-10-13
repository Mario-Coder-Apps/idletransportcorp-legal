// Show the page in German or English: the choice from the links ("#de", "#en"), else the browser's language.
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  function show(lang) {
    var any = document.querySelector('[data-lang="' + lang + '"]');
    if (!any) lang = "en";
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.classList.toggle("shown", el.getAttribute("data-lang") === lang);
    });
    document.querySelectorAll("nav.lang a").forEach(function (a) {
      a.classList.toggle("on", a.getAttribute("href") === "#" + lang);
    });
    document.querySelectorAll("a.page").forEach(function (a) {   // the other pages open in the same language
      a.setAttribute("href", a.getAttribute("href").split("#")[0] + "#" + lang);
    });
    root.lang = lang;
  }
  function pick() {
    var h = location.hash.replace("#", "");
    if (h === "de" || h === "en") return h;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("de") === 0 ? "de" : "en";
  }
  window.addEventListener("hashchange", function () { show(pick()); });
  document.addEventListener("DOMContentLoaded", function () { show(pick()); });
})();
