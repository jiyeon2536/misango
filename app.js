// 1. 다크 모드 토글 기능
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 테마 상태 확인 및 적용 함수
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    }
};

// 버튼 클릭 이벤트
themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
});

// 초기 실행: 저장된 테마 불러오기
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

// 2. 스크롤 시 나타나는 애니메이션 (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealOnScroll.observe(el));