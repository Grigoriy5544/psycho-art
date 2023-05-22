import img3 from "../img/colleactionImg/img3.png"
import img1 from "../img/colleactionImg/img1.png";
import img2 from "../img/colleactionImg/img2.png";

interface IColleaction {
    image: string,
    price: number,
    name: string,
    author: string
}

let featuredArtworksList: Array<IColleaction> = [
    {
        image: img1,
        price: 5.5,
        name: "Yellow Painting",
        author: "@Johny"
    },
    {
        image: img2,
        price: 0.1,
        name: "Yellow Painting",
        author: "@Johny"
    },
    {
        image: img3,
        price: 0.03,
        name: "Yellow Painting",
        author: "@Johny"
    },
]

export {featuredArtworksList}