const news = [
    {
        title: "The newly launched Simba Cement Factory in Nakuru County is aligned to the Affordable Housing pillar which is under President Uhuru Kenyatta’s Big Four Agenda.",
        content: "The Government has also put in place various measures to support investments in the Manufacturing sector in the country, as well as a key pillar under the Big Four Agenda."
    },
    {
        title: "Kenya’s Simba cement opens Sh6.8 billion plant",
        content: "Kenya’s Devki Group has opened a huge cement manufacturing plant in Nakuru a move that its chairman Narendra Raval says will not only boost cement production in the area but also offer employment. Mr Raval says that already Simba Cement factory located in Salgaa area is selling cement at Ksh.530 in Nakuru and its environs down from Ksh.750. The  Ksh5.8 billion plant is still being expanded and will create a total of 1000 direct jobs by June this year. Speaking after presiding over the opening of the cement plant, president Uhuru Kenyatta urged companies involved in the construction industry to leverage on the low cement prices offered by the processor to expand their enterprises and assured that the Government is keen on attracting more factories to the region. He said the Government will continue to support investments that utilise local resources to create wealth and employment opportunities for Kenyans across the country. The Head of State said the Government will keep investing in capacity building for local industries to enable them get a share of the ever expanding international market for Kenyan products. Devki Group has been on an aggressive expansion drive over the last two years. In February last year, his National Cement launched a $280 million cement clinker plant located in Merrueshi/Mbirikani in Kajiado County, 80 km south of Nairobi. Earlier this year he acquired the Kenyan assets of bankrupt Cement manufacturer Athi River Mining for $50 million, apart from Nakuru cement plant the company is currently constructing two new cement factories in Njoro and Mariakani in Mombasa. Devki Group is one of the largest manufacturers of steel in East Africa."
    },
    {
        title: "Official opening of the Simba Cement Nakuru Grinding Plant.",
        content: "https://www.facebook.com/watch/?v=805504166632908"
    },
    {
        title: "Simba Cement’s Nakuru plant promises 700 new jobs",
        content: "Devki Group’s National Cement Company (NCC) on Tuesday launched a new factory in Nakuru County, lifting the company’s annual consolidated production capacity to two million tonnes. The Sh6 billion plant, with an annual capacity of 750,000 tonnes, is located in the Salgaa area on the Nakuru-Eldoret highway. It is expected to generate 700 direct jobs. Devki Group chairman Narendra Raval said NCC’s overall production capacity would hit 3.5 million tonnes by July following ongoing expansion projects, including phase two of the Salgaa plant that is expected to add another 750,000 tonnes.Devki Group of Companies owns Simba Cement Limited (Simba Cement). Simba Cement trades under the brand name National Cement while Cemtech Limited, is a subsidiary of Sanghi Group of India. Sanghi Group is one of the world’s largest cement manufacturers. Cement production decreased by 2.4 percent while consumption grew marginally by 0.18 percent in the half-year of 2019, according to the Kenya National Bureau of Statistics (KNBS). KNBS data indicates that cement production dropped by 8.2 per cent from 6.7 million tonnes in 2016 to 6.2 million tonnes in 2017. Similarly, cement consumption and stocks fell from 6.3 million tonnes in 2016 to 5.8 million tonnes in 2017 owing to reduced demand in the construction sector. These market dynamics, coupled with competitive players, have resulted in a decrease in cement prices over recent years. In 2018, the average price of a 50kg bag of cement was Sh605 from an average of Sh 687 two years ago."
    }

]

const newsTitle = document.getElementById("newsTitle");
const newsContent = document.getElementById("newsContent");

newsTitle.textContent = news[localStorage.getItem("boxId")].title;
newsContent.textContent = news[localStorage.getItem("boxId")].content;

const boxes = document.querySelectorAll(".boxed"); // select all boxes
boxes.forEach(box => { // loop through each box
  box.addEventListener("click", () => { // add event listener to each box
    const boxId = box.id; // get the ID of the clicked box
    localStorage.setItem("boxId", boxId); // store the ID in local storage with key "boxId"
    location.href = "news2.html"
  });
});

