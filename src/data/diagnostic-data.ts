export interface DiagnosticCategory {
  id: string;
  key: string;
  en: {
    title: string;
    description: string;
    image: string;
    symptoms: string[];
    importance: string;
    recommendedTests: string[];
  };
  hi: {
    title: string;
    description: string;
    image: string;
    symptoms: string[];
    importance: string;
    recommendedTests: string[];
  };
  associatedPackages?: Array<{
    id: string;
    title: string;
    price: number;
    oldPrice: number;
    discount: string;
    description: string;
  }>;
}

export const diagnosticData: Record<string, DiagnosticCategory> = {
  acidity: {
    id: "acidity",
    key: "nav.diag.risk.acidity",
    en: {
      title: "Acidity (Acid Reflux)",
      description: "Acidity or acid reflux occurs when the gastric glands in the stomach produce excess acid for food digestion. This is often triggered by modern lifestyle habits, such as overeating, consumption of junk food, smoking, alcohol, caffeine, or eating meals close to bedtime.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "Heartburn and stomach discomfort",
        "Nausea and vomiting",
        "Bloating and frequent burping",
        "Headaches",
        "Chronic sore throat or wheezing",
        "Unexplained weight loss"
      ],
      importance: "While occasional acidity is common, experiencing symptoms more than twice a week may indicate a more severe underlying condition. Undetected chronic acidity can lead to other complications; testing helps identify root causes early.",
      recommendedTests: ["Acidity Package", "PID Profile"]
    },
    hi: {
      title: "एसिडिटी (Acid Reflux)",
      description: "एसिडिटी या एसिड रिफ्लक्स तब होता है जब पेट में गैस्ट्रिक ग्रंथियां भोजन पाचन के लिए अतिरिक्त एसिड का उत्पादन करती हैं। यह अक्सर आधुनिक जीवनशैली की आदतों, जैसे कि अधिक खाना, जंक फूड का सेवन, धूम्रपान, शराब, कैफीन, या सोने के करीब भोजन करने से शुरू होता है।",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "सीने में जलन और पेट में बेचैनी",
        "जी मिचलाना और उल्टी",
        "पेट फूलना और बार-बार डकार आना",
        "सिरदर्द",
        "पुरानी गले में खराश या घरघराहट",
        "अस्पष्टीकृत वजन कम होना"
      ],
      importance: "हालांकि कभी-कभार होने वाली एसिडिटी सामान्य है, लेकिन सप्ताह में दो बार से अधिक लक्षणों का अनुभव करना अधिक गंभीर अंतर्निहित स्थिति का संकेत दे सकता है। अनपेक्षित पुरानी एसिडिटी अन्य जटिलताओं का कारण बन सकती है; परीक्षण शुरुआती कारणों की पहचान करने में मदद करता है।",
      recommendedTests: ["एसिडिटी पैकेज", "पीआईडी प्रोफाइल"]
    },
    associatedPackages: [
      {
        id: "acidity-pkg",
        title: "Acidity Package",
        price: 750,
        oldPrice: 1520,
        discount: "51%",
        description: "Focuses on identifying excessive acid production and its typical causes like lifestyle and dietary habits."
      },
      {
        id: "pid-profile",
        title: "PID Profile",
        price: 1400,
        oldPrice: 2000,
        discount: "30%",
        description: "Qualitative assessment for secondary clinical evaluation of persistent acidity symptoms."
      }
    ]
  },
  anaemia: {
    id: "anaemia",
    key: "nav.diag.risk.anaemia",
    en: {
      title: "Anaemia",
      description: "Anaemia is a disorder characterized by a deficiency in red blood cells. Since these cells are responsible for transporting oxygen to the body's organs and tissues, a low count prevents the body from functioning optimally, leading to generalized weakness.",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2ad46?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "Persistent fatigue and weakness",
        "Pale or yellowish skin",
        "Irregular heartbeats",
        "Dizziness or lightheadedness",
        "Chest pain and headaches"
      ],
      importance: "A diagnostic test is the only accurate way to confirm Anaemia. Early detection through blood analysis (like a CBC) ensures you can take the necessary steps to manage the condition and maintain long-term health.",
      recommendedTests: ["Anemia Profile Advance", "Complete Blood Count (CBC)"]
    },
    hi: {
      title: "एनीमिया",
      description: "एनीमिया एक विकार है जो लाल रक्त कोशिकाओं की कमी की विशेषता है। चूंकि ये कोशिकाएं शरीर के अंगों और ऊतकों तक ऑक्सीजन पहुंचाने के लिए जिम्मेदार होती हैं, कम संख्या शरीर को बेहतर ढंग से काम करने से रोकती है, जिससे सामान्य कमजोरी होती है।",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2ad46?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "लगातार थकान और कमजोरी",
        "पीली या पीली त्वचा",
        "अनियमित दिल की धड़कन",
        "चक्कर आना या हल्का महसूस होना",
        "सीने में दर्द और सिरदर्द"
      ],
      importance: "एनीमिया की पुष्टि करने का एकमात्र सटीक तरीका डायग्नोस्टिक टेस्ट है। रक्त विश्लेषण (जैसे सीबीसी) के माध्यम से शुरुआती पहचान यह सुनिश्चित करती है कि आप स्थिति को प्रबंधित करने और दीर्घकालिक स्वास्थ्य बनाए रखने के लिए आवश्यक कदम उठा सकते हैं।",
      recommendedTests: ["एनीमिया प्रोफाइल एडवांस", "सीबीसी (CBC)"]
    },
    associatedPackages: [
      {
        id: "anemia-advance",
        title: "Anemia Profile Advance",
        price: 3300,
        oldPrice: 5640,
        discount: "42%",
        description: "Comprehensive advanced profile for deep-root diagnosis of various types of anemia."
      }
    ]
  },
  allergy: {
    id: "allergy",
    key: "nav.diag.risk.allergy",
    en: {
      title: "Allergy",
      description: "At times our immune system reacts intensely to unfamiliar materials which are usually not considered risky in our routine life. Allergens are substances that trigger allergic reactions; common allergens include dust, explicit food varieties, and so forth.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "Skin rashes",
        "Swelling of the lips, tongue, or face",
        "Weak pulse",
        "Nausea and Vomiting",
        "Sneezing and Runny nose"
      ],
      importance: "An Allergy Test is a decent method to figure out if you have any types of allergies and if yes, how severe your response is. An allergy profile test can assist you in narrowing down your triggers, helping you take the required steps to guarantee that your life is not disrupted by such allergic reactions.",
      recommendedTests: ["Allergy Test", "Allergy Profile Test"]
    },
    hi: {
      title: "एलर्जी",
      description: "कभी-कभी हमारा इम्यून सिस्टम अपरिचित सामग्रियों के प्रति तीव्रता से प्रतिक्रिया करता है जिन्हें आमतौर पर हमारे नियमित जीवन में जोखिम भरा नहीं माना जाता है। एलर्जेन वे पदार्थ हैं जो एलर्जी प्रतिक्रियाओं को ट्रिगर करते हैं; सामान्य एलर्जी कारकों में धूल, विशिष्ट खाद्य किस्में आदि शामिल हैं।",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "त्वचा पर लाल चकत्ते",
        "होंठ, जीभ या चेहरे की सूजन",
        "कमजोर नब्ज",
        "जी मिचलाना और उल्टी",
        "छींक आना और बहती नाक"
      ],
      importance: "एलर्जी टेस्ट यह पता लगाने का एक अच्छा तरीका है कि क्या आपको किसी भी प्रकार की एलर्जी है और यदि हाँ, तो आपकी प्रतिक्रिया कितनी गंभीर है। एक एलर्जी प्रोफाइल टेस्ट आपको अपने ट्रिगर्स को कम करने में सहायता कर सकता है, जिससे आपको यह सुनिश्चित करने के लिए आवश्यक कदम उठाने में मदद मिलती है कि आपका जीवन ऐसी एलर्जी प्रतिक्रियाओं से बाधित न हो।",
      recommendedTests: ["एलर्जी टेस्ट", "एलर्जी प्रोफाइल टेस्ट"]
    },
    associatedPackages: [
      {
        id: "allergy-profile",
        title: "Allergy Profile Test",
        price: 2500,
        oldPrice: 4500,
        discount: "44%",
        description: "Narrow down your triggers and ensure your life is not disrupted by allergic reactions."
      }
    ]
  },
  arthritis: {
    id: "arthritis",
    key: "nav.diag.risk.arthritis",
    en: {
      title: "Arthritis",
      description: "Arthritis is a situation in which the joints become inflamed. It can adversely affect a single joint or numerous joints at once. There are hundreds of distinct varieties of arthritis, but the most prevalent are Osteoarthritis and Rheumatoid Arthritis.",
      image: "https://images.unsplash.com/photo-1530026402209-e00ed8cbbc70?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "Pain and stiffness in joints",
        "Redness and warmth",
        "Swelling and tenderness",
        "Reduced range of motion"
      ],
      importance: "An Arthritis Test could assist you in determining the severity of your ailment. A Rheumatoid Factor Test may typically assist in determining the type of arthritis you have so that you could take the appropriate steps to ensure that it creates a little interruption in your daily life.",
      recommendedTests: ["Arthritis Profile Comprehensive", "Rheumatoid Factor Test"]
    },
    hi: {
      title: "गठिया (Arthritis)",
      description: "गठिया एक ऐसी स्थिति है जिसमें जोड़ों में सूजन आ जाती है। यह एक साथ एक जोड़ या कई जोड़ों को प्रतिकूल रूप से प्रभावित कर सकता है। गठिया की सैकड़ों अलग-अलग किस्में हैं, लेकिन सबसे प्रचलित ऑस्टियोआर्थराइटिस और रुमेटोइड अर्थराइटिस हैं।",
      image: "https://images.unsplash.com/photo-1530026402209-e00ed8cbbc70?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "जोड़ों में दर्द और अकड़न",
        "लालिमा और गर्मी",
        "सूजन और कोमलता",
        "गति की कम सीमा"
      ],
      importance: "गठिया टेस्ट आपको अपनी बीमारी की गंभीरता निर्धारित करने में सहायता कर सकता है। रुमेटोइड फैक्टर टेस्ट आमतौर पर आपके पास मौजूद गठिया के प्रकार को निर्धारित करने में सहायता कर सकता है ताकि आप यह सुनिश्चित करने के लिए उचित कदम उठा सकें कि यह आपके दैनिक जीवन में कम से कम बाधा उत्पन्न करे।",
      recommendedTests: ["गठिया प्रोफाइल व्यापक", "रुमेटोइड फैक्टर टेस्ट"]
    },
    associatedPackages: [
      {
        id: "arthritis-pkg",
        title: "Arthritis Package",
        price: 2300,
        oldPrice: 4800,
        discount: "53%",
        description: "Determines the severity of ailment and differentiates between types of joint inflammations."
      },
      {
        id: "arthritis-comprehensive",
        title: "Arthritis Profile Comprehensive",
        price: 4500,
        oldPrice: 7400,
        discount: "40%",
        description: "An extensive profile for deeper clinical insights into joint health and inflammation root causes."
      }
    ]
  },
  diabetes: {
    id: "diabetes",
    key: "nav.diag.risk.diabetes",
    en: {
      title: "Diabetes",
      description: "Diabetes, often known as diabetes mellitus, is a condition in which blood sugar levels are too high. It’s a metabolic disorder where the hormone insulin, which transports sugar from the bloodstream to cells, is either absent or ineffective.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "Increased urination and thirst",
        "Increased hunger",
        "Weight loss",
        "Blurry vision",
        "Fatigue and dry skin"
      ],
      importance: "A diabetes test can aid in the diagnosis of this medical condition and the subsequent treatment so that you can have a healthy life. A Blood Sugar Test can assist you in determining the severity of your problem and the best treatment option for you.",
      recommendedTests: ["High Sugar Comprehensive", "Blood Sugar Test (HbA1c)"]
    },
    hi: {
      title: "मधुमेह (Diabetes)",
      description: "मधुमेह, जिसे अक्सर मधुमेह मेलेटस के रूप में जाना जाता है, एक ऐसी स्थिति है में रक्त शर्करा का स्तर बहुत अधिक होता है। यह एक चयापचय विकार है जहाँ हार्मोन इंसुलिन, जो रक्तप्रवाह से कोशिकाओं तक शर्करा पहुँचाता है, या तो अनुपस्थित होता है या अप्रभावी होता है।",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "पेशाब और प्यास में वृद्धि",
        "भूख में वृद्धि",
        "वजन कम होना",
        "धुंधली दृष्टि",
        "थकान और शुष्क त्वचा"
      ],
      importance: "मधुमेह परीक्षण इस चिकित्सा स्थिति के निदान और बाद के उपचार में सहायता कर सकता है ताकि आप एक स्वस्थ जीवन जी सकें। ब्लड शुगर टेस्ट आपको आपकी समस्या की गंभीरता और आपके लिए सर्वोत्तम उपचार विकल्प निर्धारित करने में सहायता कर सकता है।",
      recommendedTests: ["व्यापक शुगर जांच", "ब्लड शुगर टेस्ट (HbA1c)"]
    },
    associatedPackages: [
      {
        id: "high-sugar",
        title: "High Sugar Package",
        price: 300,
        oldPrice: 680,
        discount: "56%",
        description: "Basic diagnostic test for the detection of abnormal blood sugar levels."
      },
      {
        id: "high-sugar-comprehensive",
        title: "High Sugar Comprehensive",
        price: 850,
        oldPrice: 1780,
        discount: "53%",
        description: "A more extensive evaluation of blood sugar and its impact on the metabolism."
      }
    ]
  },
  fever: {
    id: "fever",
    key: "nav.diag.risk.fever",
    en: {
      title: "Fever",
      description: "Fever is a condition in which the body’s temperature goes up. It is a typical sign that appears during almost all ailments. A mild, short-term temperature is an immunological response that can aid in the battle against infection.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "High body temperature",
        "Chills and shivering",
        "Headache and muscle aches",
        "Loss of appetite",
        "Dehydration and weakness"
      ],
      importance: "A Fever Test may be useful in determining whether you have another underlying disease causing your fever. It can assist in narrowing down the specific source of your illness so that the appropriate therapy can be given.",
      recommendedTests: ["Fever Panel Basic", "Fever Panel Comprehensive"]
    },
    hi: {
      title: "बुखार (Fever)",
      description: "बुखार एक ऐसी स्थिति है जिसमें शरीर का तापमान बढ़ जाता है। यह एक विशिष्ट संकेत है जो लगभग सभी बीमारियों के दौरान प्रकट होता है। हल्का, अल्पकालिक तापमान एक प्रतिरक्षाविज्ञानी प्रतिक्रिया है जो संक्रमण के खिलाफ लड़ाई में सहायता कर सकती है।",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: [
        "शरीर का उच्च तापमान",
        "ठंड लगना और कांपना",
        "सिरदर्द और मांसपेशियों में दर्द",
        "भूख न लगना",
        "निर्जलीकरण और कमजोरी"
      ],
      importance: "बुखार टेस्ट यह निर्धारित करने में उपयोगी हो सकता है कि क्या आपके पास आपके बुखार का कारण बनने वाली कोई अन्य अंतर्निहित बीमारी है। यह आपकी बीमारी के विशिष्ट स्रोत को कम करने में सहायता कर सकता है ताकि उचित चिकित्सा दी जा सके।",
      recommendedTests: ["फीवर पैनल बेसिक", "फीवर पैनल व्यापक"]
    },
    associatedPackages: [
      {
        id: "fever-panel-basic",
        title: "Fever Panel Basic",
        price: 500,
        oldPrice: 1200,
        discount: "59%",
        description: "Assists in narrowing down specific sources of illness during short-term fever."
      },
      {
        id: "fever-panel-comprehensive",
        title: "Fever Panel Comprehensive",
        price: 2980,
        oldPrice: 5200,
        discount: "43%",
        description: "Extensive panel to identify the exact source of chronic or severe infections."
      }
    ]
  },
  heart: {
    id: "heart",
    key: "nav.diag.risk.heart",
    en: {
      title: "Heart Health",
      description: "Cardiovascular health is vital for longevity. Heart diseases can range from coronary artery disease to arrhythmias and heart failure.",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Chest pain", "Shortness of breath", "Palpitations", "Dizziness"],
      importance: "Early screening of lipid profiles and cardiac markers is essential for prevention.",
      recommendedTests: ["Lipid Profile", "Cardiac Screening"]
    },
    hi: {
      title: "हृदय स्वास्थ्य",
      description: "दीर्घायु के लिए हृदय स्वास्थ्य महत्वपूर्ण है। हृदय रोग कोरोनरी धमनी रोग से लेकर अतालता और हृदय गति रुकने तक हो सकते हैं।",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["सीने में दर्द", "सांस की तकलीफ", "धड़कन", "चक्कर आना"],
      importance: "रोकथाम के लिए लिपिड प्रोफाइल और कार्डियक मार्कर की शुरुआती जांच आवश्यक है।",
      recommendedTests: ["लिपिड प्रोफाइल", "कार्डियक स्क्रीनिंग"]
    }
  },
  alcoholism: {
    id: "alcoholism",
    key: "nav.diag.habit.alcoholism",
    en: {
      title: "Alcoholism",
      description: "Chronic alcohol consumption affects the liver, heart, and brain functions over time.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Liver discomfort", "Fatigue", "Memory issues", "Digestive problems"],
      importance: "Liver function tests and general health screening are vital for those with high alcohol consumption.",
      recommendedTests: ["Liver Function Test (LFT)", "GGT Test"]
    },
    hi: {
      title: "शराब की लत",
      description: "लंबे समय तक शराब का सेवन समय के साथ लिवर, हृदय और मस्तिष्क के कार्यों को प्रभावित करता है।",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["लिवर में बेचैनी", "थकान", "याददाश्त की समस्या", "पाचन संबंधी समस्याएं"],
      importance: "शराब के उच्च सेवन वाले लोगों के लिए लिवर फंक्शन टेस्ट और सामान्य स्वास्थ्य जांच महत्वपूर्ण है।",
      recommendedTests: ["लिवर फंक्शन टेस्ट (LFT)", "GGT टेस्ट"]
    },
    associatedPackages: [
      {
        id: "alcohol-intake",
        title: "Excessive Alcohol Intake Package",
        price: 1750,
        oldPrice: 3520,
        discount: "51%",
        description: "Specifically designed to check for damage to vital organs like liver and kidneys."
      }
    ]
  },
  smoking: {
    id: "smoking",
    key: "nav.diag.habit.smoking",
    en: {
      title: "Smoking",
      description: "Smoking increases the risk of lung cancer, respiratory issues, and cardiovascular diseases.",
      image: "https://images.unsplash.com/photo-1527137342181-19a841103c12?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Persistent cough", "Shortness of breath", "Chest pain", "Fatigue"],
      importance: "Periodic lung and heart screening is essential for current or former smokers.",
      recommendedTests: ["Chest X-Ray", "Lipid Profile"]
    },
    hi: {
      title: "धूम्रपान",
      description: "धूम्रपान फेफड़ों के कैंसर, श्वसन समस्याओं और हृदय रोगों के जोखिम को बढ़ाता है।",
      image: "https://images.unsplash.com/photo-1527137342181-19a841103c12?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["लगातार खांसी", "सांस की तकलीफ", "सीने में दर्द", "थकान"],
      importance: "वर्तमान या पूर्व धूम्रपान करने वालों के लिए फेफड़ों और हृदय की समय-समय पर जांच आवश्यक है।",
      recommendedTests: ["चेस्ट एक्स-रे", "लिपिड प्रोफाइल"]
    },
    associatedPackages: [
      {
        id: "smoking-pkg",
        title: "Smoking Harm Evaluation",
        price: 1700,
        oldPrice: 3360,
        discount: "50%",
        description: "Determines the extent of harm caused to the lungs and internal physique."
      }
    ]
  },
  anger: {
    id: "anger",
    key: "nav.diag.habit.anger",
    en: {
      title: "Anger & Stress Level",
      description: "Frequent anger and emotional stress can lead to physiological changes, including high blood pressure and increased cortisol levels.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Elevated heart rate", "High blood pressure", "Muscle tension", "Headaches"],
      importance: "Managing anger-related stress is crucial for preventing cardiovascular issues and maintaining psychological well-being.",
      recommendedTests: ["Stress Assessment Profile", "Cortisol Test"]
    },
    hi: {
      title: "क्रोध और तनाव स्तर",
      description: "बार-बार क्रोध और भावनात्मक तनाव से शारीरिक परिवर्तन हो सकते हैं, जिसमें उच्च रक्तचाप और कोर्टिसोल का स्तर बढ़ना शामिल है।",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["हृदय गति बढ़ना", "उच्च रक्तचाप", "मांसपेशियों में तनाव", "सिरदर्द"],
      importance: "क्रोध से संबंधित तनाव का प्रबंधन हृदय संबंधी समस्याओं को रोकने और मनोवैज्ञानिक कल्याण बनाए रखने के लिए महत्वपूर्ण है।",
      recommendedTests: ["तनाव मूल्यांकन प्रोफाइल", "कोर्टिसोल टेस्ट"]
    }
  },
  heartburn: {
    id: "heartburn",
    key: "nav.diag.habit.heartburn",
    en: {
      title: "Heartburn / GERD",
      description: "A burning sensation in the chest caused by stomach acid backup into the esophagus.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Burning in chest", "Bitter taste in mouth", "Difficulty swallowing", "Chronic cough"],
      importance: "Chronic heartburn can damage the esophagus; clinical evaluation helps rule out GERD or ulcers.",
      recommendedTests: ["Endoscopy", "Acidity Profile"]
    },
    hi: {
      title: "सीने में जलन / जीईआरडी",
      description: "पेट के एसिड के अन्नप्रणाली में वापस आने के कारण छाती में होने वाली जलन।",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["छाती में जलन", "मुंह में कड़वा स्वाद", "निगलने में कठिनाई", "पुरानी खांसी"],
      importance: "पुरानी सीने में जलन अन्नप्रणाली को नुकसान पहुंचा सकती है; नैदानिक मूल्यांकन जीईआरडी या अल्सर को बाहर करने में मदद करता है।",
      recommendedTests: ["एंडोस्कोपी", "एसिडिटी प्रोफाइल"]
    }
  },
  "junk-food": {
    id: "junk-food",
    key: "nav.diag.habit.junk-food",
    en: {
      title: "Junk Food Consumption",
      description: "Regular intake of processed and high-fat foods impacts cholesterol levels and metabolic health.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Weight gain", "Lethargy", "Digestive issues", "High blood pressure"],
      importance: "Monitoring lipids and sugar is essential for those with heavy fast-food presence in their diet.",
      recommendedTests: ["Lipid Profile", "HbA1c"]
    },
    hi: {
      title: "जंक फूड का सेवन",
      description: "प्रसंस्कृत और उच्च वसा वाले खाद्य पदार्थों का नियमित सेवन कोलेस्ट्रॉल के स्तर और चयापचय स्वास्थ्य को प्रभावित करता है।",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["वजन बढ़ना", "सुस्ती", "पाचन संबंधी समस्याएं", "उच्च रक्तचाप"],
      importance: "जिन लोगों के आहार में फास्ट-फूड की अधिकता होती है, उनके लिए लिपिड और शुगर की निगरानी आवश्यक है।",
      recommendedTests: ["लिपिड प्रोफाइल", "HbA1c"]
    }
  },
  "low-iron": {
    id: "low-iron",
    key: "nav.diag.habit.low-iron",
    en: {
      title: "Low Iron Diet",
      description: "A diet lacking in iron-rich foods can lead to iron deficiency and eventually anemia.",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2ad46?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Extreme fatigue", "Weakness", "Pale skin", "Cold hands and feet"],
      importance: "Iron studies help identify early depletion of iron stores before clinical anemia sets in.",
      recommendedTests: ["Iron Profile", "Ferritin Test"]
    },
    hi: {
      title: "कम आयरन वाला आहार",
      description: "आयरन से भरपूर खाद्य पदार्थों की कमी वाले आहार से आयरन की कमी और अंततः एनीमिया हो सकता है।",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2ad46?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["अत्यधिक थकान", "कमजोरी", "पीली त्वचा", "हाथ और पैर ठंडे होना"],
      importance: "आयरन अध्ययन नैदानिक एनीमिया होने से पहले आयरन के भंडार की शुरुआती कमी की पहचान करने में मदद करते हैं।",
      recommendedTests: ["आयरन प्रोफाइल", "फेरिटिन टेस्ट"]
    }
  },
  appetite: {
    id: "appetite",
    key: "nav.diag.habit.appetite",
    en: {
      title: "Loss of Appetite",
      description: "A persistent decrease in the desire to eat can be a sign of various metabolic or inflammatory conditions.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Unintentional weight loss", "Lack of interest in food", "Nausea", "Fatigue"],
      importance: "Testing focuses on liver, kidney, and digestive health to find the physiological cause of hunger loss.",
      recommendedTests: ["LFT", "KFT", "Abdominal Ultrasound"]
    },
    hi: {
      title: "भूख न लगना",
      description: "खाने की इच्छा में लगातार कमी विभिन्न चयापचय या सूजन संबंधी स्थितियों का संकेत हो सकती है।",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["अनजाने में वजन कम होना", "भोजन में रुचि की कमी", "जी मिचलाना", "थकान"],
      importance: "परीक्षण लिवर, किडनी और पाचन स्वास्थ्य पर ध्यान केंद्रित करते हैं ताकि भूख कम लगने के शारीरिक कारणों का पता लगाया जा सके।",
      recommendedTests: ["LFT", "KFT", "पेट का अल्ट्रासाउंड"]
    }
  },
  nutrition: {
    id: "nutrition",
    key: "nav.diag.habit.nutrition",
    en: {
      title: "Poor Nutrition",
      description: "Inadequate intake of essential nutrients leads to systemic deficiencies and weakened immunity.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Frequent illness", "Slow healing", "Brittle hair/nails", "Fatigue"],
      importance: "Comprehensive nutritional screening identifies specific vitamin and mineral gaps for correction.",
      recommendedTests: ["Vitamin Profile", "Iron Profile", "Total Protein"]
    },
    hi: {
      title: "खराब पोषण",
      description: "आवश्यक पोषक तत्वों के अपर्याप्त सेवन से प्रणालीगत कमियां और कमजोर प्रतिरक्षा होती है।",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["बार-बार बीमारी", "धीमी रिकवरी", "भुरभुरे बाल/नाखून", "थकान"],
      importance: "व्यापक पोषण संबंधी जांच सुधार के लिए विशिष्ट विटामिन और खनिज अंतराल की पहचान करती है।",
      recommendedTests: ["विटामिन प्रोफाइल", "आयरन प्रोफाइल", "टोटल प्रोटीन"]
    }
  },
  sleeplessness: {
    id: "sleeplessness",
    key: "nav.diag.habit.sleeplessness",
    en: {
      title: "Sleeplessness (Insomnia)",
      description: "Chronic inability to sleep can be linked to hormonal imbalances, stress, or neurological factors.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Difficulty falling asleep", "Staying awake at night", "Daytime irritability", "Lack of focus"],
      importance: "Thyroid and hormonal screening helps rule out physiological triggers for insomnia.",
      recommendedTests: ["TSH", "Cortisol Profile", "Melatonin Level"]
    },
    hi: {
      title: "अनिद्रा (Insomnia)",
      description: "सोने में पुरानी असमर्थता हार्मोनल असंतुलन, तनाव या तंत्रिका संबंधी कारकों से जुड़ी हो सकती है।",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["नींद आने में कठिनाई", "रात में जागते रहना", "दिन के समय चिड़चिड़ापन", "फोकस की कमी"],
      importance: "थायराइड और हार्मोनल स्क्रीनिंग अनिद्रा के शारीरिक ट्रिगर्स को बाहर करने में मदद करती है।",
      recommendedTests: ["TSH", "कोर्टिसोल प्रोफाइल", "मेलाटोनिन स्तर"]
    }
  },
  stress: {
    id: "stress",
    key: "nav.diag.habit.stress",
    en: {
      title: "Stress Management",
      description: "High levels of chronic stress impact cardiovascular health, immunity, and mental stability.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Palpitations", "Panic attacks", "Digestive distress", "Fatigue"],
      importance: "Stress marker screening helps quantify physical impact and guide lifestyle adjustments.",
      recommendedTests: ["Cortisol Profile", "Lipid & Thyroid Screen"]
    },
    hi: {
      title: "तनाव प्रबंधन",
      description: "पुरानी तनाव के उच्च स्तर हृदय स्वास्थ्य, प्रतिरक्षा और मानसिक स्थिरता को प्रभावित करते हैं।",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["घबराहट", "पैनिक अटैक", "पाचन संबंधी परेशानी", "थकान"],
      importance: "तनाव मार्कर स्क्रीनिंग शारीरिक प्रभाव को मापने और जीवन शैली समायोजन का मार्गदर्शन करने में मदद करती है।",
      recommendedTests: ["कोर्टिसोल प्रोफाइल", "लिपिड और थायराइड स्क्रीन"]
    }
  },
  tiredness: {
    id: "tiredness",
    key: "nav.diag.habit.tiredness",
    en: {
      title: "Chronic Tiredness",
      description: "Persistent fatigue that doesn't improve with rest, often linked to underlying medical conditions.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Lack of energy", "Brain fog", "Joint pain", "Poor sleep quality"],
      importance: "Exhaustive health screening is needed to rule out anemia, thyroid issues, or silent infections.",
      recommendedTests: ["Complete Blood Count (CBC)", "TSH Test", "Iron Profile"]
    },
    hi: {
      title: "पुरानी थकान",
      description: "लगातार थकान जो आराम के साथ बेहतर नहीं होती है, अक्सर अंतर्निहित चिकित्सा स्थितियों से जुड़ी होती है।",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["ऊर्जा की कमी", "मस्तिष्क में धुंध", "जोड़ों का दर्द", "नींद की खराब गुणवत्ता"],
      importance: "एनीमिया, थायराइड की समस्याओं या गुप्त संक्रमणों को बाहर करने के लिए संपूर्ण स्वास्थ्य जांच की आवश्यकता होती है।",
      recommendedTests: ["सीबीसी (CBC)", "टीएसएच टेस्ट", "आयरन प्रोफाइल"]
    }
  },
  cancer: {
    id: "cancer",
    key: "nav.diag.risk.cancer",
    en: {
      title: "Cancer Screening",
      description: "Cancer detection at an early stage significantly improves the chances of successful treatment and recovery. Screening tests look for signs of cancer before symptoms appear.",
      image: "https://images.unsplash.com/photo-1579152276502-54523f360588?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Unexplained weight loss", "Persistent fatigue", "Lumps or thickening", "Persistent cough", "Changes in bowel habits"],
      importance: "Regular screening is vital for groups with high risk factors or family history to catch anomalies early.",
      recommendedTests: ["Tumor Markers", "Full Body Checkup Plus", "PAP Smear"]
    },
    hi: {
      title: "कैंसर स्क्रीनिंग",
      description: "शुरुआती चरण में कैंसर का पता लगाने से सफल उपचार और रिकवरी की संभावना काफी बढ़ जाती है। स्क्रीनिंग टेस्ट लक्षणों के प्रकट होने से पहले कैंसर के संकेतों की तलाश करते हैं।",
      image: "https://images.unsplash.com/photo-1579152276502-54523f360588?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["अस्पष्टीकृत वजन कम होना", "लगातार थकान", "गांठ या मोटा होना", "लगातार खांसी", "आंतों की आदतों में बदलाव"],
      importance: "उच्च जोखिम वाले कारकों या पारिवारिक इतिहास वाले समूहों के लिए विसंगतियों को जल्दी पकड़ने के लिए नियमित जांच महत्वपूर्ण है।",
      recommendedTests: ["ट्यूमर मार्कर", "फुल बॉडी चेकअप प्लस", "पैप स्मीयर"]
    },
    associatedPackages: [
      {
        id: "cancer-screening",
        title: "Cancer Screening Panel",
        price: 5500,
        oldPrice: 9000,
        discount: "38%",
        description: "Comprehensive panel for early detection of common cancer markers."
      }
    ]
  },
  digestion: {
    id: "digestion",
    key: "nav.diag.risk.digestion",
    en: {
      title: "Digestion & Gut Health",
      description: "Digestive issues can range from minor bloating to severe conditions like IBD. Maintaining gut health is crucial for overall immunity and nutrition.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Chronic bloating", "Constipation or diarrhea", "Abdominal pain", "Heartburn"],
      importance: "Systematic screening of digestive enzymes and stool parameters helps identify malabsorption or inflammatory issues.",
      recommendedTests: ["Gastro Profile", "Stool Routine & Culture"]
    },
    hi: {
      title: "पाचन और पेट का स्वास्थ्य",
      description: "पाचन संबंधी समस्याएं मामूली सूजन से लेकर आईबीडी जैसी गंभीर स्थितियों तक हो सकती हैं। शरीर की प्रतिरोधक क्षमता और पोषण के लिए पेट का स्वास्थ्य बनाए रखना महत्वपूर्ण है।",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["पुरानी सूजन", "कब्ज या दस्त", "पेट में दर्द", "सीने में जलन"],
      importance: "पाचन एंजाइमों और मल मापदंडों की व्यवस्थित जांच अवशोषण या सूजन संबंधी समस्याओं की पहचान करने में मदद करती है।",
      recommendedTests: ["गैस्ट्रो प्रोफाइल", "स्टूल रूटीन और कल्चर"]
    }
  },
  hepatitis: {
    id: "hepatitis",
    key: "nav.diag.risk.hepatitis",
    en: {
      title: "Hepatitis Screening",
      description: "Hepatitis is an inflammation of the liver, often caused by viral infections. Early detection is key to preventing long-term liver damage.",
      image: "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Jaundice (yellowing of eyes/skin)", "Dark urine", "Nausea", "Abdominal discomfort"],
      importance: "Viral markers help differentiate between types of hepatitis for targeted clinical management.",
      recommendedTests: ["HBsAg", "Anti-HCV", "Liver Function Test"]
    },
    hi: {
      title: "हेपेटाइटिस स्क्रीनिंग",
      description: "हेपेटाइटिस लिवर की सूजन है, जो अक्सर वायरल संक्रमण के कारण होती है। लंबे समय तक लिवर की क्षति को रोकने के लिए शुरुआती पहचान महत्वपूर्ण है।",
      image: "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["पीलिया (आंखों/त्वचा का पीला पड़ना)", "गहरा पेशाब", "जी मिचलाना", "पेट में बेचैनी"],
      importance: "वायरल मार्कर लक्षित नैदानिक प्रबंधन के लिए हेपेटाइटिस के प्रकारों के बीच अंतर करने में मदद करते हैं।",
      recommendedTests: ["HBsAg", "एंटी-HCV", "लिवर फंक्शन टेस्ट"]
    }
  },
  hypertension: {
    id: "hypertension",
    key: "nav.diag.risk.hypertension",
    en: {
      title: "Hypertension / High BP",
      description: "High blood pressure often has no symptoms but can lead to serious heart and kidney issues if left unmanaged.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Severe headaches", "Nosebleeds", "Fatigue", "Vision problems"],
      importance: "Regular BP monitoring and associated profiles help assess total cardiovascular risk.",
      recommendedTests: ["BP Monitoring", "Lipid Profile", "Kidney Function Test"]
    },
    hi: {
      title: "उच्च रक्तचाप (Hypertension)",
      description: "उच्च रक्तचाप के अक्सर कोई लक्षण नहीं होते हैं, लेकिन यदि इसे नियंत्रित न किया जाए तो यह हृदय और किडनी की गंभीर समस्याओं का कारण बन सकता है।",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["गंभीर सिरदर्द", "नाक से खून आना", "थकान", "दृष्टि संबंधी समस्याएं"],
      importance: "नियमित बीपी निगरानी और संबंधित प्रोफाइल कुल हृदय जोखिम का आकलन करने में मदद करते हैं।",
      recommendedTests: ["बीपी निगरानी", "लिपिड प्रोफाइल", "किडनी फंक्शन टेस्ट"]
    }
  },
  immunity: {
    id: "immunity",
    key: "nav.diag.risk.immunity",
    en: {
      title: "Immunity Status",
      description: "A strong immune system is your body's primary defense. Factors like chronic stress and diet can weaken this shield.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Frequent colds", "Slow wound healing", "Recurrent infections", "Constant fatigue"],
      importance: "Assessing antibody levels and nutritional markers helps identify gaps in your body's defenses.",
      recommendedTests: ["Immunoglobulin Profile", "Vitamin D", "Vitamin B12"]
    },
    hi: {
      title: "प्रतिरक्षा स्थिति (Immunity)",
      description: "एक मजबूत प्रतिरक्षा प्रणाली आपके शरीर की प्राथमिक रक्षा है। पुरानी तनाव और आहार जैसे कारक इस ढाल को कमजोर कर सकते हैं।",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["बार-बार जुकाम", "धीमी गति से घाव भरना", "आवर्तक संक्रमण", "लगातार थकान"],
      importance: "एंटीबॉडी स्तरों और पोषण मार्करों का आकलन आपके शरीर की रक्षा में कमियों की पहचान करने में मदद करता है।",
      recommendedTests: ["इम्युनोग्लोबुलिन प्रोफाइल", "विटामिन डी", "विटामिन बी12"]
    }
  },
  infection: {
    id: "infection",
    key: "nav.diag.risk.infection",
    en: {
      title: "General Infection",
      description: "Bacterial or viral infections can impact various organs. Rapid identification helps in choosing the right therapeutic course.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Fever", "Aches", "Swollen glands", "Skin rashes"],
      importance: "Complete blood count and inflammatory markers provide a first-line assessment of infection severity.",
      recommendedTests: ["CBC", "CRP", "Pathogen Culture"]
    },
    hi: {
      title: "सामान्य संक्रमण (Infection)",
      description: "बैक्टीरिया या वायरल संक्रमण विभिन्न अंगों को प्रभावित कर सकते हैं। तेजी से पहचान सही चिकित्सीय मार्ग चुनने में मदद करती है।",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["बुखार", "दर्द", "सूजी हुई ग्रंथियां", "त्वचा पर लाल चकत्ते"],
      importance: "पूर्ण रक्त गणना और सूजन मार्कर संक्रमण की गंभीरता का प्रथम श्रेणी मूल्यांकन प्रदान करते हैं।",
      recommendedTests: ["सीबीसी", "सीआरपी", "रोगजनक कल्चर"]
    }
  },
  jaundice: {
    id: "jaundice",
    key: "nav.diag.risk.jaundice",
    en: {
      title: "Jaundice Screening",
      description: "Jaundice indicates a high level of bilirubin, suggesting issues with the liver, gallbladder, or bile ducts.",
      image: "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Yellow eyes and skin", "Dark urine", "Itchy skin", "Pale stools"],
      importance: "Comprehensive bilirubin screening is essential to identify if the issue is pre-hepatic, hepatic, or post-hepatic.",
      recommendedTests: ["Bilirubin Profile", "LFT", "Abdominal Ultrasound"]
    },
    hi: {
      title: "पीलिया स्क्रीनिंग (Jaundice)",
      description: "पीलिया बिलीरुबिन के उच्च स्तर का संकेत देता है, जो लिवर, पित्ताशय या पित्त नली की समस्याओं का सुझाव देता है।",
      image: "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["पीली आंखें और त्वचा", "गहरा पेशाब", "त्वचा में खुजली", "सफेद मल"],
      importance: "यह पहचानने के लिए व्यापक बिलीरुबिन स्क्रीनिंग आवश्यक है कि समस्या प्री-हेपेटिक, हेपेटिक या पोस्ट-हेपेटिक है।",
      recommendedTests: ["बिलीरुबिन प्रोफाइल", "LFT", "पेट का अल्ट्रासाउंड"]
    }
  },
  joints: {
    id: "joints",
    key: "nav.diag.risk.joints",
    en: {
      title: "Joint Health",
      description: "Beyond arthritis, general wear and tear or specific inflammations can impact joint mobility and quality of life.",
      image: "https://images.unsplash.com/photo-1530026402209-e00ed8cbbc70?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Stiffness", "Popping sounds", "Swelling around joints", "Chronic pain during movement"],
      importance: "Bone markers and fluid analysis help in early detection of degenerative joint conditions.",
      recommendedTests: ["Calcium", "Vitamin D", "RA Factor", "Uric Acid"]
    },
    hi: {
      title: "जोड़ों का स्वास्थ्य",
      description: "गठिया के अलावा, सामान्य टूट-फूट या विशिष्ट सूजन जोड़ों की गतिशीलता और जीवन की गुणवत्ता को प्रभावित कर सकती है।",
      image: "https://images.unsplash.com/photo-1530026402209-e00ed8cbbc70?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["जकड़न", "आवाज आना", "जोड़ों के आसपास सूजन", "चलने-फिरने के दौरान पुराना दर्द"],
      importance: "हड्डी के मार्कर और द्रव विश्लेषण अपक्षयी संयुक्त स्थितियों की जल्द पहचान करने में मदद करते हैं।",
      recommendedTests: ["कैल्शियम", "विटामिन डी", "आरए फैक्टर", "यूरिक एसिड"]
    }
  },
  kidney: {
    id: "kidney",
    key: "nav.diag.risk.kidney",
    en: {
      title: "Kidney Function / KFT",
      description: "Kidneys filter waste from the blood. Issues here can lead to systemic toxicity and electrolyte imbalance.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Swelling in ankles/feet", "Puffiness around eyes", "Changes in urination frequency", "Nausea"],
      importance: "Routine renal screening is vital for individuals with diabetes or hypertension to prevent chronic kidney disease.",
      recommendedTests: ["Creatinine", "BUN", "Urine Routine", "Electrolytes"]
    },
    hi: {
      title: "किडनी फंक्शन (KFT)",
      description: "किडनी रक्त से अपशिष्ट को फ़िल्टर करती है। यहाँ की समस्याएं प्रणालीगत विषाक्तता और इलेक्ट्रोलाइट असंतुलन का कारण बन सकती हैं।",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["टखनों/पैरों में सूजन", "आंखों के आसपास सूजन", "पेशाब की आवृत्ति में बदलाव", "जी मिचलाना"],
      importance: "मधुमेह या उच्च रक्तचाप वाले व्यक्तियों के लिए पुरानी किडनी की बीमारी को रोकने के लिए नियमित रीनल स्क्रीनिंग महत्वपूर्ण है।",
      recommendedTests: ["क्रिएटिनिन", "BUN", "मूत्र दिनचर्या", "इलेक्ट्रोलाइट्स"]
    }
  },
  liver: {
    id: "liver",
    key: "nav.diag.risk.liver",
    en: {
      title: "Liver Health / LFT",
      description: "The liver performs vital tasks like detoxification and metabolism. Fatty liver or infections can seriously impair these functions.",
      image: "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Abdominal pain/swelling", "Chronic fatigue", "Nausea", "Dark urine"],
      importance: "Liver enzyme analysis is a critical marker for metabolic health and detoxification efficiency.",
      recommendedTests: ["Liver Function Test", "Albumin", "Bilirubin"]
    },
    hi: {
      title: "लिवर स्वास्थ्य (LFT)",
      description: "लिवर विषहरण और चयापचय जैसे महत्वपूर्ण कार्य करता है। फैटी लिवर या संक्रमण इन कार्यों को गंभीर रूप से बाधित कर सकते हैं।",
      image: "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["पेट में दर्द/सूजन", "पुरानी थकान", "जी मिचलाना", "गहरा पेशाब"],
      importance: "लिवर एंजाइम विश्लेषण चयापचय स्वास्थ्य और विषहरण दक्षता के लिए एक महत्वपूर्ण मार्कर है।",
      recommendedTests: ["लिवर फंक्शन टेस्ट", "एल्ब्यूमिन", "बिलीरुबिन"]
    }
  },
  obesity: {
    id: "obesity",
    key: "nav.diag.risk.obesity",
    en: {
      title: "Obesity Markers",
      description: "Obesity is a complex condition that increases the risk of heart disease, diabetes, and certain cancers.",
      image: "https://images.unsplash.com/photo-1571019613454-1eb2f688a747?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["High BMI", "Shortness of breath", "Excess body fat", "Snoring"],
      importance: "Screening focuses on metabolic markers to assess current damage and future risk of associated chronic diseases.",
      recommendedTests: ["HbA1c", "Lipid Profile", "Thyroid Profile"]
    },
    hi: {
      title: "मोटापा मार्कर (Obesity)",
      description: "मोटापा एक जटिल स्थिति है जो हृदय रोग, मधुमेह और कुछ प्रकार के कैंसर के जोखिम को बढ़ाती है।",
      image: "https://images.unsplash.com/photo-1571019613454-1eb2f688a747?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["उच्च बीएमआई", "सांस की तकलीफ", "शरीर की अतिरिक्त चर्बी", "खर्राटे लेना"],
      importance: "स्क्रीनिंग वर्तमान क्षति और भविष्य की संबंधित पुरानी बीमारियों के जोखिम का आकलन करने के लिए चयापचय मार्करों पर केंद्रित है।",
      recommendedTests: ["HbA1c", "लिपिड प्रोफाइल", "थायराइड प्रोफाइल"]
    }
  },
  pregnancy: {
    id: "pregnancy",
    key: "nav.diag.risk.pregnancy",
    en: {
      title: "Pregnancy Wellness",
      description: "Routine screenings during pregnancy ensure the health of both the mother and the developing fetus.",
      image: "https://images.unsplash.com/photo-1596464716127-ecdfa6ea1d68?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Morning sickness", "Fatigue", "Missed periods", "Breast tenderness"],
      importance: "Regular maternal health screening is crucial for detecting complications early for a safe delivery.",
      recommendedTests: ["Dual Marker", "Triple Marker", "ANC Profile", "Iron & Calcium"]
    },
    hi: {
      title: "गर्भावस्था कल्याण",
      description: "गर्भावस्था के दौरान नियमित जांच मां और विकासशील भ्रूण दोनों के स्वास्थ्य को सुनिश्चित करती है।",
      image: "https://images.unsplash.com/photo-1596464716127-ecdfa6ea1d68?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["मॉर्निंग सिकनेस", "थकान", "पीरिएड्स न आना", "स्तन कोमलता"],
      importance: "सुरक्षित प्रसव के लिए जटिलताओं का जल्दी पता लगाने के लिए नियमित मातृ स्वास्थ्य जांच महत्वपूर्ण है।",
      recommendedTests: ["डुअल मार्कर", "ट्रिपल मार्कर", "ANC प्रोफाइल", "आयरन और कैल्शियम"]
    }
  },
  std: {
    id: "std",
    key: "nav.diag.risk.std",
    en: {
      title: "STD / HIV Screening",
      description: "Sexually transmitted diseases can often be asymptomatic but lead to long-term health complications if undetected.",
      image: "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Unusual discharge", "Sores or warts", "Pain during urination", "Unexplained rashes"],
      importance: "Confidential screening is essential for early clinical intervention and preventing further transmission.",
      recommendedTests: ["HIV I & II", "Syphilis", "Chlamydia", "Dual Care"]
    },
    hi: {
      title: "एसटीडी / एचआईवी स्क्रीनिंग",
      description: "यौन संचारित रोग अक्सर लक्षणहीन हो सकते हैं लेकिन यदि इनका पता न चले तो ये दीर्घकालिक स्वास्थ्य जटिलताओं का कारण बन सकते हैं।",
      image: "https://images.unsplash.com/photo-1579152311543-9d75f6e9eb5a?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["असामान्य स्राव", "घाव या मस्से", "पेशाब के दौरान दर्द", "अस्पष्टीकृत चकत्ते"],
      importance: "शुरुआती नैदानिक हस्तक्षेप और आगे संचार रोकने के लिए गोपनीय जांच आवश्यक है।",
      recommendedTests: ["HIV I और II", "सिफलिस", "क्लैमिडिया", "डुअल केयर"]
    }
  },
  thyroid: {
    id: "thyroid",
    key: "nav.diag.risk.thyroid",
    en: {
      title: "Thyroid Status",
      description: "The thyroid gland controls metabolism. Imbalances can lead to extreme fatigue, weight changes, and mood shifts.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Unexplained weight gain/loss", "Sensitvity to cold/heat", "Dry skin", "Heart rate changes"],
      importance: "A complete thyroid profile helps differentiate between hypo and hyper thyroidism for effective treatment.",
      recommendedTests: ["TSH", "Free T3", "Free T4"]
    },
    hi: {
      title: "थायराइड स्थिति (Thyroid)",
      description: "थायराइड ग्रंथि चयापचय को नियंत्रित करती है। असंतुलन से अत्यधिक थकान, वजन में बदलाव और मूड परिवर्तन हो सकते हैं।",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["अस्पष्टीकृत वजन बढ़ना/कम होना", "ठंड/गर्मी के प्रति संवेदनशीलता", "शुष्क त्वचा", "हृदय गति में बदलाव"],
      importance: "एक पूर्ण थायराइड प्रोफाइल प्रभावी उपचार के लिए हाइपो और हाइपर थायराइडिज्म के बीच अंतर करने में मदद करता है।",
      recommendedTests: ["TSH", "फ्री T3", "फ्री T4"]
    }
  },
  inflammation: {
    id: "inflammation",
    key: "nav.diag.risk.inflammation",
    en: {
      title: "Inflammation Markers",
      description: "Chronic inflammation is at the root of many modern diseases. It can be a silent process within the body.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Body aches", "Chronic fatigue", "Skin disorders", "Frequent infections"],
      importance: "Markers like CRP help identify localized or systemic inflammation for deeper clinical study.",
      recommendedTests: ["CRP (C-Reactive Protein)", "ESR", "RA Factor"]
    },
    hi: {
      title: "सूजन मार्कर (Inflammation)",
      description: "पुरानी सूजन कई आधुनिक बीमारियों की जड़ में है। यह शरीर के भीतर एक मूक प्रक्रिया हो सकती है।",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["बदन दर्द", "पुरानी थकान", "त्वचा विकार", "बार-बार संक्रमण"],
      importance: "सीआरपी जैसे मार्कर नैदानिक अध्ययन के लिए स्थानीयकृत या प्रणालीगत सूजन की पहचान करने में मदद करते हैं।",
      recommendedTests: ["सीआरपी (CRP)", "ESR", "RA फैक्टर"]
    }
  },
  vitamins: {
    id: "vitamins",
    key: "nav.diag.risk.vitamins",
    en: {
      title: "Vitamin & Mineral Deficiency",
      description: "Vitamins are essential for organ function and bone health. Deficiencies are common due to modern diet and indoor lifestyles.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Bone pain", "Muscle weakness", "Mouth ulcers", "Hair loss"],
      importance: "Quantifying your Vitamin D and B12 levels is the first step toward effective supplementation.",
      recommendedTests: ["Vitamin D3", "Vitamin B12", "Iron Profile"]
    },
    hi: {
      title: "विटामिन और खनिज की कमी",
      description: "विटामिन अंग कार्य और हड्डियों के स्वास्थ्य के लिए आवश्यक हैं। आधुनिक आहार और इनडोर जीवनशैली के कारण कमियां आम हैं।",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["हड्डियों में दर्द", "मांसपेशियों में कमजोरी", "मुंह के छाले", "बालों का झड़ना"],
      importance: "आपके विटामिन डी और बी 12 के स्तर को मापना प्रभावी पूरक की दिशा में पहला कदम है।",
      recommendedTests: ["विटामिन D3", "विटामिन B12", "आयरन प्रोफाइल"]
    }
  },
  hormones: {
    id: "hormones",
    key: "nav.diag.risk.hormones",
    en: {
      title: "Hormonal Imbalance",
      description: "Hormones regulate almost every process in the body. Imbalances can affect mood, weight, and reproductive health.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["Irregular periods", "Unexplained weight gain", "Acne", "Mood swings"],
      importance: "A complete hormonal profile provides clarity on endocrine health and guides corrective therapy.",
      recommendedTests: ["PCOS Profile", "Testosterone", "Prolactin"]
    },
    hi: {
      title: "हार्मोनल असंतुलन",
      description: "हॉर्मोन शरीर की लगभग हर प्रक्रिया को नियंत्रित करते हैं। असंतुलन मूड, वजन और प्रजनन स्वास्थ्य को प्रभावित कर सकता है।",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      symptoms: ["अनियमित पीरियड्स", "अस्पष्टीकृत वजन बढ़ना", "मुंहासे", "मूड में बदलाव"],
      importance: "एक पूर्ण हार्मोनल प्रोफाइल एंडोक्राइन स्वास्थ्य पर स्पष्टता प्रदान करता है और सुधारात्मक चिकित्सा का मार्गदर्शन करता है।",
      recommendedTests: ["पीसीओएस प्रोफाइल", "टेस्टोस्टेरोन", "प्रोलैक्टिन"]
    }
  }
};
