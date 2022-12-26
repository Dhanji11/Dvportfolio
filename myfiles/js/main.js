AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

    var type=new Typed('.text-brand',{
            strings :[,'Front end developer','UI/UX designer','web developer'],
            typespeed :1200,
            loop:true
          });

             
  let themeColor=document.querySelectorAll('.theme-toggler span');
    themeColor.forEach(Color => color.addEventListener('click', ()=>
    {
        let background=color.style.background;
        document.querySelector('body').style.background=background;
    }));

    // form validation
    function create_account(){  
      var n=document.getElementById("n1").value;  
      var e=document.getElementById("e1").value;  
      var p=document.getElementById("p1").value;  
      var cp=document.getElementById("p2").value;  
      //Code for password validation  
              var letters = /^[A-Za-z]+$/;  
              var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
      //other validations required code  
      if(n==''||e==''||p==''||cp==''){  
      alert("Enter each details correctly");  
      }  
      else if(!letters.test(n))  
              {  
                  alert('Name is incorrect must contain alphabets only');  
              }  
      else if (!email_val.test(e))  
              {  
                  alert('Invalid email format please enter valid email id');  
              }  
      else if(p!=cp)  
      {  
      alert("Passwords not matching");  
      }  
      else if(document.getElementById("p1").value.length > 12)  
      {  
      alert("Password maximum length is 12");  
      }  
      else if(document.getElementById("p1").value.length < 6)  
      {  
      alert("Password minimum length is 6");  
      }  
      else{  
      alert("Your account has been created successfully... Redirecting to JavaTpoint.com");  
      window.location="https://www.javatpoint.com/";  
      }  
      }  