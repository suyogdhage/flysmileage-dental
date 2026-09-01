export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  duration: string;
  priceRange: string;
}

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription: "Comprehensive preventive care and routine treatments to maintain optimal oral health for the whole family.",
    fullDescription: "Our general dentistry services form the foundation of lifelong oral health. From routine cleanings and exams to fillings and preventive treatments, we use the latest techniques and materials to keep your smile healthy and bright. Regular visits allow us to catch potential issues early, saving you time, discomfort, and expense down the road.",
    icon: "tooth",
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    features: [
      "Professional cleanings & exams",
      "Digital X-rays (low radiation)",
      "Tooth-colored composite fillings",
      "Fluoride treatments & sealants",
      "Custom night guards & sports guards",
      "Oral cancer screenings",
    ],
    duration: "30-60 minutes",
    priceRange: "$100-$300",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription: "Transform your smile with personalized aesthetic treatments designed to enhance your natural beauty.",
    fullDescription: "A confident smile changes everything. Our cosmetic dentistry combines artistry with advanced dental science to create natural-looking results that complement your facial features. Whether you want subtle enhancements or a complete smile makeover, we'll design a treatment plan tailored to your goals and budget.",
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    features: [
      "Professional teeth whitening",
      "Porcelain veneers",
      "Cosmetic bonding",
      "Smile makeovers",
      "Gum contouring",
      "Invisalign® clear aligners",
    ],
    duration: "1-3 visits",
    priceRange: "$300-$5,000+",
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    shortDescription: "Repair and replace damaged or missing teeth with durable, natural-looking solutions.",
    fullDescription: "Damaged or missing teeth affect more than your smile — they impact your ability to eat, speak, and maintain proper oral health. Our restorative treatments use high-quality materials that blend seamlessly with your natural teeth, restoring both function and aesthetics with precision and care.",
    icon: "hammer",
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    features: [
      "Dental crowns & bridges",
      "Tooth-colored fillings",
      "Inlays & onlays",
      "Root canal therapy",
      "Full & partial dentures",
      "Implant restorations",
    ],
    duration: "1-2 visits",
    priceRange: "$200-$3,000+",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent, natural-feeling tooth replacement that preserves jawbone health and restores full function.",
    fullDescription: "Dental implants are the gold standard for tooth replacement. A titanium post integrates with your jawbone, providing a stable foundation for a custom crown that looks, feels, and functions like a natural tooth. With proper care, implants can last a lifetime.",
    icon: "implant",
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    features: [
      "Single tooth implants",
      "Implant-supported bridges",
      "All-on-4® full arch replacement",
      "Implant-retained dentures",
      "Bone grafting & sinus lifts",
      "Guided implant surgery",
    ],
    duration: "3-6 months",
    priceRange: "$3,000-$6,000 per implant",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    shortDescription: "Straighten teeth and correct bite issues with modern, discreet orthodontic options for all ages.",
    fullDescription: "Properly aligned teeth aren't just about aesthetics — they're easier to clean, reduce wear, and can alleviate jaw pain and headaches. We offer both traditional and clear aligner options, with treatment plans customized for children, teens, and adults.",
    icon: "align",
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    features: [
      "Invisalign® clear aligners",
      "Traditional braces (ceramic available)",
      "Early interceptive orthodontics",
      "Retainers & post-treatment care",
      "Digital treatment planning",
      "Flexible payment plans",
    ],
    duration: "6-24 months",
    priceRange: "$3,500-$7,500",
  },
  {
    slug: "periodontics",
    title: "Periodontics",
    shortDescription: "Specialized gum care to prevent, diagnose, and treat periodontal disease at every stage.",
    fullDescription: "Healthy gums are the foundation of a healthy smile. Periodontal disease affects nearly half of adults over 30, often without obvious symptoms. Our periodontal services range from deep cleanings to advanced surgical procedures, all performed with a focus on comfort and long-term results.",
    icon: "heart-pulse",
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    features: [
      "Scaling & root planing (deep cleaning)",
      "Periodontal maintenance",
      "Gum grafting & recession treatment",
      "Crown lengthening",
      "Laser periodontal therapy",
      "Dental implant placement",
    ],
    duration: "1-4 visits",
    priceRange: "$200-$4,000+",
  },
  {
    slug: "endodontics",
    title: "Endodontics (Root Canals)",
    shortDescription: "Expert root canal therapy to save infected teeth and relieve pain with modern, comfortable techniques.",
    fullDescription: "Root canal therapy has an unfair reputation. With today's technology and anesthetics, the procedure is no more uncomfortable than a filling — and it's the best way to save a tooth that would otherwise need extraction. Our gentle approach ensures your comfort throughout.",
    icon: "activity",
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    features: [
      "Root canal therapy",
      "Endodontic retreatment",
      "Apicoectomy (root-end surgery)",
      "Cracked tooth treatment",
      "Traumatic dental injury care",
      "Same-day emergency appointments",
    ],
    duration: "1-2 visits",
    priceRange: "$700-$1,500",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription: "Gentle, fun dental care for children that builds positive habits and prevents future problems.",
    fullDescription: "Children's dental needs are unique, and their early experiences shape their lifelong attitude toward oral health. Our pediatric services create a welcoming, stress-free environment where kids feel safe and parents feel confident. We focus on prevention, education, and gentle care.",
    icon: "baby",
    image: "https://images.unsplash.com/photo-1606811879039-93d9f4b4b4b8?w=800&q=80",
    features: [
      "First dental visits (age 1+)",
      "Cleanings & fluoride treatments",
      "Dental sealants",
      "Tooth-colored fillings",
      "Space maintainers",
      "Habit counseling (thumb sucking, pacifier)",
      "Nutrition guidance for oral health",
    ],
    duration: "30-45 minutes",
    priceRange: "$80-$250",
  },
] as const;

export const serviceCategories = [
  { slug: "preventive", label: "Preventive Care", services: ["general-dentistry", "pediatric-dentistry"] },
  { slug: "cosmetic", label: "Cosmetic & Aesthetic", services: ["cosmetic-dentistry", "orthodontics"] },
  { slug: "restorative", label: "Restorative", services: ["restorative-dentistry", "dental-implants", "endodontics"] },
  { slug: "specialized", label: "Specialized Care", services: ["periodontics"] },
] as const;