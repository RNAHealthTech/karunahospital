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
    image: "/images/cardiology_main.png",
    en: {
      title: "Cardiology",
      description: "Department Of Cardiology\nThe Karuna Hospital's Department of Cardiology has the services of one of the most qualified cardiologists. The cardiology department is well-stocked, and there are seven beds for people with heart problems in the ICU. Patients in the Cardiac Intensive Care Unit are helped by ventilators, a blood gas analyzer, ECHO, X-Rays, Ultrasound, and a defibrillator. A state-of-the-art cardiac catheterization lab is being built at our hospital.\n\n/images/cardiology_lab.png\n\nWell-stocked Medicine High-tech Instruments 24 Hours Emergency Service Cutting-edge Technology\n\nBest Heart Doctor\nCardiologist-Recommended Laboratory Test\nCardiac Catheterization: This test is used to get a clear picture of the heart. The doctor can better help you if they know how your heart is doing and how it is doing right now.\n\nEchocardiogram: The heart's structure and function might be revealed to the doctor via this ultrasonic examination.\n\nAmbulatory ECG: This test is done to see if the heart is beating unusually.\n\nInfrastructure and Facilities\nKaruna Hospital is a state-of-the-art super speciality hospital. They offer emergency, in-patient, and outpatient care that is among the best in the world.\n\nKaruna Hospital is known for using new medical technology and more personal care for its patients. It holds many health-related events regularly, such as health camps, free health check-ups, blood donation drives, and so on, to educate the public and reach out to the community.\n\nAdvanced Technology at the Hospital: Karuna Hospital gives patients the best possible health care by combining cutting-edge medical technology and research with a commitment to patient welfare and healing. Here are a few of the hospital's high-tech services:\n• High-end Cath Lab\n• Modular CTVS OT\n• Echo Doppler\n• TMT\n• Holter",
      treatments: [
        "Angina", "Arrhythmia", "Atrial Septal Defect", "Cerebrovascular Disease", "Coronary Artery Disease",
        "Heart Attack", "Heart Block", "Heart Failure", "Heart Valve Leakage", "Inflammatory Heart Disease",
        "Ischemic Heart Disease", "Rheumatic Heart Disease"
      ],
      expertise: [
        "Non-Invasive Cardiology (ECG, TMT, TEE, NIEPT etc)",
        "Invasive Cardiology (PAMI, PCTA, BMV, BAV etc)",
        "Electrophysiology Procedures (EPS, RFA, PPI, CRT etc)"
      ]
    },
    hi: {
      title: "हृदय रोग विज्ञान (Cardiology)",
      description: "करुणा अस्पताल के कार्डियोलॉजी विभाग में सबसे योग्य कार्डियोलॉजिस्ट सेवाएं प्रदान करते हैं। कार्डियोलॉजी विभाग अच्छी तरह से सुसज्जित है, और आईसीयू में हृदय की समस्याओं वाले लोगों के लिए सात बिस्तर हैं। कार्डियक इंटेंसिव केयर यूनिट में मरीजों की मदद वेंटिलेटर, ब्लड गैस एनालाइजर, ईको, एक्स-रे, अल्ट्रासाउंड और डिाइब्रिलेटर द्वारा की जाती है। हमारे अस्पताल में एक अत्याधुनिक कार्डियक कैथीटेराइजेशन लैब का निर्माण किया जा रहा है।\n\n/images/cardiology_lab.png\n\nसर्वश्रेष्ठ हृदय चिकित्सक\nह्रदय रोग विशेषज्ञ-अनुशंसित प्रयोगशाला परीक्षण\nकार्डियक कैथीटेराइजेशन: इस परीक्षण का उपयोग हृदय की स्पष्ट तस्वीर प्राप्त करने के लिए किया जाता है। यदि डॉक्टर जानते हैं कि आपका हृदय कैसा कार्य कर रहा है, तो वे बेहतर सहायता कर सकते हैं।\n\nइकोकार्डियोग्राम: इस अल्ट्रासोनिक परीक्षण के माध्यम से हृदय की संरचना और कार्यप्रणाली का पता लगाया जा सकता है।\n\nएंबुलेटरी ईसीजी(Ambulatory ECG): यह परीक्षण यह देखने के लिए किया जाता है कि क्या हृदय असामान्य रूप से धड़क रहा है।\n\nबुनियादी ढांचा और सुविधाएं\nकरुणा अस्पताल एक अत्याधुनिक सुपर स्पेशियलिटी अस्पताल है। वे आपातकालीन, इन-पेशेंट और आउटपेशेंट देखभाल प्रदान करते हैं जो दुनिया में सर्वश्रेष्ठ में से एक है।\n\nकरुणा अस्पताल अपने रोगियों के लिए नई चिकित्सा तकनीक और अधिक व्यक्तिगत देखभाल का उपयोग करने के लिए जाना जाता है। इट जनता को शिक्षित करने और समुदाय तक पहुंचने के लिए नियमित रूप से कई स्वास्थ्य संबंधी कार्यक्रम आयोजित करता है, जैसे स्वास्थ्य शिविर, मुफ्त स्वास्थ्य जांच, रक्तदान अभियान आदि।\n\nअस्पताल में उन्नत प्रौद्योगिकी: करुणा अस्पताल रोगी कल्याण और उपचार के साथ अत्याधुनिक चिकित्सा प्रौद्योगिकी और अनुसंधान के संयोजन से रोगियों को सर्वोत्तम संभव स्वास्थ्य सेवा प्रदान करता है। यहां अस्पताल की कुछ उच्च तकनीक वाली सेवाएं दी गई हैं:\n• हाई-एंड कैथ लैब\n• मॉड्यूलर सीटीवीएस ओटी (CTVS OT)\n• इको डॉपलर\n• टीएमटी (TMT)\n• होल्टर (Holter)",
      treatments: [
        "एंजाइना", "अतालता (Arrhythmia)", "एट्रियल सेप्टल डिफेक्ट", "सेरेब्रोवास्कुलर रोग",
        "कोरोनरी धमनी रोग", "दिल का दौरा", "हार्ट ब्लॉक", "हार्ट फेल्योर", "हार्ट वाल्व लीकेज",
        "सूजन संबंधी हृदय रोग", "इस्केमिक हृदय रोग", "रुमेटिक हृदय रोग"
      ],
      expertise: [
        "नॉन-इनवेसिव कार्डियोलॉजी",
        "इनवेसिव कार्डियोलॉजी",
        "इलेक्ट्रोफिजियोलॉजी प्रक्रियाएं"
      ]
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
    image: "/images/lobby.png",
    en: {
      title: "Psychiatry",
      description: "Comprehensive mental health services including diagnosis and treatment of emotional and behavioral disorders.",
      treatments: ["Counseling", "Medication Management", "Therapy"],
      expertise: ["Clinical Psychiatry", "Child Psychiatry", "Geriatric Psychiatry"]
    },
    hi: {
      title: "मनोचिकित्सा (Psychiatry)",
      description: "भावनात्मक और व्यवहार संबंधी विकारों के निदान और उपचार सहित व्यापक मानसिक स्वास्थ्य सेवाएं।",
      treatments: ["परामर्श", "दवा प्रबंधन", "चिकित्सा"],
      expertise: ["क्लिनिकल मनोरोग", "बाल मनोरोग", "वृद्धावस्था मनोरोग"]
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
    image: "/images/ot.png",
    en: {
      title: "Radiology",
      description: "Advanced imaging services for accurate diagnosis and interventional procedures.",
      treatments: ["X-Ray", "Ultrasound", "CT Scan"],
      expertise: ["Diagnostic Radiology", "Interventional Radiology", "Neuroradiology"]
    },
    hi: {
      title: "रेडियोलॉजी",
      description: "सटीक निदान और इंटरवेंशनल प्रक्रियाओं के लिए उन्नत इमेजिंग सेवाएं।",
      treatments: ["एक्स-रे", "अल्ट्रासाउंड", "सीटी स्कैन"],
      expertise: ["डायग्नोस्टिक रेडियोलॉजी", "इंटरवेंशनल रेडियोलॉजी", "न्यूरोरेडियोलॉजी"]
    }
  },
  "pathology": {
    id: "pathology",
    icon: Droplets,
    color: "rose",
    image: "/images/lobby.png",
    en: {
      title: "Pathology",
      description: "Comprehensive laboratory services for accurate disease diagnosis and monitoring.",
      treatments: ["Blood Tests", "Biopsy", "Hormone Studies"],
      expertise: ["Clinical Pathology", "Hematology", "Biochemistry"]
    },
    hi: {
      title: "पैथोलॉजी",
      description: "सटीक रोग निदान और निगरानी के लिए व्यापक प्रयोगशाला सेवाएं।",
      treatments: ["रक्त परीक्षण", "बायोप्सी", "हार्मोन अध्ययन"],
      expertise: ["क्लिनिकल पैथोलॉजी", "हेमेटोलॉजी", "बायोकैमिस्ट्री"]
    }
  },
  "maxillofacial": {
    id: "maxillofacial",
    icon: Users,
    color: "orange",
    image: "/images/doctor.png",
    en: {
      title: "Oral Maxillofacial Surgery",
      description: "Specialized surgery for face, jaw, and mouth conditions.",
      treatments: ["Jaw Surgery", "Facial Trauma", "Implantology"],
      expertise: ["Reconstructive Surgery", "TMJ Disorders", "Orthognathic Surgery"]
    },
    hi: {
      title: "ओरल मैक्सिलोफेशियल सर्जरी",
      description: "चेहरे, जबड़े और मुंह की स्थितियों के लिए विशेष सर्जरी।",
      treatments: ["जबड़े की सर्जरी", "फेशियल ट्रॉमा", "इंप्लांटोलॉजी"],
      expertise: ["पुनर्निर्माण सर्जरी", "TMJ विकार", "ऑर्थोग्नाथिक सर्जरी"]
    }
  }
};
