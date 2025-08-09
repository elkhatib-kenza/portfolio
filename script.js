// sidebar element 

const sideMenu= document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLink = document.querySelector("nav ul");


function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener("scroll", () => {
    if (scrollY > 50) {
      navBar.classList.add('backdrop-blur-lg', 'shadow-sm', 'bg-[rgba(255,255,255,0.5)]','dark:bg-darkTheme');
      navLink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    } else {
      navBar.classList.remove('backdrop-blur-lg', 'shadow-sm', 'bg-[rgba(255,255,255,0.5)]','dark:bg-darkTheme');
      navLink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }
  });


//-------------- light mode and dark mode -------------

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';

    }else{
        localStorage.theme = 'light';
    }
}












