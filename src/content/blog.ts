// Blog titles and images sourced from https://flysmileage.com (Fly Dental Clinic, Pune).
// The live site publishes these four posts with placeholder body copy, so the article
// bodies below are written from Fly Dental's own treatment-page content.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorSlug: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "full-mouth-rehabilitation-the-ultimate-smile-makeover",
    title: "Full Mouth Rehabilitation: The Ultimate Smile Makeover",
    excerpt:
      "When wear, decay and missing teeth add up, rebuilding the whole mouth restores both function and appearance — here's how full mouth rehabilitation works.",
    content: `
      <p>Full mouth rehabilitation (FMR) combines restorative and cosmetic dentistry to rebuild every tooth in the upper and lower jaw. It is the right choice when years of wear, decay, missing teeth or bite problems have added up — and it restores both how your mouth works and how your smile looks.</p>

      <h3>Who Needs Full Mouth Rehabilitation</h3>
      <ul>
        <li>Several missing, broken or severely worn teeth</li>
        <li>Widespread decay affecting most of the mouth</li>
        <li>Ongoing jaw pain or bite problems</li>
        <li>Teeth worn down by long-term grinding</li>
        <li>Previous dental work that has failed and needs rebuilding</li>
      </ul>

      <h3>How We Plan Your Treatment</h3>
      <p>We begin with a complete assessment of teeth, gums, bite and jaw joints, supported by X-rays and records that map out every tooth needing work. From there you get a staged, written plan so you know the sequence and the timeline before anything begins.</p>

      <h3>Treatment Is Staged, Not Rushed</h3>
      <p>FMR is never done all at once. Each phase — implants, crowns and bridges, root canal treatment where required, bite correction, then cosmetic finishing — is allowed to heal properly before the next begins. Follow-up care protects the result for the long term.</p>

      <p><strong>Ready to rebuild your smile?</strong> Book a consultation at Fly Dental Clinic and we'll walk you through what your mouth actually needs.</p>
    `,
    author: "Dr. Priyal Shah",
    authorSlug: "dr-priyal-shah",
    publishedAt: "2025-02-18",
    category: "Restorative Dentistry",
    tags: ["full mouth rehabilitation", "FMR", "crowns", "implants"],
    image:
      "/images/flysmileage/Full-mouth-rehabilitation-the-ultimate-smile-makeover.jpg",
    readTime: "5 min read",
  },
  {
    slug: "general-dentistry-the-unsung-hero-of-your-smile",
    title: "General Dentistry: The Unsung Hero of Your Smile",
    excerpt:
      "Check-ups, cleaning, fillings and gum care rarely make headlines — but they are what keep the bigger treatments off your calendar.",
    content: `
      <p>General dentistry is the foundation of every healthy smile. It covers the everyday essentials — check-ups, cleaning, fillings, gum care and preventive treatment — so problems are caught early and your teeth stay comfortable and functional for life.</p>

      <h3>What General Dentistry Covers</h3>
      <ul>
        <li>Preventive check-ups and professional cleaning</li>
        <li>Tooth-coloured cavity fillings</li>
        <li>Gum treatment for bleeding and inflamed gums</li>
        <li>Bad breath diagnosis and treatment</li>
        <li>Fluoride application and dental sealants</li>
        <li>Guidance on day-to-day oral hygiene</li>
      </ul>

      <h3>Why It Matters</h3>
      <p>Regular dental visits let us treat small problems while they are still small. Preventive care keeps treatment simpler, more comfortable and more affordable than waiting for pain to appear.</p>

      <h3>Care for the Whole Family</h3>
      <p>Fly Dental is a family practice, from children to adults. Our welcoming environment, modern facility and advanced treatment options mean everyone in the household can be seen in one place.</p>

      <p><strong>How often should you come in?</strong> Most people benefit from a professional check-up and cleaning every six months. We'll tell you if your mouth needs a different schedule.</p>
    `,
    author: "Dr. Payal Shah",
    authorSlug: "dr-payal-shah",
    publishedAt: "2025-01-27",
    category: "Preventive Care",
    tags: ["general dentistry", "check-ups", "prevention", "family dentistry"],
    image:
      "/images/flysmileage/general-dentistry-the-unsung-hero-of-your-smile.jpg",
    readTime: "4 min read",
  },
  {
    slug: "root-canal-treatment-not-as-scary-as-it-sounds",
    title: "Root Canal Treatment: Not as Scary as It Sounds!",
    excerpt:
      "Modern techniques and local anesthesia make root canal treatment virtually painless — and it's what saves a tooth that would otherwise be lost.",
    content: `
      <p>Root canal therapy, or endodontic therapy, removes infected or damaged pulp from inside a tooth. That pulp holds nerves and connective tissue. To stop the infection spreading, the injured pulp is carefully removed, and the canal is cleaned, disinfected and sealed. A crown or filling then restores the tooth's appearance and function.</p>

      <h3>When Is a Root Canal Needed?</h3>
      <ul>
        <li>Deep decay</li>
        <li>Cracks or fractures in the tooth</li>
        <li>Gum disease</li>
        <li>Worn-down teeth from grinding</li>
        <li>Injuries to the tooth</li>
        <li>Repeated dental procedures</li>
      </ul>

      <h3>Symptoms to Watch For</h3>
      <p>Persistent pain when biting or chewing, lingering sensitivity to hot or cold, swollen or tender gums, pus near the tooth or gum, discoloration of the tooth, or a loose tooth. If any of these sound familiar, get it looked at.</p>

      <h3>What Actually Happens</h3>
      <ul>
        <li>An X-ray to assess the affected area</li>
        <li>Local anesthesia to ensure comfort</li>
        <li>A small opening in the tooth to access the pulp</li>
        <li>Removal of the infected pulp and cleaning of the canal</li>
        <li>Filling the canal with gutta-percha and sealing it</li>
        <li>A filling or crown for protection</li>
      </ul>

      <p><strong>Will it hurt?</strong> A root canal treatment is virtually painless thanks to modern techniques and local anesthesia. And with good hygiene and routine check-ups, a treated tooth can last a lifetime.</p>
    `,
    author: "Dr. Priyal Shah",
    authorSlug: "dr-priyal-shah",
    publishedAt: "2024-12-09",
    category: "Pain Relief",
    tags: ["root canal", "RCT", "tooth pain", "endodontics"],
    image:
      "/images/flysmileage/root-canal-treatment-not-as-scary-as-it-sounds.jpg",
    readTime: "5 min read",
  },
  {
    slug: "teeth-cleaning-the-secret-to-a-sparkling-smile-and-healthy-mouth",
    title: "Teeth Cleaning: The Secret to a Sparkling Smile & Healthy Mouth",
    excerpt:
      "Brushing and flossing can't reach everywhere. Professional cleaning removes the plaque and tartar that cause cavities and gum disease.",
    content: `
      <p>Teeth cleaning is a preventive dental procedure designed to remove plaque, tartar and stains that brushing and flossing alone can't eliminate. Even with good oral hygiene, some areas in your mouth are difficult to clean thoroughly. Over time plaque hardens into tartar, leading to gum inflammation and other problems.</p>

      <h3>Benefits of Professional Cleaning</h3>
      <ul>
        <li><strong>Prevents cavities:</strong> removes plaque, the primary cause of tooth decay</li>
        <li><strong>Reduces gum disease risk:</strong> cleans below the gum line to prevent gingivitis and periodontitis</li>
        <li><strong>Freshens breath:</strong> eliminates bacteria and odour-causing particles</li>
        <li><strong>Brightens your smile:</strong> polishing removes surface stains</li>
        <li><strong>Supports overall health:</strong> good oral health is linked to a lower risk of heart disease and other systemic conditions</li>
      </ul>

      <h3>The Cleaning Process</h3>
      <p>We start with an examination of your teeth and gums to check for decay or gum disease. Specialized tools then remove buildup from hard-to-reach areas, followed by deep cleaning below the gum line. A polishing paste gives a smooth, shiny finish, and fluoride can be applied to strengthen enamel.</p>

      <h3>How Often?</h3>
      <p>Most dentists recommend professional cleaning every six months, though some people with specific dental conditions need it more often. We'll guide you on the right schedule for your mouth.</p>

      <p><strong>Is it painful?</strong> Cleaning is typically painless. If you have sensitive gums, we take a gentler approach so the visit stays comfortable.</p>
    `,
    author: "Dr. Payal Shah",
    authorSlug: "dr-payal-shah",
    publishedAt: "2024-11-14",
    category: "Preventive Care",
    tags: ["teeth cleaning", "scaling", "gum health", "prevention"],
    image:
      "/images/flysmileage/teeth-cleaning-the-secret-to-a-sparkling-smile-and-healthy-mouth.jpg",
    readTime: "4 min read",
  },
];

export const blogCategories: string[] = Array.from(
  new Set(blogPosts.map((post) => post.category))
);
