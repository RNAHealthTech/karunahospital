import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplets,
  Ear,
  Eye,
  Heart,
  Microscope,
  Pill,
  Shield,
  Smile,
  Stethoscope,
  Users,
  Wind,
  Zap
} from "lucide-react";

export interface SpecialityContent {
  title: string;
  subHeadline?: string;
  introduction?: string;
  description: string;
  treatments: string[];
  expertise: string[];
  techIntroduction?: string;
  expertTeamMessage?: string;
  testimonial?: { quote: string; author: string; age?: string };
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
    image: "/images/cardiology_main.png",
    en: {
      title: "Department of Cardiology: Advanced Heart Care at Karuna Hospital",
      subHeadline: "Leading-edge diagnostics, personalized treatment, and compassionate care for a healthy heart.",
      introduction: "The Department of Cardiology at Karuna Hospital is dedicated to providing comprehensive and advanced cardiac care. Our team of highly skilled cardiologists, cardiac surgeons, and support staff utilizes state-of-the-art technology to diagnose, treat, and prevent a wide range of heart conditions. We are committed to delivering personalized, evidence-based care that prioritizes your heart health and well-being.",
      description: "Leading-edge diagnostics, personalized treatment, and compassionate care for a healthy heart.\n\nThe Department of Cardiology at Karuna Hospital is dedicated to providing comprehensive and advanced cardiac care. Our team of highly skilled cardiologists, cardiac surgeons, and support staff utilizes state-of-the-art technology to diagnose, treat, and prevent a wide range of heart conditions. We are committed to delivering personalized, evidence-based care that prioritizes your heart health and well-being.\n\nOur cardiology department is equipped with advanced cardiac catheterization labs, non-invasive diagnostic tools, and a dedicated cardiac intensive care unit (CICU) to ensure the highest level of patient safety and care. We utilize cutting-edge imaging technologies for accurate diagnosis and precise interventions.",
      treatments: [
        "Coronary Artery Disease (CAD)",
        "Heart Failure",
        "Arrhythmias (Irregular Heartbeats)",
        "Valvular Heart Disease",
        "Hypertension (High Blood Pressure)",
        "Congenital Heart Defects",
        "Peripheral Artery Disease (PAD)"
      ],
      expertise: [
        "Diagnostic: ECG, Echo, TMT, Holter, Cardiac CT & MRI",
        "Interventional: Angiography, Angioplasty, Stenting, Pacemaker",
        "Cardiac Surgery: CABG, Valve Repair & Replacement",
        "Preventive Cardiology & Rehabilitation Programs",
        "Advanced Cath Lab & Dedicated CICU Monitoring",
        "Meet our expert team of cardiologists and specialists"
      ],
      techIntroduction: "Our cardiology department is equipped with advanced cardiac catheterization labs, non-invasive diagnostic tools, and a dedicated cardiac intensive care unit (CICU) to ensure the highest level of patient safety and care. We utilize cutting-edge imaging technologies for accurate diagnosis and precise interventions.",
      expertTeamMessage: "Meet our team of experienced cardiologists and cardiac specialists who bring years of expertise and a compassionate approach to every patient.",
      testimonial: {
        quote: "After my angioplasty at Karuna Hospital, I feel like I have a new lease on life. The cardiology team was exceptional, explaining every step and providing incredible support.",
        author: "Ramesh Sharma",
        age: "58"
      }
    },
    hi: {
      title: "कार्डियोलॉजी विभाग: करुणा अस्पताल में उन्नत हृदय देखभाल",
      subHeadline: "स्वस्थ हृदय के लिए अग्रणी निदान, व्यक्तिगत उपचार और दयालु देखभाल।",
      introduction: "करुणा अस्पताल में कार्डियोलॉजी विभाग व्यापक और उन्नत हृदय देखभाल प्रदान करने के लिए समर्पित है। हमारे अत्यधिक कुशल कार्डियोलॉजिस्ट, कार्डियक सर्जन और सहायक कर्मचारियों की टीम हृदय की स्थितियों के निदान, उपचार और रोकथाम के लिए अत्याधुनिक तकनीक का उपयोग करती है।",
      description: "स्वस्थ हृदय के लिए अग्रणी निदान, व्यक्तिगत उपचार और दयालु देखभाल।\n\nकरुणा अस्पताल का कार्डियोलॉजी विभाग विश्व स्तरीय हृदय देखभाल प्रदान करने वाला एक उत्कृष्टता केंद्र है। हमारी समर्पित विशेषज्ञों की टीम और अत्याधुनिक सुविधाएं हर मरीज की सुरक्षा और नैदानिक उत्कृष्टता सुनिश्चित करती हैं।\n\nहमारी अत्याधुनिक बुनियादी सुविधाओं में एक हाई-एंड कैथ लैब, विशेष कार्डियक आईसीयू (CICU) और मॉड्यूलर ऑपरेशन थिएटर शामिल हैं।",
      treatments: [
        "कोरोनरी आर्टरी डिजीज (CAD)",
        "हार्ट फेल्योर",
        "अतालता (Arrhythmias)",
        "वाल्वुलर हार्ट डिजीज",
        "उच्च रक्तचाप (Hypertension)",
        "जन्मजात हृदय दोष",
        "पेरिफेरल आर्टरी डिजीज (PAD)"
      ],
      expertise: [
        "नैदानिक: ईसीजी, ईको, टीएमटी, होल्टर, कार्डियक सीटी और एमआरआई",
        "इंटरवेंशनल: एंजियोग्राफी, एंजियोप्लास्टी, स्टेंटिंग, पेसमेकर",
        "कार्डियक सर्जरी: बाईपास सर्जरी (CABG), वाल्व मरम्मत और प्रतिस्थापन",
        "निवारक कार्डियोलॉजी और पुनर्वास कार्यक्रम",
        "उन्नत कैथ लैब और समर्पित सीआईसीयू निगरानी",
        "हमारे विशेषज्ञ कार्डियोलॉजिस्ट और विशेषज्ञों की टीम से मिलें"
      ],
      techIntroduction: "हमारा कार्डियोलॉजी विभाग उन्नत कार्डियक कैथीटेराइजेशन लैब, गैर-इनवेसिव नैदानिक उपकरण और एक समर्पित कार्डियक इंटेंसिव केयर यूनिट (CICU) से लैस है ताकि उच्चतम स्तर की रोगी सुरक्षा और देखभाल सुनिश्चित की जा सके।",
      expertTeamMessage: "हमारे अनुभवी हृदय रोग विशेषज्ञों और कार्डियक विशेषज्ञों की टीम से मिलें जो हर मरीज के लिए वर्षों की विशेषज्ञता और दयालु दृष्टिकोण लाते हैं।",
      testimonial: {
        quote: "करुणा अस्पताल में अपनी एंजियोप्लास्टी के बाद, मुझे ऐसा लगता है कि मुझे जीवन का एक नया पट्टा मिल गया है। कार्डियोलॉजी टीम असाधारण थी।",
        author: "रमेश शर्मा",
        age: "58"
      }
    }
  },
  "orthopaedics": {
    id: "orthopaedics",
    icon: Bone,
    color: "teal",
    image: "/images/ortho_main.png",
    en: {
      title: "Orthopaedics",
      description: "Department Of Orthopaedics, Joint Replacement & Sport Injuries\nKaruna Hospital's Department of Orthopaedics focuses on providing comprehensive care for musculoskeletal problems involving bones, joints, muscles, ligaments, and nerves. We offer both non-surgical and surgical care managed by a team of highly skilled surgeons.\n\n/images/ortho_theater.png\n\nInfrastructure & Services:\nGeneral and specialized orthopaedic care includes:\n- Total Knee & Hip Replacement Surgery\n- Revision Hip Replacement Surgery\n- Primary Complex Joint Replacement\n- Arthroscopic Surgery & Sports Injury Management\n- Paediatric Orthopaedics (Correction of congenital deformities)\n- Limb Lengthening Procedures\n- Trauma & Bone Cancer Surgery\n\nWhy Karuna Hospital for Orthopaedics?\n- State-of-the-art infrastructure and dedicated theatre complex.\n- Advanced Laminar flow systems in Operating Rooms to ensure zero risk of infection.\n- Multi-departmental approach for complex trauma and reconstructive cases.",
      treatments: [
        "Joint Replacement Surgery", "Trauma & Fracture Surgery", "Arthroscopic Surgery",
        "Paediatric Orthopaedics", "Kyphoplasty", "Disc Replacement Surgery",
        "Limb Lengthening", "Sports Injury Management"
      ],
      expertise: [
        "Hip & Knee Replacement", "Spine Surgery", "Arthroscopy",
        "Reconstructive Surgery", "Pediatric Deformity Correction"
      ]
    },
    hi: {
      title: "अस्थि रोग विज्ञान (Orthopaedics)",
      description: "अस्थि रोग, जोड़ प्रत्यारोपण और खेल चोट विभाग\nकरुणा अस्पताल का ऑर्थोपेडिक्स विभाग हड्डियों, जोड़ों, मांसपेशियों, स्नायुबंधन और तंत्रिकाओं से जुड़ी मस्कुलोस्केलेटल समस्याओं के लिए व्यापक देखभाल प्रदान करने पर केंद्रित है। हम अत्यधिक कुशल सर्जनों की एक टीम द्वारा प्रबंधित गैर-सर्जिकल और सर्जिकल दोनों प्रकार की देखभाल प्रदान करते हैं।\n\n/images/ortho_theater.png\n\nबुनियादी ढांचा और सेवाएं:\nसामान्य और विशेष ऑर्थोपेडिक देखभाल में शामिल हैं:\n- टोटल नी (घुटने) और हिप (कूल्हे) रिप्लेसमेंट सर्जरी\n- रिवीजन हिप रिप्लेसमेंट सर्जरी\n- प्राइमरी कॉम्प्लेक्स जॉइंट रिप्लेसमेंट\n- आर्थ्रोस्कोपिक सर्जरी और खेल चोट प्रबंधन\n- पीडियाट्रिक ऑर्थोपेडिक्स (जन्मजात विकृतियों का सुधार)\n- लिम्ब लेंथनिंग (अंग लंबा करने की) प्रक्रियाएं\n- ट्रॉमा और हड्डी के कैंसर की सर्जरी\n\nऑर्थोपेडिक्स के लिए करुणा अस्पताल ही क्यों?\n- अत्याधुनिक बुनियादी ढांचा और समर्पित थिएटर कॉम्प्लेक्स।\n- शून्य संक्रमण जोखिम सुनिश्चित करने के लिए ऑपरेशन थिएटरों में उन्नत लैमिनर फ्लो सिस्टम।\n- जटिल ट्रॉमा और पुनर्निर्माण मामलों के लिए बहु-विभागीय दृष्टिकोण।",
      treatments: [
        "जोड़ प्रत्यारोपण सर्जरी", "ट्रॉमा और फ्रैक्चर सर्जरी", "आर्थ्रोस्कोपिक सर्जरी",
        "पीडियाट्रिक ऑर्थोपेडिक्स", "काइफोप्लास्टी", "डिस्क रिप्लेसमेंट सर्जरी",
        "लिम्ब लेंथनिंग", "खेल चोट प्रबंधन"
      ],
      expertise: [
        "कूल्हा और घुटना प्रत्यारोपण", "रीढ़ की हड्डी की सर्जरी", "आर्थ्रोस्कोपी",
        "रिकंस्ट्रक्टिव सर्जरी", "पीडियाट्रिक विरूपण सुधार"
      ]
    }
  },
  "neurosciences": {
    id: "neurosciences",
    icon: Brain,
    color: "indigo",
    image: "/images/neuro_main.png",
    en: {
      title: "Neurosciences",
      description: "Centre of Excellence for Neurosciences\nThe Centre of Excellence for Neurosciences at Karuna Hospital is committed to providing comprehensive treatment for various disorders affecting the brain, spine, and nervous system. Our highly specialized team provides a multidisciplinary approach for patients of all ages, supported by cutting-edge medical technology.\n\n/images/neuro_tech.png\n\nInfrastructure & Technology:\nOur hospital provides state-of-the-art facilities for complex neurosurgical procedures, including:\n- Specialized Modular Neuro OTs with high-end surgical microscopes.\n- Advanced Neuronavigation for real-time 3D mapping during surgery.\n- Dedicated Neuro-Intensive Care Unit (Neuro ICU) for round-the-clock monitoring.\n- Precision neurodiagnostic services including 3-Tesla MRI and high-speed drill systems.\n\nTreatments We Offer:\n- Brain & Spinal Tumors (Investigated and removed using world-class technology)\n- Stroke Management (Thrombolysis and Mechanical Thrombectomy)\n- Complex Head and Spinal Injury Care\n- Brain Haemorrhage Management (Aneurysm and AVM treatment)\n- Epilepsy and Seizure Treatment\n- Spine Disorders (Fixation, stabilization, and microscopic procedures)\n- Hydrocephalus Management (Navigation-guided shunt placement)\n\nWhy Karuna Hospital for Neurosciences?\n- A dedicated multidisciplinary team of neurosurgeons, neurologists, and neuro-critical care specialists.\n- Emphasis on evidence-based treatments and innovation in neuro-endovascular procedures.\n- Patient-centered approach for everything from simple headaches to complex cerebrovascular disorders.",
      treatments: [
        "Brain Tumor Surgery", "Stroke Management", "Epilepsy Treatment", 
        "Spinal Core Fixation", "Aneurysm Clipping & Coiling", "Skull Base Surgery",
        "Minimally Invasive Spine Surgery", "Neuro-rehabilitation"
      ],
      expertise: [
        "Neurosurgery", "Neurology", "Neuro-Navigation", 
        "Microvascular Surgery", "Neuro-Critical Care"
      ]
    },
    hi: {
      title: "न्यूरोसाइंस (Neurosciences)",
      description: "न्यूरोसाइंस उत्कृष्टता केंद्र\nकरुणा अस्पताल में न्यूरोसाइंस उत्कृष्टता केंद्र मस्तिष्क, रीढ़ और तंत्रिका तंत्र को प्रभावित करने वाले विभिन्न विकारों के लिए व्यापक उपचार प्रदान करने के लिए प्रतिबद्ध है। हमारी अत्यधिक विशिष्ट टीम सभी उम्र के रोगियों के लिए एक बहु-विषयक दृष्टिकोण प्रदान करती है, जिसे अत्याधुनिक चिकित्सा तकनीक का समर्थन प्राप्त है।\n\n/images/neuro_tech.png\n\nबुनियादी ढांचा और तकनीक:\nहमारा अस्पताल जटिल न्यूरोसर्जिकल प्रक्रियाओं के लिए अत्याधुनिक सुविधाएं प्रदान करता है, जिनमें शामिल हैं:\n- हाई-एंड सर्जिकल सूक्ष्मदर्शी के साथ विशेष मॉड्यूलर न्यूरो ओटी।\n- सर्जरी के दौरान रीयल-टाइम 3D मैपिंग के लिए उन्नत न्यूरोनेविगेशन।\n- चौबीसों घंटे निगरानी के लिए समर्पित न्यूरो-इंटेंसिव केयर यूनिट (Neuro ICU)।\n- 3-टेस्ला एमआरआई और हाई-स्पीड ड्रिल सिस्टम सहित सटीक न्यूरोडायग्नोस्टिक सेवाएं।\n\nउपचार जिनका हम प्रस्ताव करते हैं:\n- मस्तिष्क और रीढ़ की हड्डी के ट्यूमर (विश्व स्तरीय तकनीक का उपयोग करके निकाले गए)\n- स्ट्रोक प्रबंधन (थ्रोम्बोलिसिस और मैकेनिकल थ्रोम्बेक्टोमी)\n- जटिल सिर और रीढ़ की हड्डी की चोट की देखभाल\n- मस्तिष्क रक्तस्राव प्रबंधन (एन्यूरिज्म और AVM उपचार)\n- मिर्गी और दौरे का उपचार\n- रीढ़ की हड्डी के विकार (फिक्सेशन, स्टेबिलाइजेशन और माइक्रोस्कोपिक प्रक्रियाएं)\n- हाइड्रोसिफ़लस प्रबंधन (नेविगेशन-निर्देशित शंट प्लेसमेंट)\n\nन्यूरोसाइंस के लिए करुणा अस्पताल ही क्यों?\n- न्यूरोसर्जनों, न्यूरोलॉजिस्टों और न्यूरो-क्रिटिकल केयर विशेषज्ञों की एक समर्पित बहु-विषयक टीम।\n- साक्ष्य-आधारित उपचारों और न्यूरो-एंडोवास्कुलर प्रक्रियाओं में नवाचार पर जोर।\n- साधारण सिरदर्द से लेकर जटिल सेरेब्रोवास्कुलर विकारों तक सब कुछ के लिए रोगी-केंद्रित दृष्टिकोण।",
      treatments: [
        "ब्रेन ट्यूमर सर्जरी", "स्ट्रोक प्रबंधन", "मिर्गी का उपचार", 
        "स्पाइनल कोर फिक्सेशन", "एन्यूरिज्म क्लिपिंग और कॉइलिंग", "स्कल बेस सर्जरी",
        "मिनिमली इनवेसिव स्पाइन सर्जरी", "न्यूरो-पुनर्वास"
      ],
      expertise: [
        "न्यूरोसर्जरी", "न्यूरोलॉजी", "न्यूरो-नेविगेशन", 
        "माइक्रोवास्कुलर सर्जरी", "न्यूरो-क्रिटिकल केयर"
      ]
    }
  },
  "gastroenterology": {
    id: "gastroenterology",
    icon: Activity,
    color: "green",
    image: "/images/gastro_main.png",
    en: {
      title: "Gastroenterology & Hepatology",
      description: "Centre for Gastroenterology and Hepatology\nThe Centre for Gastroenterology and Hepatology at Karuna Hospital provides advanced care for disorders of the digestive system, liver, and biliary tract. Our multidisciplinary team uses the latest endoscopic techniques for both diagnosis and therapy, ensuring high-quality clinical outcomes.\n\nKey Treatments & Procedures:\n- Diagnostic and Therapeutic Endoscopy & Colonoscopy.\n- Management of chronic Liver Diseases (Hepatitis, Fatty Liver, Cirrhosis).\n- Specialized treatment for IBD, IBS, and Chronic Acid Reflux (GERD).\n- Pancreatic and Biliary specialty care including ERCP.\n- Treatment for gastrointestinal bleeding and peptic ulcers.\n\nWhy Karuna Hospital for Gastroenterology?\n- Advanced endoscopy suite with high-definition fiber-optic scopes.\n- Multi-disciplinary approach for complex gastrointestinal and liver emergencies.\n- Emphasis on minimally invasive diagnostic and therapeutic procedures.",
      treatments: ["Endoscopy & Colonoscopy", "Liver Disease Management", "IBD/IBS Treatment", "ERCP Procedures", "Gastric Ulcer Care"],
      expertise: ["Medical Gastroenterology", "Hepatology", "Therapeutic Endoscopy"]
    },
    hi: {
      title: "जठरांत्र विज्ञान और हेपेटोलॉजी (Gastroenterology)",
      description: "जठरांत्र विज्ञान और हेपेटोलॉजी केंद्र\nकरुणा अस्पताल में गैस्ट्रोएंटरोलॉजी और हेपेटोलॉजी केंद्र पाचन तंत्र, लिवर और पित्त नली के विकारों के लिए उन्नत देखभाल प्रदान करता है। हमारी बहु-विषयक टीम निदान और चिकित्सा दोनों के लिए नवीनतम एंडोस्कोपिक तकनीकों का उपयोग करती है, जिससे उच्च गुणवत्ता वाले स्वास्थ्य परिणाम सुनिश्चित होते हैं।\n\nप्रमुख उपचार और प्रक्रियाएं:\n- नैदानिक और चिकित्सीय एंडोस्कोपी और कोलोनोस्कोपी।\n- पुराने लिवर रोगों (हेपेटाइटिस, फैटी लिवर, सिरोसिस) का प्रबंधन।\n- IBD, IBS और क्रोनिक एसिड रिफ्लक्स (GERD) का विशेष उपचार।\n- ERCP सहित अग्न्याशय और पित्त संबंधी देखभाल।\n- गैस्ट्रोइंटेस्टाइनल रक्तस्राव और पेप्टिक अल्सर का उपचार।\n\nगैस्ट्रोएंटरोलॉजी के लिए करुणा अस्पताल ही क्यों?\n- हाई-डेफिनिशन फाइबर-ऑप्टिक स्कोप के साथ उन्नत एंडोस्कोपी सूट।\n- जटिल गैस्ट्रोइंटेस्टाइनल और लिवर आपात स्थितियों के लिए बहु-विषयक टीम दृष्टिकोण।\n- न्यूनतम इनवेसिव नैदानिक और चिकित्सीय प्रक्रियाओं पर जोर।",
      treatments: ["एंडोस्कोपी और कोलोनोस्कोपी", "लिवर रोग प्रबंधन", "IBD/IBS उपचार", "ERCP प्रक्रियाएं", "गैस्ट्रिक अल्सर देखभाल"],
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
    image: "/images/urology_main.png",
    en: {
      title: "Urology & Kidney Transplant",
      description: "Centre of Excellence for Urology & Kidney Transplant\nThe Department of Urology at Karuna Hospital features a team of world-class urologists who treat medical and surgical conditions of the male and female urinary tract and male reproductive organs. We combine clinical excellence with world-class technology to deliver life-changing results for our patients.\n\n/images/urology_laser.png\n\nAdvanced Urological Care:\nWe specialize in minimally invasive and laser-based solutions for complex urological disorders:\n- High-precision Laser Stone Surgery (RIRS, PCNL, URSL) for kidney and ureteric stones.\n- Advanced Laser and Bipolar Surgery for Enlarged Prostate (TURP).\n- Comprehensive treatment for Urological Cancers (Kidney, Bladder, and Prostate).\n- Reconstructive Urology (Urethroplasty) and Penile Implants for erectile dysfunction.\n- Specialized Female Urology, Pediatric Urology, and Andrology services.\n\nCutting-Edge Technology:\nKaruna Hospital is equipped with the latest technology for superior precision:\n- 200W Thulium Laser and 50W Holmium Laser for bloodless, effective stone and prostate surgery.\n- Digital Flexible Ureterorenoscopy and high-resolution imaging.\n- Advanced Urodynamics and Uroflowmetry for functional bladder and urethra testing.\n- Modular Operating Theatres with C-arm and Carl Zeiss microscopes for reconstructive procedures.\n\nWhy Karuna Hospital for Urology?\n- A pioneer in minimally invasive techniques that ensure smaller incisions and faster recovery.\n- Multidisciplinary approach for complex trauma and oncological cases.\n- Patient-centered care with professional counseling for both patients and their families.",
      treatments: [
        "Laser Stone Surgery (RIRS/PCNL)", "Prostate Surgery (TURP)", "Kidney Transplant", 
        "Urethral Stricture Repair", "Erectile Dysfunction Treatment", "Kidney Stone Removal",
        "Bladder Tumor Removal", "Female & Pediatric Urology"
      ],
      expertise: [
        "Endourology", "Uro-Oncology", "Andrology", 
        "Laser Surgery", "Reconstructive Urology"
      ]
    },
    hi: {
      title: "मूत्र रोग एवं गुर्दा प्रत्यारोपण (Urology & Kidney Transplant)",
      description: "मूत्र रोग और गुर्दा प्रत्यारोपण उत्कृष्टता केंद्र\nकरुणा अस्पताल में मूत्र रोग विभाग में विश्व स्तरीय मूत्र रोग विशेषज्ञों की एक टीम है जो पुरुष और महिला मूत्र पथ और पुरुष प्रजनन अंगों की चिकित्सा और सर्जिकल स्थितियों का इलाज करती है। हम अपने रोगियों के लिए जीवन बदलने वाले परिणाम देने के लिए विश्व स्तरीय तकनीक के साथ नैदानिक उत्कृष्टता को जोड़ते हैं।\n\n/images/urology_laser.png\n\nउन्नत मूत्र रोग देखभाल:\nहम जटिल मूत्र संबंधी विकारों के लिए मिनिमली इनवेसिव (न्यूनतम इनवेसिव) और लेजर-आधारित समाधानों में विशेषज्ञता रखते हैं:\n- गुर्दे और मूत्रवाहिनी की पथरी के लिए उच्च-सटीक लेजर स्टोन सर्जरी (RIRS, PCNL, URSL)।\n- बढ़े हुए प्रोस्टेट (TURP) के लिए उन्नत लेजर और बाइपोलर सर्जरी।\n- मूत्र संबंधी कैंसर (गुर्दे, मूत्राशय और प्रोस्टेट) के लिए व्यापक उपचार।\n- रिकंस्ट्रक्टिव यूरोलॉजी (मूत्रमार्ग सुधार) और स्तंभन दोष (erectile dysfunction) के लिए पेनाइल इम्प्लांट।\n- विशेष महिला मूत्र रोग, बाल चिकित्सा मूत्र रोग और एंड्रोलॉजी सेवाएं।\n\nअत्याधुनिक तकनीक:\nकरुणा अस्पताल बेहतर सटीकता के लिए नवीनतम तकनीक से लैस है:\n- रक्तहीन और प्रभावी पथरी और प्रोस्टेट सर्जरी के लिए 200W थुलियम लेजर और 50W होल्मियम लेजर।\n- डिजिटल फ्लेक्सिबल यूरेटेरोरेनोस्कोपी और उच्च-रिज़ॉल्यूशन इमेजिंग।\n- मूत्राशय और मूत्रमार्ग के कार्यात्मक परीक्षण के लिए उन्नत यूरोडायनामिक्स और यूरोफ्लोमेट्री।\n- पुनर्निर्माण प्रक्रियाओं के लिए सी-आर्म और कार्ल ज़ीइस सूक्ष्मदर्शी के साथ मॉड्यूलर ऑपरेशन थिएटर।\n- गुर्दे की पथरी के लिए लैप्रोस्कोपिक सर्जरी और उन्नत उपचार।\n\nमूत्र रोग के लिए करुणा अस्पताल ही क्यों?\n- मिनिमली इनवेसिव तकनीकों में अग्रणी जो छोटे चीरे और तेजी से रिकवरी सुनिश्चित करती है।\n- जटिल ट्रॉमा और ऑन्कोलॉजिकल मामलों के लिए बहु-विषयक दृष्टिकोण।\n- रोगियों और उनके परिवारों दोनों के लिए पेशेवर परामर्श के साथ रोगी-केंद्रित देखभाल।",
      treatments: [
        "लेजर स्टोन सर्जरी (RIRS/PCNL)", "प्रोस्टेट सर्जरी (TURP)", "गुर्दा प्रत्यारोपण", 
        "मूत्रमार्ग संकुचन सुधार", "स्तंभन दोष का उपचार", "गुर्दे की पथरी हटाना",
        "मूत्राशय ट्यूमर हटाना", "महिला एवं बाल मूत्र रोग"
      ],
      expertise: [
        "एंडोयुरोलॉजी", "यूरो-ऑन्कोलॉजी", "एंड्रोलॉजी", 
        "लेजर सर्जरी", "रिकंस्ट्रक्टिव यूरोलॉजी"
      ]
    }
  },
  "obstetrics-gynaecology": {
    id: "obstetrics-gynaecology",
    icon: Baby,
    color: "pink",
    image: "/images/gynae_main.png",
    en: {
      title: "Gynaecology & Obstetrics",
      description: "Department of Obstetrics & Gynaecology - Compassionate Women's Care\nThe Obstetrics and Gynaecology Department at Karuna Hospital is dedicated to providing comprehensive care for women throughout all stages of their lives, from puberty to menopause. Our department is open 24/7, offering specialized care for both expectant mothers and patients with various gynaecological issues.\n\n/images/maternity_suite.png\n\nMaternity & Obstetric Care:\nKaruna Hospital is a leading provider for maternity care, focused on healthy deliveries and the safety of both mother and child.\n- Comprehensive Prenatal and Post-natal care for normal and high-risk pregnancies.\n- State-of-the-art labor rooms and advanced surgical facilities.\n- World-class NICU (Neonatal ICU) and 24/7 neonatal support located right next to the delivery room for immediate care.\n- Specialized prenatal education and breastfeeding support.\n\nGynaecological Services:\nOur expert surgeons provide personalized treatment for range of conditions, including:\n- Minimally Invasive Surgery (Laparoscopy & Hysteroscopy).\n- Treatment for Fibroids (Myomectomy) and Hysterectomy.\n- Management of Menstrual Disorders, PID, and Chronic Pelvic Pain.\n- Comprehensive 'Well-Woman' checkups and MTP services.\n- Expert advice on infertility and recurrent miscarriages.\n\nWhy Karuna Hospital for Women's Health?\n- Dedicated floor and specialized staff for Mother & Child care to ensure maximum privacy and safety.\n- Multidisciplinary team approach for complex or high-risk cases.\n- Round-the-clock availability of expert Gynaecologists and emergency care units.",
      treatments: [
        "Normal & High-Risk Delivery", "Laparoscopic Gynae Surgery", "Hysterectomy", 
        "Myomectomy", "Infertility Treatment", "Painless Labor",
        "Maternity Care", "Cervical Cancer Screening"
      ],
      expertise: [
        "High-Risk Obstetrics", "Minimally Invasive Gynae Surgery", "Neonatology Support", 
        "Adolescent Gynaecology", "Menopause Management"
      ]
    },
    hi: {
      title: "स्त्री एवं प्रसूति रोग (Gynaecology & Obstetrics)",
      description: "प्रसूति एवं स्त्री रोग विभाग - दयालु महिला स्वास्थ्य देखभाल\nकरुणा अस्पताल में प्रसूति और स्त्री रोग विभाग यौवन से लेकर रजोनिवृत्त (menopause) तक, उनके जीवन के सभी चरणों में महिलाओं के लिए व्यापक देखभाल प्रदान करने के लिए समर्पित है। हमारा विभाग 24/7 खुला है, जो गर्भवती माताओं और विभिन्न स्त्री रोग संबंधी समस्याओं वाले रोगियों के लिए विशेष देखभाल प्रदान करता है।\n\n/images/maternity_suite.png\n\nप्रसूति एवं मातृत्व देखभाल:\nकरुणा अस्पताल मातृत्व देखभाल के लिए एक अग्रणी संस्थान है, जो सुरक्षित प्रसव और माँ और बच्चे दोनों की सुरक्षा पर ध्यान केंद्रित करता है।\n- सामान्य और उच्च जोखिम वाली गर्भधारण के लिए व्यापक प्रसवपूर्व और प्रसवोत्तर देखभाल।\n- अत्याधुनिक लेबर रूम और उन्नत सर्जिकल सुविधाएं।\n- तत्काल देखभाल के लिए डिलीवरी रूम के ठीक बगल में स्थित विश्व स्तरीय NICU और 24/7 नवजात सहायता।\n- विशेष प्रसवपूर्व शिक्षा और स्तनपान सहायता।\n\nस्त्री रोग सेवाएं:\nहमारे विशेषज्ञ सर्जन विभिन्न स्थितियों के लिए व्यक्तिगत उपचार प्रदान करते हैं, जिनमें शामिल हैं:\n- मिनिमली इनवेसिव सर्जरी (लैप्रोस्कोपी और हिस्टेरोस्कोपी)।\n- फाइब्रॉएड (मायोमेक्टोमी) और हिस्टेरेक्टॉमी का उपचार।\n- मासिक धर्म विकार, PID और पुराने पेल्विक दर्द का प्रबंधन।\n- व्यापक 'वेल-वीमन' चेकअप और MTP सेवाएं।\n\nमहिला स्वास्थ्य के लिए करुणा अस्पताल ही क्यों?\n- अधिकतम गोपनीयता और सुरक्षा सुनिश्चित करने के लिए मां और बच्चे की देखभाल के लिए समर्पित मंजिल और विशेष कर्मचारी।\n- जटिल या उच्च जोखिम वाले मामलों के लिए बहु-विषयक टीम दृष्टिकोण।\n- विशेषज्ञ स्त्री रोग विशेषज्ञों और आपातकालीन देखभाल विशेषज्ञों की चौबीसों घंटे उपलब्धता।",
      treatments: [
        "सामान्य और उच्च जोखिम प्रसव", "लैप्रोस्कोपिक स्त्री रोग सर्जरी", "हिस्टेरेक्टॉमी", 
        "मायोमेक्टोमी", "बांझपन उपचार", "दर्द रहित प्रसव",
        "मातृत्व देखभाल", "सर्वाइकल कैंसर स्क्रीनिंग"
      ],
      expertise: [
        "उच्च जोखिम प्रसूति", "मिनिमली इनवेसिव गायनी सर्जरी", "नियोनेटोलॉजी सहायता", 
        "किशोर स्त्री रोग", "रजोनिवृत्ति प्रबंधन"
      ]
    }
  },
  "pediatrics": {
    id: "pediatrics",
    icon: Baby,
    color: "purple",
    image: "/images/pediatric_main.png",
    en: {
      title: "Pediatrics & Neonatology",
      description: "Advanced Centre for Child Care\nKaruna Hospital's Advanced Centre for Child Care is a pioneer in advancing children's health, providing expert medical care for infants, children, and adolescents. We offer complete and holistic paediatric healthcare services in a happy, caring, and family-friendly environment.\n\n/images/nicu_facility.png\n\nComprehensive Child Care Services:\nOur world-class medical team specializes in treating and preventing both common and complex childhood diseases:\n- Advanced Neonatal ICU (NICU) for premature babies and those requiring intensive monitoring.\n- Pediatric ICU (PICU) for critical care of children with life-threatening illnesses or injuries.\n- Pediatric Palliative and specialized care for genetic, neurologic, and pulmonary ailments.\n- General and advanced Pediatric Surgery, including Hernia, Thoracic, and Urological procedures.\n- Specialized immunization clinic, lactation facilities, and growth monitoring.\n\nConditions We Treat:\n- Common childhood infections (UTI, Pink Eye, Ear infections).\n- Respiratory disorders (Severe Cough, Bronchitis).\n- Digestive issues and Intractable constipation.\n- Pediatric Thoracic and Thoracoscopic surgeries.\n\nWhy Karuna Hospital for Child Care?\n- Kind, patient, and highly skilled pediatricians who use a multidisciplinary approach.\n- Tertiary care referral center with 24/7 availability of pediatric critical care specialists and specialized nurses.\n- Child-centered infrastructure designed to make children feel comfortable and safe.",
      treatments: [
        "Vaccination Clinic", "NICU/PICU Support", "Growth Monitoring", 
        "Pediatric Surgery", "Neonatal Screening", "Nutrition Counseling",
        "Palliative Care", "Asthma & Allergy Management"
      ],
      expertise: [
        "Neonatology", "Pediatric Cardiology", "Child Psychology", 
        "Pediatric Critical Care", "Growth & Development"
      ]
    },
    hi: {
      title: "बाल रोग विज्ञान (Pediatrics & Neonatology)",
      description: "उन्नत बाल देखभाल केंद्र\nकरुणा अस्पताल का उन्नत बाल देखभाल केंद्र बच्चों के स्वास्थ्य को आगे बढ़ाने में अग्रणी है, जो शिशुओं, बच्चों और किशोरों के लिए विशेषज्ञ चिकित्सा देखभाल प्रदान करता है। हम एक खुशहाल, देखभाल करने वाले और परिवार के अनुकूल वातावरण में पूर्ण और समग्र बाल चिकित्सा स्वास्थ्य सेवाएं प्रदान करते हैं।\n\n/images/nicu_facility.png\n\nव्यापक बाल देखभाल सेवाएं:\nहमारी विश्व स्तरीय चिकित्सा टीम सामान्य और जटिल बचपन की बीमारियों के इलाज और रोकथाम में विशेषज्ञता रखती है:\n- समय से पहले जन्में बच्चों और गहन निगरानी की आवश्यकता वाले बच्चों के लिए उन्नत नियोनेटल आईसीयू (NICU)।\n- जानलेवा बीमारियों या चोटों वाले बच्चों की गंभीर देखभाल के लिए पीडियाट्रिक आईसीयू (PICU)।\n- आनुवंशिक, न्यूरोलॉजिक और फेफड़ों की बीमारियों वाले बच्चों के लिए विशेष देखभाल।\n- हर्निया, थोरैसिक और यूरोलॉजिकल प्रक्रियाओं सहित सामान्य और उन्नत बाल चिकित्सा सर्जरी।\n- विशेष टीकाकरण क्लिनिक, स्तनपान सुविधाएं और विकास निगरानी।\n\nबीमारियां जिनका हम इलाज करते हैं:\n- बचपन के सामान्य संक्रमण (यूटीआई, पिंक आई, कान के संक्रमण)।\n- श्वसन विकार (गंभीर खांसी, ब्रोंकाइटिस)।\n- पाचन संबंधी समस्याएं और कब्ज।\n- पीडियाट्रिक थोरैसिक और थोराकोस्कोपिक सर्जरी।\n\nबाल देखभाल के लिए करुणा अस्पताल ही क्यों?\n- दयालु, धैर्यवान और अत्यधिक कुशल बाल रोग विशेषज्ञ जो बहु-विषयक दृष्टिकोण का उपयोग करते हैं।\n- बाल चिकित्सा महत्वपूर्ण देखभाल विशेषज्ञों और विशेष नर्सों की 24/7 उपलब्धता।\n- बच्चों को सहज और सुरक्षित महसूस कराने के लिए डिज़ाइन किया गया बाल-केंद्रित बुनियादी ढांचा।",
      treatments: [
        "टीकाकरण क्लिनिक", "NICU/PICU सहायता", "विकास निगरानी", 
        "बाल रोग सर्जरी", "नियोनेटल स्क्रीनिंग", "पोषण परामर्श",
        "शामक देखभाल (Palliative Care)", "अस्थमा और एलर्जी प्रबंधन"
      ],
      expertise: [
        "नियोनेटोलॉजी", "बाल हृदय रोग विज्ञान", "बाल मनोविज्ञान", 
        "पीडियाट्रिक क्रिटिकल केयर", "विकास और वृद्धि"
      ]
    }
  },
  "general-surgery": {
    id: "general-surgery",
    icon: Pill,
    color: "purple",
    image: "/images/surgery_main.png",
    en: {
      title: "General & Laparoscopic Surgery",
      description: "Department of General and Advanced Surgery\nKaruna Hospital is a leading center for general and advanced surgical procedures. Our Department of Surgery features a team of highly skilled laparoscopic surgeons committed to providing minimally invasive treatments for a wide variety of conditions, ensuring faster recovery and superior clinical outcomes.\n\n/images/laparo_tech.png\n\nCore Surgical Expertise:\nWe offer both minimally invasive (laparoscopic) and major open surgical procedures including:\n- Laparoscopic Gallbladder Removal (Cholecystectomy) to treat gallstones.\n- Advanced Hernia Repair (Inguinal, Umbilical, and Hiatal hernias).\n- Appendicetomy (Appendix Removal) via minimally invasive techniques.\n- Intestinal Obstruction management and Hydrocele surgery.\n- Collaborative complex surgeries with Neurosurgery, Plastic Surgery, and Urology departments.\n\nInfrastructure & Safety:\nKaruna Hospital prioritizes patient safety through state-of-the-art infrastructure:\n- Modular Operating Theatres equipped with high-definition Endo-vision systems.\n- Advanced Vessel Sealing systems for precise and bloodless surgery.\n- Comprehensive pre- and post-operative care by the Department of Anaesthesia and Intensive Care (ICU).\n- 24/7 surgical coverage with residents and specialized nursing staff available around the clock.\n\nWhy Karuna Hospital for Surgery?\n- Strong focus on minimally invasive surgery to reduce pain, scarring, and hospital stay.\n- Multidisciplinary team approach to handle complex trauma and oncological cases.\n- Proven track record of high success rates in both routine and advanced surgical procedures.",
      treatments: [
        "Laparoscopic Cholecystectomy", "Hernia Repair Surgery", "Appendicectomy", 
        "Gallbladder Removal", "Intestinal Surgery", "Hydrocele Surgery",
        "Trauma & Emergency Surgery", "Colorectal Procedures"
      ],
      expertise: [
        "Laparoscopic Surgery", "Minimally Invasive Techniques", "Abdominal Surgery", 
        "Modular OT Precision", "Post-Operative Critical Care"
      ]
    },
    hi: {
      title: "सामान्य और लैप्रोस्कोपिक सर्जरी (General Surgery)",
      description: "सामान्य और उन्नत सर्जरी विभाग\nकरुणा अस्पताल सामान्य और उन्नत सर्जिकल प्रक्रियाओं के लिए एक प्रमुख केंद्र है। हमारे सर्जरी विभाग में अत्यधिक कुशल लैप्रोस्कोपिक सर्जनों की एक टीम है जो विभिन्न प्रकार की स्थितियों के लिए मिनिमली इनवेसिव (न्यूनतम इनवेसिव) उपचार प्रदान करने के लिए प्रतिबद्ध है, जिससे तेजी से रिकवरी और बेहतर परिणाम सुनिश्चित होते हैं।\n\n/images/laparo_tech.png\n\nमुख्य सर्जिकल विशेषज्ञता:\nहम मिनिमली इनवेसिव (लैप्रोस्कोपिक) और प्रमुख ओपन सर्जिकल प्रक्रियाएं दोनों प्रदान करते हैं जिनमें शामिल हैं:\n- पित्त की पथरी के इलाज के लिए लैप्रोस्कोपिक गॉलब्लैडर रिमूवल (Cholecystectomy)।\n- उन्नत हर्निया रिपेयर (इनगुइनल, अम्बिलिकल और हायटल हर्निया)।\n- मिनिमली इनवेसिव तकनीकों के माध्यम से अपेंडिसेक्टोमी (अपेंडिक्स हटाना)।\n- आंतों की रुकावट का प्रबंधन और हाइड्रोसील सर्जरी।\n- न्यूरोसर्जरी, प्लास्टिक सर्जरी और यूरोलॉजी विभागों के साथ मिलकर जटिल सर्जरी।\n\nबुनियादी ढांचा और सुरक्षा:\nकरुणा अस्पताल अत्याधुनिक बुनियादी ढांचे के माध्यम से रोगी सुरक्षा को प्राथमिकता देता है:\n- हाई-डेफिनिशन एंडो-विज़न सिस्टम से लैस मॉड्यूलर ऑपरेशन थिएटर।\n- सटीक और रक्तहीन सर्जरी के लिए उन्नत वेसल सीलिंग सिस्टम।\n- एनेस्थीसिया और गहन चिकित्सा विभाग (ICU) द्वारा व्यापक प्री- और पोस्ट-ऑपरेटिव देखभाल।\n- चौबीसों घंटे रेजिडेंट्स और विशेषज्ञ नर्सिंग स्टाफ के साथ 24/7 सर्जिकल कवरेज।\n\nसर्जरी के लिए करुणा अस्पताल ही क्यों?\n- दर्द, निशान और अस्पताल में रुकने के समय को कम करने के लिए मिनिमली इनवेसिव सर्जरी पर जोर।\n- जटिल ट्रॉमा और ऑन्कोलॉजिकल मामलों को संभालने के लिए बहु-विषयक टीम दृष्टिकोण।\n- नियमित और उन्नत सर्जिकल प्रक्रियाओं दोनों में उच्च सफलता दर का ट्रैक रिकॉर्ड।",
      treatments: [
        "लैप्रोस्कोपिक कोलेसिस्टेक्टोमी", "हर्निया रिपेयर सर्जरी", "अपेंडिसेक्टोमी", 
        "गॉलब्लैडर रिमूवल", "आंतों की सर्जरी", "हाइड्रोसील सर्जरी",
        "ट्रॉमा और आपातकालीन सर्जरी", "कोलोरेक्टल प्रक्रियाएं"
      ],
      expertise: [
        "लैप्रोस्कोपिक सर्जरी", "मिनिमली इनवेसिव तकनीक", "एब्डोमिनल सर्जरी", 
        "मॉड्यूलर ओटी प्रेसिजन", "पोस्ट-ऑपरेटिव क्रिटिकल केयर"
      ]
    }
  },
  "pulmonology": {
    id: "pulmonology",
    icon: Wind,
    color: "blue",
    image: "/images/medicine_main.png",
    en: {
      title: "Pulmonology",
      description: "Department of Pulmonology & Chest Medicine\nThe Department of Pulmonology at Karuna Hospital provides comprehensive care for respiratory and chest-related disorders. Our specialists focus on diagnosing and treating conditions like asthma, COPD, and sleep apnea using advanced diagnostic tools.\n\nWe offer a range of specialized services to help patients breathe better and improve their overall quality of life. Our clinicians utilize evidence-based protocols to manage both acute respiratory emergencies and chronic lung diseases.\n\nKey Services:\n- Pulmonary Function Tests (PFT)\n- Sleep Apnea & Snoring Studies\n- Asthma & Allergy Management\n- Treatment for Chronic Bronchitis and Emphysema\n- Evaluation of Lung Nodules and Masses\n- Interventional Pulmonology Support",
      treatments: [
        "Asthma Management", "Sleep Study", "COPD Treatment", 
        "Bronchoscopy", "Pneumonia Care", "Lung Cancer Screening"
      ],
      expertise: [
        "Chest Medicine", "Sleep Medicine", "Critical Care Pulmonology"
      ]
    },
    hi: {
      title: "पल्मोनोलॉजी (Pulmonology)",
      description: "पल्मोनोलॉजी और चेस्ट मेडिसिन विभाग\nकरुणा अस्पताल में पल्मोनोलॉजी विभाग श्वसन और छाती से संबंधित विकारों के लिए व्यापक देखभाल प्रदान करता है। हमारे विशेषज्ञ उन्नत नैदानिक उपकरणों का उपयोग करके अस्थमा, सीओपीडी (COPD) और स्लीप एपनिया जैसी स्थितियों के निदान और उपचार पर ध्यान केंद्रित करते हैं।\n\nहम मरीजों को बेहतर सांस लेने और उनके जीवन की समग्र गुणवत्ता में सुधार करने में मदद करने के लिए विशेष सेवाओं की एक श्रृंखला प्रदान करते हैं। हमारे चिकित्सक तीव्र श्वसन आपात स्थितियों और पुरानी फेफड़ों की बीमारियों दोनों के प्रबंधन के लिए साक्ष्य-आधारित प्रोटोकॉल का उपयोग करते हैं।\n\nमुख्य सेवाएं:\n- पल्मोनरी फंक्शन टेस्ट (PFT)\n- स्लीप एपनिया और खर्राटे का अध्ययन\n- अस्थमा और एलर्जी प्रबंधन\n- क्रोनिक ब्रोंकाइटिस और एम्फिसीमा का उपचार\n- फेफड़ों के नोड्यूल और गांठों का मूल्यांकन",
      treatments: [
        "अस्थमा प्रबंधन", "नींद का अध्ययन (Sleep Study)", "COPD उपचार", 
        "ब्रोंकोस्कोपी", "निमोनिया देखभाल", "फेफड़ों के कैंसर की जांच"
      ],
      expertise: [
        "चेस्ट मेडिसिन", "स्लीप मेडिसिन", "क्रिटिकल केयर पल्मोनोलॉजी"
      ]
    }
  },
  "ent": {
    id: "ent",
    icon: Ear,
    color: "orange",
    image: "/images/ent_main.jpg",
    en: {
      title: "ENT (Otolaryngology)",
      description: "Department of ENT (Otolaryngology)\nKaruna Hospital's ENT department provides compassionate and comprehensive care for a wide range of disorders affecting the Ear, Nose, Throat, Head, and Neck. Our team of highly qualified specialists uses the latest technology to diagnose and treat conditions affecting communication, hearing, breathing, and balance.\n\nOur facility is equipped with a high-tech audiology room and advanced diagnostic tools to ensure precise workups for all our patients. We specialize in both routine and complex procedures, including implant operations for hearing loss and surgeries for head and neck cancer.\n\nDiagnostic & Clinical Services:\n- Full Audiology & Audiometry (BERA, Pure Tones, Impedance)\n- Videostroboscopy for voice assessment\n- Specialized clinic for Vertigo and Dizziness\n- Pediatric ENT specialist care\n\nSurgical Expertise:\n- Microscopic Ear Surgery (Mastoidectomy, Stapedectomy)\n- Endoscopic Sinus Surgery (FESS) & Endoscopic DCR\n- Advanced Cochlear Implant Surgery\n- Voice & Throat Surgery (Laser surgeries)\n- Head and Neck Cancer & Thyroid Surgery",
      treatments: [
        "Cochlear Implant Surgery", "Microscopic Ear Surgery", "FESS (Sinus Surgery)", 
        "Audiometry & Hearing Aid Trial", "Voice & Throat Surgery", 
        "Head & Neck Cancer Care", "Dizziness/Vertigo Management", "Pediatric ENT Care"
      ],
      expertise: [
        "Otology", "Rhinology", "Laryngology", 
        "Neuro-otology", "Speech & Audiology"
      ]
    },
    hi: {
      title: "कान, नाक और गला (ENT)",
      description: "ईएनटी (ENT - नाक, कान, गला) विभाग\nकरुणा अस्पताल का ईएनटी विभाग कान, नाक, गले, सिर और गर्दन को प्रभावित करने वाले विकारों के लिए व्यापक देखभाल प्रदान करता है। हमारे विशेषज्ञों की टीम संचार, सुनने, सांस लेने और संतुलन को प्रभावित करने वाली स्थितियों के निदान और उपचार के लिए नवीनतम तकनीक का उपयोग करती है।\n\nहमारी ईएनटी इकाई एक हाई-टेक ऑडियोलॉजी रूम और उन्नत नैदानिक उपकरणों से लैस है। हम सुनने की क्षमता में कमी के लिए इम्प्लांट ऑपरेशन और सिर व गर्दन के विकारों के लिए जटिल सर्जरी में विशेषज्ञता रखते हैं।\n\nनैदानिक और क्लिनिकल सेवाएं:\n- पूर्ण ऑडियोलॉजी और ऑडियोमेट्री (BERA, प्योर टोन्स, प्रतिबाधा (Impedance))\n- आवाज के मूल्यांकन के लिए वीडियोस्ट्रोबोस्कोपी\n- चक्कर (Vertigo) और संतुलन संबंधी विकारों के लिए विशेष क्लिनिक\n- बाल चिकित्सा (Pediatric) ईएनटी देखभाल\n\nसर्जिकल विशेषज्ञता:\n- कान की सूक्ष्म सर्जरी (मास्टोइडेक्टॉमी, स्टेपेडेक्टॉमी)\n- एंडोस्कोपिक साइनस सर्जरी (FESS) और एंडोस्कोपिक DCR\n- उन्नत कॉकलियर इम्प्लांट सर्जरी\n- आवाज और गले की सर्जरी (लेजर सर्जरी)\n- सिर और गर्दन के कैंसर और थायराइड सर्जरी",
      treatments: [
        "कॉकलियर इम्प्लांट सर्जरी", "कान की माइक्रोस्कोपिक सर्जरी", "साइनस सर्जरी (FESS)", 
        "ऑडियोमेट्री और हियरिंग एड ट्रायल", "आवाज और गले की सर्जरी", 
        "सिर और गर्दन के कैंसर की देखभाल", "चक्कर प्रबंधन", "बच्चों की ईएनटी देखभाल"
      ],
      expertise: [
        "ओटोलॉजी", "राइनोलॉजी", "लैरिंजोलॉजी", 
        "न्यूरो-ओटोलॉजी", "ऑडियोलॉजी डायग्नोस्टिक्स"
      ]
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
      description: "Department of Dermatology & Skin Science\nKaruna Hospital's Dermatology department offers expert care for all conditions related to the skin, hair, and nails. Our services range from treating common skin infections and allergies to advanced cosmetic dermatology and surgical procedures.\n\nWe provide personalized treatment plans for both clinical dermatology needs and aesthetic enhancements, ensuring patients achieve healthy, glowing skin.\n\nClinical & Cosmetic Services:\n- Specialized Acne & Scar management\n- Treatment for Eczema, Psoriasis, and Vitiligo\n- Mole mapping and Skin Cancer screening\n- Cosmetic procedures including Chemical Peels and Anti-aging therapy\n- Advanced Laser Skin Restoration\n- Treatment for Hair Loss and Scalp disorders",
      treatments: [
        "Acne Treatment", "Laser Skin Therapy", "Hair Loss Treatment", 
        "Skin Allergy Testing", "Mole Removal", "Psoriasis Management"
      ],
      expertise: [
        "Clinical Dermatology", "Dermatosurgery", "Cosmetology"
      ]
    },
    hi: {
      title: "त्वचा विज्ञान (Dermatology)",
      description: "त्वचा विज्ञान और त्वचा विज्ञान विभाग\nकरुणा अस्पताल का त्वचा विज्ञान विभाग त्वचा, बाल और नाखूनों से संबंधित सभी स्थितियों के लिए विशेषज्ञ देखभाल प्रदान करता है। हमारी सेवाएं सामान्य त्वचा संक्रमण और एलर्जी के इलाज से लेकर उन्नत कॉस्मेटिक डर्मेटोलॉजी और सर्जिकल प्रक्रियाओं तक फैली हुई हैं।\n\nहम नैदानिक त्वचा विज्ञान की जरूरतों और सौंदर्य वृद्धि दोनों के लिए व्यक्तिगत उपचार योजनाएं प्रदान करते हैं, यह सुनिश्चित करते हुए कि मरीजों को स्वस्थ, चमकती त्वचा प्राप्त हो।\n\nनैदानिक और कॉस्मेटिक सेवाएं:\n- विशेष मुँहासे (Acne) और निशान प्रबंधन\n- एक्जिमा, सोरायसिस और विटिलिगो का उपचार\n- तिल (Mole) मैपिंग और त्वचा कैंसर स्क्रीनिंग\n- केमिकल पील्स और एंटी-एजिंग थेरेपी सहित कॉस्मेटिक प्रक्रियाएं",
      treatments: [
        "मुँहासे उपचार", "लेजर स्किन थेरेपी", "बाल झड़ने का उपचार", 
        "त्वचा एलर्जी परीक्षण", "तिल हटाना", "सोरायसिस प्रबंधन"
      ],
      expertise: [
        "क्लिनिकल डर्मेटोलॉजी", "डर्मेटोसर्जरी", "कॉस्मेटोलॉजी"
      ]
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
    image: "/images/medicine_main.png",
    en: {
      title: "Internal Medicine",
      description: "Department of Internal Medicine - Comprehensive Adult Care\nThe Department of Internal Medicine at Karuna Hospital serves as the foundation of our clinical care, providing expert diagnosis and management for a wide range of adult medical conditions. Our physicians focus on comprehensive, evidence-based treatments for both acute and chronic lifestyle disorders.\n\nKey Services:\n- Management of Diabetes, Hypertension, and Metabolic disorders.\n- Treatment for Infectious Diseases (Dengue, Typhoid, Malaria).\n- Care for Thyroid and Hormonal imbalances.\n- Management of Respiratory and Gastric ailments.\n- Preventive Health Checkup packages and adult vaccinations.\n- Specialized Geriatric (Senior Citizen) care.\n\nWhy Karuna Hospital for Internal Medicine?\n- Evidence-based clinical protocols and personalized patient care.\n- Multidisciplinary approach for patients with multiple co-morbidities.\n- Strong emphasis on preventive health and disease management.",
      treatments: ["Diabetes Management", "Hypertension Care", "Infectious Diseases", "Thyroid Clinic", "Preventive Health Checkups"],
      expertise: ["Chronic Disease Management", "Preventive Medicine", "Geriatric Care"]
    },
    hi: {
      title: "इंटरनल मेडिसिन (Internal Medicine)",
      description: "इंटरनल मेडिसिन विभाग - व्यापक वयस्क देखभाल\nकरुणा अस्पताल में इंटरनल मेडिसिन विभाग हमारी नैदानिक देखभाल की नींव के रूप में कार्य करता है, जो वयस्क चिकित्सा स्थितियों की एक विस्तृत श्रृंखला के लिए विशेषज्ञ निदान और प्रबंधन प्रदान करता है। हमारे चिकित्सक तीव्र और पुराने जीवनशैली विकारों के लिए व्यापक, साक्ष्य-आधारित उपचार पर ध्यान केंद्रित करते हैं।\n\nमुख्य सेवाएं:\n- मधुमेह (डायबिटीज), उच्च रक्तचाप और चयापचय विकारों का प्रबंधन।\n- संक्रामक रोगों (डेंगू, टाइफाइड, मलेरिया) का उपचार।\n- थायराइड और हार्मोनल असंतुलन की देखभाल।\n- श्वसन और गैस्ट्रिक रोगों का प्रबंधन।\n- प्रिवेंटिव हेल्थ चेकअप पैकेज और वयस्क टीकाकरण।\n- विशेष जराचिकित्सा (वरिष्ठ नागरिक) देखभाल।\n\nइंटरनल मेडिसिन के लिए करुणा अस्पताल ही क्यों?\n- साक्ष्य-आधारित नैदानिक प्रोटोकॉल और व्यक्तिगत रोगी देखभाल।\n- कई सह-रुग्णताओं (co-morbidities) वाले रोगियों के लिए बहु-विषयक दृष्टिकोण।\n- निवारक स्वास्थ्य और रोग प्रबंधन पर विशेष जोर।",
      treatments: ["मधुमेह प्रबंधन", "उच्च रक्तचाप देखभाल", "संक्रामक रोग", "थायराइड क्लीनिक", "प्रिवेंटिव हेल्थ चेकअप"],
      expertise: ["पुरानी बीमारी प्रबंधन", "निवारक दवा", "वृद्धों की देखभाल"]
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
  },
  "psychiatry": {
    id: "psychiatry",
    icon: Activity,
    color: "purple",
    image: "/images/doctors/male-doc.png",
    en: {
      title: "Psychiatry & Mental Health",
      description: "Department of Psychiatry & Behavioral Sciences\nThe Psychiatry Department at Karuna Hospital is dedicated to providing compassionate mental health care for individuals of all ages. We offer expert diagnosis and treatment for emotional, behavioral, and psychiatric disorders in a supportive and confidential environment.\n\nOur multidisciplinary team uses a combination of clinical assessment, counseling, and modern medication management to help patients recover and achieve mental well-being.\n\nMental Health Services:\n- Evaluation and treatment of Depression and Anxiety\n- Stress Management and Bipolar Disorder care\n- Specialized Child and Adolescent Psychiatry\n- Support for Psychosomatic disorders\n- De-addiction counseling and support\n- Geriatric (Senior) Mental Health services",
      treatments: [
        "Counseling", "Medication Management", "Behavioral Therapy", 
        "Stress Management", "Depression Therapy", "Child Psychiatry"
      ],
      expertise: [
        "Clinical Psychiatry", "Child Psychiatry", "Geriatric Psychiatry"
      ]
    },
    hi: {
      title: "मनोचिकित्सा और मानसिक स्वास्थ्य (Psychiatry)",
      description: "मनोचिकित्सा और व्यवहार विज्ञान विभाग\nकरुणा अस्पताल में मनोचिकित्सा विभाग सभी उम्र के व्यक्तियों के लिए मानसिक स्वास्थ्य देखभाल प्रदान करने के लिए समर्पित है। हम एक सहायक और गोपनीय वातावरण में भावनात्मक, व्यवहारिक और मनोरोग विकारों के लिए विशेषज्ञ निदान और उपचार प्रदान करते हैं।\n\nहमारी बहु-विषयक टीम मरीजों को ठीक होने और मानसिक कल्याण प्राप्त करने में मदद करने के लिए नैदानिक मूल्यांकन, परामर्श और आधुनिक दवा प्रबंधन के संयोजन का उपयोग करती है।\n\nमानसिक स्वास्थ्य सेवाएं:\n- अवसाद (Depression) और चिंता (Anxiety) का मूल्यांकन और उपचार\n- तनाव प्रबंधन और द्विध्रुवी विकार (Bipolar Disorder) देखभाल\n- विशेष बाल और किशोर मनोचिकित्सा\n- मनोदैहिक विकारों (Psychosomatic disorders) के लिए सहायता",
      treatments: [
        "परामर्श", "दवा प्रबंधन", "व्यवहार चिकित्सा", 
        "तनाव प्रबंधन", "डिप्रेशन थेरेपी", "बाल मनोचिकित्सा"
      ],
      expertise: [
        "क्लिनिकल मनोरोग", "बाल मनोरोग", "वृद्धावस्था मनोरोग"
      ]
    }
  },
  "dentistry": {
    id: "dentistry",
    icon: Smile,
    color: "blue",
    image: "/images/doctor.png",
    en: {
      title: "Advanced Dental Sciences",
      description: "Department of Dental Sciences\nKaruna Hospital's Dental Department offers comprehensive oral healthcare services for patients of all ages. From routine cleanings to complex restorative and cosmetic procedures, our skilled team is dedicated to helping you achieve a healthy, confident smile in a comfortable environment.\n\nComprehensive Dental Services:\n- Advanced Root Canal Treatment (RCT) with modern precision tools.\n- Dental Implants and Full Mouth Rehabilitation for missing teeth.\n- Orthodontics (Metal Braces, Ceramic Braces, and Clear Aligners).\n- Oral and Maxillofacial Surgery for trauma and wisdom tooth extraction.\n- Cosmetic Dentistry including Teeth Whitening, Veneers, and Smile Makeovers.\n- Specialized Pediatric Dentistry for infants and children.\n\nAdvanced Infrastructure:\nOur department is equipped with modern dental chairs, Digital X-rays (RVG), ultrasonic scalers, and world-class sterilization protocols to ensure maximum patient safety and clinical excellence.",
      treatments: ["Root Canal Treatment", "Dental Implants", "Orthodontics", "Teeth Whitening", "Oral Surgery", "Cosmetic Dentistry"],
      expertise: ["General Dentistry", "Cosmetic Dentistry", "Oral Surgery"]
    },
    hi: {
      title: "उन्नत दंत चिकित्सा (Dental Sciences)",
      description: "दंत चिकित्सा विभाग\nकरुणा अस्पताल का दंत चिकित्सा विभाग सभी उम्र के रोगियों के लिए व्यापक मौखिक स्वास्थ्य सेवाएं प्रदान करता है। नियमित सफाई से लेकर जटिल पुनर्स्थापनात्मक और कॉस्मेटिक प्रक्रियाओं तक, हमारी कुशल टीम आपको एक आरामदायक वातावरण में स्वस्थ, आत्मविश्वासी मुस्कान प्राप्त करने में मदद करने के लिए समर्पित है।\n\nव्यापक दंत चिकित्सा सेवाएं:\n- आधुनिक सटीक उपकरणों के साथ उन्नत रूट कैनाल ट्रीटमेंट (RCT)।\n- लापता दांतों के लिए डेंटल इम्प्लांट और फुल माउथ रिहैबिलिटेशन।\n- ऑर्थोडॉन्टिक्स (मेटल ब्रेसेस, सिरेमिक ब्रेसेस और क्लियर एलाइनर्स)।\n- ट्रॉमा और विज़डम टूथ निष्कर्षण के लिए ओरल और मैक्सिलोफेशियल सर्जरी।\n- टीथ व्हाइटनिंग, विनियर और स्माइल मेकओवर सहित कॉस्मेटिक डेंटिस्ट्री।\n- शिशुओं और बच्चों के लिए विशेष बाल चिकित्सा दंत चिकित्सा (Pediatric Dentistry)।\n\nउन्नत बुनियादी ढांचा:\nहमारा विभाग आधुनिक डेंटल चेयर, डिजिटल एक्स-रे (RVG), अल्ट्रासोनिक स्केलर्स और विश्व स्तरीय नसबंदी (sterilization) प्रोटोकॉल से लैस है ताकि अधिकतम रोगी सुरक्षा और नैदानिक उत्कृष्टता सुनिश्चित की जा सके।",
      treatments: ["रूट कैनाल ट्रीटमेंट", "डेंटल इंप्लांट", "ऑर्थोडॉन्टिक्स", "दांतों की सफाई", "ओरल सर्जरी", "कॉस्मेटिक डेंटिस्ट्री"],
      expertise: ["सामान्य दंत चिकित्सा", "कॉस्मेटिक दंत चिकित्सा", "ओरल सर्जरी"]
    }
  },
  "radiology": {
    id: "radiology",
    icon: Microscope,
    color: "blue",
    image: "/images/radiology_main.jpg",
    en: {
      title: "Radiology & Imaging",
      description: "Department of Radiology & Imaging\nKaruna Hospital's Radiology Department is equipped with cutting-edge medical equipment to handle all your diagnostic imaging needs. Our facilities include advanced GE CT machines, Digital X-Rays, and high-resolution Ultrasound systems.\n\nOur primary goal is taking care of your health with precise and timely imaging. We provide highly accurate reports that help our clinicians swiftly determine the best treatment path for each patient.\n\nKey Diagnostic Services:\n- CT Scan (Computed Tomography): High-resolution 16-slice imaging for detailed views of internal structures.\n- Digital X-Ray: Low-radiation digital imaging for rapid diagnosis of skeletal and respiratory issues.\n- Ultrasound (Sonography): Radiation-free real-time imaging for abdominal, pelvic, and specialized studies.\n\nInfrastructure & Technology:\n- GE BrightSpeed Elite 16-slice CT Scanner\n- AGFA Digital CR System\n- Logiq E9 high-resolution Ultrasound system\n- Fixed 300 MA & Portable 100 MA X-Ray units",
      treatments: [
        "CT Scan Analysis", "Digital Radiography", "Whole Body Ultrasound", 
        "Color Doppler Studies", "Interventional Radiology Support", 
        "Specialized X-Ray Procedures"
      ],
      expertise: [
        "Diagnostic Radiology", "CT Imaging", "Sonography", 
        "Low-Radiation Protocols", "Precision Diagnostics"
      ]
    },
    hi: {
      title: "रेडियोलॉजी और इमेजिंग (Radiology)",
      description: "रेडियोलॉजी और इमेजिंग विभाग\nकरुणा अस्पताल का रेडियोलॉजी विभाग आपकी सभी नैदानिक इमेजिंग आवश्यकताओं को पूरा करने के लिए अत्याधुनिक चिकित्सा उपकरणों से लैस है। हमारी सुविधाओं में उन्नत जीई (GE) सीटी मशीनें, डिजिटल एक्स-रे और हाई-रिज़ॉल्यूशन अल्ट्रासाउंड सिस्टम शामिल हैं।\n\nहमारा प्राथमिक लक्ष्य सटीक और समय पर इमेजिंग के साथ आपके स्वास्थ्य की देखभाल करना है। हम अत्यधिक सटीक रिपोर्ट प्रदान करते हैं जो हमारे चिकित्सकों को प्रत्येक रोगी के लिए सर्वोत्तम उपचार पथ निर्धारित करने में मदद करती है।\n\nप्रमुख नैदानिक सेवाएं:\n- सीटी स्कैन (Computed Tomography): आंतरिक संरचनाओं के विस्तृत दृश्य के लिए उच्च-रिज़ॉल्यूशन इमेजिंग।\n- डिजिटल एक्स-रे: हड्डियों और श्वसन संबंधी समस्याओं के त्वरित निदान के लिए कम-विकिरण वाली डिजिटल इमेजिंग।\n- अल्ट्रासाउंड (सोनोग्राफी): पेट, श्रोणि और विशेष अध्ययन के लिए विकिरण-मुक्त रीयल-टाइम इमेजिंग।\n\nबुनियादी ढांचा और तकनीक:\n- जीई (GE) 16-स्लाइस सीटी स्कैनर\n- एजीएफए (AGFA) डिजिटल सीआर (CR) सिस्टम\n- लॉजिक ई9 (Logiq E9) हाई-रिज़ॉल्यूशन अल्ट्रासाउंड सिस्टम\n- फिक्स्ड 300 MA और पोर्टेबल 100 MA एक्स-रे यूनिट",
      treatments: [
        "सीटी स्कैन विश्लेषण", "डिजिटल रेडियोग्राफी", "पूरे शरीर का अल्ट्रासाउंड", 
        "कलर डॉपलर अध्ययन", "इंटरवेंशनल रेडियोलॉजी सहायता", "विशेष एक्स-रे प्रक्रियाएं"
      ],
      expertise: [
        "डायग्नोस्टिक रेडियोलॉजी", "सीटी इमेजिंग", "सोनोग्राफी", 
        "कम-विकिरण प्रोटोकॉल", "सटीक डायग्नोस्टिक्स"
      ]
    }
  },
  "pathology": {
    id: "pathology",
    icon: Microscope,
    color: "rose",
    image: "/images/pathology_main.jpg",
    en: {
      title: "Pathology & Microbiology",
      description: "Department of Pathology & Microbiology\nKaruna Hospital labs have fully automated equipment connected to the hospital's information system. This means that lab reports can be accessed from anywhere in the hospital by authorized personnel. Patients can also access their outpatient lab reports online, saving time and effort.\n\nOur labs follow international accreditation and standardization guidelines to ensure accurate and high-quality results. We offer a comprehensive range of services including Haematology, Biochemistry, Immunoassays, Hormones, Cancer Markers, Vitamins, Clinical Pathology, Microbiology, Serology, Histopathology, and Cytology.\n\nInfrastructure & Equipment:\nOur advanced diagnostic facility is equipped with:\n- Cobas E 411 & Cobas Integra 400 Plus Analyzers\n- Series XS-800i & XS-500i Hematology Systems\n- Automated Electrolyte & Urine Analyzers (Qdx Urilyzer)\n- Advanced Fluidics on Flex and Semi-Auto Analyzers\n- Comprehensive Blood Bank Facilities",
      treatments: [
        "Haematology Tests", "Biochemistry Analysis", "Immunoassays", 
        "Cancer Marker Testing", "Hormone Studies", "Histopathology", 
        "Microbiology & Serology", "Vitamins & Nutritional Panels"
      ],
      expertise: [
        "Clinical Pathology", "Microbiology", "Cytology", 
        "Automated Diagnostics", "Histopathology"
      ]
    },
    hi: {
      title: "पैथोलॉजी और माइक्रोबायोलॉजी (Pathology)",
      description: "पैथोलॉजी और माइक्रोबायोलॉजी विभाग\nकरुणा अस्पताल की प्रयोगशालाएं अस्पताल के सूचना तंत्र से जुड़ी पूरी तरह से स्वचालित आधुनिक उपकरणों से लैस हैं। इसका अर्थ है कि लैब रिपोर्ट अस्पताल में कहीं से भी अधिकृत व्यक्तियों द्वारा देखी जा सकती हैं। मरीज भी अपनी लैब रिपोर्ट ऑनलाइन देख सकते हैं, जिससे समय और प्रयास की बचत होती है।\n\nसटीक और उच्च-गुणवत्ता वाले परिणाम सुनिश्चित करने के लिए हमारी लैब अंतरराष्ट्रीय मान्यता और मानकीकरण दिशानिर्देशों का पालन करती हैं। हम हेमाटोलॉजी, बायोकैमिस्ट्री, इम्यूनोएसेज, हार्मोन, कैंसर मार्कर, विटामिन, क्लिनिकल पैथोलॉजी, माइक्रोबायोलॉजी, सेरोलॉजी, हिस्टोपैथोलॉजी और साइटोलॉजी सहित सेवाओं की एक विस्तृत श्रृंखला प्रदान करते हैं।\n\nबुनियादी ढांचा और उपकरण:\nहमारी उन्नत नैदानिक सुविधा निम्नलिखित से लैस है:\n- कोबास (Cobas) ई 411 और कोबास इंटेग्रा 400 प्लस एनालाइज़र\n- सीरीज़ XS-800i और XS-500i हेमाटोलॉजी सिस्टम\n- स्वचालित इलेक्ट्रोलाइट और मूत्र एनालाइज़र (Qdx Urilyzer)\n- फ्लेक्स पर उन्नत फ्लूइडिक्स और सेमी-ऑटो एनालाइज़र\n- व्यापक ब्लड बैंक सुविधाएं",
      treatments: [
        "हेमाटोलॉजी परीक्षण", "बायोकैमिस्ट्री विश्लेषण", "इम्यूनोएसेज", 
        "कैंसर मार्कर टेस्टिंग", "हार्मोन अध्ययन", "हिस्टोपैथोलॉजी", 
        "माइक्रोबायोलॉजी और सेरोलॉजी", "विटामिन और पोषण पैनल"
      ],
      expertise: [
        "क्लिनिकल पैथोलॉजी", "माइक्रोबायोलॉजी", "साइटोलॉजी", 
        "स्वचालित निदान", "हिस्टोपैथोलॉजी"
      ]
    }
  },
  "maxillofacial": {
    id: "maxillofacial",
    icon: Users,
    color: "orange",
    image: "/images/surgery_main.png",
    en: {
      title: "Oral & Maxillofacial Surgery",
      description: "Department of Oral & Maxillofacial Surgery\nKaruna Hospital specializes in the surgical treatment of complex conditions affecting the head, neck, face, and jaws. Our expert surgeons handle everything from facial trauma reconstruction to functional jaw surgeries, combining surgical precision with aesthetic considerations.\n\nSurgical Services:\n- Reconstructive surgery for Facial Trauma and injuries\n- Corrective Jaw Surgery (Orthognathic surgery)\n- Specialized TMJ (Temporomandibular Joint) disorder treatment\n- Management of Oral Pathologies and Cysts\n- Complex Dental Implants and wisdom tooth extractions\n- Treatment for Facial Clefts and congenital deformities",
      treatments: [
        "Jaw Surgery", "Facial Trauma Reconstruction", "TMJ Disorder Treatment", 
        "Corrective Jaw Surgery", "Oral Pathology Surgery", "Wisdom Tooth Extraction"
      ],
      expertise: [
        "Oral Surgery", "Maxillofacial Surgery", "Reconstructive Surgery"
      ]
    },
    hi: {
      title: "ओरल और मैक्सिलोफेशियल सर्जरी",
      description: "ओरल और मैक्सिलोफेशियल सर्जरी विभाग\nकरुणा अस्पताल सिर, गर्दन, चेहरे और जबड़ों को प्रभावित करने वाली जटिल स्थितियों के सर्जिकल उपचार में माहिर है। हमारे विशेषज्ञ सर्जन सर्जिकल सटीकता और सौंदर्य संबंधी पहलुओं को ध्यान में रखते हुए चेहरे के ट्रॉमा पुनर्निर्माण से लेकर कार्यात्मक जबड़े की सर्जरी तक सब कुछ संभालते हैं।\n\nसर्जिकल सेवाएं:\n- चेहरे के ट्रॉमा और चोटों के लिए पुनर्निर्माण सर्जरी\n- सुधारात्मक जबड़े की सर्जरी (ऑर्थोग्नाथिक सर्जरी)\n- विशेष TMJ (जबड़े के जोड़) विकार उपचार\n- ओरल पैथोलॉजी और सिस्ट का प्रबंधन",
      treatments: [
        "जबड़े की सर्जरी", "फेशियल ट्रॉमा", "TMJ विकार", 
        "सुधारात्मक जबड़े की सर्जरी", "ओरल पैथोलॉजी सर्जरी", "विज़डम टूथ निष्कर्षण"
      ],
      expertise: [
        "ओरल सर्जरी", "मैक्सिलोफेशियल सर्जरी", "पुनर्निर्माण सर्जरी"
      ]
    }
  }
};
