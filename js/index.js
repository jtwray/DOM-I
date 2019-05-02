const siteContent = {
    nav: {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png'
    },
    cta: {
        h1: 'DOM Is Awesome',
        button: 'Get Started',
        'img-src': 'img/header-img.png'
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
    },
    contact: {
        'contact-h4': 'Contact',
        address: '123 Way 456 Street Somewhere, USA',
        phone: '1 (888) 888-8888',
        email: 'sales@greatidea.io'
    },
    footer: {
        copyright: 'Copyright Great Idea! 2018'
    }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let navItems = document.querySelectorAll('nav a');
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';

//creates and names to 2 new navigation links 52-65
let navAlink = document.createElement('a');
let navAlink2 = document.createElement('a');
//creates and anchor tag 
let nav1Name = document.createTextNode('Company');
let nav2Name = document.createTextNode('Gallery');

//creates a text node for the anchor tag Element Node
navAlink.appendChild(nav1Name);
navAlink2.appendChild(nav2Name);
//adds text node onto the anchor tag Element Nodef
document.querySelector('nav').prepend(navAlink);
document.querySelector('nav').appendChild(navAlink2);
//adds the Element Node+textnode <parent1><child1></parent1> to the DOM at the first instance of a nav tag found from the top


//change nav item color to green
let navs = document.querySelectorAll("body > div > header > nav > a");
navs.forEach(i => i.style.color = 'green');

// document.getElementById('header nav').style = `color:green;`;
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];


let ctaH1 = document.querySelector("body > div > section.cta > div > h1");
let ctaContent = siteContent.cta.h1;
let ctaSplit = ctaContent.split(" ");

let h1DOM = document.createElement("h1");
let h1IS = document.createElement("h1");
let h1AWESOME = document.createElement("h1");
let firstBreak = document.createElement("br");

h1DOM.textContent = ctaSplit[0];
h1IS.textContent = ctaSplit[1];
h1AWESOME.textContent = ctaSplit[2];

ctaH1.append(firstBreak);
ctaH1.append(h1DOM);
ctaH1.append(h1IS);
ctaH1.append(h1AWESOME);

let ctaBtn = document.querySelector(`
button `);
ctaBtn.textContent = siteContent.cta.button;

let featuresH4 = document.querySelector(`section.main-content div.top-content div:nth-child(1) h4`);
// document.querySelector("body > div > section.main-content > div.top-content > div:nth-child(1) > h4")
featuresH4.textContent = siteContent["main-content"]["features-h4"];
let featurescontent = document.querySelector(`section.main-content div.top-content div:nth-child(1) p `);
featurescontent.textContent = siteContent["main-content"]["features-content"];

let abouth4 = document.querySelector(`section.main-content div.top-content div:nth-child(2) h4 `);
abouth4.textContent = siteContent["main-content"]["about-h4"];
let aboutcontent = document.querySelector(`section.main-content div.top-content div:nth-child(2) p `);
aboutcontent.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]['middle-img-src'];

let servicesH4 = document.querySelector(`section.main-content div.bottom-content div:nth-child(1) h4 `);
servicesH4.textContent = siteContent["main-content"]["services-h4"];
let servicescontent = document.querySelector(`section.main-content > div.bottom-content > div:nth-child(1) > p `);
servicescontent.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(`section.main-content div.bottom-content div:nth-child(2) h4 `);
productH4.textContent = siteContent["main-content"]["product-h4"];
let productcontent = document.querySelector(`section.main-content div.bottom-content div:nth-child(2) p `);
productcontent.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(`section.main-content div.bottom-content div:nth-child(3) h4 `);
visionH4.textContent = siteContent["main-content"]["vision-h4"];
let visioncontent = document.querySelector(`section.main-content div.bottom-content div:nth-child(3) p `);
visioncontent.textContent = siteContent["main-content"]["vision-content"];


let contacth4 = document.querySelector(`body > div > section.contact > h4 `);
contacth4.textContent = siteContent.contact["contact-h4"];


let lineBreak = document.createElement('br');
let lineBreak1 = document.createElement('br');
let lineBreak2 = document.createElement('br');
let contactAddress = document.querySelector('body > div > section.contact > p:nth-child(2)');
contactAddress.textContent = `123 Way 456 Street `;
contactAddress.append(lineBreak);
contactAddress.append(`Somewhere, USA `);
contactAddress.append(lineBreak1);
contactAddress.append(`1(888) 888 - 8888 `);
contactAddress.append(lineBreak2);
contactAddress.append(`sales @greatidea.io `);
let footerCopyright = document.querySelector(`body > div > footer > p `);
footerCopyright.textContent = siteContent.footer.copyright;