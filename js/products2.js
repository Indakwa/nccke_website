const products = [
    {
        p_name: "Simba Cement 32.5R",
        list_items: `
        <li>Faster drying and settling time</li>
        <li>Greater comprehensive strength</li>
        <li>Better coverage comparatively</li>
        <li>UNBS certified</li>
        <li>Suitable for all general purpose applications</li>
        <li>No breakage or spillage due to eco-friendly packing</li>
        <li>High grade of fineness</li>
        `,
        price: "KSh. 480.00",
        src: "bag.png"
    },
    {
        p_name: "Simba Power 42.5N",
        list_items: `
        <li>Suitable for specialized constructions</li>
        <li>Versatile application for bridges, towers, pavements, highways, high-rise towers and more.</li>
        <li>High supportive strength to the structures</li>
        <li>Specific international formulation</li>
        `,
        price: "KSh. 570.00",
        src: "../images/bag2.png"
    },
    {
        p_name: "Paving Blocks",
        list_items: `
        <li>Extremely durable and can withstand harsh weather conditions </li>
        <li>Aesthetically pleasing - designed in a wide range of shapes, sizes, and colors</li>
        <li>Relatively easy to install</li>
        <li>Environmentally friendly </li>
        `,
        price: "KSh. 250.00",
        src: "../images/block.png"
    },
]

const img = document.getElementById('myImg')
const h3 = document.getElementById('myH3')
const container = document.querySelector('.container');
const ul = container.querySelector('ul');
const product = products[localStorage.getItem('s_prdct')]; 

// Add the list items to the <ul> element
ul.innerHTML = product.list_items;
img.src = `../images/${product.src}`;
h3.innerText = product.p_name;