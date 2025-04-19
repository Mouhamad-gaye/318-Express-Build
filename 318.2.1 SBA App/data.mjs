import express from 'express';

let books = [{
    id: 1,
    title: 'Funny Story',
    author: 'Emily Henry',
    status: 'available',
},
{
    id: 2,
    title: 'The Demon of Unrest',
    author: 'Erik Larson',
    status: 'available',
},
{
    id: 3,
    title: 'James',
    author: 'Percival Everett',
    status: 'available',
},
{
    id: 4,
    title: 'The Waters',
    author: 'Bonnie Jo Campbell',
    status: 'available',
},
{
    id: 5,
    title: 'Field Guide to Northwest Michigan',
    author: 'Jame Dake',
    status: 'available',
},
{
    id: 6,
    title: 'The housemaid',
    author: 'Freida McFadden',
    status: 'available',
},
{
    id: 7,
    title: 'The Women',
    author: 'Kristin Hannah',
    status: 'available',
},
{
    id: 8,
    title: 'Dog Man: The Scarlet Shedder',
    author: 'Dav Pilkey',
    status: 'available',
},
{
    id: 9,
    title: 'The Legend of Sleeping Bear',
    author: 'Kathy-jo Wargin',
    status: 'available',
},
{
    id: 10,
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    status: 'available',
},
{
    id: 11,
    title: 'All Fours',
    author: 'Miranda July',
    status: 'available',
},
{
    id: 12,
    title: 'Swift River ',
    author: 'Essie Chambers',
    status: 'available',
},
]

// Helper Functions

function addBooks(id, title, author, status) {
    books.push({id, title, author, status})
}

function viewbooks() {
    return books;
}

 function bookUpdate (id, newData) {
    const bookIndex = books.findIndex((book) => book.id === id);
    if(bookIndex !== -1) {
        books[bookIndex] = {... books[bookIndex], ...newData};
        return books[bookIndex];
    }
    return null
 }

 function deleteBokk(id) {
    books = books.filter((book) => book.id !== id);
 }


module.exports = data