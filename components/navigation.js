import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="main-nav" className="navigation-container">
          <div className="navigation-wrapper">
            <a href="#home">
              <div
                aria-label="L.R Fences Home"
                className="navigation-brand"
              >
                <span className="section-title">
                  <span>
                    {' '}
                    L.R
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="navigation-thq-navigation-brand-accent-elm1">
                    Fences
                  </span>
                </span>
              </div>
            </a>
            <div className="navigation-links-desktop">
              <a href="#home">
                <div className="navigation-link">
                  <span>Home</span>
                </div>
              </a>
              <a href="#services">
                <div className="navigation-link">
                  <span>Services</span>
                </div>
              </a>
              <a href="#reviews">
                <div className="navigation-link">
                  <span>Reviews</span>
                </div>
              </a>
              <a href="tel:+16024975085" className="navigation-phone-link">
                <div className="navigation-link navigation-link--phone">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>(602) 497-5085</span>
                </div>
              </a>
              <a href="#contact">
                <div className="btn-md btn-accent navigation-cta btn">
                  <span>
                    {' '}
                    Get a Quote
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <div className="navigation-cta-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7l-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <button
              id="nav-toggle"
              aria-label="Toggle navigation menu"
              aria-controls="mobile-overlay"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-icon-open"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          id="mobile-overlay"
          aria-hidden="true"
          className="navigation-mobile-overlay"
        >
          <div className="navigation-mobile-header">
            <a href="#home">
              <div
                aria-label="L.R Fences Home"
                className="navigation-brand"
              >
                <span className="section-title">
                  <span>
                    {' '}
                    L.R
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="navigation-thq-navigation-brand-accent-elm2">
                    Fences
                  </span>
                </span>
              </div>
            </a>
            <button
              id="nav-close"
              aria-label="Close navigation menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6 6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-links">
              <a href="#home">
                <div className="navigation-mobile-link">
                  <span>Home</span>
                </div>
              </a>
              <a href="#services">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </a>
              <a href="#reviews">
                <div className="navigation-mobile-link">
                  <span>Reviews</span>
                </div>
              </a>
              <a href="tel:+16024975085">
                <div className="navigation-mobile-link navigation-mobile-link--phone">
                  <span>(602) 497-5085</span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-footer">
              <a href="#contact">
                <div className="btn-accent btn btn-lg navigation-mobile-cta">
                  <span>Get a Quote</span>
                </div>
              </a>
              <div className="navigation-mobile-contact">
                <p className="section-content">Talk to Carlos</p>
                <a href="tel:+16024975085">
                  <div className="navigation-mobile-phone">
                    <span>(602) 497-5085</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const navContainer = document.getElementById("main-nav")
  const navToggle = document.getElementById("nav-toggle")
  const navClose = document.getElementById("nav-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navContainer.classList.add("scrolled")
    } else {
      navContainer.classList.remove("scrolled")
    }
  }

  const openMenu = () => {
    mobileOverlay.classList.add("is-open")
    mobileOverlay.setAttribute("aria-hidden", "false")
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("is-open")
    mobileOverlay.setAttribute("aria-hidden", "true")
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("scroll", handleScroll)

  handleScroll()
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-brand-accent-elm1 {
            color: var(--color-primary);
            font-style: var(--font-style-subheading);
          }
          .navigation-thq-navigation-brand-accent-elm2 {
            color: var(--color-primary);
            font-style: var(--font-style-subheading);
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
