// Team content sourced from https://flysmileage.com (Fly Dental Clinic, Pune).

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  education: string[];
  certifications: string[];
  specialties: string[];
}

export const team: TeamMember[] = [
  {
    slug: "dr-priyal-shah",
    name: "Dr. Priyal Shah",
    title: "Principal Dentist",
    bio: "Meet Dr. Priyal Shah, the best dentist in Salisbury Park. With over 17+ years of experience, he began his dental journey in 2008, and since then, he's built a reputation for his expertise and genuine care. What sets him apart is his heartfelt commitment to not just treating teeth but ensuring his patients feel relaxed, comfortable, and heard. Specializing in painless wisdom tooth extractions, Dr. Priyal goes above and beyond to ensure every patient feels at ease and has minimal discomfort. His passion for transforming smiles is matched only by his goal to make every visit an uplifting, positive experience. Outside of work, he's deeply committed to his community, always looking for ways to give back.",
    image: "/images/flysmileage/Dr-PRIYAL-SHAH.jpg",
    education: ["In practice since 2008", "17+ years of clinical experience"],
    certifications: [
      "Principal Dentist, Fly Dental Clinic",
      "Painless wisdom tooth extraction",
    ],
    specialties: [
      "Painless Wisdom Tooth Extraction",
      "Root Canal Treatment",
      "Dental Implants",
      "Full Mouth Rehabilitation",
    ],
  },
  {
    slug: "dr-payal-shah",
    name: "Dr. Payal Shah",
    title: "Cosmetic Dentist",
    bio: "Meet Dr. Payal, a cosmetic dentist with more than 15 years of experience in perfecting smiles and enhancing confidence. Since starting her practice in 2008, she's transformed countless smiles with a personalized approach that focuses on both beauty and health. Beyond her professional expertise, Dr. Payal is a loving mother of two daughters, and her nurturing nature shines through in every patient interaction. She truly cares about making her patients feel comfortable and confident, taking the time to listen to their needs. Whether it's a simple check-up or a smile makeover, Dr. Payal ensures every visit is stress-free and rewarding. Her passion for dentistry is matched only by her genuine desire to improve the lives of those she treats.",
    image: "/images/flysmileage/Dr-PAYAL-SHAH.jpg",
    education: ["In practice since 2008", "15+ years of clinical experience"],
    certifications: [
      "Cosmetic Dentist, Fly Dental Clinic",
      "Digital smile design",
    ],
    specialties: [
      "Cosmetic Dentistry",
      "Smile Makeover",
      "Dental Veneers",
      "Teeth Whitening",
    ],
  },
];
