'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Clock3, MapPin, Menu, Phone, Plus, X } from 'lucide-react';
import { menuCategories, menuItems } from './menu-data';

const phone = '+8801610678748';
const facebookUrl = 'https://www.facebook.com/PizzaExpress24';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=23.930080383365%2C90.15451669693';
const dishes = [
  { name: 'Pizza & More', tag: 'EXPLORE OUR FOOD PHOTOS', desc: 'Browse the latest food photos and ask our team about today’s menu.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1100&q=85' },
  { name: 'Coffee Under The Sky', tag: 'A LITTLE NIGHT-TIME MAGIC', desc: 'Enjoy your favourite food and coffee under the open sky.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85' },
  { name: 'Dine In & Take Out', tag: 'YOUR VISIT, YOUR WAY', desc: 'Visit us at Gazi Market or contact the team about delivery and takeaway.', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1100&q=85' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const links = ['Home', 'Our Story', 'Menu', 'Highlights', 'Visit Us'];
  const [menuCategory, setMenuCategory] = useState('All');
  const visibleMenuItems = menuCategory === 'All' ? menuItems : menuItems.filter(item => item.category === menuCategory);
  const go = (id: string) => { setActive(id); setOpen(false); document.getElementById(id.toLowerCase().replaceAll(' ', '-'))?.scrollIntoView({ behavior: 'smooth' }); };

  return <main>
    <div className="announcement"><span className="gold-dot"/> PIZZA, GOOD FOOD & COFFEE UNDER THE OPEN SKY · KALAMPUR</div>
    <header className="nav-wrap">
      <a className="brand" href="#home" onClick={() => setActive('Home')}><span className="brand-mark">P<span>✦</span></span><span className="brand-name">PIZZA <b>EXPRESS</b><small>GHAZI MARKET · KALAMPUR BAZAR</small></span></a>
      <nav className={open ? 'nav-links show' : 'nav-links'}>{links.map(l => <button key={l} className={active === l ? 'nav-active' : ''} onClick={() => go(l)}>{l}</button>)}</nav>
      <a className="nav-cta" href={`tel:${phone}`}><Phone size={15}/> Call to order</a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero" id="home">
      <div className="hero-image"/>
      <div className="hero-shade"/>
      <div className="hero-content">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="eyebrow"><span/> A LITTLE EXTRAORDINARY, EVERY DAY</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .8 }}>A SLICE ABOVE<br/><em>the ordinary.</em></motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>Pizza, good food and coffee under the open sky. Find us at Gazi Market, Kalampur Bazar.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}><a className="button-gold" href={`tel:${phone}`}>ORDER BY PHONE <ArrowRight size={16}/></a><a className="button-quiet" href="#highlights">EXPLORE THE EXPERIENCE <ArrowDown size={15}/></a><a className="button-quiet" href={facebookUrl} target="_blank" rel="noreferrer">FACEBOOK PAGE <ArrowRight size={15}/></a></motion.div>
      </div>
      <div className="hero-side-note">GOOD FOOD & OPEN-SKY COFFEE <span>✳</span> DHAMRAI, DHAKA</div>
      <div className="hero-bottom"><span>01 / 03</span><div/><span>SCROLL TO DISCOVER</span></div>
      <div className="hero-stamp"><span>GOOD<br/>FOOD</span><b>✳</b><span>GOOD<br/>TIMES</span></div>
    </section>

    <section className="intro section-pad" id="our-story">
      <div className="section-kicker">01 — THE PIZZA EXPRESS FEEL</div>
      <div className="intro-grid"><h2>Made for the<br/><em>moments</em> that<br/>matter.</h2><div className="intro-copy"><p className="lead">A quick bite, a catch-up with friends, or a little treat just because. There’s always a reason to make it delicious.</p><p>PizzaExpress welcomes you to Gazi Market, Kalampur Bazar. Stop by for a meal, enjoy coffee under the open sky, or contact the team about delivery, takeaway and online booking.</p><a className="text-link" href={mapUrl} target="_blank" rel="noreferrer">FIND OUR LOCATION <ArrowRight size={16}/></a></div></div>
      <div className="rule"/><div className="stats"><div><strong>386</strong><small>FACEBOOK FOLLOWERS</small></div><div><strong>4</strong><small>WAYS TO ENJOY · DINE-IN, TAKEOUT, DELIVERY & BOOKING</small></div><div><strong>2F–3F</strong><small>GAZI MARKET · AS MENTIONED IN PAGE POSTS</small></div></div>
    </section>

    <section className="menu-section section-pad" id="menu">
      <div className="section-kicker">02 — THE MENU · SAMPLE PRICES</div>
      <div className="section-heading"><h2>A menu for<br/><em>every craving.</em></h2><p>Explore our sample menu. Prices are placeholders for website preview only and must be confirmed with Pizza Express before publishing.</p></div>
      <div className="menu-disclaimer"><span>DEMO MENU</span> These are editable sample prices in Bangladeshi Taka (৳), not confirmed restaurant prices.</div>
      <div className="menu-filters">{menuCategories.map(category => <button key={category} className={menuCategory === category ? 'selected' : ''} onClick={() => setMenuCategory(category)}>{category}</button>)}</div>
      <div className="menu-grid">{visibleMenuItems.map((item, i) => <motion.article className="menu-card" key={item.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * .06 }}><div className="menu-card-top"><span>{item.category}</span><small>{item.badge}</small></div><h3>{item.name}</h3><p>{item.description}</p><div className="menu-card-bottom"><strong>৳{item.samplePrice}</strong><a href={`tel:${phone}`} aria-label={`Call to order ${item.name}`}><Plus size={17}/></a></div></motion.article>)}</div>
      <p className="menu-edit-hint">To edit names or prices later, open <code>app/menu-data.ts</code> and change the menu item values.</p>
    </section>

    <section className="highlights section-pad" id="highlights">
      <div className="section-kicker">03 — SOMETHING TO CRAVE</div><div className="section-heading"><h2>Good things.<br/><em>Great bites.</em></h2><p>A glimpse of the PizzaExpress experience. Visit our official Facebook page for the latest food photos and contact us to confirm menu items and prices.</p></div>
      <div className="dish-grid">{dishes.map((d,i)=><motion.article className="dish-card" key={d.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*.12 }}><div className="dish-photo" style={{ backgroundImage: `url(${i===0 ? 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1100&q=85' : d.image})` }}><span>0{i+1}</span><button aria-label={`Call about ${d.name}`} onClick={() => window.location.href = `tel:${phone}`}><Plus/></button></div><div className="dish-info"><small>{d.tag}</small><h3>{d.name}</h3><p>{d.desc}</p></div></motion.article>)}</div>
      <p className="menu-note">For the latest restaurant updates and confirmed availability, <a href={facebookUrl} target="_blank" rel="noreferrer">visit our official Facebook page →</a></p>
    </section>

    <section className="quote-band"><div className="quote-mark">“</div><p>Good food tastes better<br/><em>under the open sky.</em></p><span>PIZZAEXPRESS · GAZI MARKET · KALAMPUR</span></section>

    <section className="visit section-pad" id="visit-us"><div className="section-kicker">04 — COME SAY HELLO</div><div className="visit-grid"><div><h2>Your table.<br/><em>Your people.</em><br/>Your kind of place.</h2><p className="visit-copy">Find us at Gazi Market, Kalampur Bazar. The Facebook page mentions dining on the 2nd and 3rd floors. Call ahead to confirm current availability.</p><div className="visit-details"><div><MapPin/><span><b>FIND US</b>Gazi Market, 2nd Floor,<br/>Kalampur Bazar, Dhamrai, Dhaka</span></div><div><Clock3/><span><b>OPENING HOURS</b>Check with the restaurant before visiting</span></div><div><Phone/><span><b>GIVE US A CALL</b>01610-678748</span></div></div><div className="visit-actions"><a className="button-gold" href={mapUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowRight size={16}/></a><a className="button-outline" href={facebookUrl} target="_blank" rel="noreferrer">VISIT FACEBOOK PAGE</a></div></div><a className="map-card" href={mapUrl} target="_blank" rel="noreferrer"><div className="map-pattern"><div className="map-pin"><MapPin size={26}/></div><div className="map-cross cross-one"/><div className="map-cross cross-two"/><span className="map-road road-one">KALAMPUR BAZAR RD</span><span className="map-road road-two">Dhamrai</span></div><div className="map-caption"><span><b>PIZZA EXPRESS</b><small>GAZI MARKET · KALAMPUR BAZAR</small></span><ArrowRight/></div></a></div></section>

    <footer><div className="footer-top"><a className="brand" href="#home"><span className="brand-mark">P<span>✦</span></span><span className="brand-name">PIZZA <b>EXPRESS</b><small>GHAZI MARKET · KALAMPUR BAZAR</small></span></a><p>Pizza, good food and coffee under the open sky.<br/>See you at Gazi Market, Kalampur.</p><a className="footer-call" href={`tel:${phone}`}>LET’S TALK <ArrowRight size={16}/></a></div><div className="footer-bottom"><span>© 2026 PIZZA EXPRESS. ALL RIGHTS RESERVED.</span><span>KALAMPUR BAZAR · DHAMRAI · DHAKA</span><a href={facebookUrl} target="_blank" rel="noreferrer">FACEBOOK</a><a href="#home">BACK TO TOP ↑</a></div></footer>
  </main>;
}
