const API_KEY = "171b35340cf7465f8fe72a5fdeac867a";
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
var search = "";
var searchResult;
const contentDiv = document.getElementById("content-div");

async function fetchNews(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();

        // Clear existing content before rendering new data
        contentDiv.innerHTML = "";

        data.articles.forEach((item, i) => {
            const truncatedDescription =
                item.description.length > 250
                    ? item.description.slice(0, 100) + "..."
                    : item.description;
            const titleHeading =
                item.title.length > 100 ? item.title.slice(0, 60) + "..." : item.title;
            var box = document.createElement("div");
            box.className = "box";

            box.innerHTML = `<div class="image-div">
                <img class="img" src=${item.urlToImage} alt="news banner">
            </div>

            <div class="news-heading"><h4>${titleHeading}</h4></div>
            <div class="discription">${truncatedDescription}</div>
            <div class="read-more"><span id="read-text">Read full article</span> <button id="read-more-btn">  <u><span class="material-symbols-outlined">
                <u>arrow_right_alt</u>
            </span></u></button></div>`;

            contentDiv.append(box);
        });
    } catch (err) {
        console.log("ERROR : ", err);
    }
}

function getInput() {
    var inputValue = document.getElementById("input").value;
    search = inputValue;

    searchResult = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;

    console.log("searchResult", searchResult);

    if (search === "") {
        fetchNews(URL);
    } else {
        fetchNews(searchResult);
    }
}

// Initial loading of news when the page loads
document.addEventListener("DOMContentLoaded", function () {
    fetchNews(URL);
});
