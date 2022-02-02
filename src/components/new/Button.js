import React, { useEffect } from 'react';
import "../newCss/Button.css";



function Button() {



window.addEventListener("scroll",function(){
    let Topbtn1 = document.querySelector('.topBtn');
    function check(){
      var high = window.pageYOffset;
      if(high >= 350){
        Topbtn1.style.display = "block";
      }else{
        Topbtn1.style.display = "none";
      }
    }
    check();

  } )

return <div>

   <div className='topBtn'>

      <button><a href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
</button>
   </div>
  </div>;
}

export default Button;
