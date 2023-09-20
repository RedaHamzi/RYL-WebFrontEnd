let header_element = `<header>
    <div class="container">
      <div>
        <a href="index.html" class="name">RYL</a>
        <span class="sand-icon"><i class="fa-solid fa-bars"></i></span>
        <!--<span class="x-icon"><i class="fa-solid fa-xmark"></i></span>-->
      </div>
    </div>
  </header>`;
let footer_element = `<footer>
    <div id="copyRight"></div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100084776265581&mibextid=ZbWKwL">facebook</a>
      <a href="https://instagram.com/hamzimohamedreda?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">Instagram</a>
      <a href="https://dribbble.com/RYL_Hamzi">Dribble</a>
      <a href="https://github.com/RedaHamzi">GitHub</a>
    </div>
  </footer>`;
let invisible_section_element = `<div class="invisible">
    <a href="about.html">about</a>
    <a href="strategy.html">strategy</a>
    <a href="contact.html">contact</a>
  </div>`
let body = document.body;
body.innerHTML = header_element + body.innerHTML+footer_element + invisible_section_element;


/*_________________________________*/
let sand_icon = document.querySelector("header .container .sand-icon");
let invisible_section = document.querySelector(".invisible");
sand_icon.addEventListener("click", () =>{
  if(sand_icon.innerHTML== `<i class="fa-solid fa-bars"></i>`){

      sand_icon.innerHTML =
    `<i class="fa-solid fa-xmark"></i>`;
      invisible_section.style.display = "flex";
  }else if(sand_icon.innerHTML ==
    `<i class="fa-solid fa-xmark"></i>`){

      sand_icon.innerHTML =
    `<i class="fa-solid fa-bars"></i>`;
     invisible_section.style.display = "none";
    }
})
/*
let sand_icon = document.querySelector("header .container .sand-icon");
let landing_section = document.querySelector(".landing")
let originalText = landing_section.innerHTML

sand_icon.addEventListener("click", () =>{
  if(sand_icon.innerHTML== `<i class="fa-solid fa-bars"></i>`){
      sand_icon.innerHTML =
    `<i class="fa-solid fa-xmark"></i>`;
      landing_section.innerHTML =
    `<div class="invisible">
        <a href="about.html">about</a>
        <a href="strategy.html">strategy</a>
        <a href="contact.html">contact</a>
      </div>`;
  }else if(sand_icon.innerHTML ==
    `<i class="fa-solid fa-xmark"></i>`){
      sand_icon.innerHTML =
    `<i class="fa-solid fa-bars"></i>`;

      landing_section.innerHTML = originalText;
    }
})
*/

/*---------------------------*/
let footer_cpy = document.getElementById("copyRight");
footer_cpy.innerHTML =
 `&copy;${(new Date()).getFullYear()}.RYL`