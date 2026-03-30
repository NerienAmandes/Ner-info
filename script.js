document.addEventListener('DOMContentLoaded', () => {
    const linkBtns = document.querySelectorAll('.link-btn');
    linkBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});
