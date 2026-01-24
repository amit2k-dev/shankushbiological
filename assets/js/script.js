function showAll() {
        // Saare hidden-product class wale cards select karein
        const hiddenCards = document.querySelectorAll('.hidden-product');
        
        // Loop chala kar unka display show karein
        hiddenCards.forEach(card => {
            card.style.display = 'flex';
        });

        // Click ke baad button hide kar dein
        document.getElementById('btnContainer').style.display = 'none';
    }