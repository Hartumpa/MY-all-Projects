let navbar=()=>{
    return  `<input type="text" placeholder="Search News" id="search_input">
            <h1><a href="./index.html">Home</a></h1>`
}

let sidebar=()=>{
    return `      <h2 id="in">India</h2>
                    <h2 id="ch">China</h2>
                    <h2 id="us">USA</h2>
                    <h2 id="uk">UK</h2>
                    <h2 id="nz">Newzeland</h2>`
}

export {navbar,sidebar}

let getData=async(url)=>{
    let res=await fetch(url);
    let data=await res.json();
    return data;
}

let show = (data,container) => {
    if (!data) {
        return;
    }
 
    container.innerHTML = "";
    data.forEach((el) => {
        let div = document.createElement("div")
        div.setAttribute("class", "news")
        let img = document.createElement("img");
        img.src = el.urlToImage;

        let title = document.createElement("h3");
        title.innerText = el.title;

        let desc = document.createElement("p");
        desc.innerText = el.description;

        let newsDetails = document.createElement("div")
        newsDetails.setAttribute("id", "details")

        newsDetails.append(title,desc)
        div.append(img,newsDetails)
        container.append(div);

        div.addEventListener("click", () => {
            console.log(el)
            localStorage.setItem("news", JSON.stringify(el))
            window.location.href = "news.html";
        })

    })
}

export { show,getData };