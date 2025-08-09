
// Interactive behaviors: mobile menu, form submit simulation, year
document.getElementById('year')?.textContent = new Date().getFullYear();

document.addEventListener('click', function(e){
  if(e.target.closest('.hamburger')){
    document.querySelector('.nav-links').classList.toggle('open');
  }
});

function submitForm(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Šalje se...';
  setTimeout(()=>{
    status.textContent = 'Hvala! Vaš upit je primljen. Pozvaćemo vas uskoro.';
    e.target.reset();
  }, 900);
}
