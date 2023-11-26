import React from 'react'
import moment from 'moment'
import "../newCss/Footer.css";

function Footer() {
  // const current_date = new Date()
  // const current_new = new Date()
  const fixeddate = moment('2022-02-02','YYYY-MM-DD') 
  const currentdate = moment()
  const differentDate = currentdate.diff(fixeddate,'days')
  const style ={
    letterSpacing: '1px',
    color: 'black',
    fontSize: '16px',
    textDecoration: 'none',
    cursor:"default",

  }
  return (
    <>
        <footer>
         <ul>
          <li><a href="https://www.facebook.com/profile.php?id=100006983837465">Facebook <i class="fa fa-facebook" aria-hidden="true"></i>

</a></li>
          <li><a href="https://github.com/Musaif786">Github <i class="fa fa-github" aria-hidden="true"></i>
</a></li>
          <li><a href="https://www.instagram.com">Instagram <i class="fa fa-instagram" aria-hidden="true"></i>
</a></li>
          <li><a href="https://wa.me/+917995587687 ">WhatsApp <i class="fa fa-whatsapp" aria-hidden="true"></i>
</a></li>
         </ul>
        </footer>
         <div className='footer-div'>
            <a style={style} href='https://tinyurl.com/yr4q7d95/speak?speak=Hello world welcome to automation world'> Musaif</a>	Created &copy;{differentDate} Days Ago, Now &copy;{currentdate.format('YYYY-MM-DD')}
         </div>
    </>
  )
}

export default Footer