import { NewsType } from "@/dataType/new";
import { News } from "@/data/news/new";


//- giả sử đây sẽ là server NextJs để goin api
export async function getDetailNews(id: string): Promise<NewsType | undefined> {
  const detailNews = News.find((item) => item.id == id);

  if (!detailNews) {
    console.warn("News not found with id:", id);
    return undefined;
  } 

  return detailNews;
}