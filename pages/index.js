import Link from "next/link";
import Layout from "../components/Layout"
import { API_URL } from "@/config/index";
import NewsItem from "@/components/NewsItem";

export default function HomePage({ news }) {
  return (
    <div>
      <Layout>
        <h1>Latest News</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news && news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        {news.length > 0 && (
          <Link href="/news">
            <a className="btn-secondary">View All News</a>
          </Link>
        )}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/sports`);
  const news = await res.json();

  return {
    props: { news},
    revalidate: 1,
  };
}
