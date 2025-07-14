// Эффект "печатающегося" текста
const textToType = "Агентство праздников - “100 чудес”";
const typingElement = document.querySelector('.about-company-section2 h3');
let charIndex = 0;
function typeWriter() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}