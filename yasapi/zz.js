let p = document.querySelector('p');
let button = document.querySelector('button');
let a = document.querySelector('#url1');

let url = `news.json`;

button.addEventListener('click', news);

function news() {
    fetch(url).then((response) => {
        response.json().then((data) => {
            a=Math.floor(Math.random() * 10)

            
            p.innerText = `
                       Author : ${data.articles[a].author}\n
                       Published Time : ${data.articles[a].publishedAt}\n
                       News :  ${data.articles[a].title}`;
            
            a.href = data.articles[a].url;
            a.innerText = "Read more";
        });
    })
    .catch((error) => {
        console.log("Error fetching the news:", error);
    });
}
