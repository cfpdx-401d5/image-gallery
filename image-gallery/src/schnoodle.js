const puppies = [
    {
        title: 'Breezy',
        description: 'Breezy saying hi',
        url: './img/breezy-odemen.JPG',
        id: new Date()
    },
    {
        title: 'Two naughty dogs',
        description: 'Breezy and Princess at the dog park',
        url: './img/dog-park.JPG',
        id: new Date()
    },
    {
        title: 'Princess',
        description: 'just chilling',
        url: './img/princess-cat-bed.JPG',
        id: new Date()
    },
    {
        title: 'Cuddling',
        description: 'they\'re best buds',
        url: './img/schnoodles-cat-bed.JPG',
        id: new Date()
    },
    {
        title: 'Merry Christmas',
        description: 'Princess likes to dress up as Mrs. Clause',
        url: './img/princess-santa.JPG',
        id: new Date()
    }
];

export default function schnoodleList() {
    return puppies;
}