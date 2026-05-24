import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Camera, Video, Trophy, Users, Mail, MapPin, ArrowRight, Play, Instagram, Facebook, Youtube } from 'lucide-react';
import './style.css';

/*
HOW TO ADD YOUR OWN IMAGES:
1. Put your image files inside: src/assets
2. Example file names: hbcu-game-1.jpg, hbcu-game-2.jpg, athlete-feature.jpg
3. Replace a galleryItems image path with: /src/assets/hbcu-game-1.jpg

HOW TO ADD YOUTUBE VIDEOS:
1. Copy your YouTube video link.
2. If the link is: https://www.youtube.com/watch?v=ABC123
3. Use this format: https://www.youtube.com/embed/ABC123
4. Replace the videoLinks below.
*/

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/hbcuredzone', icon: <Instagram /> },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100085331813061', icon: <Facebook /> },
  { name: 'YouTube', url: 'https://www.youtube.com/@hbcuredzone', icon: <Youtube /> }
];

const galleryItems = [
  { title: 'Game Day Coverage', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Athlete Features', image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Sideline Media', image: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=1200&q=80' }
];

const videoLinks = [
  { title: 'Featured Highlight Reel', embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_HERE' },
  { title: 'Event Coverage Sample', embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_HERE' }
];

function Button({ children, outline=false }) {
  return <a href="#contact" className={outline ? 'btn btn-outline' : 'btn'}>{children}</a>;
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function HBCURedzoneWebsite() {
  const services = [
    { icon: <Video />, title: 'Sports Videography', desc: 'Game-day coverage, highlight reels, athlete features, and cinematic storytelling for HBCU sports programs.' },
    { icon: <Camera />, title: 'Photography & Media Coverage', desc: 'Professional event photography, sideline content, press coverage, and social media-ready visuals.' },
    { icon: <Users />, title: 'Athlete & Creator Branding', desc: 'Helping athletes, programs, and content creators grow their presence and tell stronger stories online.' },
    { icon: <Trophy />, title: 'HBCU Sports Promotion', desc: 'Highlighting the excellence, culture, and impact of HBCU athletics across digital platforms.' }
  ];

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="logo">HBCU <span>REDZONE</span></div>
          <div className="links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#videos">Videos</a>
            <a href="#social">Social</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="glow" />

        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="tag">HBCU Sports Media • Storytelling • Culture</p>
            <h1>Capturing the moments that define the grind.</h1>
            <p className="lead">HBCU Redzone is a sports media platform built to spotlight HBCU athletes, programs, creators, and stories through powerful visual content and authentic coverage.</p>
            <div className="button-row">
              <Button>Book Media Coverage <ArrowRight size={18} /></Button>
              <Button outline>View Our Work</Button>
            </div>
            <div className="hero-socials">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}>{item.icon}</a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="feature-card">
              <div className="feature-inner">
                <div className="pill">Media Team</div>
                <div className="feature-bottom">
                  <h2>1M+ Views</h2>
                  <p>Growing HBCU sports visibility through content, coverage, and community.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section narrow">
        <h2>Built for HBCU Excellence</h2>
        <p>Founded by Antonio Espinal, HBCU Redzone exists to create more visibility for HBCU sports. Our mission is to showcase athletes, programs, alumni, and the culture that makes HBCU athletics powerful, competitive, and unforgettable.</p>
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <div><p className="eyebrow">What We Do</p><h2>Media Services</h2></div>
          <p>From game-day visuals to athlete branding, we help sports stories reach the audience they deserve.</p>
        </div>
        <div className="service-grid">
          {services.map((item) => <Card key={item.title}><div className="icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></Card>)}
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="section-head">
          <div><p className="eyebrow">Portfolio</p><h2>Photo Gallery</h2></div>
          <p>Add your best game-day images, athlete features, sideline photos, and event coverage here.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => <div className="gallery-card" key={item.title}><img src={item.image} alt={item.title} /><div className="gallery-label">{item.title}</div></div>)}
        </div>
      </section>

      <section id="videos" className="section">
        <div className="section-head">
          <div><p className="eyebrow">Watch</p><h2>Featured Videos</h2></div>
          <p>Embed YouTube highlights, interviews, game recaps, and creator features.</p>
        </div>
        <div className="video-grid">
          {videoLinks.map((video) => <div className="video-card" key={video.title}><div className="video-title"><Play size={18} /> {video.title}</div><iframe src={video.embedUrl} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>)}
        </div>
      </section>

      <section id="social" className="section social-section">
        <div className="section-head">
          <div><p className="eyebrow">Follow The Movement</p><h2>Connect With HBCU Redzone</h2></div>
          <p>Tap in across platforms for highlights, coverage, athlete features, and behind-the-scenes storytelling.</p>
        </div>
        <div className="social-grid">
          {socialLinks.map((item) => <a className="social-card" key={item.name} href={item.url} target="_blank" rel="noreferrer"><div>{item.icon}</div><h3>{item.name}</h3><p>@hbcuredzone</p></a>)}
        </div>
      </section>

      <section id="impact" className="section stats-grid">
        <Card><h3>1M+</h3><p>Collective views across digital content</p></Card>
        <Card><h3>10K+</h3><p>Followers and community members reached</p></Card>
        <Card><h3>15+</h3><p>Media contributors and creative partners</p></Card>
      </section>

      <section id="contact" className="section">
        <div className="contact-box">
          <h2>Let’s tell your sports story.</h2>
          <p>Need media coverage, athlete features, event visuals, or creative direction? Contact HBCU Redzone to collaborate.</p>
          <div className="contact-grid"><div><Mail size={18} /> antesp99@gmail.com</div><div><MapPin size={18} /> Dallas–Fort Worth, TX</div></div>
          <a className="btn" href="mailto:antesp99@gmail.com">Start a Project <ArrowRight size={18} /></a>
        </div>
      </section>
      <footer>© 2026 HBCU Redzone. All rights reserved.</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<HBCURedzoneWebsite />);
