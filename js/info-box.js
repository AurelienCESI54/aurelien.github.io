document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.closest('.box').querySelector('.description');
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
            this.textContent = '▲';
        } else {
            description.style.display = 'none';
            this.textContent = '▼';
        }
    });
});
