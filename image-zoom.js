for (let i = 0; i < document.querySelectorAll(".product-image"); i++) {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.2)"; // Ελαφριά μεγέθυνση
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)"; // Επαναφορά στο αρχικό μέγεθος
    });
}
