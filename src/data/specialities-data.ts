import { 
  Activity, 
  Bone, 
  Baby, 
  Brain, 
  Heart, 
  Shield, 
  Pill, 
  Stethoscope, 
  Eye, 
  Dna, 
  Wind, 
  Mic2, 
  Droplets,
  Thermometer,
  Users,
  Syringe,
  Microscope,
  Ear,
  Smile,
  Zap
} from "lucide-react";

export interface SpecialityContent {
  title: string;
  description: string;
  treatments: string[];
  expertise: string[];
}

export interface Speciality {
  id: string;
  icon: any;
  color: string;
  image: string;
  en: SpecialityContent;
  hi: SpecialityContent;
}

export const specialitiesData: Record<string, Speciality> = {
  "cardiology": {
    id: "cardiology",
    icon: Heart,
    color: "blue",
    image: "/images/doctor.png",
    en: {
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostic, interventional and rehabilitative services for all cardiac conditions.",
      treatments: ["Angioplasty & Stenting", "Heart Failure Management", "Arrhythmia Treatment"],
      expertise: ["Interventional Cardiology", "Electrophysiology", "Pediatric Cardiology"]
    },
    hi: {
      title: "हृदय रोग विज्ञान (Cardiology)",
      description: "हृदय की सभी स्थितियों के लिए नैदानिक, इंटरवेंशनल और पुनर्वास सेवाओं सहित व्यापक हृदय देखभाल।",
      treatments: ["एंजियोप्लास्टी और स्टेंटिंग", "हार्ट फेल्योर प्रबंधन", "अतालता (Arrhythmia) उपचार"],
      expertise: ["इंटरवेंशनल कार्डियोलॉजी", "इलेक्ट्रोफिजियोलॉजी", "बाल हृदय रोग विज्ञान"]
    }
  },
  "orthopaedics": {
    id: "orthopaedics",
    icon: Bone,
    color: "teal",
    image: "/images/ot.png",
    en: {
      title: "Orthopaedics",
      description: "Specialized care for musculoskeletal system, including joints, bones, ligaments, and tendons.",
      treatments: ["Joint Replacement Surgery", "Spine Surgery", "Sports Medicine"],
      expertise: ["Arthroscopy", "Trauma Care", "Pediatric Orthopaedics"]
    },
    hi: {
      title: "अस्थि रोग विज्ञान (Orthopaedics)",
      description: "जोड़ों, हड्डियों, स्नायुबंधन और टेंडन सहित मस्कुलोस्केलेटल सिस्टम के लिए विशेष देखभाल।",
      treatments: ["जोड़ प्रत्यारोपण सर्जरी", "रीढ़ की हड्डी की सर्जरी", "स्पोर्ट्स मेडिसिन"],
      expertise: ["आर्थ्रोस्कोपी", "ट्रॉमा केयर", "बाल अस्थि रोग विज्ञान"]
    }
  },
  "neurosciences": {
    id: "neurosciences",
    icon: Brain,
    color: "indigo",
    image: "/images/doctor.png",
    en: {
      title: "Neurosciences",
      description: "Advanced treatment for disorders of the brain, spinal cord, and peripheral nerves.",
      treatments: ["Brain Tumor Surgery", "Stroke Management", "Epilepsy Treatment"],
      expertise: ["Neurosurgery", "Neurology", "Neuro-rehabilitation"]
    },
    hi: {
      title: "न्यूरोसाइंस (Neurosciences)",
      description: "मस्तिष्क, रीढ़ की हड्डी और परिधीय तंत्रिकाओं के विकारों के लिए उन्नत उपचार।",
      treatments: ["ब्रेन ट्यूमर सर्जरी", "स्ट्रोक प्रबंधन", "मिर्गी का उपचार"],
      expertise: ["न्यूरोसर्जरी", "न्यूरोलॉजी", "न्यूरो-पुनर्वास"]
    }
  },
  "gastroenterology": {
    id: "gastroenterology",
    icon: Activity,
    color: "green",
    image: "/images/lobby.png",
    en: {
      title: "Gastroenterology",
      description: "Expert care for digestive system disorders including liver, pancreas, and gastrointestinal tract.",
      treatments: ["Endoscopy & Colonoscopy", "Liver Disease Management", "IBD Treatment"],
      expertise: ["Medical Gastroenterology", "Hepatology", "Therapeutic Endoscopy"]
    },
    hi: {
      title: "जठरांत्र विज्ञान (Gastroenterology)",
      description: "लिवर, अग्नाशय और जठरांत्र संबंधी विकारों के लिए विशेषज्ञ देखभाल।",
      treatments: ["एंडोस्कोपी और कोलोनोस्कोपी", "लिवर रोग प्रबंधन", "IBD उपचार"],
      expertise: ["मेडिकल गैस्ट्रोएंटरोलॉजी", "हेपेटोलॉजी", "चिकित्सीय एंडोस्कोपी"]
    }
  },
  "nephrology": {
    id: "nephrology",
    icon: Droplets,
    color: "blue",
    image: "/images/doctor.png",
    en: {
      title: "Nephrology",
      description: "Management of kidney diseases, hypertension, and acid-base disturbances.",
      treatments: ["Dialysis Services", "Kidney Stone Management", "Transplant Support"],
      expertise: ["Chronic Kidney Disease", "Hemodialysis", "Peritoneal Dialysis"]
    },
    hi: {
      title: "नेफ्रोलॉजी (Nephrology)",
      description: "गुर्दे की बीमारियों, उच्च रक्तचाप और एसिड-बेस गड़बड़ी का प्रबंधन।",
      treatments: ["डायलिसिस सेवाएँ", "गुर्दे की पथरी का प्रबंधन", "प्रत्यारोपण सहायता"],
      expertise: ["क्रोनिक किडनी रोग", "हेमोडायलिसिस", "पेरिटोनियल डायलिसिस"]
    }
  },
  "urology": {
    id: "urology",
    icon: Pill,
    color: "blue",
    image: "/images/ot.png",
    en: {
      title: "Urology",
      description: "Comprehensive care for urinary tract conditions in males and females, and male reproductive system.",
      treatments: ["Laser Stone Surgery", "Prostate Surgery", "Infertility Treatment"],
      expertise: ["Endourology", "Uro-Oncology", "Andrology"]
    },
    hi: {
      title: "मूत्र रोग विज्ञान (Urology)",
      description: "पुरुषों और महिलाओं में मूत्र पथ की स्थितियों और पुरुष प्रजनन प्रणाली की व्यापक देखभाल।",
      treatments: ["लेजर स्टोन सर्जरी", "प्रोस्टेट सर्जरी", "बांझपन उपचार"],
      expertise: ["एंडोयुरोलॉजी", "यूरो-ऑन्कोलॉजी", "एंड्रोलॉजी"]
    }
  },
  "obstetrics-gynaecology": {
    id: "obstetrics-gynaecology",
    icon: Baby,
    color: "rose",
    image: "/images/doctor.png",
    en: {
      title: "Obstetrics & Gynaecology",
      description: "Complete women's healthcare from adolescence to menopause, including high-risk pregnancy care.",
      treatments: ["Painless Labor", "Laparoscopic Surgery", "Infertility Clinic"],
      expertise: ["Fetal Medicine", "Gynae-Oncology", "High-Risk Pregnancy"]
    },
    hi: {
      title: "स्त्री एवं प्रसूति रोग (Obstetrics & Gynaecology)",
      description: "किशोरावस्था से रजोनिवृत्ति तक महिलाओं की संपूर्ण देखभाल, जिसमें उच्च जोखिम वाली गर्भावस्था देखभाल शामिल है।",
      treatments: ["दर्द रहित प्रसव", "लैप्रोस्कोपिक सर्जरी", "बांझपन क्लिनिक"],
      expertise: ["भ्रूण चिकित्सा", "गायनी-ऑन्कोलॉजी", "उच्च-जोखिम गर्भावस्था"]
    }
  },
  "pediatrics": {
    id: "pediatrics",
    icon: Baby,
    color: "purple",
    image: "/images/lobby.png",
    en: {
      title: "Pediatrics & Neonatology",
      description: "Expert medical care for infants, children, and adolescents, including advanced NICU facilities.",
      treatments: ["Vaccination Clinic", "NICU/PICU Support", "Growth Monitoring"],
      expertise: ["Neonatology", "Pediatric Cardiology", "Child Psychology"]
    },
    hi: {
      title: "बाल रोग विज्ञान (Pediatrics & Neonatology)",
      description: "शिशुओं, बच्चों और किशोरों के लिए विशेषज्ञ चिकित्सा देखभाल, जिसमें उन्नत एनआईसीयू (NICU) सुविधाएं शामिल हैं।",
      treatments: ["टीकाकरण क्लिनिक", "NICU/PICU सहायता", "विकास निगरानी"],
      expertise: ["नियोनेटोलॉजी", "बाल हृदय रोग विज्ञान", "बाल मनोविज्ञान"]
    }
  },
  "general-surgery": {
    id: "general-surgery",
    icon: Pill,
    color: "purple",
    image: "/images/ot.png",
    en: {
      title: "General & Laparoscopic Surgery",
      description: "Advanced surgical procedures using minimally invasive techniques for faster recovery.",
      treatments: ["Hernia Repair", "Gallbladder Removal", "Appendix Surgery"],
      expertise: ["Laparoscopic Surgery", "Colorectal Surgery", "Trauma Surgery"]
    },
    hi: {
      title: "सामान्य और लैप्रोस्कोपिक सर्जरी (General Surgery)",
      description: "तेजी से रिकवरी के लिए न्यूनतम इनवेसिव तकनीकों का उपयोग करते हुए उन्नत सर्जिकल प्रक्रियाएं।",
      treatments: ["हर्निया रिपेयर", "पित्ताशय हटाने", "एपेंडिक्स सर्जरी"],
      expertise: ["लैप्रोस्कोपिक सर्जरी", "कोलोरेक्टल सर्जरी", "ट्रॉमा सर्जरी"]
    }
  },
  "pulmonology": {
    id: "pulmonology",
    icon: Wind,
    color: "blue",
    image: "/images/doctor.png",
    en: {
      title: "Pulmonology",
      description: "Comprehensive care for lung-related disorders and respiratory conditions.",
      treatments: ["Asthma Management", "Sleep Study", "COPD Treatment"],
      expertise: ["Chest Medicine", "Sleep Medicine", "Critical Care Pulmonology"]
    },
    hi: {
      title: "पल्मोनोलॉजी (Pulmonology)",
      description: "फेफड़ों से संबंधित विकारों और श्वसन स्थितियों के लिए व्यापक देखभाल।",
      treatments: ["अस्थमा प्रबंधन", "नींद का अध्ययन (Sleep Study)", "COPD उपचार"],
      expertise: ["चेस्ट मेडिसिन", "स्लीप मेडिसिन", "क्रिटिकल केयर पल्मोनोलॉजी"]
    }
  },
  "ent": {
    id: "ent",
    icon: Ear,
    color: "orange",
    image: "/images/doctor.png",
    en: {
      title: "ENT (Otolaryngology)",
      description: "Expert management of ear, nose, and throat disorders and head/neck surgeries.",
      treatments: ["Audiometry", "Sinus Surgery", "Tonsillectomy"],
      expertise: ["Otology", "Rhinology", "Laryngology"]
    },
    hi: {
      title: "ईएनटी (नाक, कान, गला)",
      description: "कान, नाक और गले के विकारों और सिर/गर्दन की सर्जरी का विशेषज्ञ प्रबंधन।",
      treatments: ["ऑडियोमेट्री", "साइनस सर्जरी", "टॉन्सिल्लेक्टोमी"],
      expertise: ["ओटोलॉजी", "राइनोलॉजी", "लैरिंजोलॉजी"]
    }
  },
  "ophthalmology": {
    id: "ophthalmology",
    icon: Eye,
    color: "blue",
    image: "/images/doctor.png",
    en: {
      title: "Ophthalmology",
      description: "Advanced eye care services from routine checkups to complex surgeries.",
      treatments: ["Cataract Surgery", "LASIK", "Glaucoma Management"],
      expertise: ["Cataract & Refractive", "Vitreoretinal", "Oculoplasty"]
    },
    hi: {
      title: "नेत्र विज्ञान (Ophthalmology)",
      description: "नियमित जांच से लेकर जटिल सर्जरी तक उन्नत नेत्र देखभाल सेवाएं।",
      treatments: ["मोतियाबिंद सर्जरी", "लसिका (LASIK)", "ग्लाकोमा प्रबंधन"],
      expertise: ["मोतियाबिंद और अपवर्तक", "विट्रोरेटिनल", "ओकुलोप्लास्टी"]
    }
  },
  "dermatology": {
    id: "dermatology",
    icon: Shield,
    color: "rose",
    image: "/images/lobby.png",
    en: {
      title: "Dermatology",
      description: "Specialized care for skin, hair, and nail disorders, including cosmetic dermatology.",
      treatments: ["Acne Treatment", "Laser Skin Therapy", "Hair Loss Treatment"],
      expertise: ["Clinical Dermatology", "Dermatosurgery", "Cosmetology"]
    },
    hi: {
      title: "त्वचा विज्ञान (Dermatology)",
      description: "कॉस्मेटिक डर्मेटोलॉजी सहित त्वचा, बाल और नाखूनों के विकारों के लिए विशेष देखभाल।",
      treatments: ["मुँहासे उपचार", "लेजर स्किन थेरेपी", "बाल झड़ने का उपचार"],
      expertise: ["क्लिनिकल डर्मेटोलॉजी", "डर्मेटोसर्जरी", "कॉस्मेटोलॉजी"]
    }
  },
  "oncology": {
    id: "oncology",
    icon: Zap,
    color: "rose",
    image: "/images/ot.png",
    en: {
      title: "Oncology (Cancer)",
      description: "Comprehensive cancer care with a multidisciplinary approach highlighting early detection.",
      treatments: ["Chemotherapy", "Cancer Surgery", "Screening Programs"],
      expertise: ["Medical Oncology", "Surgical Oncology", "Preventive Oncology"]
    },
    hi: {
      title: "ऑन्कोलॉजी (कैंसर विशेषज्ञ)",
      description: "प्रारंभिक पहचान पर जोर देने वाले बहुविषयक दृष्टिकोण के साथ व्यापक कैंसर देखभाल।",
      treatments: ["कीमोथेरेपी", "कैंसर सर्जरी", "स्क्रीनिंग कार्यक्रम"],
      expertise: ["मेडिकल ऑन्कोलॉजी", "सर्जिकल ऑन्कोलॉजी", "निवारक ऑन्कोलॉजी"]
    }
  },
  "internal-medicine": {
    id: "internal-medicine",
    icon: Stethoscope,
    color: "blue",
    image: "/images/doctor.png",
    en: {
      title: "Internal Medicine",
      description: "Primary care for adults focusing on prevention, diagnosis, and treatment of complex diseases.",
      treatments: ["Health Checkups", "Chronic Disease Mgmt", "Infectious Disease"],
      expertise: ["Preventive Care", "Geriatric Medicine", "Immuno-deficiency"]
    },
    hi: {
      title: "इंटरनल मेडिसिन",
      description: "वयस्कों के लिए प्राथमिक देखभाल, निवारण, निदान और जटिल बीमारियों के उपचार पर केंद्रित।",
      treatments: ["स्वास्थ्य जांच", "क्रोनिक रोग प्रबंधन", "संक्रामक रोग"],
      expertise: ["निवारक देखभाल", "वृद्धावस्था चिकित्सा", "प्रतिरक्षा-न्यूनता"]
    }
  },
  "critical-care": {
    id: "critical-care",
    icon: Shield,
    color: "rose",
    image: "/images/ot.png",
    en: {
      title: "Critical Care (ICU)",
      description: "24/7 emergency and intensive care for patients with life-threatening conditions.",
      treatments: ["Life Support", "Continuous Monitoring", "Septic Shock Mgmt"],
      expertise: ["Intensive Care", "Emergency Medicine", "Trauma Care"]
    },
    hi: {
      title: "क्रिटिकल केयर (ICU)",
      description: "जानलेवा स्थितियों वाले रोगियों के लिए 24/7 आपातकालीन और गहन देखभाल।",
      treatments: ["लाइफ सपोर्ट", "निरंतर निगरानी", "सेप्टिक शॉक प्रबंधन"],
      expertise: ["गहन देखभाल", "आपातकालीन चिकित्सा", "ट्रॉमा केयर"]
    }
  }
};
