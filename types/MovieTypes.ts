export interface Genre {
    id: number;
    name: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface SpokenLanguage {
    iso_639_1: string;
    name: string;
  }
  
  
  
  export interface SingleMovieType  {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: string | null;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
  

  export interface LatestMovieType {
    adult: boolean; // Defaults to true
    backdrop_path: string | null;
    belongs_to_collection: string | null;
    budget: number; // Defaults to 0
    genres: Genre[];
    homepage: string | null;
    id: number; // Defaults to 0
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number; // Defaults to 0
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string; // ISO 8601 format (YYYY-MM-DD)
    revenue: number; // Defaults to 0
    runtime: number; // Defaults to 0
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean; // Defaults to true
    vote_average: number; // Defaults to 0
    vote_count: number; // Defaults to 0
  }
  
  