// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', () => {
    // 获取导航菜单元素
    const nav = document.querySelector('.nav');
    const menuItems = document.querySelectorAll('.nav__link');

    // 添加滚动事件监听器
    window.addEventListener('scroll', () => {
        // 当页面滚动时添加阴影效果
        if (window.scrollY > 0) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

    // 为每个导航链接添加点击事件
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // 移除所有链接的活动状态
            menuItems.forEach(link => link.classList.remove('active'));
            // 添加当前点击链接的活动状态
            item.classList.add('active');
        });
    });

    // 添加特色卡片的动画效果
    const featureCards = document.querySelectorAll('.feature-card');
    
    // 使用 Intersection Observer 来添加进入视图时的动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // 初始化特色卡片的样式
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}); 