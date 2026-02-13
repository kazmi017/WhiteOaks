// components/WaveBackground.tsx
export const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-transparent" />
      
      {/* Wave SVG layers */}
      <svg
        className="absolute bottom-0 left-0 w-full h-48 md:h-64 lg:h-80"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back wave - darkest green */}
        <path
          fill="#166534"
          fillOpacity="0.15"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        
        {/* Middle wave - medium green */}
        <path
          fill="#15803d"
          fillOpacity="0.25"
          d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,208C672,224,768,256,864,261.3C960,267,1056,245,1152,234.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        
        {/* Front wave - bright green/teal mix */}
        <path
          fill="#16a34a"
          fillOpacity="0.35"
          d="M0,288L48,282.7C96,277,192,267,288,261.3C384,256,480,256,576,266.7C672,277,768,299,864,294.7C960,288,1056,256,1152,245.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        
        {/* Accent wave - blue hint like the van logo */}
        <path
          fill="#0ea5e9"
          fillOpacity="0.1"
          d="M0,300L48,294.7C96,288,192,277,288,277.3C384,277,480,288,576,282.7C672,277,768,256,864,256C960,256,1056,277,1152,282.7C1248,288,1344,277,1392,272L1440,267L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Animated overlay waves for movement */}
      <div className="absolute bottom-0 left-0 w-[200%] h-48 md:h-64 lg:h-80 animate-wave-slow">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#22c55e"
            fillOpacity="0.1"
            d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

// CSS Animation styles - add to your globals.css or tailwind config
/*
@keyframes wave-slow {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-wave-slow {
  animation: wave-slow 20s linear infinite;
}
*/