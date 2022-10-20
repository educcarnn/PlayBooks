import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface FavoritesChildren {
  children: ReactNode;
}

interface FavoriteProps {
  // title: string;
  // id: string;
  // imageLinks: {
  //   thumbnail: string;
  // };
  acessInfo: any;
  id: string;
  kind: string;
  salesInfo: {
    country: string;
  };
  searchInfo: any;
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    };
    language: string;
    printType: string;
    description: string;
    previewLink: string;
    publishedDate: string;
    pageCount: number;
  };
}

interface FavoriteData {
  favorites: FavoriteProps[];
  SetFavorites: Dispatch<SetStateAction<FavoriteProps[]>> ;
  add: (elem: any) => void;
}

export const userFavorites = createContext<FavoriteData>({} as FavoriteData);

function Favorites({ children }: FavoritesChildren) {
  const [favorites, SetFavorites] = useState<FavoriteProps[]>([]);

  const add = (elem: any) => {
    const findId = favorites.find((param) => param.id === elem.id);
    if (findId) {
      console.log("Livro já favoritado");
    } else {
      SetFavorites([...favorites, elem]);
    }
  };

  return (
    <userFavorites.Provider value={{ favorites, SetFavorites, add }}>
      {children}
    </userFavorites.Provider>
  );
}

export default Favorites;
