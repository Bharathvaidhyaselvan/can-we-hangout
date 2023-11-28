let offsetX = 0;
let offsetY = 0;

function moveButton() {
    const noButton = document.getElementById('noButton');

    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    offsetX = (offsetX + 50) % maxX;
    offsetY = (offsetY + 50) % maxY;

    noButton.style.position = 'fixed';
    noButton.style.left = offsetX + 'px';
    noButton.style.top = offsetY + 'px';
}


function showConfirmation() {
    const confirmationOverlay = document.getElementById('confirmationOverlay');
    confirmationOverlay.style.display = 'flex';
}

function submitForm() {
    const confirmationOverlay = document.getElementById('confirmationOverlay');
    confirmationOverlay.innerHTML = `
        <div style="display: block; text-align: center;">
            <img src="assets/bunny.gif" alt="Confirmation Image" style="display: block; margin: 0 auto;">
            <br>
            <h2 style="display: block; margin: 0 auto; color: white">See you there...</h2>
        </div>
    `;
    setTimeout(() => {
        confirmationOverlay.style.display = 'none';
    }, 20000);
    return false; 
}

