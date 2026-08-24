        // Parallax on scroll
        const parallaxBgs = document.querySelectorAll('.parallax-bg');

        function updateParallax() {
            const scrollY = window.pageYOffset;

            parallaxBgs.forEach(bg => {
                const section = bg.parentElement;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollY + window.innerHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
                    const speed = parseFloat(bg.dataset.speed) || 0.3;
                    const yPos = -(scrollY - sectionTop) * speed;
                    bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            });
        }

        // Scroll reveal
        const reveals = document.querySelectorAll('.reveal');

        function revealOnScroll() {
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const revealPoint = 120;

                if (elementTop < windowHeight - revealPoint) {
                    el.classList.add('active');
                }
            });
        }

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');

        function updateNavbar() {
            if (window.pageYOffset > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Mouse parallax for hero
        const hero = document.getElementById('hero');
        const floatingShoe = hero.querySelector('.floating-shoe');

        hero.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            floatingShoe.style.transform = `translate(${x}px, ${y}px) rotate(-20deg)`;
        });

        window.addEventListener('scroll', () => {
            updateParallax();
            revealOnScroll();
            updateNavbar();
        }, { passive: true });

        window.addEventListener('load', () => {
            updateParallax();
            revealOnScroll();
        });
