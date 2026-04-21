const book = {
    chapters: 20,
    title: "Hunger Games: Songbirds & Snakes",
    pages: 500,
    author: "Suzanne Collins"
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