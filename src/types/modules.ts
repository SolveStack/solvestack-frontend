interface Video {
    id: string;
    name: string;
    link: string;
    blurb: string;
    thumbnailSource?: string;
}

interface Article {
    id: string;
    name: string;
    link: string;
    blurb: string;
    thumbnailSource?: string;
}
export default interface Module {
    id: string;
    name: string;
    blurb: string;
    articles: Array<Article>;
    videos: Array<Video>;
}

export const InitialModule = {
    id: '',
    name: '',
    blurb: '',
    articles: [],
    videos: [],
};
