import './pinsight-final-v2.css';

let mounting = false;

function mountPinSightFinalUI() {
  const root = document.querySelector('#case-pinsight');
  if (!root || root.querySelector('.psv2-experience') || mounting) return;

  mounting = true;
  import('./pinsight-final-v2.js?force=20260825')
    .catch(() => {
      mounting = false;
    });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountPinSightFinalUI, { once: true });
} else {
  mountPinSightFinalUI();
}

const observer = new MutationObserver(mountPinSightFinalUI);
observer.observe(document.documentElement, { childList: true, subtree: true });

window.addEventListener('hashchange', mountPinSightFinalUI);
window.setInterval(mountPinSightFinalUI, 500);
