export interface Article {
    articleURL: string;
    title: string;
    announce: string;
    imgURL: string;
    pub_date: string;
    viewings: number;
    comments: number;
    // category: string;
    // src: string;
}

// result = {
//     'articleURL': articleURL,
//     'imgURL': imgURL,
//     'title': title[2:-1],
//     'announce': announce,
//     'pub_date': pub_date[2:].strip(),
//     'viewings': viewings[2:-1],
//     'comments': comments[2:-1]
// }
export interface Category {
    name: string;
    img: string;
}  