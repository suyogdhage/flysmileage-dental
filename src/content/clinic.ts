// Content sourced from https://flysmileage.com (Fly Dental Clinic, Pune).

export const clinic = {
  name: "Fly Dental Clinic",
  brand: "Fly Smileage",
  tagline: "We Listen, We Care",
  logo: "/images/flysmileage/fly-new-smileage-logo.png",
  phone: "+91 976 747 1117",
  phoneHref: "tel:+919767471117",
  whatsappHref: "https://wa.me/919767471117",
  email: "info@flysmileage.com",
  emailHref: "mailto:info@flysmileage.com",
  primaryLocation: "Salisbury Park, Gultekadi, Pune",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
  intro:
    "At Fly Dental, with over 17 years of experience, we take a personalized approach to your dental care. Our team is dedicated to understanding your unique dental concerns, medical history, and lifestyle, ensuring each treatment is tailored to your needs. We're committed to delivering the highest standard of care, making your smile our priority.",
} as const;

export interface Branch {
  label: string;
  area: string;
  address: string;
}

export const branches: Branch[] = [
  {
    label: "Branch I",
    area: "Salisbury Park",
    address:
      "Shop No G-39, Mantri Estate, near Gultekadi, Salisbury Park, Gultekadi, Pune, Maharashtra 411037",
  },
  {
    label: "Branch II",
    area: "Raviwar Peth",
    address:
      "Shop No.1/2, Vitthal Rukhmani Complex, below lifeline diagnostic center, Mahatma Phule Road, Raviwar Peth, Pune, Maharashtra 411002",
  },
  {
    label: "Branch III",
    area: "Bibwewadi",
    address:
      "Gajara Housing Society Shop #4, Swami Vivekanand Rd, Near Bharat Jyoti Bus Stop, Bibwewadi, Pune, Maharashtra 411037",
  },
];

export const stats = [
  { value: "21K+", label: "Happy Smiles" },
  { value: "1000+", label: "Full Jaw Treatment" },
  { value: "17+", label: "Year of Experience" },
  { value: "3+", label: "Number Of Centers" },
];

export const heroSlides = [
  {
    eyebrow: "Root Canal Treatment",
    title: "Pain Gone,",
    highlight: "Smile On",
    href: "/services/root-canal-treatment",
    image: "/images/flysmileage/Pain-Gone-Smile-On.jpg",
  },
  {
    eyebrow: "General Dentistry",
    title: "Your Smile,",
    highlight: "Our Care",
    href: "/services/general-dentistry",
    image: "/images/flysmileage/Your-Smile-Our-Care.jpg",
  },
];

export const promises = [
  "Your Destination for Advanced Dental Care.",
  "Our welcoming environment guarantees exceptional dental care every time you visit.",
  "Family Dentistry, From Children to Adults.",
  "Modern Facility & Advanced Treatment Options",
  "Expertise You Can Rely On, Experts You Can Trust",
  "Comprehensive Treatment for Every Smile",
];

export const clinicFeatures = [
  {
    title: "Zero Waiting Time",
    icon: "/images/flysmileage/icons/Zero-Waiting-Time.png",
    description:
      "We value your time. With efficient scheduling, your treatment begins promptly - no waiting, just care.",
  },
  {
    title: "Affordable Treatments",
    icon: "/images/flysmileage/icons/Affordable-Treatments.png",
    description:
      "Quality dental care should be accessible. Therefore, we offer top-tier treatments at an affordable cost.",
  },
  {
    title: "Comfortable Environment",
    icon: "/images/flysmileage/icons/Comfortable-Environment.png",
    description:
      "Our clinic is designed for your comfort, with a welcoming atmosphere making sure you are at ease.",
  },
  {
    title: "Expert Care",
    icon: "/images/flysmileage/icons/Expert-Care.png",
    description:
      "Experience cutting-edge treatments delivered by our skilled dentists & team, ensuring optimal results.",
  },
];

export const whyChooseUs = {
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
  intro:
    "At our clinic, we believe in providing more than just dental care - we offer a complete, comfortable experience. Our highly skilled professionals are dedicated to making every visit stress-free while delivering exceptional results with the latest technology. We understand that your smile is personal and are committed to helping you achieve it with personalized care.",
  points: [
    {
      title: "Expertise You Can Trust",
      icon: "/images/flysmileage/Expertise-You-Can-Trust.png",
      description:
        "With years of experience and a passion for dentistry, our team is equipped to handle all your oral health needs.",
    },
    {
      title: "Comfort at Every Step",
      icon: "/images/flysmileage/Comfort-at-Every-Step.png",
      description:
        "We prioritize your comfort, ensuring a relaxing and pain-free experience with every treatment.",
    },
    {
      title: "Affordable, High-Quality Care",
      icon: "/images/flysmileage/Affordable-High-Quality-Care.png",
      description:
        "We offer top-tier dental treatments at competitive prices, making excellent care accessible for everyone.",
    },
  ],
};

export const visitSteps = [
  {
    step: "Step 1",
    title: "Appointment",
    description:
      "Schedule an appointment with our expert to take the first step towards a beautiful smile.",
    image: "/images/flysmileage/1.png",
  },
  {
    step: "Step 2",
    title: "Consultation",
    description:
      "During the consultation, we will discuss your goals and needs for your desired smile.",
    image: "/images/flysmileage/2.png",
  },
  {
    step: "Step 3",
    title: "Treatment Plan",
    description:
      "Based on your needs, we will create a customized treatment plan specifically for you.",
    image: "/images/flysmileage/3.png",
  },
  {
    step: "Step 4",
    title: "Treatment",
    description:
      "The treatment will be carried out with our expert care keeping your comfort in mind.",
    image: "/images/flysmileage/4.png",
  },
  {
    step: "Step 5",
    title: "Results",
    description:
      "Experience the effective results and enjoy your beautiful new smile!",
    image: "/images/flysmileage/5.png",
  },
  {
    step: "Step 6",
    title: "Post Treatment Care",
    description: "Our after treatment care will help you maintain your happy smile.",
    image: "/images/flysmileage/post-care.png",
  },
];

export interface Testimonial {
  name: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rohit Yadav",
    quote:
      "One of the best dental clinic i ever went for treatment, both the doctor dr.priyal and dr.payal are both fabulous and very caring there work is definitely flawless and neat, i would highly recommend visiting them for checkup and dental problems.",
  },
  {
    name: "Poonam Raka",
    quote:
      "Very satisfied with my experience here at Fly Dental clinic got my single sitting root canal here. I got 4 root canals all went very smoothly and got my 4 caps also. Doctors were very supportive and made me comfortable in all sittings. I highly recommend getting your treatment done from here.",
  },
  {
    name: "Nanda Shah",
    quote:
      "I had a fantastic experience with my dental implants at this practice. Dr. Shah was highly skilled and made the entire process comfortable and efficient. The results are outstanding and I couldn't be happier with my new implants.",
  },
  {
    name: "Pankaj Shah",
    quote:
      "Dr Priyal Shah is an excellent doctor. I was very fearfull for my wisdom tooth extraction but the process was really smooth and painless. I am very happy with the experience.",
  },
  {
    name: "Mohnish Rajan",
    quote:
      "Really good service. Dr Payal was very friendly and knowledgeable. I did teeth cleaning. She even helped my father with teeth implants. He is 85 and was very happy with the service.",
  },
  {
    name: "Vinod Sharma",
    quote:
      "Dr. Priyal Shah is extremely good in his profession. I got treated by him for placing dental cape. Pricing for treatment by Dr. Priyal is very reasonable. I wish him good wishes for his professional activities.",
  },
];

export const appointment = {
  eyebrow: "Appointment",
  headline: "Start your journey towards a beautiful, healthy smile",
  image: "/images/flysmileage/Form-Appointment.jpg",
  treatments: [
    "Cosmetic Treatment",
    "Pain Relief",
    "Preventive Care",
    "Restorative Dentistry",
  ],
};

export const closingCta = {
  headline:
    "Leave a lasting impression with your smile, as we create one with expert care.",
  cta: "Book An Appointment",
  image: "/images/flysmileage/Your-Smile-Our-Care.jpg",
};
