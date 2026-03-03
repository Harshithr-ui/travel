import SEOHead from "../Components/SEO/SEOHead";
import { SEO_METADATA, generateBreadcrumbSchema } from "../utils/seoHelpers";
import DomeGallery from "../Components/DomeGallery/DomeGallery";

// --- International Tourist Places Images ---
const INTERNATIONAL_IMAGES = [
  { src: "https://loremflickr.com/300/400/paris,tower", alt: "Paris", name: "Paris", info: "The City of Light with iconic Eiffel Tower" },
  { src: "https://loremflickr.com/300/400/rome,colosseum", alt: "Rome", name: "Rome", info: "The Eternal City, home to ancient history" },
  { src: "https://loremflickr.com/300/400/tokyo,city", alt: "Tokyo", name: "Tokyo", info: "Neon skyscrapers meet ancient temples" },
  { src: "https://loremflickr.com/300/400/london,bridge", alt: "London", name: "London", info: "Historic capital with Big Ben & Tower Bridge" },
  { src: "https://loremflickr.com/300/400/newyork,statue", alt: "New York", name: "New York", info: "The city that never sleeps, Times Square" },
  { src: "https://loremflickr.com/300/400/dubai,skyscraper", alt: "Dubai", name: "Dubai", info: "Futuristic city with Burj Khalifa" },
  { src: "https://loremflickr.com/300/400/sydney,opera", alt: "Sydney", name: "Sydney", info: "Stunning Opera House & Harbour Bridge" },
  { src: "https://loremflickr.com/300/400/bali,nature", alt: "Bali", name: "Bali", info: "Tropical paradise with beaches & temples" },
  { src: "https://loremflickr.com/300/400/cairo,pyramid", alt: "Cairo", name: "Cairo", info: "Gateway to the Great Pyramids of Giza" },
  { src: "https://loremflickr.com/300/400/santorini", alt: "Santorini", name: "Santorini", info: "White-washed houses on volcanic cliffs" },
  { src: "https://loremflickr.com/300/400/barcelona,spain", alt: "Barcelona", name: "Barcelona", info: "Gaudi's masterpieces & Mediterranean beaches" },
  { src: "https://loremflickr.com/300/400/venice,canal", alt: "Venice", name: "Venice", info: "Romantic canals & gondolas of Italy" },
  { src: "https://loremflickr.com/300/400/amsterdam,canal", alt: "Amsterdam", name: "Amsterdam", info: "Canals, tulips & artistic heritage" },
  { src: "https://loremflickr.com/300/400/prague,castle", alt: "Prague", name: "Prague", info: "Medieval city with stunning architecture" },
  { src: "https://loremflickr.com/300/400/singapore,city", alt: "Singapore", name: "Singapore", info: "Modern city-state with Gardens by the Bay" },
  { src: "https://loremflickr.com/300/400/bangkok,temple", alt: "Bangkok", name: "Bangkok", info: "Golden temples & vibrant street life" },
  { src: "https://loremflickr.com/300/400/maldives,beach", alt: "Maldives", name: "Maldives", info: "Crystal-clear waters & overwater bungalows" },
  { src: "https://loremflickr.com/300/400/hongkong,skyline", alt: "Hong Kong", name: "Hong Kong", info: "Dazzling skyline & Victoria Harbour" },
  { src: "https://loremflickr.com/300/400/lasvegas,strip", alt: "Las Vegas", name: "Las Vegas", info: "Entertainment capital with dazzling casinos" },
  { src: "https://loremflickr.com/300/400/rio,beach", alt: "Rio de Janeiro", name: "Rio de Janeiro", info: "Christ the Redeemer & Copacabana Beach" },
  { src: "https://loremflickr.com/300/400/vienna,palace", alt: "Vienna", name: "Vienna", info: "Imperial palaces & classical music heritage" },
  { src: "https://loremflickr.com/300/400/istanbul,mosque", alt: "Istanbul", name: "Istanbul", info: "Where East meets West, historic bazaars" },
  { src: "https://loremflickr.com/300/400/lisbon,city", alt: "Lisbon", name: "Lisbon", info: "Colorful tiles & historic tram rides" },
  { src: "https://loremflickr.com/300/400/seoul,city", alt: "Seoul", name: "Seoul", info: "K-pop culture & traditional palaces" },
  { src: "https://loremflickr.com/300/400/capetown,mountain", alt: "Cape Town", name: "Cape Town", info: "Table Mountain & stunning coastline" },
  { src: "https://loremflickr.com/300/400/abudhabi,mosque", alt: "Abu Dhabi", name: "Abu Dhabi", info: "Grand Mosque & luxury desert experiences" },
  { src: "https://loremflickr.com/300/400/marrakech,market", alt: "Marrakech", name: "Marrakech", info: "Vibrant souks & Moroccan architecture" },
  { src: "https://loremflickr.com/300/400/athens,acropolis", alt: "Athens", name: "Athens", info: "Ancient Acropolis & Greek mythology" },
  { src: "https://loremflickr.com/300/400/kualalumpur,towers", alt: "Kuala Lumpur", name: "Kuala Lumpur", info: "Petronas Twin Towers & diverse culture" },
  { src: "https://loremflickr.com/300/400/phuket,beach", alt: "Phuket", name: "Phuket", info: "Thailand's largest island with stunning beaches" },
  { src: "https://loremflickr.com/300/400/reykjavik,iceland", alt: "Reykjavik", name: "Reykjavik", info: "Northern Lights & geothermal wonders" },
  { src: "https://loremflickr.com/300/400/edinburgh,castle", alt: "Edinburgh", name: "Edinburgh", info: "Historic castle & Scottish highlands gateway" },
  { src: "https://loremflickr.com/300/400/berlin,wall", alt: "Berlin", name: "Berlin", info: "History, art & Brandenburg Gate" },
  { src: "https://loremflickr.com/300/400/vancouver,mountain", alt: "Vancouver", name: "Vancouver", info: "Mountains meet ocean in stunning harmony" },
  { src: "https://loremflickr.com/300/400/buenosaires,tango", alt: "Buenos Aires", name: "Buenos Aires", info: "Tango capital with European elegance" },
  { src: "https://loremflickr.com/300/400/mexico,beach", alt: "Cancun", name: "Cancun", info: "Caribbean beaches & Mayan ruins nearby" },
  { src: "https://loremflickr.com/300/400/florence,cathedral", alt: "Florence", name: "Florence", info: "Renaissance art & Tuscan beauty" },
  { src: "https://loremflickr.com/300/400/miami,beach", alt: "Miami", name: "Miami", info: "Art Deco beaches & vibrant nightlife" },
  { src: "https://loremflickr.com/300/400/kyoto,temple", alt: "Kyoto", name: "Kyoto", info: "Ancient temples & traditional gardens" },
  { src: "https://loremflickr.com/300/400/santamonica,pier", alt: "Los Angeles", name: "Los Angeles", info: "Hollywood glamour & Pacific beaches" },
  { src: "https://loremflickr.com/300/400/santorini,sunset", alt: "Mykonos", name: "Mykonos", info: "White beaches & legendary Greek nightlife" },
  { src: "https://loremflickr.com/300/400/hanoi,vietnam", alt: "Hanoi", name: "Hanoi", info: "Ancient temples & French colonial charm" },
  { src: "https://loremflickr.com/300/400/jerusalem,wall", alt: "Jerusalem", name: "Jerusalem", info: "Sacred city with millennia of history" },
  { src: "https://loremflickr.com/300/400/beijing,palace", alt: "Beijing", name: "Beijing", info: "Forbidden City & Great Wall gateway" },
  { src: "https://loremflickr.com/300/400/seville,spain", alt: "Seville", name: "Seville", info: "Flamenco passion & Moorish architecture" },
  { src: "https://loremflickr.com/300/400/mauritius,beach", alt: "Mauritius", name: "Mauritius", info: "Paradise island with turquoise lagoons" },
  { src: "https://loremflickr.com/300/400/queenstown,mountain", alt: "Queenstown", name: "Queenstown", info: "Adventure capital with alpine beauty" },
  { src: "https://loremflickr.com/300/400/petra,jordan", alt: "Petra", name: "Petra", info: "Ancient rose-red city carved in stone" },
  { src: "https://loremflickr.com/300/400/shanghai,skyline", alt: "Shanghai", name: "Shanghai", info: "Futuristic skyline meets historic Bund" },
  { src: "https://loremflickr.com/300/400/stockholm,city", alt: "Stockholm", name: "Stockholm", info: "Nordic beauty spread across 14 islands" }
];

export default function TouristGlobe() {
  const metadata = SEO_METADATA.exploreGlobe;
  const breadcrumbs = [
    { name: "Home", url: "/home" },
    { name: "Explore Globe", url: "/explore-globe" }
  ];

  return (
    <>
      <SEOHead
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        url="/explore-globe"
        image={metadata.image}
        structuredData={generateBreadcrumbSchema(breadcrumbs)}
      />
      <div style={{ width: '100vw', height: '100vh', backgroundColor: '#060010' }}>
        <DomeGallery
          images={INTERNATIONAL_IMAGES}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale
          showInfo
        />
      </div>
    </>
  );
}