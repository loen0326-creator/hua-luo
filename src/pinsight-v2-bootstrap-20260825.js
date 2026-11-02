import './pinsight-final-v2.css';

let started = false;

function mountPinSightV2() {
  const caseStudy = document.querySelector('#case-pinsight');
  if (!caseStudy || caseStudy.querySelector('.psv2-experience') || started) return;

  started = true;
  import('./pinsight-final-v2.js?ui=20260825')
    .catch(() => {
      started = false;
    });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountPinSightV2, { once: true });
} else {
  mountPinSightV2();
}

new MutationObserver(mountPinSightV2).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

window.addEventListener('hashchange', mountPinSightV2);
window.setTimeout(mountPinSightV2, 250);
window.setTimeout(mountPinSightV2, 1000);
