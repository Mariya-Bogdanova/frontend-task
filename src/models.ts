export interface IMovie {
    title: string;
    min_age: number;
    poster: string;
    keyframe: string;
    description?: string,
    country?: string;
    genres?: [string];
    imdb_rate?: number;
    is_new?: boolean;
    length?: number;
    num_seasons?: number;
    type?: string;
    year?: number;
    id?:string;
  }
