import React, { useEffect, useState } from 'react';
import './Booking.css'; // see CSS below

const Booking = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    // Watch html.dark class changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="booking"

      className={`booking-wrapper ${isDark ? 'dark' : ''}`}
      style={{ height: '700px' }}
    >
      <iframe
        className="calendly-iframe"
        src="https://calendly.com/siavashnajafi01/30min"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Book a Meeting"
      />
    </div>
  );
};

export default Booking;
