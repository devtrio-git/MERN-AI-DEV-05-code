async function fetchUserData() {
    try {


        const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await userRes.json();
        console.log(user, "<- user")

        document.getElementById("userData").innerText = user?.name;

        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user?.id}`);
        const posts = await postRes.json();
        console.log(posts, "<-- posts")

        document.getElementById("postData").innerHTML = posts[0]?.title

        const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0]?.id}`);
        const comments = await commentsRes.json();
        console.log(comments, "<-- comments")

        document.getElementById("commentData").innerHTML = `${comments?.length} comments.`


    } catch (error) {
        console.log(error)
    }
}

function loadData() {
    fetchUserData()
}