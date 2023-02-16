  
  document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
            fetch(`https://api.github.com/search/users?q=${e.target.search.value}`)
            .then (res => res.json())
            .then (data => console.log(data))
    })
  }
  );
  function handleSearch(searchString)
  {
    let node=document.createElement("LI");
    let textnode=document.createTextNode(searchString);
    node.appendChild(textnode);
    document.getElementById("user-list").appendChild(node);
  }