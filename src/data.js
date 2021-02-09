import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return[
        {
            name: "Sugarless",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Field Tapes, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11243",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Through Trees",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "Sleepy Fish, The Field Tapes",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11251",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
        name: "Lax Incense",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            artist: "Mama Aiuto, Daphné",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
            color: ["#BA4A46", "#FDF0DD"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Today Feels Like Everyday",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            artist: "Mama Aiuto",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12128",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "All In Good Spirit",
            cover: "https://chillhop.com/wp-content/themes/chillhop/assets/images/releases/fall-2020/Slipmats-Chillhop-Fall-2020-MockUp.jpg",
            artist: "Mama Aiuto",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9261",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Hidden Structure",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Leavv, Flitz&Suppe",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Flushing the Stairs",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
            artist: "Leavv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
    ]
}

export default chillHop;