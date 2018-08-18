/*Exercise 1

ONLY using promises! 
a. Wait for 3 seconds, then fetch movies using this url https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json and log the result out

b. When that is done, fetch the reddit programmerhumor posts. 'https://www.reddit.com/r/ProgrammerHumor.json'

Use chaining instead of 

*/

const movieAPI = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
const redditAPI = "https://www.reddit.com/r/ProgrammerHumor.json";


setTimeout(()=>{

    fetch(movieAPI)
        .then(response =>{
            return response.json();
        })
        .then(json => {
            console.log(json);
            return fetch(redditAPI);
        })
        .then(data =>{
            return data.json();
            console.log(data.json)
        })
        .then(finalData =>{
            console.log(finalData);
        })
        .catch(err => console.log(error));

},3000);

// For closures:
// Exercise 2. Fill in the blank functions using closures
function createClass(students, roomNumber, time) {
    return {
        addStudent(name) {
            students.push(name);
        },
        removeStudent(name) {
            students.pop(name);
        },
        removeAllStudents() {
            
        },
        getStudents() {
            return students;
        },
        getNumberOfStudents() {
            return students.length;
        },
        getTime() {
            return time;
        },
        changeTime() {

        },
        isStudentInClass() {

        },
    }
}
