console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
let collection = [];
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished, tracks = ['None Listed']) {
    const album = {
        title: title,
        artist: artist,
        year: yearPublished,
        trackList: tracks
    }
    collection.push(album);
    return album;
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.


console.log(addToCollection('Better Nature', 'Silversun Pickups', 2015, ['1. Cradle (Better Nature) : 5:21', '2. Connection : 4:34']));
console.log(addToCollection('Neck Of The Woods', 'Silversun Pickups', 2012));
console.log(addToCollection('Bobby Tarantino', 'Logic', 2016));
console.log(addToCollection('Shadows On The Sun', 'Brother Ali', 2003));
console.log(addToCollection('Crimson', 'Alkaline Trio', 2005));
console.log(addToCollection('Riot!', 'Paramore', 2007));
console.log(addToCollection('Mr. Morale And The Big Steppers', 'Kendrick Lamar', 2022));
console.log('this', collection);
// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows3 it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
console.log('length before:', collection.length)
function showCollection(collection) {
    console.log('length in showCollection:', collection.length);
    for (let record of collection){
        console.log(`${record.title} by ${record.artist}, published in ${record.year}, track list:`, record.trackList)
    }
}
// - Test the `showCollection` function.
showCollection(collection);



// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist(artist, collection) {
    let sameArtist = [];
    for (let record of collection) {
        if (record.artist === artist) {
            sameArtist.push(record);
        }
    }
    return sameArtist;
}


// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log('Should return Logic album', findByArtist('Logic', collection));
console.log('No return', findByArtist('Atmosphere', collection))
// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
function search(criteria = {}, collection) {
    let retArr =[]
    if (criteria.artist === undefined) {
        return collection
    } else {
        for (let album of collection) {
            if (album.artist === criteria.artist && album.year === criteria.year){
                for (let track of album.trackList){
                    console.log('track =', track)
                    console.log('search track', criteria.trackName)
                    if (track == criteria.trackName)
                        retArr = album
                }
            }
        }
    } return retArr;
};
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
console.log('should return Logic album');
console.log(search({artist: 'Logic', year: 2016, trackName: 'None Listed'}, collection));
console.log('Should return nothing');
console.log(search({artist: 'Cold War Kids', year: 2022}, collection));
console.log('Should return nothing');
console.log(search({artist: 'Silversun Pickups', year: 2002}, collection));
console.log('Should return collection');
console.log(search({}, collection))
console.log('Should return silversun pickups')
console.log(search({artist: 'Silversun Pickups', year: 2015, trackName: '2. Connection : 4:34'}, collection))
// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION





// function addTrack(library) {
//     let record = prompt('What album? ');
//     for (let album of library) {
//         if (album.title == record) {
//             let trackNum = prompt("What is the track number? ")
//             let trackName = prompt('What is the song? ');
//             let trackDur = prompt('How long is it? ');
//             if (album.trackList[0] === 'None Listed'){
//                 album.trackList = [trackNum + '. ' + trackName + ': ' + trackDur]
//                 return album;
//             }
//             else {
//                 album.trackList.push([trackNum + '. ' + trackName + ' ' + trackDur])
//                 return album
//             }
//         }
//     }
//     return console.log('The track could not be added')
// }

// addTrack(collection)


