// 통계 위젯 애니메이션 관리
(function () {
  'use strict';

  // Stat Counter Animation
  function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const startTime = Date.now();

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      current = target * progress;

      if (target >= 10) {
        element.textContent = Math.floor(current);
      } else {
        element.textContent = current.toFixed(1);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // Final value
        if (target >= 10 || target === 4) {
          element.textContent = Math.floor(target);
        } else {
          element.textContent = target;
        }
        element.textContent += (target >= 10 || target === 4 ? '' : (element.textContent.includes('%') ? '' : '%'));
      }
    }

    update();
  }

  // Bar Chart Animation
  function animateBarChart(element, targetValue, duration = 1500) {
    const bar = element.querySelector('[data-value]');
    if (!bar) return;

    const startValue = 0;
    const startTime = Date.now();

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = startValue + (targetValue - startValue) * progress;

      bar.style.width = currentValue + '%';

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    update();
  }

  // Donut Chart Animation (SVG stroke-dashoffset)
  function animateDonutChart(svgElement, percentValue, duration = 2000) {
    const circle = svgElement.querySelector('circle[data-percentage]');
    if (!circle) return;

    const radius = parseFloat(circle.getAttribute('r')) || 40;
    const circumference = 2 * Math.PI * radius;
    const targetOffset = circumference * (1 - percentValue / 100);

    const startTime = Date.now();
    let currentOffset = circumference;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      currentOffset = circumference - (circumference - targetOffset) * progress;
      circle.style.strokeDashoffset = currentOffset;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        circle.style.strokeDashoffset = targetOffset;
      }
    }

    update();
  }

  // Intersection Observer for stat cards (trigger on scroll into view)
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '50px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        const statNumber = entry.target.querySelector('[data-target]');
        if (statNumber) {
          const target = parseFloat(statNumber.getAttribute('data-target'));
          animateCounter(statNumber, target, 2000);
        }

        const barChart = entry.target.querySelector('[data-bar-target]');
        if (barChart) {
          const target = parseFloat(barChart.getAttribute('data-bar-target'));
          animateBarChart(entry.target, target, 1500);
        }

        const donutSvg = entry.target.querySelector('svg[data-chart-type="donut"]');
        if (donutSvg) {
          const target = parseFloat(donutSvg.getAttribute('data-percentage')) || 39.7;
          animateDonutChart(donutSvg, target, 2000);
        }

        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all stat containers
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-animate="true"]').forEach(element => {
      observer.observe(element);
    });
  });

  // Expose to window for manual triggering if needed
  window.AnimateCharts = {
    animateCounter,
    animateBarChart,
    animateDonutChart,
    observer
  };

  console.log('Chart animations initialized');
})();
