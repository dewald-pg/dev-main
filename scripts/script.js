
function showDescription(iconNumber) {
    hideAllDescriptions();
    document.getElementById(`landing-description-icon-${iconNumber}`).classList.add('active');
}

function hideDescription(iconNumber) {
    document.getElementById(`landing-description-icon-${iconNumber}`).classList.remove('active');
}

function hideAllDescriptions() {
    const descriptions = document.querySelectorAll('.description-text');
    descriptions.forEach(description => description.classList.remove('active'));
}
