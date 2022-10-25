const _a = document.querySelector.bind(document);
const __a = document.querySelectorAll.bind(document);

document.addEventListener("DOMContentLoaded", () => {
  const origin = window.location.origin;
  const navigations = __a("a");
  const navigators = Array.from(navigations).map((navigation) => ({
    origin: origin,
    path: navigation.href,
    name: navigation.textContent || navigation.href.substr(origin.length),
  }));

  const uniqueNavigators = navigators.filter(
    (navigator, index, self) =>
      index ===
      self.findIndex(
        (t) => t.origin === navigator.origin && t.path === navigator.path
      )
  );

  console.log(uniqueNavigators);
});

document.addEventListener("keypress", (event) => {
  log(event);
});
