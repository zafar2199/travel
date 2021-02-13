 const navbar = document.querySelector(".navbarr")
  const menu = document.querySelector(".menu-list")
  const menuBtn = document.querySelector(".menu-btn")
  const menuCancel = document.querySelector(".cancel-btn")
  const btnA = document.querySelector(".btnA")

  menuBtn.onclick = ()=>{
      menu.classList.add("active")
      menuBtn.classList.add("hide")
  }
  menuCancel.onclick = ()=>{
      menu.classList.remove("active")
      menuBtn.classList.remove("hide")   
  }
 
 
  window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") :navbar.classList.remove("sticky");
  }

//   swipper

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#ol',
      prevEl: '#orqa',
    },
  });
