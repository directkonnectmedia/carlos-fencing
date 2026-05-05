import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-column footer-brand-col">
                <div className="footer-logo-wrap">
                  <div className="footer-icon-circle">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path>
                        <path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="footer-brand-name">C.O Outdoor Designs</span>
                </div>
                <p className="footer-brand-description">
                  Premium handcrafted wooden gazebos, pergolas, and custom
                  fencing solutions. We bring warmth and elegance to your
                  outdoor living spaces with expert craftsmanship.
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-btn">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-btn">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column footer-nav-col">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#home">
                      <div className="footer-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#services">
                      <div className="footer-link">
                        <span>Services</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#reviews">
                      <div className="footer-link">
                        <span>Reviews</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#contact">
                      <div className="footer-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-contact-col footer-column">
                <h3 className="footer-heading">Get In Touch</h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="footer-contact-text">
                      <span className="footer-contact-label">
                        Owner: Carlos
                      </span>
                      <a href="tel:6239202015">
                        <div className="footer-link-prominent">
                          <span>(623) 920-2015</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="footer-contact-text">
                      <span className="footer-contact-label">Service Area</span>
                      <span className="footer-contact-value">
                        Phoenix Metro &amp; Surrounding Areas
                      </span>
                    </div>
                  </div>
                </div>
                <a href="#contact">
                  <div className="btn-accent btn btn-lg footer-cta">
                    <span>Request Free Quote</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-legal">
                <p className="footer-copyright">
                  &copy; {new Date().getFullYear()} C.O Outdoor Designs. All rights reserved.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-logic">
(function(){
  // Smooth scroll for footer links (if they point to sections on the same page)
  const footerLinks = document.querySelectorAll(".footer-link, .footer-legal-link")

  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for sticky nav
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Simple animation observer for footer entry
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          footerObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  const footerContent = document.querySelector(".footer-content")
  if (footerContent) {
    footerContent.style.opacity = "0"
    footerContent.style.transform = "translateY(20px)"
    footerContent.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    footerObserver.observe(footerContent)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
