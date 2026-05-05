import React, { useState } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import {
  GALLERY_IMAGE_URLS,
  GALLERY_PREVIEW_COUNT,
} from '../data/galleryImages'

const Home = (props) => {
  const [galleryExpanded, setGalleryExpanded] = useState(false)

  return (
    <>
      <div className="home-container1">
        <Head>
          <title>L.R Fences — Professional Fences, Gates &amp; Pergolas in Phoenix</title>
          <meta
            name="description"
            content="L.R Fences builds custom fences, gates, pergolas, and patio shades across the Phoenix metro. Free on-site estimates. Call (602) 497-5085."
          />
          <meta name="theme-color" content="#ea580c" />
          <meta property="og:title" content="L.R Fences" />
          <meta
            property="og:description"
            content="Professional fences, gates, and pergolas made for your Arizona home or business."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800;900&display=swap"
          />
        </Head>
        <Navigation></Navigation>
        <section id="home" className="hero-showcase">
          <div className="hero-showcase__video-container">
            <img
              alt="Custom pergola and outdoor shade structure in an Arizona backyard"
              src="https://images.pexels.com/photos/13871296/pexels-photo-13871296.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=2400"
              fetchpriority="high"
              className="hero-showcase__video"
            />
            <div className="hero-showcase__overlay"></div>
          </div>
          <div className="hero-showcase__content reveal">
            <h1 className="hero-title">
              L.R{' '}
              <span className="hero-title__accent">Fences</span>
            </h1>
            <p className="hero-subtitle">
              Professional Fences, Gates, And Pergolas Made For You.
            </p>
            <div className="hero-showcase__actions">
              <a href="#contact">
                <div className="btn btn-lg btn-primary">
                  <span>Request a Free Quote</span>
                </div>
              </a>
              <a href="#portfolio">
                <div className="btn btn-lg btn-outline hero-showcase__btn-secondary">
                  <span>View Our Work</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="core-services">
          <div className="core-services__container">
            <div className="core-services__header reveal">
              <p className="core-services__eyebrow">Why L.R Fences?</p>
              <h2 className="core-services__heading">
                Let us show you why we&apos;re Arizona&apos;s go to choice.
              </h2>
            </div>
            <div
              className="core-services__decoration"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1200 2400"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M 600 80 C 900 220, 1020 420, 820 580 C 620 740, 220 700, 320 900 C 420 1100, 920 1060, 870 1260 C 820 1460, 240 1420, 380 1620 C 520 1820, 1020 1780, 860 1980 C 700 2180, 280 2140, 500 2320"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="12 8"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
            <div className="core-services__rows">
              <div className="core-services__row">
                <div className="core-services__card-text reveal">
                  <p className="core-services__card-eyebrow">Why L.R Fences?</p>
                  <h3 className="core-services__card-heading">
                    Custom Pergolas &amp; Patio Shades
                  </h3>
                  <p className="core-services__card-body">
                    Custom pergolas and patio shades made from fabric, steel, or
                    professionally varnished wood slabs, built to your
                    specifications.
                  </p>
                  <a href="#contact">
                    <span className="core-services__cta">
                      Get a Free Quote
                    </span>
                  </a>
                </div>
                <div className="core-services__card-image reveal">
                  <div className="core-services__card-image-frame">
                    <img
                      alt="Custom pergola and patio shade structure"
                      src="https://images.pexels.com/photos/13871294/pexels-photo-13871294.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="core-services__row core-services__row--reverse">
                <div className="core-services__card-text reveal">
                  <p className="core-services__card-eyebrow">Why L.R Fences?</p>
                  <h3 className="core-services__card-heading">Custom Fences</h3>
                  <p className="core-services__card-body">
                    Fences made from chain link, wood, vinyl plastic, and
                    custom-welded steel.
                  </p>
                  <a href="#contact">
                    <span className="core-services__cta">
                      Get a Free Quote
                    </span>
                  </a>
                </div>
                <div className="core-services__card-image reveal">
                  <div className="core-services__card-image-frame">
                    <img
                      alt="Custom wooden privacy fence with horizontal plank detail"
                      src="https://images.pexels.com/photos/10450058/pexels-photo-10450058.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="core-services__row">
                <div className="core-services__card-text reveal">
                  <p className="core-services__card-eyebrow">Why L.R Fences?</p>
                  <h3 className="core-services__card-heading">Custom Gates</h3>
                  <p className="core-services__card-body">
                    Custom RV and Home Gates made with steel and wood. Custom
                    welded to your measurements with optional automated opening.
                  </p>
                  <a href="#contact">
                    <span className="core-services__cta">
                      Get a Free Quote
                    </span>
                  </a>
                </div>
                <div className="core-services__card-image reveal">
                  <div className="core-services__card-image-frame">
                    <img
                      alt="Custom steel and wood gate installation"
                      src="https://images.pexels.com/photos/34277689/pexels-photo-34277689.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-strip">
          <div className="trust-strip__content reveal reveal-stagger">
            <div className="trust-strip__item">
              <div className="trust-strip__icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <span className="home-thq-section-content-elm16 section-content">
                Handcrafted Quality
              </span>
            </div>
            <div className="trust-strip__item">
              <div className="trust-strip__icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle r="3" cx="12" cy="10"></circle>
                </svg>
              </div>
              <span className="home-thq-section-content-elm17 section-content">
                Premium Materials
              </span>
            </div>
            <div className="trust-strip__item">
              <div className="trust-strip__icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                  <path d="M12 3v6"></path>
                </svg>
              </div>
              <span className="home-thq-section-content-elm18 section-content">
                Locally Owned
              </span>
            </div>
            <div className="trust-strip__item">
              <div className="trust-strip__icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <span className="home-thq-section-content-elm19 section-content">
                Free On-Site Estimates
              </span>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio-grid">
          <div className="portfolio-grid__header reveal">
            <h2 className="section-title">Our Recent Work</h2>
            <p className="section-subtitle">
              Excellence in wood fabrication across the valley.
            </p>
          </div>
          <div className="portfolio-grid__container reveal">
            {(galleryExpanded
              ? GALLERY_IMAGE_URLS
              : GALLERY_IMAGE_URLS.slice(0, GALLERY_PREVIEW_COUNT)
            ).map((src, index) => (
              <div className="portfolio-grid__item" key={src}>
                <img
                  alt={`L.R Fences project photo ${index + 1}`}
                  src={src}
                  loading="lazy"
                />
                <div className="portfolio-grid__overlay">
                  <span className="section-content">
                    Project {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {!galleryExpanded &&
            GALLERY_IMAGE_URLS.length > GALLERY_PREVIEW_COUNT && (
              <div className="portfolio-grid__actions">
                <button
                  type="button"
                  className="btn btn-lg btn-primary portfolio-grid__expand-btn"
                  onClick={() => setGalleryExpanded(true)}
                >
                  View Full Gallery
                </button>
              </div>
            )}
          {galleryExpanded && (
            <div className="portfolio-grid__actions portfolio-grid__actions--close">
              <button
                type="button"
                className="btn btn-lg btn-secondary portfolio-grid__close-btn"
                onClick={() => {
                  setGalleryExpanded(false)
                  const el = document.getElementById('portfolio')
                  if (el) {
                    window.scrollTo({
                      top: el.offsetTop - 80,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                Close Gallery
              </button>
            </div>
          )}
        </section>
        <section id="reviews" className="reviews-carousel">
          <div className="reviews-carousel__container reveal">
            <div className="reviews-carousel__track-wrapper">
              <div id="reviewTrack" className="reviews-carousel__track">
                <div className="reviews-carousel__card">
                  <div className="reviews-carousel__stars">
                    <span>★★★★★</span>
                  </div>
                  <p className="section-content">
                    &quot;Carlos did an amazing job on our backyard pergola. The
                    attention to detail is incredible, and it has completely
                    changed how we use our outdoor space. Highly
                    recommend!&quot;
                  </p>
                  <div className="reviews-carousel__author">
                    <span className="home-thq-section-content-elm27 section-content">
                      Sarah Johnson
                    </span>
                  </div>
                </div>
                <div className="reviews-carousel__card">
                  <div className="reviews-carousel__stars">
                    <span>★★★★★</span>
                  </div>
                  <p className="section-content">
                    &quot;The custom fence L.R Fences built for us is
                    both sturdy and beautiful. It&apos;s rare to find this level
                    of craftsmanship these days. Professional from start to
                    finish.&quot;
                  </p>
                  <div className="reviews-carousel__author">
                    <span className="home-thq-section-content-elm29 section-content">
                      Michael Reed
                    </span>
                  </div>
                </div>
                <div className="reviews-carousel__card">
                  <div className="reviews-carousel__stars">
                    <span>★★★★★</span>
                  </div>
                  <p className="section-content">
                    &quot;We wanted a unique gazebo for our garden, and Carlos
                    delivered exactly what we envisioned. The wood quality is
                    top-notch and the installation was seamless.&quot;
                  </p>
                  <div className="reviews-carousel__author">
                    <span className="home-thq-section-content-elm31 section-content">
                      Elena Rodriguez
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviews-carousel__controls">
              <button
                id="prevReview"
                aria-label="Previous review"
                className="reviews-carousel__btn"
              >
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button
                id="nextReview"
                aria-label="Next review"
                className="reviews-carousel__btn"
              >
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="contact-section__container">
            <div className="contact-section__info reveal">
              <h2 className="section-title">
                Let&apos;s Build Your Dream Outdoor Space
              </h2>
              <p className="section-content">
                Ready to transform your backyard? Carlos and the team are here
                to bring your vision to life with handcrafted wooden structures
                that stand the test of time.
              </p>
              <div className="contact-section__owner">
                <p className="home-thq-section-content-elm33 section-content">
                  Owner: Carlos
                </p>
                <a href="tel:+16024975085">
                  <div className="contact-section__phone">
                    <span>(602) 497-5085</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-section__form-box reveal">
              <div id="quote-wizard" className="quote-wizard">
                <div className="quote-wizard__progress" data-current-step="1">
                  <div
                    className="quote-wizard__step-indicator is-active"
                    data-step="1"
                  >
                    <div className="quote-wizard__step-circle">
                      <span className="quote-wizard__step-number">1</span>
                      <svg
                        className="quote-wizard__step-check"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="quote-wizard__step-label">Service</span>
                  </div>
                  <div className="quote-wizard__connector"></div>
                  <div
                    className="quote-wizard__step-indicator"
                    data-step="2"
                  >
                    <div className="quote-wizard__step-circle">
                      <span className="quote-wizard__step-number">2</span>
                      <svg
                        className="quote-wizard__step-check"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="quote-wizard__step-label">Details</span>
                  </div>
                  <div className="quote-wizard__connector"></div>
                  <div
                    className="quote-wizard__step-indicator"
                    data-step="3"
                  >
                    <div className="quote-wizard__step-circle">
                      <span className="quote-wizard__step-number">3</span>
                      <svg
                        className="quote-wizard__step-check"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="quote-wizard__step-label">Timeline</span>
                  </div>
                  <div className="quote-wizard__connector"></div>
                  <div
                    className="quote-wizard__step-indicator"
                    data-step="4"
                  >
                    <div className="quote-wizard__step-circle">
                      <span className="quote-wizard__step-number">4</span>
                      <svg
                        className="quote-wizard__step-check"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="quote-wizard__step-label">Contact</span>
                  </div>
                  <div className="quote-wizard__connector"></div>
                  <div
                    className="quote-wizard__step-indicator"
                    data-step="5"
                  >
                    <div className="quote-wizard__step-circle">
                      <span className="quote-wizard__step-number">5</span>
                      <svg
                        className="quote-wizard__step-check"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="quote-wizard__step-label">Done</span>
                  </div>
                </div>

                <div className="quote-wizard__panels">
                  <div className="quote-wizard__step is-active" data-panel="1">
                    <h3 className="quote-wizard__heading">
                      Which services do you need?
                    </h3>
                    <p className="quote-wizard__hint">
                      Pick one or more — we&apos;ll gather details for each.
                    </p>
                    <div className="quote-wizard__grid quote-wizard__grid--services">
                      <button
                        type="button"
                        className="quote-wizard__choice"
                        data-field="service"
                        data-value="Custom Pergolas & Patio Shades"
                      >
                        <span className="quote-wizard__choice-icon" aria-hidden="true">
                          🏛️
                        </span>
                        <span className="quote-wizard__choice-label">
                          Custom Pergolas &amp; Patio Shades
                        </span>
                        <span
                          className="quote-wizard__choice-check"
                          aria-hidden="true"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="quote-wizard__choice"
                        data-field="service"
                        data-value="Custom Fences"
                      >
                        <span className="quote-wizard__choice-icon" aria-hidden="true">
                          🪵
                        </span>
                        <span className="quote-wizard__choice-label">
                          Custom Fences
                        </span>
                        <span
                          className="quote-wizard__choice-check"
                          aria-hidden="true"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="quote-wizard__choice"
                        data-field="service"
                        data-value="Custom Gates"
                      >
                        <span className="quote-wizard__choice-icon" aria-hidden="true">
                          🚧
                        </span>
                        <span className="quote-wizard__choice-label">
                          Custom Gates
                        </span>
                        <span
                          className="quote-wizard__choice-check"
                          aria-hidden="true"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="quote-wizard__choice"
                        data-field="service"
                        data-value="Chain Link Fence"
                      >
                        <span className="quote-wizard__choice-icon" aria-hidden="true">
                          ⛓️
                        </span>
                        <span className="quote-wizard__choice-label">
                          Chain Link Fence
                        </span>
                        <span
                          className="quote-wizard__choice-check"
                          aria-hidden="true"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="quote-wizard__choice"
                        data-field="service"
                        data-value="Custom Gate"
                      >
                        <span className="quote-wizard__choice-icon" aria-hidden="true">
                          🚪
                        </span>
                        <span className="quote-wizard__choice-label">
                          Custom Gate
                        </span>
                        <span
                          className="quote-wizard__choice-check"
                          aria-hidden="true"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="quote-wizard__choice"
                        data-field="service"
                        data-value="Other"
                      >
                        <span className="quote-wizard__choice-icon" aria-hidden="true">
                          🔨
                        </span>
                        <span className="quote-wizard__choice-label">
                          Other Custom Work
                        </span>
                        <span
                          className="quote-wizard__choice-check"
                          aria-hidden="true"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="quote-wizard__actions">
                      <span
                        className="quote-wizard__selection-count"
                        data-role="selection-count"
                      >
                        0 selected
                      </span>
                      <button
                        type="button"
                        className="quote-wizard__btn quote-wizard__btn--primary"
                        data-action="next"
                        data-role="step1-continue"
                        disabled="true"
                      >
                        Continue
                      </button>
                    </div>
                  </div>

                  <div className="quote-wizard__step" data-panel="2">
                    <h3 className="quote-wizard__heading">
                      Tell us about each project
                    </h3>
                    <p className="quote-wizard__hint">
                      Size &amp; timeline are required per service. Details are
                      optional.
                    </p>
                    <div
                      className="quote-wizard__service-blocks"
                      data-role="service-blocks"
                    ></div>
                    <div className="quote-wizard__actions">
                      <button
                        type="button"
                        className="quote-wizard__btn quote-wizard__btn--back"
                        data-action="back"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="quote-wizard__btn quote-wizard__btn--primary"
                        data-action="next"
                      >
                        Continue
                      </button>
                    </div>
                  </div>

                  <div className="quote-wizard__step" data-panel="3">
                    <h3 className="quote-wizard__heading">
                      When would you like it done?
                    </h3>
                    <p className="quote-wizard__hint">
                      Pick a timeline for each service you selected.
                    </p>
                    <div
                      className="quote-wizard__service-blocks"
                      data-role="timeline-blocks"
                    ></div>
                    <div className="quote-wizard__actions">
                      <button
                        type="button"
                        className="quote-wizard__btn quote-wizard__btn--back"
                        data-action="back"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="quote-wizard__btn quote-wizard__btn--primary"
                        data-action="next"
                      >
                        Continue
                      </button>
                    </div>
                  </div>

                  <div className="quote-wizard__step" data-panel="4">
                    <h3 className="quote-wizard__heading">
                      Your contact information
                    </h3>
                    <div className="quote-wizard__fields">
                      <input
                        type="text"
                        className="quote-wizard__input"
                        placeholder="Full Name"
                        data-field="fullName"
                        required="true"
                      />
                      <input
                        type="tel"
                        className="quote-wizard__input"
                        placeholder="Phone Number"
                        data-field="phone"
                        required="true"
                      />
                      <input
                        type="email"
                        className="quote-wizard__input"
                        placeholder="Email Address"
                        data-field="email"
                        required="true"
                      />
                      <input
                        type="text"
                        className="quote-wizard__input"
                        placeholder="Project Address"
                        data-field="address"
                      />
                    </div>
                    <div className="quote-wizard__actions">
                      <button
                        type="button"
                        className="quote-wizard__btn quote-wizard__btn--back"
                        data-action="back"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        className="quote-wizard__btn quote-wizard__btn--primary"
                        data-action="submit"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>

                  <div className="quote-wizard__step" data-panel="5">
                    <div className="quote-wizard__success">
                      <div className="quote-wizard__success-icon">
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <h3 className="quote-wizard__success-heading">
                        Thank You!
                      </h3>
                      <p className="quote-wizard__success-body">
                        We&apos;ve received your request. Carlos will review
                        your project details and get back to you within 24
                        hours with a free estimate.
                      </p>
                      <a
                        href="tel:+16024975085"
                        className="quote-wizard__success-cta"
                      >
                        <svg
                          width="18"
                          height="18"
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
                        <span>Or Call Now: (602) 497-5085</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta__container">
            <div className="final-cta__content">
              <h2 className="home-thq-section-title-elm4 section-title">
                Ready for a Beautiful Backyard?
              </h2>
              <p className="home-thq-section-content-elm40 section-content">
                Request your free estimate today and start your custom outdoor
                project.
              </p>
            </div>
            <div className="final-cta__actions">
              <a href="#contact">
                <div className="btn btn-lg btn-secondary">
                  <span>Request Your Free Estimate</span>
                </div>
              </a>
              <a href="tel:+16024975085">
                <div className="home-thq-btn-elm5 btn btn-lg btn-outline">
                  <span>Call Carlos: (602) 497-5085</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="reviews-slider">
(function(){
  const track = document.getElementById("reviewTrack")
  const prevBtn = document.getElementById("prevReview")
  const nextBtn = document.getElementById("nextReview")
  const cards = track.querySelectorAll(".reviews-carousel__card")

  let currentIndex = 0

  function updateSlider() {
    const offset = currentIndex * -100
    track.style.transform = \`translateX(\${offset}%)\`
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length
    updateSlider()
  })

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length
    updateSlider()
  })

  // Optional: Auto-play
  let autoPlay = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length
    updateSlider()
  }, 6000)

  // Stop auto-play on interaction
  ;[prevBtn, nextBtn].forEach((btn) => {
    btn.addEventListener("mouseenter", () => clearInterval(autoPlay))
  })

  // Smooth scroll logic for anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      if (!targetId || targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        e.preventDefault()
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Fade-in / slide-up reveal on scroll
  const allReveals = Array.from(document.querySelectorAll(".reveal"))
  const servicesScope = document.querySelector("#services")
  const inServices = (el) => servicesScope && servicesScope.contains(el)
  const servicesReveals = allReveals.filter(inServices)
  const otherReveals = allReveals.filter((el) => !inServices(el))

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    allReveals.forEach((el) => el.classList.add("is-visible"))
  } else {
    // One-shot observer for everything outside the services section
    const onceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            onceObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    otherReveals.forEach((el) => onceObserver.observe(el))

    // Toggling observer — services cards & images fade in AND out
    // as they enter/leave the viewport, for a clean professional feel.
    const toggleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          } else {
            entry.target.classList.remove("is-visible")
          }
        })
      },
      { threshold: 0.18, rootMargin: "-80px 0px -80px 0px" }
    )
    servicesReveals.forEach((el) => toggleObserver.observe(el))
  }

  // Quote wizard — multi-step contact flow with multi-service support
  const wizardRoot = document.getElementById("quote-wizard")
  if (wizardRoot) {
    const progress = wizardRoot.querySelector(".quote-wizard__progress")
    const indicators = Array.from(
      wizardRoot.querySelectorAll(".quote-wizard__step-indicator")
    )
    const connectors = Array.from(
      wizardRoot.querySelectorAll(".quote-wizard__connector")
    )
    const panels = Array.from(
      wizardRoot.querySelectorAll(".quote-wizard__step")
    )
    const totalSteps = indicators.length
    const step1Continue = wizardRoot.querySelector(
      '[data-role="step1-continue"]'
    )
    const selectionCountEl = wizardRoot.querySelector(
      '[data-role="selection-count"]'
    )
    const serviceBlocksHost = wizardRoot.querySelector(
      '[data-role="service-blocks"]'
    )
    const timelineBlocksHost = wizardRoot.querySelector(
      '[data-role="timeline-blocks"]'
    )

    // Per-service size options — linear-ft projections for fences & gates
    const SIZE_OPTIONS = {
      "Custom Pergolas & Patio Shades": [
        { value: "Small", label: "Small (under 150 sq ft)" },
        { value: "Medium", label: "Medium (150–400 sq ft)" },
        { value: "Large", label: "Large (400–800 sq ft)" },
        { value: "Extra Large", label: "Extra Large (800+ sq ft)" },
      ],
      "Custom Fences": [
        { value: "Small", label: "Small (under 50 linear ft)" },
        { value: "Medium", label: "Medium (50–150 linear ft)" },
        { value: "Large", label: "Large (150–300 linear ft)" },
        { value: "Extra Large", label: "Extra Large (300+ linear ft)" },
      ],
      "Custom Gates": [
        { value: "Small", label: "Small (under 50 linear ft)" },
        { value: "Medium", label: "Medium (50–150 linear ft)" },
        { value: "Large", label: "Large (150–300 linear ft)" },
        { value: "Extra Large", label: "Extra Large (300+ linear ft)" },
      ],
      "Chain Link Fence": [
        { value: "Small", label: "Small (under 50 linear ft)" },
        { value: "Medium", label: "Medium (50–150 linear ft)" },
        { value: "Large", label: "Large (150–300 linear ft)" },
        { value: "Extra Large", label: "Extra Large (300+ linear ft)" },
      ],
      "Custom Gate": [
        { value: "Small", label: "Small (under 50 linear ft)" },
        { value: "Medium", label: "Medium (50–150 linear ft)" },
        { value: "Large", label: "Large (150–300 linear ft)" },
        { value: "Extra Large", label: "Extra Large (300+ linear ft)" },
      ],
      Other: [
        { value: "Small", label: "Small (under 150 sq ft)" },
        { value: "Medium", label: "Medium (150–400 sq ft)" },
        { value: "Large", label: "Large (400–800 sq ft)" },
        { value: "Extra Large", label: "Extra Large (800+ sq ft)" },
      ],
    }

    const TIMELINE_OPTIONS = [
      { value: "ASAP", label: "ASAP" },
      { value: "2 weeks", label: "Within 2 weeks" },
      { value: "1 month", label: "Within a month" },
      { value: "Exploring", label: "Just exploring" },
    ]

    const state = {
      current: 1,
      services: [], // array of selected service names (multi-select)
      details: {}, // keyed by service name: { size, notes }
      timeline: "", // single global timeline applying to all services
      contact: {
        fullName: "",
        phone: "",
        email: "",
        address: "",
      },
    }

    const escapeHTML = (s) =>
      String(s).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c]))

    const renderServiceBlocks = () => {
      if (!serviceBlocksHost) return
      if (state.services.length === 0) {
        serviceBlocksHost.innerHTML =
          '<p class="quote-wizard__empty">Pick at least one service in step 1.</p>'
        return
      }
      // Ensure each selected service has a details entry
      state.services.forEach((svc) => {
        if (!state.details[svc]) {
          state.details[svc] = { size: "", timeline: "", notes: "" }
        }
      })

      const html = state.services
        .map((svc, idx) => {
          const sizeOpts = SIZE_OPTIONS[svc] || SIZE_OPTIONS.Other
          const current = state.details[svc] || {
            size: "",
            timeline: "",
            notes: "",
          }
          const sizeBtns = sizeOpts
            .map(
              (o) =>
                '<button type="button" class="quote-wizard__pill' +
                (current.size === o.value ? " is-selected" : "") +
                '" data-svc-field="size" data-svc="' +
                escapeHTML(svc) +
                '" data-value="' +
                escapeHTML(o.value) +
                '">' +
                escapeHTML(o.label) +
                "</button>"
            )
            .join("")
          return (
            '<div class="quote-wizard__service-block" data-svc-block="' +
            escapeHTML(svc) +
            '">' +
            '<div class="quote-wizard__service-block-header">' +
            '<span class="quote-wizard__service-block-badge">' +
            (idx + 1) +
            "</span>" +
            '<h4 class="quote-wizard__service-block-title">' +
            escapeHTML(svc) +
            "</h4>" +
            "</div>" +
            '<div class="quote-wizard__field-group">' +
            '<label class="quote-wizard__label">Project Size</label>' +
            '<div class="quote-wizard__grid quote-wizard__grid--2">' +
            sizeBtns +
            "</div>" +
            "</div>" +
            '<textarea class="quote-wizard__textarea" data-svc-field="notes" data-svc="' +
            escapeHTML(svc) +
            '" placeholder="Additional details for ' +
            escapeHTML(svc) +
            ' — wood type, style, dimensions...">' +
            escapeHTML(current.notes) +
            "</textarea>" +
            "</div>"
          )
        })
        .join("")

      serviceBlocksHost.innerHTML = html
    }

    const renderTimelineBlocks = () => {
      if (!timelineBlocksHost) return
      if (state.services.length === 0) {
        timelineBlocksHost.innerHTML =
          '<p class="quote-wizard__empty">Pick at least one service in step 1.</p>'
        return
      }
      // Build a plain-language summary of the selected services so the
      // single timeline picker makes it clear it covers ALL of them
      const svcCount = state.services.length
      let summary = ""
      if (svcCount === 1) {
        summary = escapeHTML(state.services[0])
      } else if (svcCount === 2) {
        summary =
          escapeHTML(state.services[0]) +
          " &amp; " +
          escapeHTML(state.services[1])
      } else {
        summary =
          state.services
            .slice(0, -1)
            .map(escapeHTML)
            .join(", ") +
          ", &amp; " +
          escapeHTML(state.services[svcCount - 1])
      }

      const timelineBtns = TIMELINE_OPTIONS.map(
        (o) =>
          '<button type="button" class="quote-wizard__pill' +
          (state.timeline === o.value ? " is-selected" : "") +
          '" data-role="timeline-pill" data-value="' +
          escapeHTML(o.value) +
          '">' +
          escapeHTML(o.label) +
          "</button>"
      ).join("")

      timelineBlocksHost.innerHTML =
        '<div class="quote-wizard__service-block quote-wizard__service-block--timeline" data-tl-block="global">' +
        '<p class="quote-wizard__timeline-summary">One timeline for: <strong>' +
        summary +
        "</strong></p>" +
        '<div class="quote-wizard__field-group" style="margin:0">' +
        '<label class="quote-wizard__label">Timeline</label>' +
        '<div class="quote-wizard__grid quote-wizard__grid--2">' +
        timelineBtns +
        "</div>" +
        "</div>" +
        "</div>"
    }

    const updateSelectionUI = () => {
      const count = state.services.length
      if (selectionCountEl) {
        selectionCountEl.textContent =
          count + (count === 1 ? " service selected" : " services selected")
      }
      if (step1Continue) {
        if (count > 0) {
          step1Continue.removeAttribute("disabled")
        } else {
          step1Continue.setAttribute("disabled", "true")
        }
      }
    }

    const goToStep = (step) => {
      const clamped = Math.max(1, Math.min(step, totalSteps))
      state.current = clamped
      progress.setAttribute("data-current-step", String(clamped))
      indicators.forEach((ind, i) => {
        const stepNum = i + 1
        ind.classList.remove("is-active", "is-complete")
        if (stepNum < clamped) {
          ind.classList.add("is-complete")
        } else if (stepNum === clamped) {
          ind.classList.add("is-active")
        }
      })
      connectors.forEach((conn, i) => {
        conn.classList.toggle("is-complete", i + 1 < clamped)
      })
      panels.forEach((panel) => {
        const isActive =
          Number(panel.getAttribute("data-panel")) === clamped
        panel.classList.toggle("is-active", isActive)
      })
      if (clamped === 2) {
        renderServiceBlocks()
      } else if (clamped === 3) {
        renderTimelineBlocks()
      }
      if (window.innerWidth < 900) {
        wizardRoot.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }

    // Step 1 — service selection (multi-select toggle)
    wizardRoot
      .querySelectorAll('.quote-wizard__choice[data-field="service"]')
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const value = btn.getAttribute("data-value") || ""
          const idx = state.services.indexOf(value)
          if (idx >= 0) {
            state.services.splice(idx, 1)
            btn.classList.remove("is-selected")
          } else {
            state.services.push(value)
            btn.classList.add("is-selected")
          }
          updateSelectionUI()
        })
      })

    // Shared delegated handler — works for both service-blocks and
    // timeline-blocks hosts (pills + textareas)
    const attachBlockHandlers = (host, blockAttr) => {
      if (!host) return
      host.addEventListener("click", (e) => {
        const target = e.target.closest(".quote-wizard__pill")
        if (!target) return
        const svc = target.getAttribute("data-svc")
        const field = target.getAttribute("data-svc-field")
        const value = target.getAttribute("data-value") || ""
        if (!svc || !field) return
        host
          .querySelectorAll(
            '.quote-wizard__pill[data-svc="' +
              svc.replace(/"/g, '\\"') +
              '"][data-svc-field="' +
              field +
              '"]'
          )
          .forEach((el) => el.classList.remove("is-selected"))
        target.classList.add("is-selected")
        if (!state.details[svc])
          state.details[svc] = { size: "", timeline: "", notes: "" }
        state.details[svc][field] = value
        const block = host.querySelector(
          "[" + blockAttr + '="' + svc.replace(/"/g, '\\"') + '"]'
        )
        if (block) block.classList.remove("is-shake")
      })
      host.addEventListener("input", (e) => {
        const target = e.target
        if (target && target.matches && target.matches(".quote-wizard__textarea")) {
          const svc = target.getAttribute("data-svc")
          if (svc) {
            if (!state.details[svc])
              state.details[svc] = { size: "", timeline: "", notes: "" }
            state.details[svc].notes = target.value
          }
        }
      })
    }
    attachBlockHandlers(serviceBlocksHost, "data-svc-block")

    // Timeline host — one global picker; write to state.timeline
    if (timelineBlocksHost) {
      timelineBlocksHost.addEventListener("click", (e) => {
        const target = e.target.closest(
          '.quote-wizard__pill[data-role="timeline-pill"]'
        )
        if (!target) return
        timelineBlocksHost
          .querySelectorAll(
            '.quote-wizard__pill[data-role="timeline-pill"]'
          )
          .forEach((el) => el.classList.remove("is-selected"))
        target.classList.add("is-selected")
        state.timeline = target.getAttribute("data-value") || ""
        const block = timelineBlocksHost.querySelector(
          '[data-tl-block="global"]'
        )
        if (block) block.classList.remove("is-shake")
      })
    }

    // Step 3 contact inputs — sync to state
    wizardRoot.querySelectorAll(".quote-wizard__input").forEach((el) => {
      el.addEventListener("input", () => {
        const field = el.getAttribute("data-field")
        if (field) state.contact[field] = el.value
        el.classList.remove("has-error")
      })
    })

    // Action buttons
    wizardRoot.querySelectorAll(".quote-wizard__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.hasAttribute("disabled")) return
        const action = btn.getAttribute("data-action")
        if (action === "back") {
          goToStep(state.current - 1)
        } else if (action === "next") {
          if (state.current === 1) {
            if (state.services.length === 0) return
            goToStep(2)
          } else if (state.current === 2) {
            // Step 2 validates size only (timeline moved to step 3)
            let firstMissingBlock = null
            state.services.forEach((svc) => {
              const d = state.details[svc] || {}
              if (!d.size) {
                const block = serviceBlocksHost
                  ? serviceBlocksHost.querySelector(
                      '[data-svc-block="' + svc.replace(/"/g, '\\"') + '"]'
                    )
                  : null
                if (block) {
                  block.classList.remove("is-shake")
                  void block.offsetWidth
                  block.classList.add("is-shake")
                  if (!firstMissingBlock) firstMissingBlock = block
                }
              }
            })
            if (firstMissingBlock) {
              firstMissingBlock.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
              return
            }
            goToStep(3)
          } else if (state.current === 3) {
            // Step 3 — single global timeline applies to all services
            if (!state.timeline) {
              const block = timelineBlocksHost
                ? timelineBlocksHost.querySelector(
                    '[data-tl-block="global"]'
                  )
                : null
              if (block) {
                block.classList.remove("is-shake")
                void block.offsetWidth
                block.classList.add("is-shake")
                block.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
              return
            }
            goToStep(4)
          } else {
            goToStep(state.current + 1)
          }
        } else if (action === "submit") {
          const requiredFields = ["fullName", "phone", "email"]
          let firstMissing = null
          requiredFields.forEach((f) => {
            const input = wizardRoot.querySelector(
              '.quote-wizard__input[data-field="' + f + '"]'
            )
            if (input && !input.value.trim()) {
              input.classList.add("has-error")
              if (!firstMissing) firstMissing = input
            } else if (input) {
              input.classList.remove("has-error")
            }
          })
          if (firstMissing) {
            firstMissing.focus()
            return
          }
          try {
            console.log("L.R Fences quote request:", {
              services: state.services,
              details: state.details,
              timeline: state.timeline,
              contact: state.contact,
            })
          } catch (err) {}
          goToStep(5)
        }
      })
    })

    updateSelectionUI()
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-thq-section-content-elm10 {
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-heading);
          }
          .home-thq-section-content-elm12 {
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-heading);
          }
          .home-thq-section-content-elm14 {
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-heading);
          }
          .home-thq-section-content-elm16 {
            font-weight: var(--font-weight-medium);
          }
          .home-thq-section-content-elm17 {
            font-weight: var(--font-weight-medium);
          }
          .home-thq-section-content-elm18 {
            font-weight: var(--font-weight-medium);
          }
          .home-thq-section-content-elm19 {
            font-weight: var(--font-weight-medium);
          }
          .home-thq-section-content-elm27 {
            font-weight: var(--font-weight-medium);
          }
          .home-thq-section-content-elm29 {
            font-weight: var(--font-weight-medium);
          }
          .home-thq-section-content-elm31 {
            font-weight: var(--font-weight-medium);
          }
          .home-thq-section-content-elm33 {
            font-weight: var(--font-weight-medium);
            margin-bottom: var(--spacing-xs);
          }
          .home-thq-section-content-elm34 {
            font-size: var(--font-size-sm);
          }
          .home-thq-section-content-elm35 {
            font-size: var(--font-size-sm);
          }
          .home-thq-section-content-elm36 {
            font-size: var(--font-size-sm);
          }
          .home-thq-section-content-elm37 {
            font-size: var(--font-size-sm);
          }
          .home-thq-section-content-elm38 {
            font-size: var(--font-size-sm);
          }
          .home-thq-section-content-elm39 {
            font-size: var(--font-size-sm);
          }
          .home-thq-contact-sectioninput-elm6 {
            min-height: 120px;
          }
          .home-thq-btn-elm3 {
            width: 100%;
          }
          .home-thq-section-title-elm4 {
            color: var(--color-on-accent);
          }
          .home-thq-section-content-elm40 {
            color: var(--color-on-accent);
            opacity: 0.9;
          }
          .home-thq-btn-elm5 {
            color: white;
            background: transparent;
            border-color: white;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
