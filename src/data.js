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
        name: "Lax Incense",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            artist: "Mama Aiuto, Daphné",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
            color: ["#BA4A46", "#FDF0DD"],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default chillHop;