import { useEffect } from 'react';

export function PerformanceTracking() {
  useEffect(() => {
    // Google Analytics 4 (replace with your GA4 measurement ID)
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID
    
    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    // Track page views
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(entry.startTime),
            event_category: 'Web Vitals',
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
            event_category: 'Web Vitals',
          });
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000),
          event_category: 'Web Vitals',
        });
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Track Web Vitals after page load
    if (document.readyState === 'complete') {
      trackWebVitals();
    } else {
      window.addEventListener('load', trackWebVitals);
    }

    // Track user interactions
    const trackInteractions = () => {
      // Track form submissions
      document.addEventListener('submit', (e) => {
        gtag('event', 'form_submit', {
          form_name: e.target.name || 'unknown',
          event_category: 'Engagement',
        });
      });

      // Track phone number clicks
      document.addEventListener('click', (e) => {
        if (e.target.href && e.target.href.startsWith('tel:')) {
          gtag('event', 'phone_click', {
            phone_number: e.target.href.replace('tel:', ''),
            event_category: 'Contact',
          });
        }
      });

      // Track email clicks
      document.addEventListener('click', (e) => {
        if (e.target.href && e.target.href.startsWith('mailto:')) {
          gtag('event', 'email_click', {
            email_address: e.target.href.replace('mailto:', ''),
            event_category: 'Contact',
          });
        }
      });
    };

    trackInteractions();

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
