
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
  title: string;
  id: string;
  imageLinks: {
    thumbnail: string;
  };
}

interface FavoriteData {
  favorites: FavoriteProps[];
  SetFavorites: Dispatch<SetStateAction<FavoriteProps[]>>;
  add: (elem: string) => void;
}

const userFavorites = createContext<FavoriteData>({} as FavoriteData);

function Favorites({ children }: FavoritesChildren) {
  const [favorites, SetFavorites] = useState<FavoriteProps[]>([]);

  const add = (elem: any)=> {
    const findId = favorites.find((param) => param.id === elem.id);
    if (findId) {
      Error("Livro já favoritado");
    } else {
      SetFavorites([...favorites, elem]);
    }
  };

  return (
    <userFavorites.Provider value={{ favorites, SetFavorites, add}}>
      {children}
    </userFavorites.Provider>
  );
}

export default Favorites;
