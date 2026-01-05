// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

// Billing toggle
const toggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.js-price');
function renderPrices() {
  const yearly = toggle?.checked;
  prices.forEach(p => {
    const monthly = parseInt(p.dataset.monthly, 10);
    const y = parseInt(p.dataset.yearly, 10);
    p.textContent = yearly ? y : monthly;
  });
  document.querySelectorAll('.price-card small').forEach(s => {
    s.textContent = yearly ? '/mo (billed yearly)' : '/mo';
  });
}
toggle?.addEventListener('change', renderPrices);
renderPrices();

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();


