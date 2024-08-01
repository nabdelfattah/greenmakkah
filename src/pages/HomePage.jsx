import {
  Hero,
  NewsFeeds,
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
      <NewsFeeds />
      <Events />
      <Partners />
    </main>
  );
}
