import PackagesSection from "../Components/Packages/InternationalPackages";
import SEOHead from "../Components/SEO/SEOHead";
import { SEO_METADATA, generateBreadcrumbSchema } from "../utils/seoHelpers";

function International() {
    const metadata = SEO_METADATA.international;
    const breadcrumbs = [
        { name: "Home", url: "/home" },
        { name: "International Holidays", url: "/international" }
    ];

    return ( <>
     <SEOHead
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        url="/international"
        image={metadata.image}
        structuredData={generateBreadcrumbSchema(breadcrumbs)}
      />

     <section
        style={{
          position: 'relative',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          overflow: 'hidden',
        }}
        aria-label="International holidays hero section"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/AQO5C05U8--9upfgLhhH3ciYF9l5utiHDgxVGDvoyv5s0bIvOLVcwAVXa79bAMTTojK_ivDnd9vIlVK6cTW81huFVlcUS_oN.mp4" type="video/mp4" />
        </video>

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1,
        }} aria-hidden="true"></div>

        <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2, padding: '0 1.5rem' }}>
          <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.9rem', fontFamily: "'Lato', sans-serif", marginBottom: '1rem' }}>
            See the World
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0.5rem 0 1.5rem', fontWeight: 300, fontFamily: "'Playfair Display', serif", letterSpacing: '0.03em', lineHeight: 1.3, textTransform: 'uppercase' }}>
            International Holiday<br />Packages
          </h1>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8, margin: '0 auto', maxWidth: '640px', color: 'rgba(255,255,255,0.9)', fontFamily: "'Lato', sans-serif", fontWeight: 300, fontStyle: 'italic' }}>
            Luxe city breaks, island escapes, alpine adventures, and cultural circuits—crafted end-to-end with visas, stays, and guides sorted.
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          opacity: 0.5,
          animation: 'bounce 1.5s infinite',
          zIndex: 2,
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </section>

    <main role="main" aria-label="Main content" style={{ margin: 0, padding: 0 }}>
    <PackagesSection/>
    </main>
    </> );
}

export default International;