import React, { useState } from 'react'
import catImg from "../../assets/cat.jpg";
import dogImg from "../../assets/dog.jpg";
import rabbitImg from "../../assets/rabbit.jpg";
import CommonCard from '../cards/CommonCard';

const Counter = () => {
    const [count, setCount] = useState(0); // value update when components re-render
    const [showDetails, setShowDetails] = useState(false);
    const [animalType, setAnimalType] = useState("cat");

    const [names, setNames] = useState(["Ashar", "Owais", "Malik", "Ali", "Zeeshan"]);

    const [posts, setPosts] = useState([
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
    ])

    console.log("counter renders")

    function increment() {
        setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // console.log(count, "<-- count")

        // setCount((prev)=> prev + 1);
        // setCount((prev)=> prev + 1);
        // setCount((prev)=> prev + 1);
    }

    function updateType(type) {
        setAnimalType(type)
    }

    function addPost() {
        // setPosts([...posts, {
        //     "userId": 1,
        //     "id": 3,
        //     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        // }])

        let copyPost = [...posts];
        copyPost.push({
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        })

        setPosts(copyPost)

        }

    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={() => (setCount(count - 1))}>Decrement</button>

            <h1>Ashar Ahmed</h1>
            <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide" : "Show"} Details</button>
            {
                showDetails ?
                    <p>Hi, I'm Ashar Ahmed, A senior Front End Developer</p>
                    : ""
            }

            <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => updateType("cat")}>Cat</button>
                <button onClick={() => updateType("dog")}>Dog</button>
                <button onClick={() => updateType("rabbit")}>Rabbit</button>
            </div>

            <div>
                {/* <img src={animalType === "cat" ? catImg : animalType === "dog" ? dogImg : animalType === "rabbit" ? rabbitImg : catImg} alt="image" width={200} height={200} /> */}
                {
                    animalType === "cat" && <img src={catImg} width={200} height={200} />
                }
                {
                    animalType === "dog" && <img src={dogImg} width={200} height={200} />
                }
                {
                    animalType === "rabbit" && <img src={rabbitImg} width={200} height={200} />
                }
            </div>

            <ul>
                {
                    names?.map((item, index) => (
                        <li key={index + item}>{item === "Ashar" ? "Ahmed" : item}</li>
                    ))
                }
            </ul>

            <button onClick={addPost}>
                Add Post
            </button>

            <div className='d-flex  flex-wrap justify-content-between'>
                {
                    posts?.map((item, key) => (
                        <div key={key + item?.id} className='my-2'>
                            <CommonCard title={item?.title} description={item?.body} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Counter
