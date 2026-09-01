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
    slug: "dr-sarah-mitchell",
    name: "Dr. Sarah Mitchell, DDS",
    title: "Founder & Lead Dentist",
    bio: "Dr. Mitchell founded FlySmileage Dental with a vision: to create a dental practice where clinical excellence meets genuine warmth. With over 15 years of experience in comprehensive and cosmetic dentistry, she's known for her gentle touch and artistic eye. Dr. Mitchell believes that every patient deserves to feel heard, understood, and cared for — not just treated.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    education: [
      "DDS, University of Pennsylvania School of Dental Medicine",
      "BS Biology, Cornell University",
      "General Practice Residency, NYU Langone Health",
    ],
    certifications: [
      "Invisalign® Platinum Provider",
      "American Academy of Cosmetic Dentistry (AACD) Accredited",
      "Fellow, Academy of General Dentistry",
    ],
    specialties: ["Cosmetic Dentistry", "Smile Design", "Invisalign", "General Dentistry"],
  },
  {
    slug: "dr-james-chen",
    name: "Dr. James Chen, DMD",
    title: "Implant & Restorative Specialist",
    bio: "Dr. Chen brings precision and expertise to complex restorative cases. His advanced training in implantology and prosthodontics allows him to handle everything from single-tooth replacements to full-arch reconstructions. Patients appreciate his calm demeanor and ability to explain complex procedures in clear, understandable terms.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    education: [
      "DMD, Harvard School of Dental Medicine",
      "BS Biomedical Engineering, Johns Hopkins University",
      "Certificate in Implant Dentistry, UCLA",
      "Prosthodontics Residency, Boston University",
    ],
    certifications: [
      "Diplomate, American Board of Oral Implantology",
      "Fellow, International Congress of Oral Implantologists",
      "Certified in Guided Implant Surgery (X-Nav)",
    ],
    specialties: ["Dental Implants", "Full-Mouth Reconstruction", "Prosthodontics", "Bone Grafting"],
  },
  {
    slug: "dr-emily-rodriguez",
    name: "Dr. Emily Rodriguez, DDS",
    title: "Periodontist",
    bio: "Dr. Rodriguez specializes in the foundation of every healthy smile: the gums and supporting structures. Her expertise in periodontal plastic surgery and laser therapy allows her to treat gum disease at every stage while enhancing aesthetics. She's passionate about patient education and preventive care.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    education: [
      "DDS, Columbia University College of Dental Medicine",
      "BS Chemistry, UC Berkeley",
      "Periodontics Residency, University of Michigan",
    ],
    certifications: [
      "Diplomate, American Board of Periodontology",
      "LANAP® Certified Clinician (Laser Gum Therapy)",
      "Member, American Academy of Periodontology",
    ],
    specialties: ["Periodontal Therapy", "Gum Grafting", "Crown Lengthening", "Dental Implants", "Laser Dentistry"],
  },
  {
    slug: "dr-michael-okonkwo",
    name: "Dr. Michael Okonkwo, DDS",
    title: "Orthodontist",
    bio: "Dr. Okonkwo combines orthodontic expertise with a deep understanding of facial aesthetics. He creates treatment plans that don't just straighten teeth — they enhance overall facial harmony. His warm approach puts even the most anxious patients at ease, whether they're 7 or 70.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
    education: [
      "DDS, University of Michigan School of Dentistry",
      "BS Neuroscience, Duke University",
      "Orthodontics Residency, University of North Carolina",
    ],
    certifications: [
      "Diplomate, American Board of Orthodontics",
      "Invisalign® Diamond Provider",
      "Member, American Association of Orthodontists",
    ],
    specialties: ["Orthodontics", "Invisalign", "Early Interceptive Treatment", "Surgical Orthodontics", "TMD Therapy"],
  },
] as const;