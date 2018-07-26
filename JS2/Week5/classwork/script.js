/*
1.Write a function to append a new '<li>' element to the '<ul>'.
2.Add a 'click event listener forthe <button>.
3. When button is clicked , a new <li> element should be added to the <ul>. you can put any text of your choice inside the <li> tag
*/

console.log('It\'s loaded');


function addnewitem(value){
    if(!value){
        return;
    }
    
    const ul = document.querySelector('ul#items');
    console.log(ul);
    
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = value;
    
    }
    

   

const btn = document.querySelector('#btn');
console.log(btn);
btn.addEventListener('click', function(){
    const input = document.querySelector('input');
    console.log(input.value);
    addnewitem(input.value);
    input.value ='';
     
});
/*callback function is no more addnewitem its the whole function after click*/




