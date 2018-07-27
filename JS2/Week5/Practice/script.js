var repoContainer = document.getElementById("repo-info");

var btn = document.getElementById('btn');
btn.addEventListener("click", function(){
    
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos');
    ourRequest.onload = function(){
        if(ourRequest.status >= 200 && ourRequest.status > 400) {

        
    var ourData =JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
} else{
    console.log("We connected to the server , but it returned an error");
}
};
    ourRequest.onerror =function(){
        console.log("Connection Error");
    };
    ourRequest.send();
});

function renderHTML(data){
    var htmlString ='';
    for(let i =0; i<data.length; i++){
        htmlString += "<p>" +data[i].name +" has  a full name  of " + data[i].full_name +"</p>";

    }
    repoContainer.insertAdjacentHTML('beforeend', htmlString)
}






