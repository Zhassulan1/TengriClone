export interface Article {
    category: string;
    articleURL: string;
    TengriID: number;
    title: string;
    announce: string;
    imgURL: string;
    pub_date: string;
    viewings: number;
    comments: number;
}

export interface Category {
    name: string;
    img: string;
}  