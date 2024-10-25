export interface Post {
    data: {
        title: string;
        shortDescription: string;
        date: string;
        tags: string[];
    }
    content: string;
}