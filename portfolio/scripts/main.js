document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    function removeSelectedClass() {
        navItems.forEach(nav => {
            nav.classList.remove('selected');
        });
    }

    function addSelectedClass(id) {
        const navItem = document.querySelector(`#nav-${id}`);
        if (navItem) {
            navItem.classList.add('selected');
        }
    }

    function onScroll() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        removeSelectedClass();
        addSelectedClass(currentSection);
    }

    window.addEventListener('scroll', onScroll);

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            removeSelectedClass();
            this.classList.add('selected');
        });
    });

    const aboutMeButton = document.getElementById('aboutMeButton');
    aboutMeButton.addEventListener('click', function() {
        document.getElementById('aboutme').scrollIntoView({ behavior: 'smooth' });
        removeSelectedClass();
        document.getElementById('nav-aboutme').classList.add('selected');
    });
});