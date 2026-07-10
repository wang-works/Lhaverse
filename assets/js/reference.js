document.querySelectorAll("[style-hover]").forEach((element) => {
  const baseStyle = element.getAttribute("style") || "";
  const hoverStyle = element.getAttribute("style-hover") || "";

  element.addEventListener("mouseenter", () => element.setAttribute("style", `${baseStyle}; ${hoverStyle}`));
  element.addEventListener("mouseleave", () => element.setAttribute("style", baseStyle));
});

document.querySelectorAll("form[data-reference-subscribe]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button, input[type='submit']");
    if (button) button.textContent = "See you out there ✓";
  });
});

document.querySelectorAll("form[data-reference-send]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button, input[type='submit']");
    if (button) button.textContent = "Thank you — we will be in touch.";
  });
});
