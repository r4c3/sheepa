import { writable } from "svelte/store";

export let store = writable([
    {
        "title": "Nike SB Dunk High \"MF DOOM\"",
        "category": "SHOES",
        "price": 120.21,
        "description": "Nike SB’s second hip-hop collaboration indirectly calls back to its first with De La Soul, as MF Doom’s former outfit KMD, which he performed in under the name Zev Love X, was inspired by the sights and sounds of the Native Tongues movement. After dawning the mask, the themes became darker and that ominous presentation carries over to the MF Doom Dunk High Pro SB, set in a midnight fog leather with faux ostrich skin toe wrap, and Doom-themed illustrations on the insole and under the translucent sole.",
        "shoeSizing": true,
        "availability": {
            "6": 5,
            "6.5": 2,
            "7": 3,
            "7.5": 0
        },
        "imgUrl": "dunk.png",
        "productImages": [
            "doom1.jpg",
            "dunk2.jpg",
            "doom3.jpg",
            "doom4.jpg"
        ],
        "collection": "DOOM",
        "id": 30100,
        "totalProduced": 1430,
        "localShipping": "YES",
        "usShipping": "YES",
        "globalShipping": "NO"
    },
    {
        "title": "Orange Reflective Safety Vest 2.0",
        "category": "shirt",
        "price": 32.67,
        "description": "this is a product. this is a product. this is a product.",
        "shoeSizing": false,
        "availability": {
            "xs": 5,
            "s": 5,
            "m": 5,
            "l": 5,
            "xl": 4
        },
        "imgUrl": "vest.png",
        "productImages": [
            "vest1.png",
            "vest3.png",
            "vest5.png",
            "vest1.png",
            "vest3.png",
            "vest5.png",
            "vest1.png",
            "vest3.png",
            "vest5.png"
        ],
        "collection": "DOOM",
        "id": 30101,
        "totalProduced": 32,
        "localShipping": "YES",
        "usShipping": "YES",
        "globalShipping": "YES"
    }
])