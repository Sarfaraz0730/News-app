console.log("hello")
const API_KEY = "171b35340cf7465f8fe72a5fdeac867a"
const URL = `https://newsapi.org/v2/everything?q=india&from=2023-11-15&sortBy=publishedAt&apiKey=${API_KEY}`;

const contentDiv = document.getElementById("content-div");

async function fetchNews(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log("data", data.articles);

        data.articles.forEach((item, i) => {
            console.log("item.des", item.description)
            const truncatedDescription = item.description.length > 250
            ? item.description.slice(0, 100) + '...' 
            : item.description;
            const titleHeading =item.title.length>100? item.title.slice(0,60) + "...":item.title
            var box = document.createElement("div");
            box.className = "box";

            box.innerHTML = `<div class="image-div">
            <img class="img" src=${item.urlToImage} alt="news banner">
           </div>


           <div class="news-heading"><h4>${titleHeading}</h4></div>
           <div class="discription">${truncatedDescription}</div>
           <div class="read-more"><span id="read-text">Read full article</span> <button id="read-more-btn">  <u><span class="material-symbols-outlined">
            <u>arrow_right_alt</u>
            </span></u>
         </button>
        </div>`


            

            contentDiv.append(box);
        });

    } catch (err) {
        console.log("ERROR : ", err)
    }
}

fetchNews(URL);
