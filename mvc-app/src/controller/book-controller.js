const book = {
    chapters: 20,
    title: "Hunger Games: Songbirds & Snakes",
    pages: 500,
    author: "Suzanne Collins",
    genre: "dystopian",
    publisher: "",
    year: 2022,
    
}

export const getField = (req, res) => {
    const field = req.query.field;
    console.log(req.query);

    const value = book[field];

    res.status(200).json({ value });
}

export const getAuthor = (req, res) => {
    res.status(200).json({
        author: book.author
    })
}

export const getChapters = (req, res) => {
    res.status(200).json({ 
        chapters: book.chapters
    })
}

export const getTitle = (req, res) => {
    res.status(200).json({ 
        title: book.title
    });
}

export const getPages = (req, res) => {
    res.status(200).json({ 
        pages: book.pages
    })
}

export const allBook = (req, res) => {
    res.status(200).json(book);
}