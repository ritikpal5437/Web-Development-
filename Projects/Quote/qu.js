//  https://github.com/lukePeavey/quotable api for quotes

 
        const quote = document.getElementById("quote")
        const author = document.getElementById("author")
        const api_url="https://dummyjson.com/quotes/random";
        async function getquote(url){
            const response = await fetch(url);
            var data = await response.json();
            // console.log(data);
            quote.innerHTML=data.quote;
            author.innerHTML=data.author;

            
        }
        getquote(api_url);
        function tweet() {
            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.innerText + " " + author.innerText)}`;
            window.open(tweetUrl, "Tweet Window", "width=600,height=400");
        }
    