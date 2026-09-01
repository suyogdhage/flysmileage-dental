// Treatment content sourced from https://flysmileage.com (Fly Dental Clinic, Pune).

export interface ServiceSection {
  heading: string;
  body?: string;
  bullets?: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  iconImage: string;
  image: string;
  features: string[];
  duration: string;
  priceRange: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDescription:
      "Root canal treatment relieves pain and saves your tooth, restoring comfort and your natural smile.",
    fullDescription:
      "Are you struggling with tooth pain or discomfort? Unsure about the process or cost of a root canal? At Fly Dental Clinic, we make your dental journey stress-free with root canal treatment in Salisbury Park. A root canal treatment addresses infections in the tooth pulp — the innermost layer responsible for keeping your tooth alive. With our expert care, we ensure a comfortable and efficient root canal experience.",
    icon: "activity",
    iconImage: "/images/flysmileage/icons/root-canal-treatemnt.png",
    image: "/images/flysmileage/root-canal-treatemnt.jpg",
    features: [
      "Root Canal Treatment",
      "Single Sitting RCT",
      "Re-RCT (repeat root canal treatment)",
      "Wisdom tooth removal",
      "TMJ / TMD treatment",
      "Crown or filling restoration after treatment",
    ],
    duration: "One or more appointments",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "What Is Root Canal Treatment?",
        body: "The process of extracting infected or damaged pulp from the inside of a tooth is called root canal therapy, or endodontic therapy. There are nerves and connective tissues in this pulp. In order to stop additional infection, the injured pulp is carefully removed during therapy, and the canal is cleaned, disinfected, and sealed. A crown or filling is frequently used to restore the tooth's appearance and functionality.",
      },
      {
        heading: "When Is a Root Canal Needed?",
        body: "A root canal treatment is often recommended if a tooth is majorly infected or damaged. Common causes include:",
        bullets: [
          "Deep decay",
          "Cracks or fractures in the tooth",
          "Gum disease",
          "Worn-down teeth from grinding",
          "Injuries to the tooth",
          "Repeated dental procedures",
        ],
      },
      {
        heading: "Symptoms Indicating a Root Canal Infection",
        bullets: [
          "Persistent tooth pain, particularly when biting or chewing",
          "Sensitivity to hot or cold that lingers",
          "Swollen or tender gums",
          "Pus near the tooth or gum",
          "Discoloration of the tooth",
          "A loose tooth",
        ],
      },
      {
        heading: "The Root Canal Treatment Process",
        bullets: [
          "Taking an X-ray to assess the affected area.",
          "Administering local anesthesia to ensure comfort.",
          "Creating a small opening in the tooth to access the pulp.",
          "Removing the infected pulp and cleaning the canal.",
          "Filling the canal with gutta-percha and sealing it.",
          "Adding a filling or crown for protection.",
        ],
      },
      {
        heading: "Re-RCT (Repeat Root Canal Treatment)",
        body: "A re-root canal treatment (Re-RCT) is necessary when a previously treated tooth develops an infection or other complications. This procedure involves reopening the tooth, removing any residual or new infection, and resealing the canal. At Fly Dental Clinic, we specialize in precise Re-RCT to restore your tooth's health effectively.",
      },
    ],
    faqs: [
      {
        question: "How painful is a root canal treatment?",
        answer:
          "A root canal treatment is virtually painless, thanks to modern techniques and local anesthesia.",
      },
      {
        question: "Can a tooth with a root canal get infected again?",
        answer:
          "Yes, a tooth with a root canal can become reinfected if the filling or crown is damaged, allowing bacteria to enter. In such cases, a Re-RCT (Repeat Root Canal Treatment) may be necessary to address the issue and save the tooth.",
      },
      {
        question: "How long does a root canal-treated tooth last?",
        answer:
          "With appropriate care, including good oral hygiene and routine dental check-ups, a root canal-treated tooth can last a lifetime. Ensuring the tooth is protected with a crown and avoiding habits like teeth grinding can further enhance its longevity.",
      },
    ],
  },
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription:
      "Comprehensive care for healthy teeth, gums, and a beautiful smile keeping you confident and pain-free.",
    fullDescription:
      "General dentistry is the foundation of every healthy smile. At Fly Dental Clinic we cover the everyday essentials — check-ups, cleaning, fillings, gum care and preventive treatment — so problems are caught early and your teeth stay comfortable and functional for life.",
    icon: "circle-dot",
    iconImage: "/images/flysmileage/icons/general-dentistry.png",
    image: "/images/flysmileage/general-dentistry.jpg",
    features: [
      "Teeth Cleaning",
      "Cavity Filling",
      "Bad Breath Treatment",
      "Gum Treatment",
      "Fluoride & Dental Sealants",
      "Routine check-ups and X-rays",
    ],
    duration: "Single visit for most treatments",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "Comprehensive Treatment for Every Smile",
        body: "Our welcoming environment guarantees exceptional dental care every time you visit. From children to adults, we provide family dentistry backed by a modern facility and advanced treatment options.",
      },
      {
        heading: "What General Dentistry Covers",
        bullets: [
          "Preventive check-ups and professional cleaning",
          "Tooth-coloured cavity fillings",
          "Gum treatment for bleeding and inflamed gums",
          "Bad breath diagnosis and treatment",
          "Fluoride application and dental sealants",
          "Guidance on day-to-day oral hygiene",
        ],
      },
      {
        heading: "Why It Matters",
        body: "Regular dental visits let us treat small problems while they are still small. Preventive care keeps treatment simpler, more comfortable and more affordable than waiting for pain to appear.",
      },
    ],
    faqs: [
      {
        question: "How often should I visit the dentist?",
        answer:
          "Most people benefit from a professional check-up and cleaning every six months. Our team will guide you on the right schedule based on your oral health needs.",
      },
      {
        question: "Do you treat children too?",
        answer:
          "Yes. We offer family dentistry from children to adults, including a dedicated kids dental care programme.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription:
      "Dental implants replace missing teeth, restoring function & aesthetics for a natural-looking smile.",
    fullDescription:
      "Are you missing a tooth and looking for a long-lasting solution to restore your smile? At Fly Dental Clinic, we offer an excellent option to replace missing teeth and bring back the confidence in your smile with dental implants in Salisbury Park, offering customized care tailored to your needs.",
    icon: "stethoscope",
    iconImage: "/images/flysmileage/icons/implants.png",
    image: "/images/flysmileage/implants.jpg",
    features: [
      "Single tooth implants",
      "Implant-supported crowns & bridges",
      "Overdentures",
      "Dentures",
      "Dental Crown & Bridge Treatment",
      "Bone grafting when required",
    ],
    duration: "Typically 5-8 months end to end",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "What Are Dental Implants?",
        body: "A dental implant is a titanium post that acts as a substitute for your tooth root. It is surgically placed into your jawbone, providing a strong base for a crown, bridge, or denture. Implants look, feel, and function like your natural teeth, making them one of the most effective tooth replacement options available.",
      },
      {
        heading: "Why Choose Dental Implants?",
        bullets: [
          "Natural Appearance: Implants imitate the look and feel of your natural teeth.",
          "Long-Lasting Solution: With appropriate care, dental implants can last for 20 years or more.",
          "Improved Functionality: You can eat, speak, and chew comfortably, just like you would with natural teeth.",
          "No Impact on Neighbouring Teeth: Unlike bridges, implants don't require support from adjacent teeth.",
          "Preserves Jawbone: Implants prevent the bone loss that often occurs when teeth are missing.",
        ],
      },
      {
        heading: "The Dental Implant Process at Fly Dental",
        bullets: [
          "Consultation: During your first visit, we'll evaluate your oral health, take X-rays, and discuss your treatment plan.",
          "Implant Placement: The titanium post is surgically placed into your jawbone under local anesthesia. This process is painless and typically takes one visit.",
          "Healing Period: Over the next few months, the implant integrates with your jawbone, creating a sturdy foundation for the crown.",
          "Crown Placement: Once the implant is fully healed, a custom-made crown is attached, restoring your smile to its full glory.",
        ],
      },
      {
        heading: "Benefits of Dental Implants",
        bullets: [
          "Enhanced comfort compared to traditional dentures.",
          "Boosts self-confidence by improving your smile.",
          "Maintains the natural shape of your face and jawline.",
          "Reduces the risk of gum disease in areas with missing teeth.",
          "Requires no special maintenance — just regular brushing and flossing.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much time does the dental implant process take?",
        answer:
          "The process typically takes 5-8 months, depending on your healing time. While the implant itself is placed in one session, the healing period is necessary to ensure the implant integrates with the jawbone.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "Not at all. The procedure is done under local anesthesia so that you won't feel any pain. Post-surgery discomfort is much less and can be managed with prescribed pain relievers.",
      },
      {
        question: "What is the cost of dental implant treatment?",
        answer:
          "The cost of dental implants depends on factors like the number of implants, the type of restoration (crown or bridge), and the need for additional procedures like bone grafting. Schedule a consultation with us for a detailed estimate.",
      },
      {
        question: "Am I a candidate for dental implants?",
        answer:
          "Most people are good candidates for dental implants. However, healthy gums and sufficient jawbone density are essential. If you have any concerns, our specialists will guide you through your options.",
      },
    ],
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    shortDescription:
      "Transform your smile with customized treatments, enhancing beauty and confidence in every smile.",
    fullDescription:
      "Are you looking to enhance your smile's appearance and boost your confidence? At Fly Dental Clinic, we offer smile makeover in Salisbury Park, utilizing digital smile designing to help you achieve the smile of your dreams.",
    icon: "sparkles",
    iconImage: "/images/flysmileage/icons/smile-makeover.png",
    image: "/images/flysmileage/smile-makeover.jpg",
    features: [
      "Digital smile design",
      "Teeth Whitening",
      "Veneers",
      "Crowns",
      "Orthodontics",
      "Gum contouring",
    ],
    duration: "Single visit to multiple appointments",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "What Is a Smile Makeover?",
        body: "A smile makeover involves a combination of cosmetic dental treatments tailored to improve the aesthetics of your smile. This personalized approach addresses various dental concerns, such as discoloration, misalignment, gaps, and more, to create a harmonious and attractive smile.",
      },
      {
        heading: "Our Smile Makeover Process",
        bullets: [
          "Initial Consultation: We begin with a comprehensive evaluation of your oral health and discuss your aesthetic goals.",
          "Digital Smile Design: Using advanced digital smile designing, we create a digital mock-up of your new smile, letting you picture the potential results before treatment begins.",
          "Customized Treatment Plan: Based on the digital design and your preferences, we develop a tailored plan that may include teeth whitening, veneers, crowns, orthodontics, or gum contouring.",
          "Implementation: Our skilled dental professionals precisely execute the treatment plan, ensuring optimal results.",
          "Follow-Up Care: We provide guidance on maintaining your new smile and schedule follow-up visits to monitor your progress.",
        ],
      },
      {
        heading: "Benefits of a Smile Makeover",
        bullets: [
          "Enhanced Aesthetics: Achieve a brighter, straighter, and more symmetrical smile.",
          "Boosted Confidence: Feel more self-assured in social and professional interactions.",
          "Personalized Results: Treatments are tailored to your unique facial features and preferences.",
          "Improved Oral Health: Addressing dental issues can lead to better overall oral hygiene.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a smile makeover take?",
        answer:
          "The duration may differ depending on the complexity of the treatment plan. Some treatments can be done in a single visit, while others may need multiple appointments.",
      },
      {
        question: "Is the smile makeover procedure painful?",
        answer:
          "We prioritize patient comfort and use modern techniques to reduce discomfort during treatments. Local anesthesia and sedation options are available as needed.",
      },
      {
        question: "How long do the results of a smile makeover last?",
        answer:
          "With appropriate oral hygiene and regular dental check-ups, the outcomes of a smile makeover can last many years. Some treatments, like teeth whitening, may require periodic maintenance.",
      },
    ],
  },
  {
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation (FMR)",
    shortDescription:
      "FMR restores function and appearance, transforming your smile and boosting overall confidence.",
    fullDescription:
      "Full mouth rehabilitation combines restorative and cosmetic dentistry to rebuild every tooth in the upper and lower jaw. It is the right choice when years of wear, decay, missing teeth or bite problems have added up — and it restores both how your mouth works and how your smile looks.",
    icon: "hammer",
    iconImage: "/images/flysmileage/icons/FMR.png",
    image: "/images/flysmileage/FMR.jpg",
    features: [
      "Full Mouth Rehabilitation Treatment",
      "Dental Crown & Bridge Treatment",
      "Dental Implants and overdentures",
      "Root canal treatment where required",
      "Bite and TMJ correction",
      "Cosmetic finishing with veneers and whitening",
    ],
    duration: "Staged across multiple appointments",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "Who Needs Full Mouth Rehabilitation?",
        bullets: [
          "Several missing, broken or severely worn teeth",
          "Widespread decay affecting most of the mouth",
          "Ongoing jaw pain or bite problems",
          "Teeth worn down by long-term grinding",
          "Previous dental work that has failed and needs rebuilding",
        ],
      },
      {
        heading: "How We Plan Your Treatment",
        bullets: [
          "A complete assessment of teeth, gums, bite and jaw joints",
          "X-rays and records to map out every tooth that needs work",
          "A staged, written plan so you know the sequence and timeline",
          "Treatment delivered comfortably, one phase at a time",
          "Follow-up care to protect the result",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does full mouth rehabilitation take?",
        answer:
          "It depends on how many teeth need treatment and which procedures are involved. We stage the work across several appointments and share the full timeline with you after the consultation.",
      },
      {
        question: "Is the treatment done all at once?",
        answer:
          "No. Full mouth rehabilitation is planned in phases so that each stage heals properly and you stay comfortable throughout.",
      },
    ],
  },
  {
    slug: "braces-treatment",
    title: "Braces Treatment",
    shortDescription:
      "Braces straighten teeth and perfect your bite, giving you a confident, healthy smile for life.",
    fullDescription:
      "A confident, beautiful smile begins with well-aligned teeth. At Fly Dental Clinic, we offer expert braces treatment in Salisbury Park tailored to your unique dental needs. Whether you're considering traditional metal braces or more discreet ceramic braces, our skilled dentist will ensure the best solution for your smile transformation.",
    icon: "waypoints",
    iconImage: "/images/flysmileage/icons/braces.png",
    image: "/images/flysmileage/braces.jpg",
    features: [
      "Traditional metal braces",
      "Ceramic braces",
      "Invisalign clear aligners",
      "Self-ligating braces",
      "Regular adjustment visits",
      "Retainers after treatment",
    ],
    duration: "Usually 18-24 months",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "Why Choose Braces Treatment?",
        body: "Braces help to correct issues like crooked teeth, overcrowding, bite misalignment, and gaps. Proper alignment not only enhances the appearance of your smile but also improves the function of your teeth, making it easier to chew and speak. Early intervention can also prevent more complex dental problems down the road.",
      },
      {
        heading: "Types of Braces We Offer",
        bullets: [
          "Traditional Metal Braces: Made of durable stainless steel, with brackets connected by wires and elastic bands. Though noticeable, they are the most reliable and cost-effective option.",
          "Ceramic Braces: The same mechanism as metal braces, but with clear or tooth-coloured brackets — a popular choice for adults and teens who want a subtler treatment.",
          "Invisalign: Nearly invisible removable aligners that gradually shift your teeth without wires or brackets.",
          "Self-Ligating Braces: A clip system holds the wire in place instead of elastic bands, reducing friction and requiring fewer adjustments.",
        ],
      },
      {
        heading: "Benefits of Braces Treatment",
        bullets: [
          "Improved Smile Aesthetics: Straighter teeth enhance the overall look of your smile.",
          "Better Oral Health: Correcting alignment makes it easier to brush and floss, reducing the risk of cavities and gum disease.",
          "Improved Function: Properly aligned teeth help with biting, chewing, and speaking.",
          "Long-Term Results: Braces offer lasting results that keep your smile beautiful for years to come.",
        ],
      },
      {
        heading: "What to Expect During Braces Treatment",
        bullets: [
          "Consultation: The dentist will assess your dental health, take X-rays, and discuss the best treatment options for your needs.",
          "Application: Braces are applied in a single appointment.",
          "Adjustments: Regular visits are required to adjust the wires and ensure progress.",
          "Removal and Retainers: Once treatment is complete, your braces are removed and you are fitted with a retainer to maintain the alignment.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does braces treatment take?",
        answer:
          "The duration varies based on the complexity of the case, but most people wear braces for 18 to 24 months. At Fly Dental, we will give you a personalized plan with a timeline.",
      },
      {
        question: "Are ceramic braces as effective as traditional metal braces?",
        answer:
          "Yes, ceramic braces are just as effective as metal ones and offer a more discreet option.",
      },
      {
        question: "How much does braces treatment cost?",
        answer:
          "The cost can vary based on the type of braces, the severity of the case, and the duration of treatment. Contact us for a consultation and an accurate estimate tailored to your needs.",
      },
    ],
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    shortDescription:
      "Professional cleaning removes plaque and tartar brushing can't reach, protecting teeth and gums.",
    fullDescription:
      "At Fly Dental Clinic, we prioritize your oral health by offering expert teeth cleaning in Salisbury Park. Regular teeth cleaning is essential to maintain a healthy smile, prevent cavities, and protect against gum disease. With our advanced techniques and gentle care, we make sure your dental hygiene stays top-notch.",
    icon: "circle-dot",
    iconImage: "/images/flysmileage/icons/general-dentistry.png",
    image: "/images/flysmileage/Teeth-Cleaning.jpg",
    features: [
      "Initial examination of teeth and gums",
      "Plaque and tartar removal",
      "Deep cleaning below the gum line",
      "Polishing for a smooth, shiny finish",
      "Optional fluoride application",
      "Guidance on your ideal cleaning schedule",
    ],
    duration: "Single visit",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "What Is Teeth Cleaning?",
        body: "Teeth cleaning is a preventive dental procedure designed to remove plaque, tartar, and stains that brushing and flossing alone can't eliminate. Even with good oral hygiene practices, some areas in your mouth are difficult to clean thoroughly. Over time, plaque can harden into tartar, leading to gum inflammation and other oral health issues. Regular professional teeth cleaning keeps these problems at bay.",
      },
      {
        heading: "Benefits of Professional Teeth Cleaning",
        bullets: [
          "Prevents Cavities: Removes plaque, the primary cause of tooth decay.",
          "Reduces Gum Disease Risk: Cleans below the gum line to prevent gingivitis and periodontitis.",
          "Freshens Breath: Eliminates bacteria and odour-causing particles.",
          "Brightens Smile: Polishes teeth to remove surface stains.",
          "Supports Overall Health: Good oral health is linked to a lower risk of heart disease and other systemic conditions.",
        ],
      },
      {
        heading: "How Often Should You Get Teeth Cleaning?",
        body: "Most dentists recommend professional teeth cleaning every six months, though some individuals with specific dental conditions may need more frequent cleanings. Our team will guide you on the right schedule based on your oral health needs.",
      },
    ],
    faqs: [
      {
        question: "Why is professional teeth cleaning important?",
        answer:
          "Professional cleaning removes stubborn plaque and tartar that regular brushing and flossing can't reach. It helps prevent cavities, gum disease, and bad breath, ensuring a healthy smile.",
      },
      {
        question: "Is teeth cleaning painful?",
        answer:
          "Teeth cleaning is typically a painless procedure. However, if you have sensitive gums, our dentist will ensure a gentle approach to make the process comfortable.",
      },
    ],
  },
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    shortDescription:
      "Thin custom-made shells that correct chipped, discoloured or uneven teeth for a flawless smile.",
    fullDescription:
      "Are you dreaming of a flawless, confident smile? At Fly Dental Clinic, we offer dental veneers in Salisbury Park, a simple yet transformative solution to enhance the appearance of your teeth. Whether you have chipped, discolored, or uneven teeth, veneers can give you the smile you've always desired.",
    icon: "sparkles",
    iconImage: "/images/flysmileage/icons/smile-makeover.png",
    image: "/images/flysmileage/Veneers.jpg",
    features: [
      "Porcelain veneers",
      "Composite resin veneers",
      "Shade and shape matching",
      "Minimal enamel preparation",
      "Custom lab fabrication",
      "Precision bonding",
    ],
    duration: "Usually 2-3 visits",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "What Are Dental Veneers?",
        body: "Dental veneers are thin, custom-made shells created to cover the front surface of your teeth. Made from high-quality materials like porcelain or composite resin, veneers are bonded to your teeth to improve their shape, size, color, and overall appearance.",
      },
      {
        heading: "Why Choose Dental Veneers?",
        body: "Dental veneers are an ideal solution for:",
        bullets: [
          "Teeth discoloration that can't be fixed with whitening",
          "Chipped or cracked teeth",
          "Gaps between teeth",
          "Irregularly shaped or slightly misaligned teeth",
          "Worn-down teeth",
        ],
      },
      {
        heading: "Dental Veneers Process",
        bullets: [
          "Initial Consultation: We start with a thorough assessment to understand your smile goals and discuss the best type of veneers for your needs.",
          "Tooth Preparation: A small portion of enamel is removed from the tooth surface to make room for the veneer, ensuring a flawless fit and natural appearance.",
          "Impression and Customization: We take an impression of your teeth, which is sent to a dental lab where technicians craft your veneers to match the colour and shape of your natural teeth.",
          "Bonding: Your custom veneers are bonded to your teeth using advanced dental adhesives. We check the fit and colour before finalizing.",
        ],
      },
      {
        heading: "Benefits",
        bullets: [
          "Aesthetic Transformation: Achieve a bright, beautiful, and symmetrical smile.",
          "Minimally Invasive: Veneers require minimal alteration to your natural teeth.",
          "Durable and Long-Lasting: With good care, veneers can last over a decade.",
          "Stain Resistant: Porcelain veneers resist stains, keeping your smile bright.",
          "Custom-Made for You: Each veneer is designed to suit your unique smile.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long do dental veneers last?",
        answer:
          "With proper care, porcelain veneers can last 10-15 years, while composite veneers may last 5-7 years.",
      },
      {
        question: "Are veneers a painful procedure?",
        answer:
          "The process is minimally invasive, and we ensure your comfort by using local anesthesia during preparation.",
      },
      {
        question: "How do I care for my veneers?",
        answer:
          "Maintain optimal oral hygiene by brushing twice a day, flossing, and visiting your dentist regularly. Avoid biting into hard objects to prevent damage.",
      },
    ],
  },
  {
    slug: "kids-dental-care",
    title: "Kids Dental Care",
    shortDescription:
      "Gentle, personalized pediatric dentistry that keeps children comfortable and builds lifelong habits.",
    fullDescription:
      "At Fly Dental Clinic, we understand that every child deserves a happy and healthy smile. Our kids dental care in Salisbury Park provides gentle, personalized care to ensure your little ones feel comfortable and safe during every visit.",
    icon: "baby",
    iconImage: "/images/flysmileage/icons/braces.png",
    image: "/images/flysmileage/Kids-Dental-Care.jpg",
    features: [
      "Regular check-ups",
      "Gentle teeth cleaning",
      "Fluoride treatments",
      "Dental sealants",
      "Tooth-coloured fillings and pulp therapy",
      "Orthodontic guidance and emergency care",
    ],
    duration: "Short, child-friendly appointments",
    priceRange: "Shared after consultation",
    sections: [
      {
        heading: "What Is Pediatric Dentistry?",
        body: "Pediatric dentistry focuses on children's dental health from infancy through their teenage years. It involves preventive care, early diagnosis, and treatments tailored to the unique needs of young patients. Our friendly team specializes in creating a positive experience for children and building healthy habits that last a lifetime.",
      },
      {
        heading: "Why Kids' Dental Care Is Important",
        bullets: [
          "Healthy Development: Proper dental care ensures that your child's teeth and gums develop correctly.",
          "Cavity Prevention: Children are more prone to cavities due to sugary snacks and drinks. Regular check-ups help prevent decay.",
          "Building Confidence: A bright, healthy smile boosts self-esteem and encourages good oral hygiene.",
        ],
      },
      {
        heading: "Services We Offer",
        bullets: [
          "Preventive Care: regular check-ups, gentle teeth cleaning, fluoride treatments and dental sealants.",
          "Restorative Treatments: tooth-coloured fillings, pulp therapy for infected baby teeth, and safe extractions.",
          "Orthodontic Guidance: monitoring and guiding the growth of teeth and jaws to minimize the need for braces later.",
          "Emergency Dental Care: quick and gentle care for injuries, toothaches, or other urgent dental concerns.",
        ],
      },
      {
        heading: "Why Choose Fly Dental for Your Kids",
        bullets: [
          "Child-Friendly Environment: We ensure your little one feels at ease from the moment they step in.",
          "Education First: We teach kids and parents the importance of good oral hygiene in a fun and engaging way.",
          "Modern Technology: Advanced tools for precise and pain-free treatments.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should my child first visit the dentist?",
        answer:
          "Your child's first dental visit should be around their first birthday or when their first tooth erupts. Early visits help prevent cavities and ensure healthy dental development.",
      },
      {
        question: "How can I prepare my child for a dental visit?",
        answer:
          "Talk positively about the dentist and explain that the visit will be quick and easy. Reading storybooks about dental visits or playing pretend dentist at home can also help.",
      },
      {
        question: "Is fluoride safe for kids?",
        answer:
          "Yes, fluoride is safe and effective for children when used in the right amounts. It helps strengthen enamel and prevent cavities.",
      },
    ],
  },
];

export const serviceCategories = [
  { slug: "pain-relief", label: "Pain Relief", services: ["root-canal-treatment"] },
  {
    slug: "preventive-care",
    label: "Preventive Care",
    services: ["general-dentistry", "teeth-cleaning", "kids-dental-care"],
  },
  {
    slug: "cosmetic",
    label: "Cosmetic Treatment",
    services: ["smile-makeover", "dental-veneers", "braces-treatment"],
  },
  {
    slug: "restorative",
    label: "Restorative Dentistry",
    services: ["dental-implants", "full-mouth-rehabilitation"],
  },
] as const;
