import SEOHead from "../Components/SEO/SEOHead";
import { SEO_METADATA, generateBreadcrumbSchema } from "../utils/seoHelpers";
import DomeGallery from "../Components/DomeGallery/DomeGallery";

// --- Indian Tourist Places Images ---
const INDIA_IMAGES = [
  { src: "https://loremflickr.com/300/400/tajmahal,agra", alt: "Taj Mahal", name: "Taj Mahal", info: "Agra's iconic white marble mausoleum" },
  { src: "https://loremflickr.com/300/400/varanasi,ganga", alt: "Varanasi", name: "Varanasi", info: "Spiritual capital with ancient Ganga Ghats" },
  { src: "https://loremflickr.com/300/400/kerala,boat", alt: "Kerala", name: "Kerala", info: "Backwaters & traditional houseboats" },
  { src: "https://loremflickr.com/300/400/jaipur,palace", alt: "Jaipur", name: "Jaipur", info: "Pink City with Hawa Mahal palace" },
  { src: "https://loremflickr.com/300/400/ladakh,lake", alt: "Ladakh", name: "Ladakh", info: "Breathtaking Pangong Lake in Himalayas" },
  { src: "https://loremflickr.com/300/400/goa,beach", alt: "Goa", name: "Goa", info: "Golden beaches & vibrant nightlife" },
  { src: "https://loremflickr.com/300/400/goldentemple,amritsar", alt: "Golden Temple", name: "Golden Temple", info: "Amritsar's holiest Sikh Gurdwara" },
  { src: "https://loremflickr.com/300/400/hampi,temple", alt: "Hampi", name: "Hampi", info: "UNESCO ruins of Vijayanagara Empire" },
  { src: "https://loremflickr.com/300/400/mumbai,gateway", alt: "Mumbai", name: "Mumbai", info: "Gateway of India, city of dreams" },
  { src: "https://loremflickr.com/300/400/mysore,palace", alt: "Mysore", name: "Mysore", info: "Royal palace with grand architecture" },
  { src: "https://loremflickr.com/300/400/rishikesh,bridge", alt: "Rishikesh", name: "Rishikesh", info: "Yoga Capital of the World" },
  { src: "https://loremflickr.com/300/400/kolkata,memorial", alt: "Kolkata", name: "Kolkata", info: "Victoria Memorial, cultural hub" },
  { src: "https://loremflickr.com/300/400/udaipur,palace", alt: "Udaipur", name: "Udaipur", info: "City of Lakes with romantic palaces" },
  { src: "https://loremflickr.com/300/400/andaman,beach", alt: "Andaman", name: "Andaman Islands", info: "Pristine beaches & coral reefs" },
  { src: "https://loremflickr.com/300/400/kashmir,valley", alt: "Kashmir", name: "Kashmir", info: "Paradise on Earth with Dal Lake" },
  { src: "https://loremflickr.com/300/400/ajanta,caves", alt: "Ajanta Caves", name: "Ajanta Caves", info: "Ancient Buddhist rock-cut monuments" },
  { src: "https://loremflickr.com/300/400/ellora,caves", alt: "Ellora Caves", name: "Ellora Caves", info: "Magnificent rock-cut architecture" },
  { src: "https://loremflickr.com/300/400/khajuraho,temple", alt: "Khajuraho", name: "Khajuraho", info: "Temples with intricate sculptures" },
  { src: "https://loremflickr.com/300/400/darjeeling,tea", alt: "Darjeeling", name: "Darjeeling", info: "Queen of Hills with tea gardens" },
  { src: "https://loremflickr.com/300/400/jaisalmer,desert", alt: "Jaisalmer", name: "Jaisalmer", info: "Golden City in Thar Desert" },
  { src: "https://loremflickr.com/300/400/kodaikanal,lake", alt: "Kodaikanal", name: "Kodaikanal", info: "Princess of Hill Stations" },
  { src: "https://loremflickr.com/300/400/ooty,train", alt: "Ooty", name: "Ooty", info: "Nilgiri Mountain Railway & gardens" },
  { src: "https://loremflickr.com/300/400/mahabalipuram,temple", alt: "Mahabalipuram", name: "Mahabalipuram", info: "Shore Temple & stone carvings" },
  { src: "https://loremflickr.com/300/400/coorg,coffee", alt: "Coorg", name: "Coorg", info: "Scotland of India, coffee estates" },
  { src: "https://loremflickr.com/300/400/ranthambore,tiger", alt: "Ranthambore", name: "Ranthambore", info: "Tiger reserve & wildlife sanctuary" },
  { src: "https://loremflickr.com/300/400/pushkar,lake", alt: "Pushkar", name: "Pushkar", info: "Sacred lake & camel fair" },
  { src: "https://loremflickr.com/300/400/shimla,mall", alt: "Shimla", name: "Shimla", info: "Summer capital with Mall Road" },
  { src: "https://loremflickr.com/300/400/manali,mountains", alt: "Manali", name: "Manali", info: "Himalayan resort town adventure hub" },
  { src: "https://loremflickr.com/300/400/munnar,tea", alt: "Munnar", name: "Munnar", info: "Rolling tea plantations & misty hills" },
  { src: "https://loremflickr.com/300/400/pondicherry,french", alt: "Pondicherry", name: "Pondicherry", info: "French colonial charm by the sea" },
  { src: "https://loremflickr.com/300/400/konark,temple", alt: "Konark", name: "Konark", info: "Sun Temple architectural marvel" },
  { src: "https://loremflickr.com/300/400/chandigarh,rock", alt: "Chandigarh", name: "Chandigarh", info: "Planned city with Rock Garden" },
  { src: "https://loremflickr.com/300/400/rann,kutch", alt: "Rann of Kutch", name: "Rann of Kutch", info: "White salt desert landscape" },
  { src: "https://loremflickr.com/300/400/meenakshi,temple", alt: "Madurai", name: "Madurai", info: "Meenakshi Temple with colorful towers" },
  { src: "https://loremflickr.com/300/400/bodh,gaya", alt: "Bodh Gaya", name: "Bodh Gaya", info: "Where Buddha attained enlightenment" },
  { src: "https://loremflickr.com/300/400/kaziranga,rhino", alt: "Kaziranga", name: "Kaziranga", info: "One-horned rhino sanctuary" },
  { src: "https://loremflickr.com/300/400/lakshadweep,coral", alt: "Lakshadweep", name: "Lakshadweep", info: "Coral islands with turquoise lagoons" },
  { src: "https://loremflickr.com/300/400/agra,fort", alt: "Agra Fort", name: "Agra Fort", info: "Red sandstone Mughal fortress" },
  { src: "https://loremflickr.com/300/400/ranchi,waterfall", alt: "Ranchi", name: "Ranchi", info: "City of waterfalls in Jharkhand" },
  { src: "https://loremflickr.com/300/400/mount,abu", alt: "Mount Abu", name: "Mount Abu", info: "Rajasthan's only hill station" },
  { src: "https://loremflickr.com/300/400/bangalore,garden", alt: "Bangalore", name: "Bangalore", info: "Garden City with IT hub culture" },
  { src: "https://loremflickr.com/300/400/hyderabad,charminar", alt: "Hyderabad", name: "Hyderabad", info: "City of Pearls with Charminar" }
];

export default function IndiaGlobe() {
  const metadata = SEO_METADATA.indiaGlobe;
  const breadcrumbs = [
    { name: "Home", url: "/home" },
    { name: "Explore India", url: "/india-globe" }
  ];

  return (
    <>
      <SEOHead
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        url="/india-globe"
        image={metadata.image}
        structuredData={generateBreadcrumbSchema(breadcrumbs)}
      />
      <div style={{ width: '100vw', height: '100vh', backgroundColor: '#050505' }}>
        <DomeGallery
          images={INDIA_IMAGES}
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