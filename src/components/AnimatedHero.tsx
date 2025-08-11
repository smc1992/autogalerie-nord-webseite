'use client';

import { useEffect, useRef } from 'react';

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  theme?: 'financing' | 'sales' | 'zulassungsservice' | 'business';
}

export default function AnimatedHero({ title, subtitle, children, theme = 'financing' }: AnimatedHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationId: number;
    let time = 0;

    // Car and money symbols
    const cars = [
      { x: -100, y: 0, speed: 0.5, size: 1 },
      { x: -200, y: 0, speed: 0.3, size: 0.8 },
      { x: -150, y: 0, speed: 0.4, size: 0.9 }
    ];

    const moneySymbols = [
      { x: 0, y: 0, speed: 0.2, rotation: 0, size: 1 },
      { x: 0, y: 0, speed: 0.15, rotation: 0, size: 0.8 },
      { x: 0, y: 0, speed: 0.25, rotation: 0, size: 1.2 }
    ];

    // Floating particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: theme === 'financing' ? '#E52318' : theme === 'sales' ? '#f59e0b' : theme === 'business' ? '#2563eb' : '#059669'
      });
    }

    const drawCar = (x: number, y: number, size: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size, size);
      
      // Car body (main)
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(-35, -5, 70, 15);
      
      // Car roof
      ctx.fillStyle = '#1e40af';
      ctx.fillRect(-25, -15, 50, 10);
      
      // Front and rear windshields
      ctx.fillStyle = '#87ceeb';
      ctx.fillRect(-24, -14, 12, 8); // Front windshield
      ctx.fillRect(12, -14, 12, 8);  // Rear windshield
      
      // Side windows
      ctx.fillStyle = '#b0e0e6';
      ctx.fillRect(-10, -14, 20, 8);
      
      // Car wheels
      ctx.fillStyle = '#1f2937';
      ctx.beginPath();
      ctx.arc(-20, 10, 7, 0, Math.PI * 2);
      ctx.arc(20, 10, 7, 0, Math.PI * 2);
      ctx.fill();
      
      // Wheel rims
      ctx.fillStyle = '#6b7280';
      ctx.beginPath();
      ctx.arc(-20, 10, 4, 0, Math.PI * 2);
      ctx.arc(20, 10, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Headlights
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(33, -3, 3, 6);
      
      // Taillights
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(-36, -3, 3, 6);
      
      ctx.restore();
    };

    const drawMoneySymbol = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(size, size);
      
      // Euro symbol
      ctx.strokeStyle = theme === 'financing' ? '#E52318' : '#059669';
      ctx.lineWidth = 3;
      ctx.font = '24px Arial';
      ctx.fillStyle = theme === 'financing' ? '#E52318' : '#059669';
      ctx.fillText('€', -8, 8);
      
      ctx.restore();
    };

    const drawDocument = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(size, size);
      
      // Document background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-15, -20, 30, 40);
      
      // Document border
      ctx.strokeStyle = '#d1d5db';
      ctx.lineWidth = 2;
      ctx.strokeRect(-15, -20, 30, 40);
      
      // Document lines
      ctx.strokeStyle = '#9ca3af';
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(-10, -15 + i * 5);
        ctx.lineTo(10, -15 + i * 5);
        ctx.stroke();
      }
      
      // Official stamp/seal
      ctx.fillStyle = theme === 'financing' ? '#E52318' : '#059669';
      ctx.beginPath();
      ctx.arc(8, 12, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // Stamp text
      ctx.fillStyle = '#ffffff';
      ctx.font = '8px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('OK', 8, 15);
      
      ctx.restore();
    };

    const drawSoldSign = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(size, size);
      
      // Sign background
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(-20, -10, 40, 20);
      
      // Sign border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.strokeRect(-20, -10, 40, 20);
      
      // Sign text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('VERKAUFT', 0, 3);
      
      ctx.restore();
    };

    const drawPriceTag = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(size, size);
      
      // Tag background
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(-15, -12, 30, 24);
      
      // Tag border
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.strokeRect(-15, -12, 30, 24);
      
      // Price symbol
      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('€', 0, 5);
      
      ctx.restore();
    };

    const drawRoad = () => {
      // Road surface
      ctx.fillStyle = '#374151';
      ctx.fillRect(0, canvas.height - 60, canvas.width, 60);
      
      // Road markings
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.setLineDash([20, 15]);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 30);
      ctx.lineTo(canvas.width, canvas.height - 30);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawBusinessIcon = (x: number, y: number, size: number, rotation: number, iconType: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(size, size);
      
      if (iconType === 'building') {
        // Building icon
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(-12, -15, 24, 30);
        
        // Windows
        ctx.fillStyle = '#60a5fa';
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 4; j++) {
            ctx.fillRect(-8 + i * 6, -12 + j * 6, 3, 3);
          }
        }
      } else if (iconType === 'briefcase') {
        // Briefcase icon
        ctx.fillStyle = '#1f2937';
        ctx.fillRect(-15, -8, 30, 16);
        
        // Handle
        ctx.strokeStyle = '#1f2937';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, -8, 8, Math.PI, 0);
        ctx.stroke();
        
        // Lock
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(-2, -2, 4, 4);
      } else if (iconType === 'handshake') {
        // Handshake/partnership icon
        ctx.fillStyle = '#059669';
        ctx.fillRect(-10, -5, 8, 10);
        ctx.fillRect(2, -5, 8, 10);
        
        // Connection
        ctx.strokeStyle = '#059669';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-2, 0);
        ctx.lineTo(2, 0);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawFleetCar = (x: number, y: number, size: number, isLead: boolean = false) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size, size);
      
      // Fleet car body (corporate colors)
      ctx.fillStyle = isLead ? '#2563eb' : '#e5e7eb';
      ctx.fillRect(-35, -5, 70, 15);
      
      // Car roof
      ctx.fillStyle = isLead ? '#1e40af' : '#d1d5db';
      ctx.fillRect(-25, -15, 50, 10);
      
      // Corporate logo area
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(-30, -2, 15, 8);
      
      // Windows
      ctx.fillStyle = '#87ceeb';
      ctx.fillRect(-24, -14, 12, 8);
      ctx.fillRect(12, -14, 12, 8);
      ctx.fillRect(-10, -14, 20, 8);
      
      // Wheels
      ctx.fillStyle = '#1f2937';
      ctx.beginPath();
      ctx.arc(-20, 10, 7, 0, Math.PI * 2);
      ctx.arc(20, 10, 7, 0, Math.PI * 2);
      ctx.fill();
      
      // Wheel rims
      ctx.fillStyle = '#6b7280';
      ctx.beginPath();
      ctx.arc(-20, 10, 4, 0, Math.PI * 2);
      ctx.arc(20, 10, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Headlights
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(33, -3, 3, 6);
      
      ctx.restore();
    };

    const drawNetworkConnection = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (theme === 'financing') {
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.1)');
        gradient.addColorStop(1, 'rgba(229, 35, 24, 0.05)');
      } else if (theme === 'sales') {
        gradient.addColorStop(0, 'rgba(251, 191, 36, 0.1)');
        gradient.addColorStop(1, 'rgba(239, 68, 68, 0.05)');
      } else if (theme === 'business') {
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.1)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)');
      } else {
        gradient.addColorStop(0, 'rgba(5, 150, 105, 0.1)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.05)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Draw road for sales theme
      if (theme === 'sales') {
        drawRoad();
      }
      
      // Animate cars
      cars.forEach((car, index) => {
        car.x += car.speed;
        if (car.x > canvas.width + 100) {
          car.x = -100;
        }
        
        let y;
        if (theme === 'sales') {
          // Cars drive on the road (bottom edge)
          y = canvas.height - 45;
        } else if (theme === 'business') {
          // Fleet formation - cars in convoy
          y = canvas.height * 0.65 + Math.sin(time * 0.5 + index) * 10;
        } else {
          // Cars float in the middle area
          y = canvas.height * 0.7 + Math.sin(time + index) * 20;
        }
        
        if (theme === 'business') {
          drawFleetCar(car.x, y, car.size, index === 0);
          
          // Draw network connections between fleet vehicles
          if (index > 0 && cars[index - 1]) {
            const prevCar = cars[index - 1];
            const prevY = canvas.height * 0.65 + Math.sin(time * 0.5 + (index - 1)) * 10;
            if (Math.abs(car.x - prevCar.x) < 200) {
              drawNetworkConnection(car.x - 35, y, prevCar.x + 35, prevY);
            }
          }
        } else {
          drawCar(car.x, y, car.size);
        }
      });
      
      // Animate symbols based on theme
      if (theme === 'financing') {
        moneySymbols.forEach((symbol, index) => {
          symbol.x = canvas.width * 0.2 + Math.cos(time * 0.5 + index) * 100;
          symbol.y = canvas.height * 0.3 + Math.sin(time * 0.3 + index) * 50;
          symbol.rotation += 0.02;
          
          drawMoneySymbol(symbol.x, symbol.y, symbol.size, symbol.rotation);
        });
      } else if (theme === 'zulassungsservice') {
        // For zulassungsservice, draw floating documents
        moneySymbols.forEach((symbol, index) => {
          symbol.x = canvas.width * 0.7 + Math.cos(time * 0.3 + index) * 80;
          symbol.y = canvas.height * 0.4 + Math.sin(time * 0.4 + index) * 60;
          symbol.rotation += 0.01;
          
          drawDocument(symbol.x, symbol.y, symbol.size, symbol.rotation);
        });
      } else if (theme === 'sales') {
        // For sales theme, no additional symbols - just cars on the road
        // The focus is on the realistic road animation with cars driving
      } else if (theme === 'business') {
        // For business, draw floating business icons
        const iconTypes = ['building', 'briefcase', 'handshake'];
        moneySymbols.forEach((symbol, index) => {
          symbol.x = canvas.width * 0.2 + Math.cos(time * 0.3 + index) * 100;
          symbol.y = canvas.height * 0.3 + Math.sin(time * 0.25 + index) * 60;
          symbol.rotation += 0.01;
          
          const iconType = iconTypes[index % iconTypes.length];
          drawBusinessIcon(symbol.x, symbol.y, symbol.size, symbol.rotation, iconType);
        });
      }
      
      // Animate particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md">
          {subtitle}
        </p>
        {children}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}
