// JavaScript to manage tooltip display
document.querySelectorAll('.contact-item').forEach(item => {
    const tooltipText = item.getAttribute('data-tooltip');
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;

    item.appendChild(tooltip);

    item.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const imgSrc = card.getAttribute('data-img');
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-desc');

        card.innerHTML = `
            <div class="card-image">
                <img src="${imgSrc}" alt="${title} Icon">
            </div>
            <div class="card-title">
                <h1>${title}</h1>
            </div>
            <div class="card-description">
                <p>${description}</p>
            </div>
        `;
        
    });
});
