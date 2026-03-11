import SEOHead from "../Components/SEO/SEOHead";
import { SEO_METADATA, generateBreadcrumbSchema } from "../utils/seoHelpers";
import DomeGallery from "../Components/DomeGallery/DomeGallery";

// --- International Tourist Places Images (optimized with fast CDN URLs) ---
const INTERNATIONAL_IMAGES = [
  { src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=400&fit=crop", alt: "Paris", name: "Paris", info: "The City of Light with iconic Eiffel Tower" },
  { src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&h=400&fit=crop", alt: "Rome", name: "Rome", info: "The Eternal City, home to ancient history" },
  { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=400&fit=crop", alt: "Tokyo", name: "Tokyo", info: "Neon skyscrapers meet ancient temples" },
  { src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=400&fit=crop", alt: "London", name: "London", info: "Historic capital with Big Ben & Tower Bridge" },
  { src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=400&fit=crop", alt: "New York", name: "New York", info: "The city that never sleeps, Times Square" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=400&fit=crop", alt: "Dubai", name: "Dubai", info: "Futuristic city with Burj Khalifa" },
  { src: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=300&h=400&fit=crop", alt: "Sydney", name: "Sydney", info: "Stunning Opera House & Harbour Bridge" },
  { src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&h=400&fit=crop", alt: "Bali", name: "Bali", info: "Tropical paradise with beaches & temples" },
  { src: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=300&h=400&fit=crop", alt: "Cairo", name: "Cairo", info: "Gateway to the Great Pyramids of Giza" },
  { src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=400&fit=crop", alt: "Santorini", name: "Santorini", info: "White-washed houses on volcanic cliffs" },
  { src: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=300&h=400&fit=crop", alt: "Barcelona", name: "Barcelona", info: "Gaudi's masterpieces & Mediterranean beaches" },
  { src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=400&fit=crop", alt: "Venice", name: "Venice", info: "Romantic canals & gondolas of Italy" },
  { src: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=300&h=400&fit=crop", alt: "Amsterdam", name: "Amsterdam", info: "Canals, tulips & artistic heritage" },
  { src: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=300&h=400&fit=crop", alt: "Prague", name: "Prague", info: "Medieval city with stunning architecture" },
  { src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&h=400&fit=crop", alt: "Singapore", name: "Singapore", info: "Modern city-state with Gardens by the Bay" },
  { src: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=300&h=400&fit=crop", alt: "Bangkok", name: "Bangkok", info: "Golden temples & vibrant street life" },
  { src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=300&h=400&fit=crop", alt: "Maldives", name: "Maldives", info: "Crystal-clear waters & overwater bungalows" },
  { src: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=300&h=400&fit=crop", alt: "Hong Kong", name: "Hong Kong", info: "Dazzling skyline & Victoria Harbour" },
  { src: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=300&h=400&fit=crop", alt: "Las Vegas", name: "Las Vegas", info: "Entertainment capital with dazzling casinos" },
  { src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&h=400&fit=crop", alt: "Rio de Janeiro", name: "Rio de Janeiro", info: "Christ the Redeemer & Copacabana Beach" },
  { src: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=300&h=400&fit=crop", alt: "Vienna", name: "Vienna", info: "Imperial palaces & classical music heritage" },
  { src: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=300&h=400&fit=crop", alt: "Istanbul", name: "Istanbul", info: "Where East meets West, historic bazaars" },
  { src: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=300&h=400&fit=crop", alt: "Lisbon", name: "Lisbon", info: "Colorful tiles & historic tram rides" },
  { src: "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?w=300&h=400&fit=crop", alt: "Seoul", name: "Seoul", info: "K-pop culture & traditional palaces" },
  { src: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&h=400&fit=crop", alt: "Cape Town", name: "Cape Town", info: "Table Mountain & stunning coastline" },
  { src: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=300&h=400&fit=crop", alt: "Abu Dhabi", name: "Abu Dhabi", info: "Grand Mosque & luxury desert experiences" },
  { src: "https://images.unsplash.com/photo-1548017795-c17c4c56d7f4?w=300&h=400&fit=crop", alt: "Marrakech", name: "Marrakech", info: "Vibrant souks & Moroccan architecture" },
  { src: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=300&h=400&fit=crop", alt: "Athens", name: "Athens", info: "Ancient Acropolis & Greek mythology" },
  { src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=300&h=400&fit=crop", alt: "Kuala Lumpur", name: "Kuala Lumpur", info: "Petronas Twin Towers & diverse culture" },
  { src: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=300&h=400&fit=crop", alt: "Phuket", name: "Phuket", info: "Thailand's largest island with stunning beaches" },
  { src: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?w=300&h=400&fit=crop", alt: "Reykjavik", name: "Reykjavik", info: "Northern Lights & geothermal wonders" },
  { src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=300&h=400&fit=crop", alt: "Edinburgh", name: "Edinburgh", info: "Historic castle & Scottish highlands gateway" },
  { src: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=300&h=400&fit=crop", alt: "Berlin", name: "Berlin", info: "History, art & Brandenburg Gate" },
  { src: "https://images.unsplash.com/photo-1559511260-66a68e27c6b6?w=300&h=400&fit=crop", alt: "Vancouver", name: "Vancouver", info: "Mountains meet ocean in stunning harmony" },
  { src: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=300&h=400&fit=crop", alt: "Buenos Aires", name: "Buenos Aires", info: "Tango capital with European elegance" },
  { src: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=300&h=400&fit=crop", alt: "Cancun", name: "Cancun", info: "Caribbean beaches & Mayan ruins nearby" },
  { src: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=300&h=400&fit=crop", alt: "Florence", name: "Florence", info: "Renaissance art & Tuscan beauty" },
  { src: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=300&h=400&fit=crop", alt: "Miami", name: "Miami", info: "Art Deco beaches & vibrant nightlife" },
  { src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&h=400&fit=crop", alt: "Kyoto", name: "Kyoto", info: "Ancient temples & traditional gardens" },
  { src: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=300&h=400&fit=crop", alt: "Los Angeles", name: "Los Angeles", info: "Hollywood glamour & Pacific beaches" },
  { src: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=300&h=400&fit=crop", alt: "Mykonos", name: "Mykonos", info: "White beaches & legendary Greek nightlife" },
  { src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=300&h=400&fit=crop", alt: "Hanoi", name: "Hanoi", info: "Ancient temples & French colonial charm" },
  { src: "https://images.unsplash.com/photo-1549282009-7b98c20e3f4e?w=300&h=400&fit=crop", alt: "Jerusalem", name: "Jerusalem", info: "Sacred city with millennia of history" },
  { src: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&h=400&fit=crop", alt: "Beijing", name: "Beijing", info: "Forbidden City & Great Wall gateway" },
  { src: "https://images.unsplash.com/photo-1558370781-d6196949e317?w=300&h=400&fit=crop", alt: "Seville", name: "Seville", info: "Flamenco passion & Moorish architecture" },
  { src: "https://images.unsplash.com/photo-1589979481223-deb893043163?w=300&h=400&fit=crop", alt: "Mauritius", name: "Mauritius", info: "Paradise island with turquoise lagoons" },
  { src: "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=300&h=400&fit=crop", alt: "Queenstown", name: "Queenstown", info: "Adventure capital with alpine beauty" },
  { src: "https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=300&h=400&fit=crop", alt: "Petra", name: "Petra", info: "Ancient rose-red city carved in stone" },
  { src: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=300&h=400&fit=crop", alt: "Shanghai", name: "Shanghai", info: "Futuristic skyline meets historic Bund" },
  { src: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=300&h=400&fit=crop", alt: "Stockholm", name: "Stockholm", info: "Nordic beauty spread across 14 islands" }
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