import { MoveDown, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
  return (
    <main className='wrapper'>
      <img className="home-image" src={'/HomeImage.png'} alt="Home" />
      <header>
        <div className="logo playfair-display">MNTN</div>
        <nav>
          <ul>
            <Link href={'/'}><li>Home</li></Link>
           <Link href={'/about'}><li>About us</li></Link> 
            <li>Blog</li>
          </ul>
        </nav>
        <div className="account">
          <img src="cart.png" alt="" />
          <p>Account</p>
        </div>
      </header>
      <div className="center-text">
        <div className="line-parent">
          <div className="line"></div>
          <h3> A HIKING GUID</h3>
        </div>
        <p className="paragraph playfair-display">Be Prepared For The Mountains And Beyond!</p>
        <div className="scroll-down">
          <Link href='#blog'>
            <div>
              scroll down
            </div><i><MoveDown /> </i>
          </Link>
        </div>
      </div>


      <div className="social-links">
        <h3 className='follow-us'>Follow Us</h3>
        <i> <Instagram /></i>
        <i><Twitter /></i>
      </div>

      <section id='blog'>


        <div className="main-div-1">
          <div className="num">
            <h4>01</h4>
            <div className="text-img">
              <div className="text">
                <div className="line-parent">
                  <div className="line"></div>
                  <h3>GET STARTED</h3>
                </div>
                <h2 className='playfair-display'>What level of  hiker are you?</h2>
                <div className='para'>
                  <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                </div>
              </div>
              <div className="image">
                <img src="01.png" alt="" width={400} />
              </div>
            </div>
          </div>
        </div>







        <div className="main-div-2">
          <div className="num">
            <h4>02</h4>
            <div className="text-img">
              <div className="text">
                <div className="line-parent">
                  <div className="line"></div>
                  <h3>HIKING ESSENTIAL</h3>
                </div>
                <h2 className='playfair-display'>Picking the Right Hiking Gear!</h2>
                <div className='para'>
                  <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                </div>
              </div>
              <div className="image">
                <img src="02.png" alt="" width={400} />
              </div>
            </div>
          </div>
        </div>


        <div className="main-div-3">
          <div className="num">
            <h4>03</h4>
            <div className="text-img">
              <div className="text">
                <div className="line-parent">
                  <div className="line"></div>
                  <h3>HIKING ESSENTIAL</h3>
                </div>
                <h2 className='playfair-display'>Understanding your Map & Timing</h2>
                <div className='para'>
                  <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                </div>
              </div>
              <div className="image">
                <img src="03.png" alt="" width={400} />
              </div>
            </div>
          </div>
        </div>






        <footer>
          <div className='footer-log0-div'>
            <h3 className='logo playfair-display'>MNTN</h3>
            <h2>Get out there & discover your next slop, mountain & destination! </h2>
          </div>
          <div className='footer-log0-div'>
            <h1>More on The Blog</h1>
            <ul>
              <li>About MNTN</li>
              <li>Contributors & Writers</li>
              <li>Write for Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footer-log0-div'>
            <h1>More on MNTN</h1>
            <ul>
              <li>The Team</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div>
        </footer>

      </section>

    </main>
  );
}
