console.log("hello")
const API_KEY ="171b35340cf7465f8fe72a5fdeac867a"
const URL = `https://newsapi.org/v2/everything?q=india&from=2023-11-15&sortBy=publishedAt&apiKey=${API_KEY}`;

const contentDiv=document.getElementById("content-div");


async function fetchNews(api){
    var box = document.createElement("div");
    box.className="box";

try{
    const response = await fetch(api);
    const data = await response.json();
    console.log("data",data.articles)
}catch(err){
    console.log("ERROR : ", err)
}
}
fetchNews(URL)

