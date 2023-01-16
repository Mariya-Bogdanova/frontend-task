export interface IMovie {
    country: string;
    genres: [string];
    imdb_rate: number;
    is_new: boolean;
    keyframe: string;
    length: number;
    min_age: number;
    num_seasons: number;
    poster: string;
    title: string;
    type: string;
    year: number;
    id?:string;
  }

  export interface IChannel {
    title: string,
    min_age: number,
    description: string,
    poster:string,
    keyframe: string,
    id:number,
  }