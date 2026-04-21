const book = {
    chapters: 20,
    title: "Hunger Games: Songbirds & Snakes",
    pages: 500,
    author: "Suzanne Collins",
    genre: "dystopian",
    publisher: "Scholastic",
    year: 2022,
    
}

export const printAll = (req, res) => {
    //const year = req.query.year;
    //const genre = req.query.genre;
    //const title = req.query.title;

    //alternative
    const { year, genre, title } = req.query;

    console.log(year, genre, title);

    res.status(200).json(req.query);
}

export const getField = (req, res) => {
    const field = req.query.fields;
    const fields = field.split(","); //array of field strings

    let result = {};
    for (const fld of fields) {
        const value = book[fld];
        result[fld] = value;
    }

    res.status(200).json(result);
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