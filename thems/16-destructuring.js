const playlist = {
    name: 'My playlist',
    rating: 5,
    tracks: ['No lie', 'Natural', 'track'],
    trackCount: 3,
}

console.log(
    playlist.name,
    playlist.rating,
    playlist.tracks,
    playlist.trackCount
);

// destructuring
const { name, rating, tracks, trackCount } = playlist;
console.log(
    name,
    rating,
    tracks,
    trackCount,
);
// =======================================================
const car = ['BMW', 'Skoda', 'Ford', 'Audi', 'Porshe'];

const carShop = {
    price: '100000$',
    cars: car,
    colours: ['blue', 'red'],
}

console.log(
    carShop.price,
    carShop.cars,
    carShop.colours
);

const { price, cars, colours } = carShop;
console.log(
    price,
    cars,
    colours
);