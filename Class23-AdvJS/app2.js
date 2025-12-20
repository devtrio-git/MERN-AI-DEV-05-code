function getUser(){
    return fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
}

function getPosts(userId){
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json());
}

function getComments(postId){
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
}


getUser()
.then(user => {
    console.log(user, "<-userdata")
    return getPosts(user.id);
})
.then(posts =>{
    console.log(posts,"<-userposts")
    return getComments(posts[0]?.id);
})
.then(commets => {
    console.log(commets , "<-usercomments");
})
.catch(error => console.log(error))
