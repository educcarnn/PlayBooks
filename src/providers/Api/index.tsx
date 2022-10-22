import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { api } from "../../services/api";

export interface ListProps {
  id: string;
  saleInfo: {
    country: string;
  };
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

interface ListData {
  list: ListProps[];
  setList: Dispatch<SetStateAction<ListProps[]>>;
  filter: ListProps[];
  setFilter: Dispatch<SetStateAction<ListProps[]>>;
  category: ListProps[];
 
  setCategory: Dispatch<SetStateAction<ListProps[]>>;
}

interface ApiChildren {
  children: ReactNode;
}

export const userAddApi = createContext<ListData>({} as ListData);

export function ApiProvider({ children }: ApiChildren) {
  const [list, setList] = useState<ListProps[]>([]);
  const [filter, setFilter] = useState<ListProps[]>([]);
  const [category, setCategory] = useState<ListProps[]>([])

  useEffect(() => {
    api.get("/volumes?q=search+terms").then((res) => {
      setList(res.data?.items);
      setFilter(res.data?.items);
      setCategory(res.data?.items);
    });
  }, []);


  return (
    <userAddApi.Provider value={{ list, setList, filter, setFilter, category, setCategory }}>
      {children}
    </userAddApi.Provider>
  );
}
