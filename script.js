document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        // اگر موقعیت اسکرول عمودی بیشتر از 50 پیکسل باشد
        if (window.scrollY > 50) {
            // کلاس 'scrolled' را به هدر اضافه کن
            header.classList.add('scrolled');
        } else {
            // در غیر این صورت، کلاس 'scrolled' را حذف کن
            header.classList.remove('scrolled');
        }
    });
});

// فعال‌سازی AOS
AOS.init();