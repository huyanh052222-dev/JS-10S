const box = document.querySelectorAll('.content');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 6 * 4;

    box.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
            box.classList.remove('hidden-left');
        } else {
            if(box.classList.contains('show')) {
                box.classList.remove('show');
                box.classList.add('hidden-left');
            }
        }
    });
}