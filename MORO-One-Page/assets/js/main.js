/* Home Counter */

const counters = document.querySelectorAll('.counter-home');

counters.forEach((counter) => {
    counter.innerHTML = '';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-value');
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
    };
    updateCounter();
});