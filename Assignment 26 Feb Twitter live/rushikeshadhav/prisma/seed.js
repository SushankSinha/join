import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const books = [
    {
        id: "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 1925,
        genre: "Classic",
        rating: 4.2,
        description: "A story of wealth, love, and tragedy in the Jazz Age.",
        metadata: {
            "pages": 180,
            "stockLeft": 23,
            "price": 12.99,
            "discount": 0,
            "edition": 3
        }
    },
    {
        id: "2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960,
        genre: "Fiction",
        rating: 4.5,
        description: "A novel about racial inequality and moral growth in the American South.",
        metadata: {
            "pages": 336,
            "stockLeft": 45,
            "price": 14.95,
            "discount": 10,
            "edition": 5
        }
    },
    {
        id: "3",
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949,
        genre: "Dystopian",
        rating: 4.3,
        description: "A chilling portrayal of a totalitarian regime and the power of state surveillance.",
        metadata: {
            "pages": 328,
            "stockLeft": 37,
            "price": 11.99,
            "discount": 5,
            "edition": 7
        }
    },
    {
        id: "4",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publicationYear: 1813,
        genre: "Classic",
        rating: 4.4,
        description: "A romantic novel examining the customs and manners of early 19th century British society.",
        metadata: {
            "pages": 279,
            "stockLeft": 18,
            "price": 9.99,
            "discount": 0,
            "edition": 12
        }
    },
    {
        id: "5",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publicationYear: 1937,
        genre: "Fantasy",
        rating: 4.7,
        description: "The adventure of Bilbo Baggins as he journeys to reclaim a treasure guarded by a dragon.",
        metadata: {
            "pages": 310,
            "stockLeft": 52,
            "price": 15.99,
            "discount": 15,
            "edition": 8
        }
    },
    {
        id: "6",
        title: "Brave New World",
        author: "Aldous Huxley",
        publicationYear: 1932,
        genre: "Dystopian",
        rating: 4.0,
        description: "A vision of a future society engineered for maximum happiness but at the cost of human freedom.",
        metadata: {
            "pages": 288,
            "stockLeft": 12,
            "price": 13.50,
            "discount": 0,
            "edition": 2
        }
    },
    {
        id: "7",
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        publicationYear: 1997,
        genre: "Fantasy",
        rating: 4.8,
        description: "The first book in the series about a young wizard's journey at Hogwarts School of Witchcraft and Wizardry.",
        metadata: {
            "pages": 320,
            "stockLeft": 78,
            "price": 18.99,
            "discount": 20,
            "edition": 10
        }
    },
    {
        id: "8",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publicationYear: 1951,
        genre: "Fiction",
        rating: 3.9,
        description: "A teenager's narrative about his experiences in New York City after being expelled from prep school.",
        metadata: {
            "pages": 224,
            "stockLeft": 31,
            "price": 10.95,
            "discount": 0,
            "edition": 4
        }
    },
    {
        id: "9",
        title: "The Alchemist",
        author: "Paulo Coelho",
        publicationYear: 1988,
        genre: "Fiction",
        rating: 4.6,
        description: "A philosophical novel about a shepherd boy's journey to fulfill his personal legend.",
        metadata: {
            "pages": 197,
            "stockLeft": 64,
            "price": 16.50,
            "discount": 10,
            "edition": 6
        }
    },
    {
        id: "10",
        title: "Lord of the Flies",
        author: "William Golding",
        publicationYear: 1954,
        genre: "Fiction",
        rating: 3.8,
        description: "A group of schoolboys stranded on an uninhabited island attempt to govern themselves with disastrous results.",
        metadata: {
            "pages": 224,
            "stockLeft": 27,
            "price": 11.99,
            "discount": 5,
            "edition": 3
        }
    },
    {
        id: "11",
        title: "The Hunger Games",
        author: "Suzanne Collins",
        publicationYear: 2008,
        genre: "Dystopian",
        rating: 4.3,
        description: "In a dystopian future, teenagers are selected to participate in a televised death match as entertainment for the wealthy Capitol.",
        metadata: {
            "pages": 374,
            "stockLeft": 42,
            "price": 13.99,
            "discount": 15,
            "edition": 5
        }
    },
    {
        id: "12",
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        publicationYear: 2003,
        genre: "Historical Fiction",
        rating: 4.6,
        description: "A story of friendship, betrayal, and redemption set against the backdrop of modern Afghanistan.",
        metadata: {
            "pages": 371,
            "stockLeft": 19,
            "price": 15.95,
            "discount": 5,
            "edition": 2
        }
    },
    {
        id: "13",
        title: "The Road",
        author: "Cormac McCarthy",
        publicationYear: 2006,
        genre: "Post-Apocalyptic",
        rating: 4.1,
        description: "A father and son journey through a devastated America, surviving by scavenging and evading gangs of cannibals.",
        metadata: {
            "pages": 287,
            "stockLeft": 8,
            "price": 14.95,
            "discount": 0,
            "edition": 1
        }
    },
    {
        id: "14",
        title: "Gone Girl",
        author: "Gillian Flynn",
        publicationYear: 2012,
        genre: "Thriller",
        rating: 4.2,
        description: "A mystery thriller about a man who becomes the prime suspect when his wife goes missing on their fifth wedding anniversary.",
        metadata: {
            "pages": 422,
            "stockLeft": 33,
            "price": 16.99,
            "discount": 25,
            "edition": 3
        }
    },
    {
        id: "15",
        title: "The Martian",
        author: "Andy Weir",
        publicationYear: 2011,
        genre: "Science Fiction",
        rating: 4.5,
        description: "An astronaut stranded on Mars must use his ingenuity to survive until a rescue mission can reach him.",
        metadata: {
            "pages": 384,
            "stockLeft": 41,
            "price": 15.00,
            "discount": 10,
            "edition": 4
        }
    },
    {
        id: "16",
        title: "The Da Vinci Code",
        author: "Dan Brown",
        publicationYear: 2003,
        genre: "Thriller",
        rating: 3.7,
        description: "A mystery thriller involving a murder in the Louvre and clues in Da Vinci's paintings that lead to a religious mystery.",
        metadata: {
            "pages": 454,
            "stockLeft": 22,
            "price": 12.99,
            "discount": 5,
            "edition": 6
        }
    },
    {
        id: "17",
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        publicationYear: 2011,
        genre: "Non-fiction",
        rating: 4.7,
        description: "A survey of the history of humankind from the evolution of archaic human species to the present day.",
        metadata: {
            "pages": 512,
            "stockLeft": 56,
            "price": 24.99,
            "discount": 15,
            "edition": 2
        }
    },
    {
        id: "18",
        title: "The Silent Patient",
        author: "Alex Michaelides",
        publicationYear: 2019,
        genre: "Thriller",
        rating: 4.3,
        description: "A psychological thriller about a woman who shoots her husband and then stops speaking, and the therapist determined to unravel her mystery.",
        metadata: {
            "pages": 336,
            "stockLeft": 48,
            "price": 17.99,
            "discount": 10,
            "edition": 1
        }
    },
    {
        id: "19",
        title: "Educated",
        author: "Tara Westover",
        publicationYear: 2018,
        genre: "Memoir",
        rating: 4.8,
        description: "A memoir about a woman who grows up in a survivalist family in Idaho and eventually earns a PhD from Cambridge University.",
        metadata: {
            "pages": 352,
            "stockLeft": 37,
            "price": 19.95,
            "discount": 20,
            "edition": 3
        }
    },
    {
        id: "20",
        title: "The Night Circus",
        author: "Erin Morgenstern",
        publicationYear: 2011,
        genre: "Fantasy",
        rating: 4.4,
        description: "A competition between two young magicians who fall in love, set in an enigmatic circus that only appears at night.",
        metadata: {
            "pages": 387,
            "stockLeft": 15,
            "price": 14.99,
            "discount": 0,
            "edition": 2
        }
    }
];

async function main() {
    console.log("Seeding database...");

    await prisma.book.createMany({
        data: books.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author,
            publicationYear: book.publicationYear,
            genre: book.genre,
            rating: book.rating,
        })),
        skipDuplicates: true, // Prevents duplicate entries
    });

    console.log("Seeding completed!");
}

main()
    .catch((error) => {
        console.error("Error seeding database:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
