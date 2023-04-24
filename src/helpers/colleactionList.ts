import img1 from "../img/colleactionImg/img1.png"
import img2 from "../img/colleactionImg/img2.png"
import img3 from "../img/colleactionImg/img3.png"
import img4 from "../img/colleactionImg/img4.png"
import img5 from "../img/colleactionImg/img5.png"
import img6 from "../img/colleactionImg/img6.png"

interface IColleaction {
        image: string,
        price: number,
        name: string,
        author: string
}


let colleaction:Array<Array<IColleaction>> = [
    [
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
        {
            image: img4,
            price: 0.004,
            name: "Yellow Painting",
            author: "@Johny"
        }, {
        image: img5,
        price: 0.003,
        name: "Yellow Painting",
        author: "@Johny"
    }, {
        image: img6,
        price: 0.001,
        name: "Yellow Painting",
        author: "@Johny"
    },
    ],
    [
        {
            image: img5,
            price: 0.04,
            name: "Yellow Painting",
            author: "@Johny"
        }, {
        image: img6,
        price: 0.02,
        name: "Yellow Painting",
        author: "@Johny"
    }, {
        image: img2,
        price: 0.1,
        name: "Yellow Painting",
        author: "@Johny"
    },
    ],
    [
        {
            image: img1,
            price: 0.001,
            name: "Yellow Painting",
            author: "@Johny"
        },
        {
            image: img4,
            price: 0.02,
            name: "Yellow Painting",
            author: "@Johny"
        },
        {
            image: img5,
            price: 0.07,
            name: "Yellow Painting",
            author: "@Johny"
        },
    ],
    [
        {
            image: img3,
            price: 0.06,
            name: "Yellow Painting",
            author: "@Johny"
        },
        {
            image: img5,
            price: 0.03,
            name: "Yellow Painting",
            author: "@Johny"
        },
        {
            image: img4,
            price: 0.8,
            name: "Yellow Painting",
            author: "@Johny"
        },
    ]
]

export {colleaction}