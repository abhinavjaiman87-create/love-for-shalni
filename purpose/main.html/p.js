// function showSurprise() {
//     const surprise = document.getElementById('surprise');
//     surprise.style.display = 'block';
//     surprise.innerHTML = '🌟 You make my day brighter ! 🌟'; // Customize this
// }
function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.classList.remove('hidden');
    // Show the response section after a short delay
    setTimeout(() => {
        document.getElementById('response-section').classList.remove('hidden');
    }, 1000); // 1 second delay for smooth flow
}

function respondYes() {
    hideButtons();
    const response = document.getElementById('yes-response');
    response.classList.remove('hidden');
    // Optional: Trigger confetti for celebration
    // confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

function respondNo() {
    hideButtons();
    const response = document.getElementById('no-response');
    response.classList.remove('hidden');
}

function hideButtons() {
    document.getElementById('response-section').classList.add('hidden');
}