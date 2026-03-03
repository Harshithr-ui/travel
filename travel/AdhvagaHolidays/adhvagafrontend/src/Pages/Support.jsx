import ContactForm from "../Components/Support/ContactForm";
import SupportCenter from "../Components/Support/SupportCenter";
import FAQSection from "../Components/Support/FAQSection";
import ChatSupport from "../Components/Support/ChatSupport";
import SEOHead from "../Components/SEO/SEOHead";
import { SEO_METADATA, generateBreadcrumbSchema } from "../utils/seoHelpers";

function Support() {
    const metadata = SEO_METADATA.support;
    const breadcrumbs = [
        { name: "Home", url: "/home" },
        { name: "Support", url: "/support" }
    ];

    return ( <>
    <SEOHead
        title={metadata.title}
        description={metadata.description}
        keywords={metadata.keywords}
        url="/support"
        image={metadata.image}
        structuredData={generateBreadcrumbSchema(breadcrumbs)}
    />
    <main role="main" aria-label="Main content">
    <SupportCenter/>
    <FAQSection/>
    <ContactForm/>
    <ChatSupport/>
    </main>
    </> );
}

export default Support;