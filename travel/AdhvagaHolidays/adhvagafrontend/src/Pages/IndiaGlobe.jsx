import SEOHead from "../Components/SEO/SEOHead";
import { SEO_METADATA, generateBreadcrumbSchema } from "../utils/seoHelpers";
import DomeGallery from "../Components/DomeGallery/DomeGallery";

// --- Indian Tourist Places Images (optimized with fast CDN URLs) ---
const INDIA_IMAGES = [
  { src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=400&fit=crop", alt: "Taj Mahal", name: "Taj Mahal", info: "Agra's iconic white marble mausoleum" },
  { src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=300&h=400&fit=crop", alt: "Varanasi", name: "Varanasi", info: "Spiritual capital with ancient Ganga Ghats" },
  { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=300&h=400&fit=crop", alt: "Kerala", name: "Kerala", info: "Backwaters & traditional houseboats" },
  { src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=300&h=400&fit=crop", alt: "Jaipur", name: "Jaipur", info: "Pink City with Hawa Mahal palace" },
  { src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=300&h=400&fit=crop", alt: "Ladakh", name: "Ladakh", info: "Breathtaking Pangong Lake in Himalayas" },
  { src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=400&fit=crop", alt: "Goa", name: "Goa", info: "Golden beaches & vibrant nightlife" },
  { src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=300&h=400&fit=crop", alt: "Golden Temple", name: "Golden Temple", info: "Amritsar's holiest Sikh Gurdwara" },
  { src: "https://images.unsplash.com/photo-1600100397608-e1f6c37a9b37?w=300&h=400&fit=crop", alt: "Hampi", name: "Hampi", info: "UNESCO ruins of Vijayanagara Empire" },
  { src: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=300&h=400&fit=crop", alt: "Mumbai", name: "Mumbai", info: "Gateway of India, city of dreams" },
  { src: "https://images.unsplash.com/photo-1600112356915-089db076f837?w=300&h=400&fit=crop", alt: "Mysore", name: "Mysore", info: "Royal palace with grand architecture" },
  { src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=400&fit=crop", alt: "Rishikesh", name: "Rishikesh", info: "Yoga Capital of the World" },
  { src: "https://images.unsplash.com/photo-1558431382-27e303142255?w=300&h=400&fit=crop", alt: "Kolkata", name: "Kolkata", info: "Victoria Memorial, cultural hub" },
  { src: "https://images.unsplash.com/photo-1585136917228-e27bfbc1a8ae?w=300&h=400&fit=crop", alt: "Udaipur", name: "Udaipur", info: "City of Lakes with romantic palaces" },
  { src: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=300&h=400&fit=crop", alt: "Andaman", name: "Andaman Islands", info: "Pristine beaches & coral reefs" },
  { src: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=300&h=400&fit=crop", alt: "Kashmir", name: "Kashmir", info: "Paradise on Earth with Dal Lake" },
  { src: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=300&h=400&fit=crop", alt: "Ajanta Caves", name: "Ajanta Caves", info: "Ancient Buddhist rock-cut monuments" },
  { src: "https://images.unsplash.com/photo-1590050751765-3d5a8fae79eb?w=300&h=400&fit=crop", alt: "Ellora Caves", name: "Ellora Caves", info: "Magnificent rock-cut architecture" },
  { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=400&fit=crop", alt: "Khajuraho", name: "Khajuraho", info: "Temples with intricate sculptures" },
  { src: "https://images.unsplash.com/photo-1544634076-a90160ddf44e?w=300&h=400&fit=crop", alt: "Darjeeling", name: "Darjeeling", info: "Queen of Hills with tea gardens" },
  { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=400&fit=crop", alt: "Jaisalmer", name: "Jaisalmer", info: "Golden City in Thar Desert" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop", alt: "Kodaikanal", name: "Kodaikanal", info: "Princess of Hill Stations" },
  { src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=300&h=400&fit=crop", alt: "Ooty", name: "Ooty", info: "Nilgiri Mountain Railway & gardens" },
  { src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=400&fit=crop", alt: "Mahabalipuram", name: "Mahabalipuram", info: "Shore Temple & stone carvings" },
  { src: "https://images.unsplash.com/photo-1596178065887-1198b6191ce7?w=300&h=400&fit=crop", alt: "Coorg", name: "Coorg", info: "Scotland of India, coffee estates" },
  { src: "https://images.unsplash.com/photo-1535090467336-9501f96eef89?w=300&h=400&fit=crop", alt: "Ranthambore", name: "Ranthambore", info: "Tiger reserve & wildlife sanctuary" },
  { src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=300&h=400&fit=crop", alt: "Pushkar", name: "Pushkar", info: "Sacred lake & camel fair" },
  { src: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=300&h=400&fit=crop", alt: "Shimla", name: "Shimla", info: "Summer capital with Mall Road" },
  { src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=300&h=400&fit=crop", alt: "Manali", name: "Manali", info: "Himalayan resort town adventure hub" },
  { src: "https://images.unsplash.com/photo-1596178065887-1198b6191ce7?w=300&h=400&fit=crop", alt: "Munnar", name: "Munnar", info: "Rolling tea plantations & misty hills" },
  { src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=400&fit=crop", alt: "Pondicherry", name: "Pondicherry", info: "French colonial charm by the sea" },
  { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=400&fit=crop", alt: "Konark", name: "Konark", info: "Sun Temple architectural marvel" },
  { src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=400&fit=crop", alt: "Chandigarh", name: "Chandigarh", info: "Planned city with Rock Garden" },
  { src: "https://images.unsplash.com/photo-1609948543911-7a330d5de8e9?w=300&h=400&fit=crop", alt: "Rann of Kutch", name: "Rann of Kutch", info: "White salt desert landscape" },
  { src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=400&fit=crop", alt: "Madurai", name: "Madurai", info: "Meenakshi Temple with colorful towers" },
  { src: "https://images.unsplash.com/photo-1591018653367-7d867446a688?w=300&h=400&fit=crop", alt: "Bodh Gaya", name: "Bodh Gaya", info: "Where Buddha attained enlightenment" },
  { src: "https://images.unsplash.com/photo-1535090467336-9501f96eef89?w=300&h=400&fit=crop", alt: "Kaziranga", name: "Kaziranga", info: "One-horned rhino sanctuary" },
  { src: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=300&h=400&fit=crop", alt: "Lakshadweep", name: "Lakshadweep", info: "Coral islands with turquoise lagoons" },
  { src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=400&fit=crop", alt: "Agra Fort", name: "Agra Fort", info: "Red sandstone Mughal fortress" },
  { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300&h=400&fit=crop", alt: "Ranchi", name: "Ranchi", info: "City of waterfalls in Jharkhand" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop", alt: "Mount Abu", name: "Mount Abu", info: "Rajasthan's only hill station" },
  { src: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=300&h=400&fit=crop", alt: "Bangalore", name: "Bangalore", info: "Garden City with IT hub culture" },
  { src: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=300&h=400&fit=crop", alt: "Hyderabad", name: "Hyderabad", info: "City of Pearls with Charminar" }
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