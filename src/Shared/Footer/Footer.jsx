import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-neutral text-neutral-content">
          <aside>
            <img src="logo.png" alt="" className='w-[100px]' />
            <p>Quick Food Restaurant</p>
          </aside> 
          <nav>
            <header className="footer-title">Services</header> 
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav> 
          <nav>
            <header className="footer-title">Company</header> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav> 
          <nav>
            <header className="footer-title">Legal</header> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>

       <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2024 - All right reserved by Quick Food Restaurant</p>
          </aside>
       </footer>

       </div>
    );
};

export default Footer;