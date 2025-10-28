const themeBtn=document.getElementById("themeBtn");
themeBtn.onclick=()=>{
  document.body.classList.toggle("dark");
  const dark=document.body.classList.contains("dark");
  themeBtn.textContent=dark?"☀️ Light Mode":"🌙 Dark Mode";
  localStorage.setItem("theme",dark?"dark":"light");
};
window.onload=()=>{
  const saved=localStorage.getItem("theme");
  if(saved==="dark"){
    document.body.classList.add("dark");
    themeBtn.textContent="☀️ Light Mode";
  }
};