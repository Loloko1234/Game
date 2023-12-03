const handleDarkModeToggle = () => {
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const search = document.querySelector("input");
  const select = document.querySelector("select");
  const button = document.querySelector("button");
  const essaElements = document.querySelectorAll(".essa");
  nav.classList.toggle("dark");
  body.classList.toggle("darkes");
  search.classList.toggle("dark");
  select.classList.toggle("dark");
  button.classList.toggle("dark");
  essaElements.forEach((essa) => essa.classList.toggle("dark"));
};
export default handleDarkModeToggle;
