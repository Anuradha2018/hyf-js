function fetchJSONData(url, callbackFn){
    
    const xhr = new XMLHttpRequest();
    
    
    xhr.addEventListener('load', function(){
    console.log('Data Loaded.');
    const data = JSON.parse(xhr.responseText);
    callbackFn(data);
});

xhr.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos');
xhr.send();
}

function addnewitem(value){
    if(!value){
        return;
    }
    
    const ul = document.querySelector('ul#repoList');
    console.log(ul);
    
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = value;
    
    }


fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList){
   for(let i = 0; i < repoList.length; i++){
       const repo = repoList[i];
       addnewitem(repo.full_name);
       console.log(repo.full_name);
   }
});


