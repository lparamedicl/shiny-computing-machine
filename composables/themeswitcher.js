const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.classList.add("dark");
  }
  
  
  export default function () {
    return themeSwitch
  }