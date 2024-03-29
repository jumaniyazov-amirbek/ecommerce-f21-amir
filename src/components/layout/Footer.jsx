import React from 'react'
import FacebookIcon from '../../../public/icons/FacebookIcon';
import InIcon from '../../../public/icons/InIcon';
import InstagramIcon from '../../../public/icons/InstagramIcon';
import TwitterIcon from '../../../public/icons/TwitterIcon';
import YoutubeIcon from '../../../public/icons/YoutubeIcon';
import AppstoreIcon from '../../../public/icons/AppstoreIcon';
import PlaymarketIcon from '../../../public/icons/PlaymarketIcon';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-top">
          <h5 className="footer-top__title">Subscribe on our newsletter</h5>
          <p className="footer-top__subtitle">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="footer-top__inputs">
            <input type="text" placeholder= 'Email' />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-main">
          <div className="container">
            <div className="footer-main__boxs">
              <div className="footer-main__box">
                <div className="box-img">
                <button>  <img src="./public/img/footer-logo.png" alt="" /></button>
                </div>
                <p className="box-text">Best information about the company gies here but now lorem ipsum is</p>
                <div className="box-icons">
                  <>
              <button>    <FacebookIcon /></button>
                <button>  <InIcon /></button>
               <button>   <InstagramIcon /></button>
                 <button> <TwitterIcon /></button>
                 <button> <YoutubeIcon /></button>
                  </>
                </div>
              </div>
              <div className="footer-main__box">
                <h5 className="box-title">About</h5>
                <a href="#" className="box-link">About Us</a>
                <a href="#" className="box-link">Find store</a>
                <a href="#" className="box-link">Categories</a>
                <a href="#" className="box-link">Blogs</a>
              </div>
              <div className="footer-main__box">
              <h5 className="box-title">Partnership</h5>
                <a href="#" className="box-link">About Us</a>
                <a href="#" className="box-link">Find store</a>
                <a href="#" className="box-link">Categories</a>
                <a href="#" className="box-link">Blogs</a>
              </div>
              <div className="footer-main__box">
              <h5 className="box-title">Information</h5>
                <a href="#" className="box-link">Help Center</a>
                <a href="#" className="box-link">Money Refund</a>
                <a href="#" className="box-link">Shipping</a>
                <a href="#" className="box-link">Contact us</a>
              </div>
              <div className="footer-main__box">
              <h5 className="box-title">For users</h5>
                <a href="#" className="box-link">Login</a>
                <a href="#" className="box-link">Register</a>
                <a href="#" className="box-link">Settings</a>
                <a href="#" className="box-link">My Orders</a>
              </div>
              <div className="footer-main__box">
              <h5 className="box-title">Get app</h5>
              <div className="box-icons2">
                <>
               <button> <AppstoreIcon /></button>
              <button>  <PlaymarketIcon /></button>
                </>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <div className="container">
            <div className="footer-end__content">
              <p>© 2023 Ecommerce. </p>
              <div className="footer-end__content__language">
                <img src="./public/img/use.png" alt="" />
                <select>
                  <option>English</option>
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;