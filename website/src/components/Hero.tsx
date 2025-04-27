import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Hero.css';

interface Feature {
  title: string;
  description?: string;
  icon?: string;
  subtitle?: string;
}

interface Button {
  text: string;
  type: 'outline' | 'solid';
}

interface ContentSlide {
  type: 'content';
  image: string;
  content: {
    title: string;
    description: string;
    features: Feature[];
    buttons: Button[];
  };
}

interface RegularSlide {
  type: 'regular';
  image: string;
  subtitle: string;
  title: string;
  button: string;
}

type Slide = RegularSlide | ContentSlide;

const slides: Slide[] = [
  {
    type: 'regular',
    image: `${process.env.PUBLIC_URL}/hero-bg.jpg`,
    subtitle: 'SUVIKSAN TECHNOLOGIES',
    title: 'Redefining Possibilities with Technology',
    button: 'EXPLORE MORE',
  },
  {
    type: 'regular',
    image: `${process.env.PUBLIC_URL}/slide2.jpg`,
    subtitle: 'INNOVATION AT SCALE',
    title: 'Empowering Your Digital Transformation',
    button: 'OUR SERVICES',
  },
  {
    type: 'regular',
    image: `${process.env.PUBLIC_URL}/slide3.jpg`,
    subtitle: 'SECURE & RELIABLE',
    title: 'Building Trust in Every Solution',
    button: 'LEARN MORE',
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
    setTranslateX(0);
  }, [total]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    setTranslateX(0);
  };
  
  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsPlaying(false);
    setTranslateX(0);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsPlaying(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    const maxTranslate = heroRef.current?.offsetWidth || 0;
    
    // Limit the drag distance
    if (Math.abs(diff) < maxTranslate) {
      setTranslateX(diff);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const threshold = (heroRef.current?.offsetWidth || 0) * 0.2; // 20% threshold

    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTranslateX(0);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, nextSlide]);

  const renderSlideContent = (slide: Slide) => {
    if (slide.type === 'content') {
      return (
        <div className="hero-content company-info">
          <h1 className="company-title">{slide.content.title}</h1>
          <p className="company-description">{slide.content.description}</p>
          
          <div className="features-grid">
            {slide.content.features.map((feature: Feature, index: number) => (
              <div key={index} className="feature-item">
                {feature.icon && <span className="feature-icon">{feature.icon}</span>}
                <h3 className="feature-title">{feature.title}</h3>
                {feature.description && <p className="feature-description">{feature.description}</p>}
                {feature.subtitle && <p className="feature-subtitle">{feature.subtitle}</p>}
              </div>
            ))}
          </div>

          <div className="button-group">
            {slide.content.buttons.map((button: Button, index: number) => (
              <button 
                key={index} 
                className={`hero-button ${button.type}`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="hero-content">
        <h2 className="hero-subtitle">{slide.subtitle}</h2>
        <h1 className="hero-title">{slide.title}</h1>
        <button className="explore-button">{slide.button}</button>
      </div>
    );
  };

  return (
    <div
      ref={heroRef}
      className={`hero ${isDragging ? 'dragging' : ''}`}
      style={{ 
        backgroundImage: `url(${slides[current].image})`,
        transform: `translateX(${translateX}px)`,
      }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <button className="hero-arrow left" onClick={prevSlide} aria-label="Previous Slide">&#8249;</button>
      
      {renderSlideContent(slides[current])}

      <button className="hero-arrow right" onClick={nextSlide} aria-label="Next Slide">&#8250;</button>
      
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="hero-overlay"></div>
    </div>
  );
};

export default Hero; 