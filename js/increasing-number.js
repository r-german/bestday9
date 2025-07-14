// Увеличение числа
function animateNumber(elementId, startValue, endValue, duration) {
    const element = document.getElementById(elementId);
    let currentValue = startValue;
    const increment = (endValue - startValue) / (duration / 100);
    const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= endValue) {
            element.textContent = endValue;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, 100);
}