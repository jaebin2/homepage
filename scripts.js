// 스크롤을 부드럽게 하는 기능 추가
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
