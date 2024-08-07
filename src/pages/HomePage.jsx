import {
  Hero,
  NewsFeed,
  NewsLine,
  Statistics,
  Map,
  MobileApp,
  Events,
  Partners,
} from "../sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NewsLine />
      <Statistics />
      <Map />
      <MobileApp />
      <NewsFeed />
      <Events />
      <Partners />
    </main>
  );
}
