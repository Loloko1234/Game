const handleDarkModeToggle = () => {
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const search = document.querySelector("input");
  nav.classList.toggle("dark");
  body.classList.toggle("darkes");
  search.classList.toggle("dark");
};
export default handleDarkModeToggle;
