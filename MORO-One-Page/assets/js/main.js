
/* Sticky Header */
const navbar = document.querySelector('.navbar');

const headerScroll = () => {
  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? 
  navbar.className = 'navbar sticky-header navbar-expand-lg fixed-top bg-white' 
  : navbar.className = 'navbar navbar-expand-lg fixed-top';
}

window.onscroll = () => headerScroll();


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


/* Portfolio */

const portfolioData = [{
    id: 1,
    category: 'Marketing',
    image: 'https://moro.netlify.app/main/img/portfolio/1.jpg',
    title: 'Brex Logo',
    brand: 'Brand',
},
{
    id: 2,
    category: 'Design',
    image: 'https://moro.netlify.app/main/img/portfolio/2.jpg',
    title: 'Brex Logo',
    brand: 'Brand',
},
{
    id: 3,
    category: 'Development',
    image: 'https://moro.netlify.app/main/img/portfolio/3.jpg',
    title: 'Brex Logo',
    brand: 'Brand',
},
{
    id: 4,
    category: 'Marketing',
    image: 'https://moro.netlify.app/main/img/portfolio/4.jpg',
    title: 'Brex Logo',
    brand: 'Brand',
},
{
    id: 5,
    category: 'Design',
    image: 'https://moro.netlify.app/main/img/portfolio/5.jpg',
    title: 'Brex Logo',
    brand: 'Brand',
},
{
    id: 6,
    category: 'Development',
    image: 'https://moro.netlify.app/main/img/portfolio/6.jpg',
    title: 'Brex Logo',
    brand: 'Brand',
},
{
    id: 7,
    category: 'Marketing',
    image: 'https://moro.netlify.app/main/img/portfolio/7.jpg',
    title: 'Brex Logo',
    brand: 'Brand',
},
{
    id: 8,
    category: 'Design',
    image: 'https://moro.netlify.app/main/img/portfolio/8.jpg',
    title: 'Brex Logo',
    brand: 'Brand',
},
]


// Category
let categories = [...new Set(portfolioData.map(portfolioData => portfolioData.category))];
categories.unshift('All');

let filterGroup = document.querySelector('.portfolio-filter-button-group');
    for (const category of categories) {
        let active = category === 'All' ? ' filter-active' : '' 
    filterGroup.innerHTML += `<button class="btn-item${active}" data-id=${category}>${category}</button>`;
    }


let filterButtons = document.querySelectorAll('.btn-item');
filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let current = document.getElementsByClassName('filter-active');
        //btn.className = btn.className.replace(" filter-active", "");
        current[0].className = 'btn-item'

        e.currentTarget.className = "btn-item filter-active";
        const target = e.currentTarget.dataset.id;
        portfolioFilter(target);
    })
});

let portfolioGrid = document.querySelector('.portfolio-grid');
function portfolioFilter(category){
    const result = category === 'All' ? portfolioData.filter((portfolio) => portfolio) : portfolioData.filter((portfolio) => portfolio.category == category)
    portfolioGrid.innerHTML = '';
    result.forEach(portfolioItem => {
        portfolioGrid.innerHTML += `
        <div class="col-lg-3 col-md-6 grid-item p-0 col-sm-12">
        <div class="single-portfolio-item p-0">
            <img src="${portfolioItem.image}" alt="" class="img-fluid">
            <div class="overlay text-center">
                <div class="content">
                    <h3>${portfolioItem.title}</h3>
                    <p>${portfolioItem.brand}</p>
                    <a href="${portfolioItem.image}" class="image-link">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
        `
    });
}

portfolioFilter('All');