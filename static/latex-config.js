document.addEventListener("DOMContentLoaded", function () {
  renderMathInElement(document.body, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true }
    ],
    throwOnError: false,
    macros: {
      sc: "\\dosc#1\\csod",
      dosc: "\\def\\sc##1{\\dosc##1\\csod}"
    }
  });
});
