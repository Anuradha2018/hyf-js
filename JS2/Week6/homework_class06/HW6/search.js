
function fetchJSONData(url, callback){
    const request = new XMLHttpRequest();
    request.addEventListener('load', function (data) {
        if (this.status === 200){
            const responseText = request.responseText;
            const data = JSON.parse(responseText);
            callback(data); 
         }else{
            console.log('Something is probably wrong with the url');
        }
    });
    request.addEventListener('error', function() {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request
    request.send();
};



form.addEventListener('submit', event =>{
    event.preventDefault();
    const form = document.querySelector('#searchForm');
    const formData = new FormData(event.target);
    const searchString = formData.get('searchString');
    const tbody = document.querySelector('#repoList > tbody');
    tbody.innerHTML ='';
    const url = 'https://api.github.com/search/repositories?q=user:HackYourFuture' + searchString;

    fetchJSONData(url,data =>{
        if(data.reponse === 'False'){
            alert(data.Error);
            return;
        }
        for(const name of data.search){
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            tr.innerHTML = `<td class = "repoName">
            ${repo.name}
            
            </td>
            <td class = 'repoDetails'>
            ${repo.forks}</td>
            `;

            const link = tr.querySelector('.repoName');
            const td = tr.querySelector('.repoDetails');

            link.addEventListener('click', (event) =>{
                event.preventDefault();
                showRepoDetails(repo,td);
            })

        }
    });
});

function showRepoDetails(repo,td){
    const url ="https://api.github.com/repos/HackYourFuture-CPH/" + repo.id;
    fetchJSONData(url, repoDetails =>{
        td.innerHTML = `
        NAME : ${repoDetails.name} <br>
        FORKS: ${repoDetails.forks} <br>
        WATCHERS: ${repoDetails.watchers} <br>
        `;
    });
}