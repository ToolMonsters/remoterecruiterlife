* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #2b2b2b;
}

/* ── Navbar ── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #C5CEAF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 300;
}

.navbar__logo img {
  height: 36px;
  display: block;
}

/* ── Hamburger button ── */
.navbar__burger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 8px;
}

.navbar__burger span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* ── Hamburger → X when menu open ── */
.navbar__burger.is-active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.navbar__burger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar__burger.is-active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* ── Fullscreen menu ── */
.fullscreen-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #f5f5f0;
  display: flex;
  flex-direction: column;
  z-index: 200;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  overflow-y: auto;
}

.fullscreen-menu.is-open {
  opacity: 1;
  pointer-events: all;
}

/* ── Menu links ── */
.fullscreen-menu__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
}

.fullscreen-menu__links li {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Bandes de couleurs alternées ── */
.fullscreen-menu__links li:nth-child(1) { background-color: #e2eaad; }
.fullscreen-menu__links li:nth-child(2) { background-color: #c4b5f0; }
.fullscreen-menu__links li:nth-child(3) { background-color: #e8efc8; }
.fullscreen-menu__links li:nth-child(4) { background-color: #8a9e7e; }
.fullscreen-menu__links li:nth-child(5) { background-color: #d6cec4; }
.fullscreen-menu__links li:nth-child(6) { background-color: #f0ebe4; }
.fullscreen-menu__links li:nth-child(7) { background-color: #d8d4e8; }

.fullscreen-menu__links a {
  text-decoration: none;
  color: #1a1a1a;
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: opacity 0.2s ease;
}

.fullscreen-menu__links a:hover {
  opacity: 0.6;
}

/* ── Hero ── */
.hero {
  margin-top: 70px;
  width: 100%;
  position: relative;
}

.hero__slides {
  width: 100%;
  overflow: hidden;
}

.hero__track {
  display: flex;
  transition: transform 0.6s ease;
}

.hero__track img {
  width: 100%;
  flex-shrink: 0;
  display: block;
}

.hero__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 20px;
  transition: opacity 0.3s ease;
  opacity: 0.5;
}

.hero__arrow::after {
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  border-top: 1.5px solid #fff;
  border-right: 1.5px solid #fff;
}

.hero__arrow:hover {
  opacity: 1;
}

.hero__arrow--left {
  left: 30px;
}

.hero__arrow--left::after {
  transform: rotate(-135deg);
}

.hero__arrow--right {
  right: 30px;
}

.hero__arrow--right::after {
  transform: rotate(45deg);
}

.hero__cta {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.2vw 3.5vw;
  text-decoration: none;
  font-size: clamp(0.85rem, 1.8vw, 1.3rem);
  font-weight: 400;
  letter-spacing: 0.25vw;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.8s ease, background-color 0.3s ease, color 0.3s ease;
}

.hero__cta--active {
  opacity: 1;
  pointer-events: all;
}

.hero__cta--1 {
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.8);
}

.hero__cta--1:hover {
  background-color: #fff;
  color: #000;
}

.hero__cta--2 {
  border: 2px solid #000;
  background-color: transparent;
  color: #000;
}

.hero__cta--2:hover {
  background-color: #000;
  color: #fff;
}

/* ── Full-width image sections ── */
.full-image {
  position: relative;
}

.full-image img {
  width: 100%;
  display: block;
}

.full-image__cta {
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.2vw 3.5vw;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  font-size: clamp(0.85rem, 1.8vw, 1.3rem);
  font-weight: 400;
  letter-spacing: 0.25vw;
  text-transform: uppercase;
  white-space: nowrap;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.full-image__cta:hover {
  background-color: #fff;
  color: #000;
}

.full-image__cta--dark {
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
  left: 60%;
  right: auto;
  transform: translateX(-50%);
  bottom: 22%;
  padding: 0.7vw 2vw;
  font-size: clamp(0.6rem, 1.1vw, 0.9rem);
}

.full-image__cta--dark:hover {
  background-color: transparent;
  color: #000;
}

.full-image__cta--outline {
  border: 1px solid #000;
  background-color: transparent;
  color: #000;
  bottom: 4%;
  padding: 0.7vw 2vw;
  font-size: clamp(0.6rem, 1.1vw, 0.9rem);
}

.full-image__cta--outline:hover {
  background-color: #000;
  color: #fff;
}

/* ── P7 CTA group ── */
.p7-cta-group {
  position: absolute;
  bottom: 12%;
  left: 25%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
}

.p7-cta-group .full-image__cta--dark {
  position: static;
  transform: none;
  padding: 1.2vw 2.5vw;
}

.p7-learn-more {
  text-decoration: none;
  font-style: italic;
  color: #555;
  font-size: clamp(0.55rem, 1vw, 0.85rem);
  letter-spacing: 0.15vw;
  transition: color 0.3s ease;
}

.p7-learn-more:hover {
  color: #000;
}

.p7-cta-group--right {
  left: 75%;
  transform: translateX(-50%);
}

.p7-cta-group--center {
  left: 50%;
  transform: translateX(-50%);
  bottom: 16%;
}

/* ── P7 grid (2 rows × 3 cols) ── */
.p7-grid {
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25vw 2.8vw;
}

.p7-grid__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5vw;
}

.p7-grid__item .full-image__cta--dark {
  position: static;
  transform: none;
  padding: 0.8vw 2vw;
  font-size: 1vw;
  letter-spacing: 0.15vw;
}

.p7-grid__item .p7-learn-more {
  font-size: 0.8vw;
  letter-spacing: 0.1vw;
}

/* ── Mobile (portrait) ── */
@media (max-width: 768px) {

  .navbar {
    height: 56px;
    padding: 0 16px;
  }

  .navbar__logo img {
    height: 28px;
  }

  .fullscreen-menu {
    top: 56px;
    height: calc(100vh - 56px);
  }

  .hero {
    margin-top: 56px;
    height: calc(100vh - 56px);
  }

  .hero__slides,
  .hero__track {
    height: 100%;
  }

  .hero__track img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero__arrow {
    padding: 14px;
  }

  .hero__arrow::after {
    width: 14px;
    height: 14px;
  }

  .hero__arrow--left {
    left: 10px;
  }

  .hero__arrow--right {
    right: 10px;
  }

  .hero__cta {
    padding: 10px 24px;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .full-image {
    height: 100vh;
  }

  .full-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .full-image__cta {
    padding: 10px 24px;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .full-image__cta--dark {
    padding: 8px 18px;
    font-size: 0.7rem;
  }

  .p7-cta-group {
    gap: 8px;
  }

  .p7-cta-group .full-image__cta--dark {
    padding: 10px 20px;
    font-size: 0.7rem;
  }

  .p7-learn-more {
    font-size: 0.6rem;
  }

  .p7-grid {
    gap: 28vh 4vw;
  }

  .p7-grid__item .full-image__cta--dark {
    padding: 8px 16px;
    font-size: 2.5vw;
  }

  .p7-grid__item .p7-learn-more {
    font-size: 2vw;
  }
}

