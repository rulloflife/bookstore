const products = [
    {
        name: "Disappearing Earth",
        imageUrl: "https://drive.google.com/uc?export=download&id=1sLCZGO5VR5uGYcp980UTVf3MqajlZ3Ip",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 19,
        countInstock: 10,
    },
    {
        name: "The Topeka School",
        imageUrl: "https://drive.google.com/uc?export=download&id=1QnNxcPxoEbX1leP8jhLQSqiwBmXOWsu_",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 10,
        countInstock: 10,
    },
    {
        name: "Exhalation",
        imageUrl: "https://drive.google.com/uc?export=download&id=1XkObp35rmg_VRofvewtHHH3xUxsdRKbD",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 15,
        countInstock: 5,
    },
    {
        name: "Lost Childrean Archive",
        imageUrl: "https://drive.google.com/uc?export=download&id=1wyTBkn7GslvySbl6ZYUYlFrsGUfqQ1la",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 13,
        countInstock: 12,
    },
    {
        name: "Night Boat To Tangier",
        imageUrl: "https://drive.google.com/uc?export=download&id=12EXQegc__LJgFRb8fSc5DzgLmDHi3Dne",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 12,
        countInstock: 10,
    },
    {
        name: "Say Nothing",
        imageUrl: "https://drive.google.com/uc?export=download&id=1CtICitI7fXwaASdQWjtFGB7VILevqiyi",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 12,
        countInstock: 10,
    },
    {
        name: "The Club",
        imageUrl: "https://drive.google.com/uc?export=download&id=1UOD7aBkb_HOu7e09vLWR0P3QbEl_KLTH",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 12,
        countInstock: 10,
    },
    {
        name: "The Yellow House",
        imageUrl: "https://drive.google.com/uc?export=download&id=13Mun5g6-cg8kTp0DKwyBw3GZl_RRvzxf",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 12,
        countInstock: 10,
    },
    {
        name: "No Visible Bruises",
        imageUrl: "https://drive.google.com/uc?export=download&id=1_t92n1kNdmdPdWR0vI4kB27X5f5ITSi9",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 12,
        countInstock: 10,
    },
    {
        name: "Midnight in Chernobyl",
        imageUrl: "https://drive.google.com/uc?export=download&id=1S1RcxaUnu9ac7oSXY3B0NJFSqbBFFk7w",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit accumsan, fringilla ut mi montes dictumst eros tempus maecenas potenti, feugiat tempor nunc molestie mollis dignissim magnis. Habitant orci sem lectus consequat euismod primis aptent integer at netus nunc blandit mauris convallis odio, vel in platea neque malesuada leo hendrerit potenti dictumst facilisis laoreet fames himenaeos. Maecenas imperdiet conubia vitae congue auctor sollicitudin fames, odio sem euismod placerat class.",
        price: 12,
        countInstock: 10,
    },
    
];

module.exports = products;
