// function fetchData(callback){
//     setTimeout(()=>{
//         callback("Data fetched successfully");
//     }, 1000);
// }


// fetchData((result)=>(
//     console.log(result)
// ))

function getUser(callback) {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(user => callback(user))
}

function getPosts(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(posts => callback(posts))
}
function getComments(postId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(comments => callback(comments))
}

// callback hell
getUser((user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0]?.id, (comments)=>{
            console.log(comments)
        });
    });
});