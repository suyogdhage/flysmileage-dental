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
    slug: "why-regular-dental-checkups-matter",
    title: "Why Regular Dental Checkups Matter More Than You Think",
    excerpt: "Skipping your six-month cleaning? Here's what you're risking — and why prevention is always easier (and cheaper) than treatment.",
    content: `
      <p>We get it. Life gets busy, and if nothing hurts, it's easy to put off that dental appointment. But those twice-yearly visits do so much more than just polish your teeth.</p>
      
      <h3>What Happens During a Checkup</h3>
      <p>A comprehensive dental exam includes:</p>
      <ul>
        <li>Professional cleaning to remove tartar buildup</li>
        <li>Oral cancer screening</li>
        <li>Gum health assessment</li>
        <li>Bite and jaw alignment check</li>
        <li>Digital X-rays (as needed) to catch issues between teeth</li>
        <li>Review of existing restorations</li>
      </ul>
      
      <h3>The Cost of Waiting</h3>
      <p>A small cavity caught early might need a simple $150 filling. Left untreated, it can progress to a root canal ($1,000+) and crown ($1,500+). Gum disease caught in early stages is reversible; advanced periodontitis requires surgery and ongoing maintenance.</p>
      
      <h3>Your Mouth Is a Window to Your Health</h3>
      <p>Research links oral health to heart disease, diabetes, pregnancy complications, and even cognitive decline. Your dentist may be the first to spot signs of systemic issues.</p>
      
      <p><strong>Bottom line:</strong> An hour every six months saves time, money, and discomfort. Your future self will thank you.</p>
    `,
    author: "Dr. Sarah Mitchell",
    authorSlug: "dr-sarah-mitchell",
    publishedAt: "2024-12-15",
    category: "Preventive Care",
    tags: ["checkups", "prevention", "oral health", "cost savings"],
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    readTime: "5 min read",
  },
  {
    slug: "invisalign-vs-braces-which-is-right-for-you",
    title: "Invisalign vs. Traditional Braces: Which Is Right for You?",
    excerpt: "Clear aligners have changed orthodontics, but they're not the best choice for everyone. Here's how to decide.",
    content: `
      <p>Clear aligners like Invisalign® have made orthodontic treatment more accessible and discreet than ever. But traditional braces still have their place. Here's a breakdown to help you understand your options.</p>
      
      <h3>Invisalign Advantages</h3>
      <ul>
        <li>Nearly invisible — most people won't notice you're wearing them</li>
        <li>Removable for eating, brushing, and special occasions</li>
        <li>No food restrictions</li>
        <li>Easier oral hygiene</li>
        <li>Fewer emergency visits (no broken brackets or wires)</li>
        <li>Comfortable — smooth plastic vs. metal brackets</li>
      </ul>
      
      <h3>When Braces Are Better</h3>
      <ul>
        <li>Complex bite corrections (severe overbite, underbite, crossbite)</li>
        <li>Significant tooth rotations or vertical movements</li>
        <li>Patients who may not wear aligners 22 hours/day consistently</li>
        <li>Younger children who might lose aligners</li>
        <li>Cases requiring extractions or surgical orthodontics</li>
      </ul>
      
      <h3>The Decision Factors</h3>
      <p>Your orthodontist will consider: complexity of your case, lifestyle, compliance likelihood, budget, and aesthetic preferences. Many adults choose Invisalign for professional settings; teens often do well with either option.</p>
      
      <p>At FlySmileage, we offer both — and we'll never push one over the other based on profit. We recommend what's best for <em>your</em> smile.</p>
    `,
    author: "Dr. Michael Okonkwo",
    authorSlug: "dr-michael-okonkwo",
    publishedAt: "2024-11-28",
    category: "Orthodontics",
    tags: ["Invisalign", "braces", "orthodontics", "teeth straightening", "adult orthodontics"],
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    readTime: "6 min read",
  },
  {
    slug: "dental-implant-guide-what-to-expect",
    title: "The Complete Guide to Dental Implants: What to Expect",
    excerpt: "Considering dental implants? Here's the step-by-step process, timeline, and what makes implants the gold standard for tooth replacement.",
    content: `
      <p>Dental implants have revolutionized tooth replacement. Unlike bridges or dentures, implants replace the tooth root, preserving jawbone and providing unmatched stability. Here's what the journey looks like.</p>
      
      <h3>Phase 1: Consultation & Planning (Week 1)</h3>
      <p>We take 3D cone beam CT scans to assess bone density and plan precise implant placement. Digital impressions create a surgical guide for accuracy.</p>
      
      <h3>Phase 2: Implant Placement (Week 2-3)</h3>
      <p>Under local anesthesia (sedation available), the titanium post is placed. Most patients return to work the next day with minimal discomfort managed by over-the-counter medication.</p>
      
      <h3>Phase 3: Osseointegration (3-6 Months)</h3>
      <p>The implant fuses with your jawbone — a process called osseointegration. You'll wear a temporary restoration during this time.</p>
      
      <h3>Phase 4: Abutment & Crown (Final Visit)</h3>
      <p>A small connector (abutment) attaches to the implant, then your custom crown is secured. The result: a tooth that looks, feels, and functions like the real thing.</p>
      
      <h3>Are You a Candidate?</h3>
      <p>Good candidates have: adequate bone density (or willingness for grafting), healthy gums, good overall health, and commitment to oral hygiene. Age isn't a factor — we've placed implants in patients from 20s to 90s.</p>
      
      <p>With 95%+ success rates and potential to last a lifetime, implants are an investment in your long-term health and confidence.</p>
    `,
    author: "Dr. James Chen",
    authorSlug: "dr-james-chen",
    publishedAt: "2024-11-10",
    updatedAt: "2024-12-01",
    category: "Restorative Dentistry",
    tags: ["dental implants", "tooth replacement", "restorative dentistry", "oral surgery"],
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    readTime: "7 min read",
  },
  {
    slug: "gum-disease-silent-threat",
    title: "Gum Disease: The Silent Threat to Your Smile (and Health)",
    excerpt: "Nearly half of adults have some form of periodontal disease — often without knowing it. Learn the signs, stages, and why early treatment matters.",
    content: `
      <p>Periodontal (gum) disease affects 47% of adults over 30 and 70% over 65. Most don't know they have it until it's advanced. Here's what you need to know.</p>
      
      <h3>The Stages</h3>
      <ol>
        <li><strong>Gingivitis:</strong> Red, swollen gums that bleed when brushing. Reversible with professional cleaning and improved home care.</li>
        <li><strong>Early Periodontitis:</strong> Slight bone loss, pocket formation. Treatable with deep cleaning (scaling & root planing).</li>
        <li><strong>Moderate Periodontitis:</strong> More bone loss, gum recession, loose teeth. May require laser therapy or surgery.</li>
        <li><strong>Advanced Periodontitis:</strong> Severe bone loss, tooth loss risk. Complex surgical intervention needed.</li>
      </ol>
      
      <h3>Warning Signs</h3>
      <ul>
        <li>Bleeding gums when brushing or flossing</li>
        <li>Persistent bad breath</li>
        <li>Receding gums (teeth look longer)</li>
        <li>Loose or shifting teeth</li>
        <li>Changes in bite or denture fit</li>
        <li>Pus between teeth and gums</li>
      </ul>
      
      <h3>The Systemic Connection</h3>
      <p>Gum disease bacteria enter the bloodstream, triggering inflammation linked to: heart disease, stroke, diabetes complications, rheumatoid arthritis, and preterm birth.</p>
      
      <h3>Prevention Is Simple</h3>
      <ul>
        <li>Brush twice daily with fluoride toothpaste</li>
        <li>Floss daily (or use water flosser)</li>
        <li>Regular professional cleanings</li>
        <li>Don't smoke</li>
        <li>Manage diabetes and stress</li>
      </ul>
      
      <p>If it's been more than 6 months since your last cleaning, schedule today. Your gums — and your heart — will thank you.</p>
    `,
    author: "Dr. Emily Rodriguez",
    authorSlug: "dr-emily-rodriguez",
    publishedAt: "2024-10-22",
    category: "Periodontics",
    tags: ["gum disease", "periodontics", "prevention", "oral health", "systemic health"],
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    readTime: "6 min read",
  },
  {
    slug: "child-first-dental-visit-guide",
    title: "Your Child's First Dental Visit: A Parent's Guide",
    excerpt: "When should they go? What happens? How to prepare? Everything you need to know for a positive first experience.",
    content: `
      <p>The American Academy of Pediatric Dentistry recommends a first visit by age 1 or within 6 months of the first tooth. Here's why early visits matter and how to make them great.</p>
      
      <h3>Why So Early?</h3>
      <ul>
        <li>Establish a "dental home" for ongoing care</li>
        <li>Catch decay early (yes, babies get cavities)</li>
        <li>Learn proper cleaning techniques</li>
        <li>Discuss nutrition, fluoride, habits</li>
        <li>Build positive associations before problems arise</li>
      </ul>
      
      <h3>What to Expect</h3>
      <p>The first visit is usually short and sweet:</p>
      <ul>
        <li>Knee-to-knee exam (you hold your child)</li>
        <li>Gentle cleaning if needed</li>
        <li>Fluoride varnish application</li>
        <li>Guidance on brushing, diet, habits</li>
        <li>Answering all your questions</li>
      </ul>
      
      <h3>Preparation Tips</h3>
      <ul>
        <li>Read books about dental visits</li>
        <li>Play "dentist" at home</li>
        <li>Schedule when child is well-rested</li>
        <li>Stay positive — kids pick up on anxiety</li>
        <li>Avoid bribery ("if you're good...")</li>
      </ul>
      
      <h3>Common Questions</h3>
      <p><strong>When to start brushing?</strong> As soon as the first tooth appears — rice-grain smear of fluoride toothpaste.</p>
      <p><strong>When to floss?</strong> When any two teeth touch.</p>
      <p><strong>Bottle at bedtime?</strong> Only water. Milk/juice pools around teeth causing "baby bottle decay."</p>
      <p><strong>Thumb sucking?</strong> Usually fine until age 4. After that, we can discuss gentle intervention.</p>
      
      <p>We love treating kids at FlySmileage. Let us help your little one start a lifetime of healthy smiles.</p>
    `,
    author: "Dr. Sarah Mitchell",
    authorSlug: "dr-sarah-mitchell",
    publishedAt: "2024-10-05",
    category: "Pediatric Dentistry",
    tags: ["pediatric dentistry", "first visit", "children's oral health", "parenting"],
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    readTime: "5 min read",
  },
  {
    slug: "cosmetic-dentistry-myths-debunked",
    title: "5 Cosmetic Dentistry Myths — Debunked",
    excerpt: "Think veneers look fake? Whitening damages enamel? Let's separate fact from fiction so you can make informed decisions about your smile.",
    content: `
      <p>Cosmetic dentistry has come a long way, but outdated myths persist. Let's clear up the most common misconceptions.</p>
      
      <h3>Myth 1: "Veneers Look Fake and Chiclet-y"</h3>
      <p><strong>Reality:</strong> Modern porcelain veneers are custom-crafted with subtle translucency, texture, and color variation that mimic natural enamel. When done by an artistic dentist, no one knows you have them — they just know your smile looks amazing.</p>
      
      <h3>Myth 2: "Whitening Damages Your Enamel"</h3>
      <p><strong>Reality:</strong> Professional whitening uses peroxide-based gels that penetrate enamel to break down stains — they don't strip or weaken it. Sensitivity is temporary. Over-the-counter products used incorrectly pose more risk.</p>
      
      <h3>Myth 3: "Cosmetic Dentistry Is Only for Vanity"</h3>
      <p><strong>Reality:</strong> Many "cosmetic" procedures improve function too. Aligned teeth are easier to clean. Replacing missing teeth prevents bone loss. Fixing a bad bite reduces jaw pain and tooth wear.</p>
      
      <h3>Myth 4: "It's Only for the Wealthy"</h3>
      <p><strong>Reality:</strong> Options exist at every price point. Whitening starts around $300. Bonding can fix chips/gaps for a few hundred per tooth. Many practices (including ours) offer payment plans.</p>
      
      <h3>Myth 5: "Once You Start, You're Committed Forever"</h3>
      <p><strong>Reality:</strong> Some treatments (veneers, crowns) are irreversible because they require enamel removal. Others (whitening, bonding, aligners) are reversible or adjustable. We'll always explain the commitment level upfront.</p>
      
      <p>The best cosmetic dentistry enhances your natural beauty — it doesn't erase it. Ready to explore your options? We're here to listen, not sell.</p>
    `,
    author: "Dr. Sarah Mitchell",
    authorSlug: "dr-sarah-mitchell",
    publishedAt: "2024-09-18",
    category: "Cosmetic Dentistry",
    tags: ["cosmetic dentistry", "veneers", "whitening", "smile makeover", "myths"],
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    readTime: "5 min read",
  },
] as const;

export const blogCategories = [
  "All",
  "Preventive Care",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Orthodontics",
  "Periodontics",
  "Pediatric Dentistry",
] as const;