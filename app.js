// ==========================================
// PITCHLITE - Complete Application with Q&A
// ==========================================

let currentLang = 'en';
let state = { current: 0, data: {}, editId: null, style: 'standard' };

// ==========================================
// TRANSLATIONS & CONFIGURATION
// ==========================================

const UI_TEXT = {
  en: {
    appSubtitle: 'One-minute pitch builder',
    newBtn: 'New pitch',
    tabs: { builder: 'Builder', preview: 'Preview', ask: 'Ask', saved: 'Saved pitches' },
    styleLabel: 'Style:',
    templateLabel: 'Templates:',
    styles: { standard: 'Standard', investor: 'Investor', casual: 'Casual', punch: 'Punch', vision: 'Vision' },
    templates: { saas: 'SaaS Startup', product: 'Physical Product', social: 'Social Impact', student: 'Student Project' },
    previewBoxLabel: 'Live pitch preview',
    speakBtn: 'Read Aloud',
    copyBtn: 'Copy',
    saveBtn: 'Save pitch',
    timeLabel: 'Estimated at 130 wpm',
    breakdownLabel: 'Structure breakdown',
    askTitle: 'Ask about your pitch',
    askSubtitle: 'Get answers based on your pitch content',
    askPlaceholder: 'Type your question...',
    sendBtn: 'Send',
    welcomeText: 'Ask me anything about your pitch!',
    prepTitle: 'Expected Questions & Answers',
    prepSubtitle: 'Prepare for these common investor/founder questions',
    quickQuestions: ['Is my pitch too long?', 'What is my target market?', 'How can I improve my CTA?', 'Summarize my pitch'],
    steps: [
      { title: 'Give your pitch a name', hint: 'A memorable title to identify this pitch.', placeholder: 'e.g. EcoBox' },
      { title: 'What problem does it solve?', hint: 'Describe the specific pain point.', placeholder: 'e.g. Small businesses waste 3+ hours...' },
      { title: 'What is your solution?', hint: 'Explain what you have built.', placeholder: 'e.g. An AI dashboard...' },
      { title: 'Who is your target audience?', hint: 'Who benefits most?', placeholder: 'e.g. SME owners...' },
      { title: 'What traction do you have?', hint: 'Users, revenue...', placeholder: 'e.g. 50 beta users...' },
      { title: 'What is your call to action?', hint: 'What do you want them to do?', placeholder: 'e.g. We are raising...' }
    ],
    toast: {
      loaded: 'Loaded', saved: 'Pitch saved!', copied: 'Copied!', deleted: 'Deleted',
      empty: 'No saved pitches', noContent: 'No content to read',
      noHindiVoice: 'Hindi voice not available. Install Hindi TTS in device settings.',
      speechError: 'Speech synthesis error'
    }
  },
  hi: {
    appSubtitle: 'एक मिनट का पिच बिल्डर',
    newBtn: 'नया पिच',
    tabs: { builder: 'बिल्डर', preview: 'पूर्वावलोकन', ask: 'पूछें', saved: 'सेव किए गए' },
    styleLabel: 'शैली:',
    templateLabel: 'टेम्पलेट:',
    styles: { standard: 'स्टैंडर्ड', investor: 'निवेशक', casual: 'कैजुअल', punch: 'पंच', vision: 'विजन' },
    templates: { saas: 'SaaS स्टार्टअप', product: 'फिजिकल प्रोडक्ट', social: 'सामाजिक प्रभाव', student: 'स्टूडेंट प्रोजेक्ट' },
    previewBoxLabel: 'लाइव पिच पूर्वावलोकन',
    speakBtn: 'पढ़ें',
    copyBtn: 'कॉपी',
    saveBtn: 'सेव करें',
    timeLabel: '130 शब्द प्रति मिनट',
    breakdownLabel: 'संरचना विश्लेषण',
    askTitle: 'अपने पिच के बारे में पूछें',
    askSubtitle: 'अपने पिच सामग्री के आधार पर उत्तर प्राप्त करें',
    askPlaceholder: 'अपना प्रश्न टाइप करें...',
    sendBtn: 'भेजें',
    welcomeText: 'अपने पिच के बारे में कुछ भी पूछें!',
    prepTitle: 'अपेक्षित प्रश्न और उत्तर',
    prepSubtitle: 'इन सामान्य निवेशक/संस्थापक प्रश्नों के लिए तैयार रहें',
    quickQuestions: ['क्या मेरा पिच बहुत लंबा है?', 'मेरा लक्षित बाजार क्या है?', 'मैं अपनी CTA कैसे सुधार सकता हूँ?', 'मेरे पिच का सारांश दें'],
    steps: [
      { title: 'अपने पिच का नाम दें', hint: 'इस पिच को पहचानने के लिए एक यादगार शीर्षक।', placeholder: 'जैसे: EcoBox' },
      { title: 'यह क्या समस्या हल करता है?', hint: 'विशिष्ट दर्द बिंदु का वर्णन करें।', placeholder: 'जैसे: छोटे व्यवसाय 3+ घंटे बर्बाद करते हैं...' },
      { title: 'आपका समाधान क्या है?', hint: 'आपने क्या बनाया है इसे समझाएं।', placeholder: 'जैसे: एक AI डैशबोर्ड...' },
      { title: 'आपकी लक्ष्य दर्शक कौन हैं?', hint: 'किसे सबसे अधिक लाभ होता है?', placeholder: 'जैसे: SME मालिक...' },
      { title: 'आपके पास क्या ट्रैक्शन है?', hint: 'उपयोगकर्ता, राजस्व...', placeholder: 'जैसे: 50 बीटा उपयोगकर्ता...' },
      { title: 'आपकी कॉल टू एक्शन क्या है?', hint: 'आप उन्हें क्या करना चाहते हैं?', placeholder: 'जैसे: हम फंड उठा रहे हैं...' }
    ],
    toast: {
      loaded: 'लोड हो गया', saved: 'पिच सेव हो गया!', copied: 'कॉपी हो गया!', deleted: 'हटा दिया गया',
      empty: 'कोई सेव पिच नहीं', noContent: 'पढ़ने के लिए कुछ नहीं',
      noHindiVoice: 'हिंदी आवाज उपलब्ध नहीं। डिवाइस सेटिंग्स में हिंदी TTS इंस्टॉल करें।',
      speechError: 'स्पीच त्रुटि'
    }
  }
};

const PREDEFINED_TEMPLATES_EN = {
  saas: {
    name: 'CloudSync',
    data: {
      name: 'CloudSync – SaaS Startup',
      problem: 'manual data syncing that wastes 6 hours weekly for small businesses',
      solution: 'an AI-powered API that connects WhatsApp, Excel and accounting software automatically',
      audience: 'SME owners in India with 5-50 employees',
      traction: '50 beta users, ₹8L ARR',
      cta: 'We are raising ₹30L seed round to scale our sales team'
    }
  },
  product: {
    name: 'EcoBottle',
    data: {
      name: 'EcoBottle – Physical Product',
      problem: 'single-use plastic waste from leaky bottles',
      solution: 'a leak-proof stainless steel bottle that plants a tree for every sale',
      audience: 'urban professionals aged 22-35 who commute',
      traction: '3 corporate pre-orders, 200 prototype testers',
      cta: 'We need ₹15L for our first production run'
    }
  },
  social: {
    name: 'EduReach',
    data: {
      name: 'EduReach – Social Impact',
      problem: 'lack of STEM access in rural tier-3 cities',
      solution: 'mobile STEM labs with hands-on robotics kits',
      audience: 'government school students in grades 8-12',
      traction: '5,000 students reached across 12 schools',
      cta: 'We are seeking partners to expand to 50 schools'
    }
  },
  student: {
    name: 'StudyBuddy',
    data: {
      name: 'StudyBuddy – Student Project',
      problem: 'isolation and poor grades from studying alone in niche courses',
      solution: 'an app that matches students by course, schedule and learning style',
      audience: 'engineering undergrads at Indian colleges',
      traction: '300 active users at IIT Bombay pilot',
      cta: 'We are looking for ed-tech investors and mentors'
    }
  }
};

const PREDEFINED_TEMPLATES_HI = {
  saas: {
    name: 'CloudSync',
    data: {
      name: 'CloudSync – SaaS स्टार्टअप',
      problem: 'छोटे व्यवसायों के लिए सप्ताह में 6 घंटे बर्बाद करने वाला मैन्युअल डेटा सिंकिंग',
      solution: 'WhatsApp, Excel और अकाउंटिंग सॉफ्टवेयर को स्वचालित रूप से जोड़ने वाला AI-पावर्ड API',
      audience: 'भारत में 5-50 कर्मचारियों वाले SME मालिक',
      traction: '50 बीटा उपयोगकर्ता, ₹8L ARR',
      cta: 'हम अपनी सेल्स टीम को स्केल करने के लिए ₹30L सीड राउंड उठा रहे हैं'
    }
  },
  product: {
    name: 'EcoBottle',
    data: {
      name: 'EcoBottle – फिजिकल प्रोडक्ट',
      problem: 'रिसती हुई बोतलों से एकल-उपयोग प्लास्टिक कचरा',
      solution: 'एक लीक-प्रूफ स्टेनलेस स्टील बोतल जो हर बिक्री पर एक पेड़ लगाती है',
      audience: '22-35 आयु वर्ग के शहरी पेशेवर जो कम्यूट करते हैं',
      traction: '3 कॉर्पोरेट पूर्व-आदेश, 200 प्रोटोटाइप परीक्षक',
      cta: 'हमें अपना पहला प्रोडक्शन रन के लिए ₹15L की आवश्यकता है'
    }
  },
  social: {
    name: 'EduReach',
    data: {
      name: 'EduReach – सामाजिक प्रभाव',
      problem: 'ग्रामीण टियर-3 शहरों में STEM की कमी',
      solution: 'हैंड्स-ऑन रोबोटिक्स किट के साथ मोबाइल STEM लैब',
      audience: 'कक्षा 8-12 के सरकारी स्कूल के छात्र',
      traction: '12 स्कूलों में 5,000 छात्रों तक पहुंच',
      cta: 'हम 50 स्कूलों तक विस्तार के लिए भागीदारों की तलाश में हैं'
    }
  },
  student: {
    name: 'StudyBuddy',
    data: {
      name: 'StudyBuddy – स्टूडेंट प्रोजेक्ट',
      problem: 'विशिष्ट पाठ्यक्रमों में अकेले अध्ययन करने से अलगाव और खराब ग्रेड',
      solution: 'छात्रों को पाठ्यक्रम, शेड्यूल और सीखने की शैली के अनुसार मिलाने वाला ऐप',
      audience: 'भारतीय कॉलेजों के इंजीनियरिंग स्नातक',
      traction: 'IIT बॉम्बे पायलट पर 300 सक्रिय उपयोगकर्ता',
      cta: 'हम ed-tech निवेशकों और मेंटर्स की तलाश में हैं'
    }
  }
};

// ==========================================
// Q&A DATABASE - All Investor Questions
// ==========================================

const QA_DATABASE = {
  en: [
    {
      id: 'elevator',
      category: 'basic',
      question: "Can you give me your 30-second elevator pitch?",
      answer: (data) => {
        const parts = buildPitch(data);
        if (!parts.length) return "⚠️ Complete your pitch in the Builder first to generate this answer.";
        const short = parts.find(p => p.key === 'main');
        return short ? `Here's your concise pitch:\n\n"${short.text}"\n\nThis covers the problem (${data.problem || '...'}) and solution (${data.solution || '...'}) in one sentence.` : "Build your pitch first!";
      }
    },
    {
      id: 'problem',
      category: 'basic',
      question: "What specific problem are you solving?",
      answer: (data) => {
        if (!data.problem) return "⚠️ You haven't defined the problem yet. Go to Step 2 in the Builder and describe the pain point your customers face.";
        return `**Problem:** ${data.problem}\n\n**Validation:** This affects ${data.audience || 'your target market'} directly. When pitching, emphasize the cost/time/emotional pain this causes.\n\n**Tip:** Make it relatable - "Imagine losing 5 hours every week to manual data entry" is better than "inefficiency exists".`;
      }
    },
    {
      id: 'solution',
      category: 'basic',
      question: "How does your solution work exactly?",
      answer: (data) => {
        if (!data.solution) return "⚠️ Define your solution in Step 3 of the Builder. Explain what you've built (app, service, hardware, etc.).";
        return `**Your Solution:** ${data.solution}\n\n**How it works:** You help ${data.audience || 'customers'} by ${data.solution.toLowerCase().replace(/^(an?|the)\s+/i, '')}.\n\n**Key talking points:**\n• It's designed specifically for ${data.audience || 'this market'}\n• It addresses the root cause: ${data.problem || '[define problem]'}\n• It's ready/available now${data.traction ? ` (proven by ${data.traction})` : ''}`;
      }
    },
    {
      id: 'market_size',
      category: 'market',
      question: "How big is your target market (TAM/SAM/SOM)?",
      answer: (data) => {
        if (!data.audience) return "⚠️ Define your target audience in Step 4 to calculate market size.";
        return `**Target Audience:** ${data.audience}\n\n**Market Size Framework:**\n• **TAM (Total):** All ${data.audience.split(' ').slice(-2).join(' ') || 'potential customers'} globally\n• **SAM (Serviceable):** The segment you can reach with your business model\n• **SOM (Obtainable):** What you can capture in 3-5 years\n\n**Research tip:** Look up "[your audience] market size India" or use reports from Statista, IBEF, or industry associations.`;
      }
    },
    {
      id: 'traction',
      category: 'investor',
      question: "What traction do you currently have?",
      answer: (data) => {
        if (!data.traction || ['none', 'no traction', 'not yet', 'zero'].includes(data.traction.toLowerCase())) {
          return `⚠️ **No traction yet?** That's okay for pre-seed, but have a clear plan:\n\n**Alternative proof points:**\n• "We have 50 signups on our waitlist"\n• "We conducted 30 customer interviews - 80% said they would pay"\n• "We have 3 LOIs (Letters of Intent) from potential customers"\n• "We ran a pilot with [organization] showing X results"\n\n**Next step:** Add any validation data to Step 5 of your pitch.`;
        }
        return `**Current Traction:** ${data.traction}\n\n**How to present this:**\n• Lead with numbers: "${data.traction}"\n• Contextualize: Is this monthly recurring? One-time? Pilot users?\n• Growth rate: "Growing 20% MoM" (if true)\n• **Ask yourself:** Is this enough for the round you're raising?`;
      }
    },
    {
      id: 'revenue',
      category: 'investor',
      question: "What is your revenue model? How do you make money?",
      answer: (data) => {
        return `**Revenue Model Guidance:**\n\nBased on your pitch "${data.name || 'Untitled'}", you likely use one of these:\n\n**1. B2B SaaS:** Monthly/annual subscriptions tiers\n**2. Marketplace:** Commission per transaction\n**3. Physical Product:** Unit sales + margin\n**4. Services:** Hourly/project-based fees\n\n**Your specific answer:**\n"We charge ${data.audience || 'customers'} via [subscription/per-unit/commission] because ${data.solution || 'our solution'} delivers measurable ROI in [timeframe]."\n\n⚠️ **Action:** If you haven't decided, add your pricing strategy to Step 3 or 6.`;
      }
    },
    {
      id: 'competition',
      category: 'market',
      question: "Who are your competitors and what's your advantage?",
      answer: (data) => {
        return `**Competition Framework:**\n\n**Direct competitors:** Similar solutions like [Name them if known]\n**Indirect:** Excel sheets, manual processes, status quo\n\n**Your Differentiation (based on your pitch):**\n• **Problem-specific:** Unlike general tools, you solve "${data.problem || '[define problem]'}" specifically\n• **Audience-specific:** Built for ${data.audience || '[define audience]'}, not generic enterprise\n• **Local advantage:** ${currentLang === 'hi' ? 'Hindi/India-first approach' : 'Localized for Indian market'}\n\n**Pitch tip:** Don't say "we have no competitors." Say "incumbents solve this via X, we do Y which is better for [audience] because Z."`;
      }
    },
    {
      id: 'team',
      category: 'investor',
      question: "Tell me about your team. Why are you the right people?",
      answer: (data) => {
        return `**Team Answer Template:**\n\n"We're [number] founders with [X years] combined experience in [industry/domain].\n\n**Our edge:**\n• **Domain expertise:** We've worked in/lived ${data.audience || 'this industry'}\n• **Technical capability:** Built ${data.solution || 'this solution'} with [tech stack/skills]\n• **Founder-market fit:** We personally experienced ${data.problem || 'this problem'}\n\n**Advisory:** [If you have mentors/advisors, mention 1-2 notable names]\n\n⚠️ **Note:** Add your team details to your pitch data.`;
      }
    },
    {
      id: 'funding',
      category: 'investor',
      question: "How much are you raising and how will you use it?",
      answer: (data) => {
        if (!data.cta) return "⚠️ Define your Call to Action in Step 6. This usually includes your ask (funding amount or partnership request).";
        return `**Your Current CTA:** ${data.cta}\n\n**If raising funds:**\n• **Amount:** [Specify INR X Lakh/Crore or $X]\n• **Instrument:** Equity, SAFE, or Convertible Note\n• **Use of funds:** 40% Product development, 30% Marketing, 20% Operations, 10% Buffer\n• **Runway:** 18-24 months to reach [milestone]\n\n**If not raising yet:**\n"We're seeking strategic partners to help us reach ${data.audience || 'more customers'} and validate our pilot results of ${data.traction || '[traction]'}."\n\n**Refine:** Make your CTA in Step 6 more specific with exact amounts.`;
      }
    },
    {
      id: 'metrics',
      category: 'technical',
      question: "What are your key metrics? (KPIs)",
      answer: (data) => {
        return `**Metrics to share:**\n\n**Growth metrics:**\n• User acquisition rate (weekly/monthly)\n• Retention rate (D7, D30 for apps)\n• ${data.traction ? `Current baseline: ${data.traction}` : 'Traction: [Add your numbers in Step 5]'}\n\n**Unit Economics:**\n• CAC (Customer Acquisition Cost)\n• LTV (Lifetime Value) or ARPU (Average Revenue Per User)\n• Gross margin\n\n**Engagement:**\n• MAU/DAU (Monthly/Daily Active Users)\n• Conversion rate from trial to paid\n\n**For your pitch "${data.name || '...'}":** Calculate which 3 numbers best prove demand for ${data.solution || 'your solution'}.`;
      }
    },
    {
      id: 'risks',
      category: 'investor',
      question: "What are the biggest risks and how do you mitigate them?",
      answer: (data) => {
        return `**Risk Framework for ${data.name || 'your startup'}:**\n\n**Market Risk:** "${data.audience || 'Customers'} might not adopt quickly enough"\n→ Mitigation: ${data.traction ? `Pilot with ${data.traction.split(' ')[0]} users shows demand` : 'Running customer interviews to validate willingness to pay'}\n\n**Technical Risk:** "Building ${data.solution || 'the solution'} requires [technical capability]"\n→ Mitigation: ${data.solution && data.solution.toLowerCase().includes('ai') ? 'Using proven AI APIs rather than building models from scratch' : 'MVP approach - launching with core features first'}\n\n**Competition Risk:** "Big players might copy this"\n→ Mitigation: Speed to market with ${data.audience || 'specific niche'} focus and localization advantages\n\n**Honesty wins:** Acknowledge 2 real risks and show you've thought about mitigation.`;
      }
    },
    {
      id: 'scalability',
      category: 'technical',
      question: "How will you scale this to 10x or 100x?",
      answer: (data) => {
        return `**Scaling Strategy for ${data.solution || 'your solution'}:**\n\n**Phase 1 (Now):** ${data.audience || '[Target audience]'} in [1-2 cities/regions]\n**Phase 2 (Year 1):** Expand to top 10 metros/institutions via [channel: direct sales/partnerships/digital]\n**Phase 3 (Year 3):** \n• Geographic: Other Indian cities / SAARC countries${currentLang === 'hi' ? '' : ' / Global Indian diaspora'}\n• Product: Add [adjacent features] to increase LTV\n• Channel: B2B2C partnerships with [type of organizations]\n\n**Technology leverage:** ${data.solution && data.solution.toLowerCase().includes('app') ? 'App-based delivery allows zero marginal cost per new user' : 'Platform approach allows serving multiple clients with same infrastructure'}\n\n**Key enabler:** The funding/partnership you're seeking in "${data.cta || 'Step 6'}".`;
      }
    }
  ],
  
  hi: [
    {
      id: 'elevator',
      category: 'basic',
      question: "क्या आप मुझे 30-सेकंड का एलिवेटर पिच दे सकते हैं?",
      answer: (data) => {
        const parts = buildPitch(data);
        if (!parts.length) return "⚠️ पहले बिल्डर में अपना पिच पूरा करें।";
        const short = parts.find(p => p.key === 'main');
        return short ? `यहाँ आपका संक्षिप्त पिच है:\n\n"${short.text}"\n\nइसमें समस्या (${data.problem || '...'}) और समाधान (${data.solution || '...'}) दोनों एक वाक्य में हैं।` : "पहले पिच बनाएं!";
      }
    },
    {
      id: 'problem',
      category: 'basic',
      question: "आप कौन सी विशिष्ट समस्या हल कर रहे हैं?",
      answer: (data) => {
        if (!data.problem) return "⚠️ आपने अभी तक समस्या परिभाषित नहीं की है। बिल्डर में चरण 2 पर जाएं।";
        return `**समस्या:** ${data.problem}\n\n**मान्यता:** यह सीधे ${data.audience || 'आपके लक्षित बाजार'} को प्रभावित करती है। पिच में इस समस्या के कारण होने वाले समय/पैसे/भावनात्मक दर्द पर जोर दें।\n\n**टिप:** इसे समझने योग्य बनाएं - "हर सप्ताह 5 घंटे मैन्युअल डेटा एंट्री में बर्बाद करना" "अक्षमता मौजूद है" से बेहतर है।`;
      }
    },
    {
      id: 'solution',
      category: 'basic',
      question: "आपका समाधान ठीक से कैसे काम करता है?",
      answer: (data) => {
        if (!data.solution) return "⚠️ बिल्डर के चरण 3 में अपना समाधान परिभाषित करें।";
        return `**आपका समाधान:** ${data.solution}\n\n**यह कैसे काम करता है:** आप ${data.audience || 'ग्राहकों'} की मदद ${data.solution} द्वारा करते हैं।\n\n**मुख्य बिंदु:**\n• यह विशेष रूप से ${data.audience || 'इस बाजार'} के लिए बनाया गया है\n• यह मूल कारण को संबोधित करता है: ${data.problem || '[समस्या परिभाषित करें]'}\n• यह अब तैयार/उपलब्ध है${data.traction ? ` (${data.traction} द्वारा सिद्ध)` : ''}`;
      }
    },
    {
      id: 'market_size',
      category: 'market',
      question: "आपका लक्षित बाजार कितना बड़ा है (TAM/SAM/SOM)?",
      answer: (data) => {
        if (!data.audience) return "⚠️ बाजार आकार की गणना के लिए चरण 4 में अपने लक्षित दर्शकों को परिभाषित करें।";
        return `**लक्षित दर्शक:** ${data.audience}\n\n**बाजार आकार फ्रेमवर्क:**\n• **TAM (कुल):** दुनिया भर में सभी ${data.audience.split(' ').slice(-2).join(' ') || 'संभावित ग्राहक'}\n• **SAM (सेवा योग्य):** वह खंड जिसे आप अपने व्यवसाय मॉडल के साथ पहुंच सकते हैं\n• **SOM (प्राप्ति योग्य):** 3-5 वर्षों में आप क्या हासिल कर सकते हैं\n\n**शोध टिप:** "[आपका दर्शक] भारत बाजार आकार" देखें या Statista, IBEF से रिपोर्ट का उपयोग करें।`;
      }
    },
    {
      id: 'traction',
      category: 'investor',
      question: "आपके पास वर्तमान में क्या कर्षण (ट्रैक्शन) है?",
      answer: (data) => {
        if (!data.traction || ['none', 'no traction', 'not yet', 'zero', 'कोई नहीं'].includes(data.traction.toLowerCase())) {
          return `⚠️ **अभी कोई कर्षण नहीं?** प्री-सीड के लिए यह ठीक है, लेकिन एक स्पष्ट योजना होनी चाहिए:\n\n**वैकल्पिक प्रमाण बिंदु:**\n• "हमारी वेटलिस्ट पर 50 साइनअप हैं"\n• "हमने 30 ग्राहक साक्षात्कार किए - 80% ने भुगतान करने की पेशकश की"\n• "3 अनुकूलता पत्र (LOI) हैं"\n• "हमने [संस्था] के साथ एक पायलट चलाया जो X परिणाम दिखाता है"\n\n**अगला कदम:** चरण 5 में कोई भी मान्यता डेटा जोड़ें।`;
        }
        return `**वर्तमान कर्षण:** ${data.traction}\n\n**इसे कैसे प्रस्तुत करें:**\n• संख्या के साथ शुरुआत करें: "${data.traction}"\n• संदर्भ: क्या यह मासिक आवर्ती है? एक-समय? पायलट उपयोगकर्ता?\n• विकास दर: "20% मोम वृद्धि" (यदि सच हो)\n• **स्वयं पूछें:** क्या यह उस राउंड के लिए पर्याप्त है जो आप उठा रहे हैं?`;
      }
    },
    {
      id: 'revenue',
      category: 'investor',
      question: "आपका राजस्व मॉडल क्या है? आप पैसा कैसे कमाते हैं?",
      answer: (data) => {
        return `**राजस्व मॉडल मार्गदर्शन:**\n\nआपके पिच "${data.name || 'अनाम'}" के आधार पर, आप इनमें से एक का उपयोग करते हैं:\n\n**1. B2B SaaS:** मासिक/वार्षिक सदस्यता स्तर\n**2. मार्केटप्लेस:** प्रति लेनदेन कमीशन\n**3. भौतिक उत्पाद:** इकाई बिक्री + मार्जिन\n**4. सेवाएं:** प्रति घंटा/प्रोजेक्ट शुल्क\n\n**आपका विशिष्ट उत्तर:**\n"हम ${data.audience || 'ग्राहकों'} से [सदस्यता/प्रति-इकाई/कमीशन] के माध्यम से शुल्क लेते हैं क्योंकि ${data.solution || 'हमारा समाधान'} [समय सीमा] में मापनीय ROI देता है।"\n\n⚠️ **कार्रवाई:** यदि आपने निर्णय नहीं किया है, तो चरण 3 या 6 में अपनी मूल्य निर्धारण रणनीति जोड़ें।`;
      }
    },
    {
      id: 'competition',
      category: 'market',
      question: "आपके प्रतिस्पर्धी कौन हैं और आपका लाभ क्या है?",
      answer: (data) => {
        return `**प्रतिस्पर्धा फ्रेमवर्क:**\n\n**प्रत्यक्ष प्रतिस्पर्धी:** समान समाधान जैसे [नाम जोड़ें यदि ज्ञात हो]\n**अप्रत्यक्ष:** एक्सेल शीट, मैन्युअल प्रक्रियाएं, स्थिति को बनाए रखना\n\n**आपका भेदभाव (आपके पिच के आधार पर):**\n• **समस्या-विशिष्ट:** सामान्य उपकरणों के विपरीत, आप विशेष रूप से "${data.problem || '[समस्या परिभाषित करें]'}" को हल करते हैं\n• **दर्शक-विशिष्ट:** ${data.audience || '[दर्शक परिभाषित करें]'} के लिए बनाया गया, सामान्य एंटरप्राइज़ के लिए नहीं\n• **स्थानीय लाभ:** भारत-पहला दृष्टिकोण\n\n**पिच टिप:** "हमारे कोई प्रतिस्पर्धी नहीं हैं" न कहें। कहें "पुराने खिलाड़ी X के माध्यम से इसे हल करते हैं, हम Y करते हैं जो [दर्शक] के लिए बेहतर है क्योंकि Z।"`;
      }
    },
    {
      id: 'team',
      category: 'investor',
      question: "मुझे अपनी टीम के बारे में बताएं। आप सही लोग क्यों हैं?",
      answer: (data) => {
        return `**टीम उत्तर टेम्पलेट:**\n\n"हम [संख्या] संस्थापक हैं जिनके पास [X वर्ष] का [उद्योग/डोमेन] में संयुक्त अनुभव है।\n\n**हमारा बढ़त:**\n• **डोमेन विशेषज्ञता:** हमने ${data.audience || 'इस उद्योग'} में/में काम किया है\n• **तकनीकी क्षमता:** [तकनीक ढेर/कौशल] के साथ ${data.solution || 'यह समाधान'} बनाया\n• **संस्थापक-बाजार फिट:** हमने व्यक्तिगत रूप से ${data.problem || 'इस समस्या'} का अनुभव किया\n\n**सलाहकार:** [यदि आपके पास सलाहकार/संरक्षक हैं, तो 1-2 उल्लेखनीय नाम बताएं]\n\n⚠️ **नोट:** अपनी पिच डेटा में अपनी टीम का विवरण जोड़ें।`;
      }
    },
    {
      id: 'funding',
      category: 'investor',
      question: "आप कितना उठा रहे हैं और इसका उपयोग कैसे करेंगे?",
      answer: (data) => {
        if (!data.cta) return "⚠️ चरण 6 में अपना कॉल टू एक्शन परिभाषित करें। इसमें आमतौर पर आपकी मांग (फंडिंग राशि या भागीदारी अनुरोध) शामिल होता है।";
        return `**आपका वर्तमान CTA:** ${data.cta}\n\n**यदि फंड उठा रहे हैं:**\n• **राशि:** [INR X लाख/करोड़ या $X निर्दिष्ट करें]\n• **इंस्ट्रूमेंट:** इक्विटी, SAFE, या कन्वर्टिबल नोट\n• **फंड का उपयोग:** 40% उत्पाद विकास, 30% मार्केटिंग, 20% संचालन, 10% बफर\n• **रनवे:** [मील का पत्थर] तक पहुंचने के लिए 18-24 महीने\n\n**यदि अभी उठा नहीं रहे:**\n"हमें ${data.audience || 'अधिक ग्राहकों'} तक पहुंचने और हमारे पायलट परिणामों ${data.traction || '[कर्षण]'} को मान्य करने में मदद के लिए रणनीतिक भागीदारों की तलाश है।"\n\n**बेहतर बनाएं:** चरण 6 में अपने CTA को सटीक राशियों के साथ अधिक विशिष्ट बनाएं।`;
      }
    },
    {
      id: 'metrics',
      category: 'technical',
      question: "आपके प्रमुख मेट्रिक्स क्या हैं? (KPI)",
      answer: (data) => {
        return `**साझा करने के लिए मेट्रिक्स:**\n\n**विकास मेट्रिक्स:**\n• उपयोगकर्ता अधिग्रहण दर (साप्ताहिक/मासिक)\n• धारणा दर (D7, D30 ऐप के लिए)\n• ${data.traction ? `वर्तमान आधार रेखा: ${data.traction}` : 'कर्षण: [चरण 5 में अपनी संख्या जोड़ें]'}\n\n**यूनिट इकॉनमिक्स:**\n• CAC (ग्राहक अधिग्रहण लागत)\n• LTV (जीवनकाल मूल्य) या ARPU (औसत राजस्व प्रति उपयोगकर्ता)\n• सकल मार्जिन\n\n**सहभागिता:**\n• MAU/DAU (मासिक/दैनिक सक्रिय उपयोगकर्ता)\n• परीक्षण से भुगतान रूपांतरण दर\n\n**आपके पिच "${data.name || '...'}" के लिए:** गणना करें कि कौन से 3 नंबर ${data.solution || 'आपके समाधान'} की मांग को सबसे अच्छा साबित करते हैं।`;
      }
    },
    {
      id: 'risks',
      category: 'investor',
      question: "सबसे बड़े जोखिम क्या हैं और आप उन्हें कैसे कम करते हैं?",
      answer: (data) => {
        return `**${data.name || 'आपके स्टार्टअप'} के लिए जोखिम फ्रेमवर्क:**\n\n**बाजार जोखिम:** "${data.audience || 'ग्राहक'} जल्दी से अपना सकेंगे"\n→ शमन: ${data.traction ? `${data.traction.split(' ')[0]} उपयोगकर्ताओं के साथ पायलट मांग दिखाता है` : 'भुगतान करने की इच्छा को मान्य करने के लिए ग्राहक साक्षात्कार चलाना'}\n\n**तकनीकी जोखिम:** "${data.solution || 'समाधान'} बनाने के लिए [तकनीकी क्षमता] की आवश्यकता होती है"\n→ शमन: ${data.solution && data.solution.toLowerCase().includes('ai') ? 'स्क्रैच से मॉडल बनाने के बजाय सिद्ध AI API का उपयोग करना' : 'MVP दृष्टिकोण - पहले मुख्य सुविधाओं के साथ लॉन्च करना'}\n\n**प्रतिस्पर्धा जोखिम:** "बड़े खिलाड़ी इसे कॉपी कर सकते हैं"\n→ शमन: ${data.audience || 'विशिष्ट आला'} पर ध्यान केंद्रित करके बाजार में गति और स्थानीयकरण लाभ\n\n**ईमानदारी जीतती है:** 2 वास्तविक जोखिमों को स्वीकार करें और दिखाएं कि आपने शमन के बारे में सोचा है।`;
      }
    },
    {
      id: 'scalability',
      category: 'technical',
      question: "आप इसे 10x या 100x तक कैसे बढ़ाएंगे?",
      answer: (data) => {
        return `**${data.solution || 'आपके समाधान'} के लिए स्केलिंग रणनीति:**\n\n**चरण 1 (अभी):** [1-2 शहरों/क्षेत्रों] में ${data.audience || '[लक्षित दर्शक]'}\n**चरण 2 (वर्ष 1):** [चैनल: प्रत्यक्ष बिक्री/भागीदारी/डिजिटल] के माध्यम से शीर्ष 10 महानगरों/संस्थानों में विस्तार\n**चरण 3 (वर्ष 3):** \n• भौगोलिक: अन्य भारतीय शहर / SAARC देश\n• उत्पाद: LTV बढ़ाने के लिए [आसन्न सुविधाएं] जोड़ना\n• चैनल: [संगठनों के प्रकार] के साथ B2B2C भागीदारी\n\n**तकनीकी उत्तोलन:** ${data.solution && data.solution.toLowerCase().includes('app') ? 'ऐप-आधारित वितरण प्रति नए उपयोगकर्ता की शून्य सीमीय लागत की अनुमति देता है' : 'प्लेटफ़ॉर्म दृष्टिकोण एक ही इन्फ्रास्ट्रक्चर के साथ कई ग्राहकों की सेवा करने की अनुमति देता है'}\n\n**प्रमुख सक्षमकर्ता:** "${data.cta || 'चरण 6'}" में आप जो फंडिंग/भागीदारी चाह रहे हैं।`;
      }
    }
  ]
};

const PITCH_STYLES = {
  standard: {
    en: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[.]+$/, '');
      const s = data.solution?.trim().replace(/[.]+$/, '');
      const a = data.audience?.trim().replace(/[.]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'Pitch', text: `We solve ${p} using ${s} for ${a}.` });
      }
      if (t && !['no traction', 'none', 'not yet', 'zero'].some(x => t.toLowerCase().includes(x))) {
        parts.push({ key: 'traction', label: 'Proof', text: `We've already seen traction: ${t.replace(/[.]+$/, '')}.` });
      }
      if (c) {
        let ctaText = c.replace(/[.]+$/, '');
        if (ctaText.toLowerCase() === 'give feedback') ctaText = "We'd love your feedback";
        parts.push({ key: 'cta', label: 'Ask', text: `${ctaText}.` });
      }
      return parts;
    },
    hi: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[।]+$/, '');
      const s = data.solution?.trim().replace(/[।]+$/, '');
      const a = data.audience?.trim().replace(/[।]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'पिच', text: `हम ${s} का उपयोग करके ${p} को हल करते हैं ${a} के लिए।` });
      }
      if (t && !['no traction', 'none', 'not yet', 'zero', 'कोई ट्रैक्शन नहीं'].some(x => t.toLowerCase().includes(x))) {
        parts.push({ key: 'traction', label: 'प्रमाण', text: `हमने पहले से ही ट्रैक्शन देखा है: ${t.replace(/[।]+$/, '')}।` });
      }
      if (c) {
        parts.push({ key: 'cta', label: 'कार्रवाई', text: `${c.replace(/[।]+$/, '')}।` });
      }
      return parts;
    }
  },
  
  investor: {
    en: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[.]+$/, '');
      const s = data.solution?.trim().replace(/[.]+$/, '');
      const a = data.audience?.trim().replace(/[.]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'Opportunity', text: `Addressing ${p}. We've built ${s} for ${a}.` });
      }
      if (t) {
        const noTraction = ['no traction', 'none', 'not yet'].some(x => t.toLowerCase().includes(x));
        parts.push({ key: 'traction', label: 'Metrics', text: noTraction ? `Pre-revenue with validated demand.` : `Currently at ${t.replace(/[.]+$/, '')} and growing.` });
      }
      if (c) parts.push({ key: 'cta', label: 'Investment', text: `${c.replace(/[.]+$/, '')}.` });
      return parts;
    },
    hi: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[।]+$/, '');
      const s = data.solution?.trim().replace(/[।]+$/, '');
      const a = data.audience?.trim().replace(/[।]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'अवसर', text: `${p} को संबोधित करते हुए। हमने ${a} के लिए ${s} बनाया है।` });
      }
      if (t) {
        const noTraction = ['no traction', 'none', 'not yet', 'कोई ट्रैक्शन नहीं'].some(x => t.toLowerCase().includes(x));
        parts.push({ key: 'traction', label: 'मेट्रिक्स', text: noTraction ? `मान्य मांग के साथ पूर्व-राजस्व।` : `वर्तमान में ${t.replace(/[।]+$/, '')} और बढ़ रहा है।` });
      }
      if (c) parts.push({ key: 'cta', label: 'निवेश', text: `${c.replace(/[।]+$/, '')}।` });
      return parts;
    }
  },
  
  casual: {
    en: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[.]+$/, '').toLowerCase();
      const s = data.solution?.trim().replace(/[.]+$/, '');
      const a = data.audience?.trim().replace(/[.]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'Hook', text: `Ever deal with ${p}? We made ${s} to help ${a} out.` });
      }
      if (t && !['no traction', 'none', 'not yet'].some(x => t.toLowerCase().includes(x))) {
        parts.push({ key: 'traction', label: 'Proof', text: `It's working too—${t.replace(/[.]+$/, '')}.` });
      }
      if (c) parts.push({ key: 'cta', label: 'Ask', text: `${c.replace(/[.]+$/, '')}.` });
      return parts;
    },
    hi: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[।]+$/, '').toLowerCase();
      const s = data.solution?.trim().replace(/[।]+$/, '');
      const a = data.audience?.trim().replace(/[।]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'हुक', text: `कभी ${p} से निपटा है? हमने ${a} की मदद के लिए ${s} बनाया है।` });
      }
      if (t && !['no traction', 'none', 'not yet', 'कोई ट्रैक्शन नहीं'].some(x => t.toLowerCase().includes(x))) {
        parts.push({ key: 'traction', label: 'प्रमाण', text: `यह भी काम कर रहा है—${t.replace(/[।]+$/, '')}।` });
      }
      if (c) parts.push({ key: 'cta', label: 'पूछें', text: `${c.replace(/[।]+$/, '')}।` });
      return parts;
    }
  },
  
  punch: {
    en: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[.?!]+$/, '');
      const s = data.solution?.trim().replace(/[.]+$/, '');
      const a = data.audience?.trim().replace(/[.]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'Punch', text: `${p}? ${s}. For ${a}.` });
      }
      if (t && !['no traction', 'none', 'not yet'].some(x => t.toLowerCase().includes(x))) {
        parts.push({ key: 'traction', label: 'Proof', text: `Proven: ${t.replace(/[.]+$/, '')}.` });
      }
      if (c) parts.push({ key: 'cta', label: 'Next', text: `${c.replace(/[.]+$/, '')}.` });
      return parts;
    },
    hi: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[।!?]+$/, '');
      const s = data.solution?.trim().replace(/[।]+$/, '');
      const a = data.audience?.trim().replace(/[।]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'पंच', text: `${p}? ${s}। ${a} के लिए।` });
      }
      if (t && !['no traction', 'none', 'not yet', 'कोई ट्रैक्शन नहीं'].some(x => t.toLowerCase().includes(x))) {
        parts.push({ key: 'traction', label: 'प्रमाण', text: `सिद्ध: ${t.replace(/[।]+$/, '')}।` });
      }
      if (c) parts.push({ key: 'cta', label: 'अगला', text: `${c.replace(/[।]+$/, '')}।` });
      return parts;
    }
  },
  
  vision: {
    en: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[.]+$/, '').toLowerCase();
      const s = data.solution?.trim().replace(/[.]+$/, '');
      const a = data.audience?.trim().replace(/[.]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'Vision', text: `Imagine a world without ${p}. We're making that real with ${s} for ${a}.` });
      }
      if (t) {
        const noTraction = ['no traction', 'none', 'not yet'].some(x => t.toLowerCase().includes(x));
        parts.push({ key: 'traction', label: noTraction ? 'Journey' : 'Momentum', text: noTraction ? `We're just getting started.` : `The future is already beginning: ${t.replace(/[.]+$/, '')}.` });
      }
      if (c) parts.push({ key: 'cta', label: 'Join Us', text: `${c.replace(/[.]+$/, '')}.` });
      return parts;
    },
    hi: (data) => {
      const parts = [];
      const p = data.problem?.trim().replace(/[।]+$/, '').toLowerCase();
      const s = data.solution?.trim().replace(/[।]+$/, '');
      const a = data.audience?.trim().replace(/[।]+$/, '');
      const t = data.traction?.trim();
      const c = data.cta?.trim();
      
      if (p && s && a) {
        parts.push({ key: 'main', label: 'विजन', text: `एक ऐसी दुनिया की कल्पना करें जहां ${p} न हो। हम ${s} के साथ ${a} के लिए इसे वास्तविक बना रहे हैं।` });
      }
      if (t) {
        const noTraction = ['no traction', 'none', 'not yet', 'कोई ट्रैक्शन नहीं'].some(x => t.toLowerCase().includes(x));
        parts.push({ key: 'traction', label: noTraction ? 'यात्रा' : 'गति', text: noTraction ? `हम अभी शुरुआत कर रहे हैं।` : `भविष्य पहले से ही शुरू हो चुका है: ${t.replace(/[।]+$/, '')}।` });
      }
      if (c) parts.push({ key: 'cta', label: 'हमारे साथ जुड़ें', text: `${c.replace(/[।]+$/, '')}।` });
      return parts;
    }
  }
};

const STEPS_DATA = {
  en: [
    { id: 'name', label: 'Step 1 of 6', pills: [], max: 60 },
    { id: 'problem', label: 'Step 2 of 6', pills: ['Time wasted','Cost issue','Safety risk'], max: 200 },
    { id: 'solution', label: 'Step 3 of 6', pills: ['App','Platform','Service'], max: 200 },
    { id: 'audience', label: 'Step 4 of 6', pills: ['Students','SMEs','Enterprises'], max: 150 },
    { id: 'traction', label: 'Step 5 of 6', pills: ['Pilot users','Revenue'], max: 150 },
    { id: 'cta', label: 'Step 6 of 6', pills: ['Invest','Partner','Feedback'], max: 150 }
  ],
  hi: [
    { id: 'name', label: 'चरण 1 of 6', pills: [], max: 60 },
    { id: 'problem', label: 'चरण 2 of 6', pills: ['समय बर्बाद','लागत मुद्दा','सुरक्षा जोखिम'], max: 200 },
    { id: 'solution', label: 'चरण 3 of 6', pills: ['ऐप','प्लेटफॉर्म','सेवा'], max: 200 },
    { id: 'audience', label: 'चरण 4 of 6', pills: ['छात्र','SME','कंपनियां'], max: 150 },
    { id: 'traction', label: 'चरण 5 of 6', pills: ['पायलट उपयोगकर्ता','राजस्व'], max: 150 },
    { id: 'cta', label: 'चरण 6 of 6', pills: ['निवेश','भागीदारी','फीडबैक'], max: 150 }
  ]
};

// ==========================================
// SPEECH SYNTHESIS
// ==========================================

let isSpeaking = false;
let speechUtterance = null;
let voicesLoaded = false;
let availableVoices = [];
let chromeResumeInterval = null;

function initSpeech() {
  if (!window.speechSynthesis) return;
  availableVoices = window.speechSynthesis.getVoices();
  if (availableVoices.length > 0) {
    voicesLoaded = true;
  } else {
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      availableVoices = window.speechSynthesis.getVoices();
      voicesLoaded = true;
    }, { once: true });
    setTimeout(() => {
      if (!voicesLoaded) {
        availableVoices = window.speechSynthesis.getVoices();
        voicesLoaded = true;
      }
    }, 1000);
  }
}

function getVoiceForLanguage() {
  if (!availableVoices.length) availableVoices = window.speechSynthesis.getVoices();
  if (currentLang === 'hi') {
    const hindiPatterns = ['hi-', 'hi_', 'hi ', 'hindi', 'india', 'भारतीय', 'हिंदी'];
    for (const pattern of hindiPatterns) {
      const voice = availableVoices.find(v => v.lang.toLowerCase().includes(pattern) || v.name.toLowerCase().includes(pattern));
      if (voice) return voice;
    }
    return null;
  } else {
    return availableVoices.find(v => v.lang === 'en-US') || availableVoices.find(v => v.lang.startsWith('en-')) || availableVoices[0];
  }
}

function toggleSpeech() {
  if (isSpeaking) {
    window.speechSynthesis.cancel();
    stopSpeechUI();
    return;
  }
  
  const parts = buildPitch(state.data);
  const text = parts.map(p => p.text).join(' ');
  
  if (!text.trim()) {
    showToast(UI_TEXT[currentLang].toast.noContent);
    return;
  }
  
  if (!window.speechSynthesis) {
    showToast('Speech not supported');
    return;
  }
  
  if (availableVoices.length === 0) {
    initSpeech();
    if (availableVoices.length === 0) {
      setTimeout(() => toggleSpeech(), 1000);
      return;
    }
  }
  
  speak(text);
}

function speak(text) {
  window.speechSynthesis.cancel();
  speechUtterance = new SpeechSynthesisUtterance(text);
  const voice = getVoiceForLanguage();
  
  if (voice) {
    speechUtterance.voice = voice;
    speechUtterance.lang = voice.lang;
  } else {
    speechUtterance.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';
    if (currentLang === 'hi') showToast(UI_TEXT[currentLang].toast.noHindiVoice);
  }
  
  speechUtterance.rate = 0.9;
  speechUtterance.pitch = 1;
  
  speechUtterance.onstart = () => {
    isSpeaking = true;
    updateSpeakButton(true);
    startChromeKeepAlive();
  };
  
  speechUtterance.onend = () => stopSpeechUI();
  speechUtterance.onerror = (e) => {
    console.error('Speech error:', e);
    stopSpeechUI();
  };
  
  window.speechSynthesis.speak(speechUtterance);
}

function startChromeKeepAlive() {
  if (chromeResumeInterval) clearInterval(chromeResumeInterval);
  chromeResumeInterval = setInterval(() => {
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    else if (!window.speechSynthesis.speaking && isSpeaking) stopSpeechUI();
  }, 5000);
}

function stopChromeKeepAlive() {
  if (chromeResumeInterval) {
    clearInterval(chromeResumeInterval);
    chromeResumeInterval = null;
  }
}

function stopSpeechUI() {
  isSpeaking = false;
  stopChromeKeepAlive();
  updateSpeakButton(false);
}

function updateSpeakButton(speaking) {
  const btn = document.getElementById('speak-btn');
  const icon = document.getElementById('speak-icon');
  const text = document.getElementById('speak-text');
  if (!btn || !icon || !text) return;
  
  if (speaking) {
    btn.classList.add('speaking');
    icon.textContent = '⏹️';
    text.textContent = currentLang === 'hi' ? 'रोकें' : 'Stop';
  } else {
    btn.classList.remove('speaking');
    icon.textContent = '▶️';
    text.textContent = UI_TEXT[currentLang].speakBtn;
  }
}

// ==========================================
// CORE FUNCTIONS
// ==========================================

function initTheme() {
  const saved = localStorage.getItem('pl_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeUI(saved);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const neu = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', neu);
  localStorage.setItem('pl_theme', neu);
  updateThemeUI(neu);
  showToast(neu === 'light' ? 'Light mode' : 'Dark mode');
}

function updateThemeUI(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'light' ? '🌙' : '☀️';
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-hi').classList.toggle('active', lang === 'hi');
  updateUILanguage();
  buildStepper();
  buildStepCard();
  updateLivePreview();
  if (document.getElementById('tab-preview')?.classList.contains('active')) renderPreview();
  if (document.getElementById('tab-ask')?.classList.contains('active')) {
    initAskTab();
    if (currentAskMode === 'prep') renderQAPrep();
  }
  showToast(lang === 'en' ? 'Language: English' : 'भाषा: हिंदी');
}

function updateUILanguage() {
  const t = UI_TEXT[currentLang];
  const ids = ['app-subtitle', 'new-btn-text', 'tab-builder-btn', 'tab-preview-btn', 'tab-saved-btn', 'tab-ask-btn', 'style-label', 'template-label', 'preview-box-label', 'breakdown-label', 'time-label', 'speak-text', 'copy-text', 'save-text'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === 'tab-builder-btn') el.textContent = t.tabs.builder;
    else if (id === 'tab-preview-btn') el.textContent = t.tabs.preview;
    else if (id === 'tab-ask-btn') el.textContent = t.tabs.ask;
    else if (id === 'tab-saved-btn') el.textContent = t.tabs.saved;
    else if (t[id]) el.textContent = t[id];
  });
  
  const stylePills = document.getElementById('style-pills');
  if (stylePills) {
    stylePills.innerHTML = Object.entries(t.styles).map(([k, v]) => 
      `<button class="pill ${state.style === k ? 'active' : ''}" data-style="${k}" onclick="changeStyle('${k}')">${v}</button>`
    ).join('');
  }
  
  const templatePills = document.getElementById('template-pills');
  if (templatePills) {
    templatePills.innerHTML = Object.entries(t.templates).map(([k, v]) => 
      `<button class="pill template-pill" onclick="loadTemplate('${k}')">${v}</button>`
    ).join('');
  }
}

function getSteps() {
  const base = STEPS_DATA[currentLang];
  const ui = UI_TEXT[currentLang].steps;
  return base.map((step, i) => ({...step, title: ui[i].title, hint: ui[i].hint, placeholder: ui[i].placeholder}));
}

function buildPitch(data) {
  const formatter = PITCH_STYLES[state.style]?.[currentLang];
  return formatter ? formatter(data) : [];
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2400);
}

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

function buildStepper() {
  const steps = getSteps();
  const el = document.getElementById('stepper');
  if (!el) return;
  el.innerHTML = '';
  steps.forEach((s, i) => {
    const dot = document.createElement('div');
    dot.className = 'step-dot' + (i < state.current ? ' done' : i === state.current ? ' active' : '');
    dot.textContent = i < state.current ? '✓' : (i + 1);
    el.appendChild(dot);
    if (i < steps.length - 1) {
      const line = document.createElement('div');
      line.className = 'step-line';
      el.appendChild(line);
    }
  });
}

function buildStepCard() {
  const steps = getSteps();
  const s = steps[state.current];
  const card = document.getElementById('step-card');
  if (!card) return;
  const val = state.data[s.id] || '';
  card.innerHTML = `
    <div class="step-label">${s.label}</div>
    <div class="step-title">${s.title}</div>
    <div class="step-hint">${s.hint}</div>
    ${s.pills.length ? `<div class="pill-row">${s.pills.map(p => `<div class="pill" onclick="insertPill(this,'${p}')">${p}</div>`).join('')}</div>` : ''}
    ${s.id === 'name' ? `<input type="text" id="step-input" maxlength="${s.max}" placeholder="${s.placeholder}" value="${val}">` : `<textarea id="step-input" maxlength="${s.max}" placeholder="${s.placeholder}">${val}</textarea>`}
    <div class="char-row">${s.id !== 'name' ? `<div class="wc-label" id="wc-label">0 words</div>` : '<div></div>'}<span class="char-count"><span id="cc">0</span> / ${s.max}</span></div>
    ${s.id !== 'name' ? `<div class="wc-bar"><div class="wc-fill" id="wc-fill" style="width:0%"></div></div>` : ''}
    <div class="btn-row">
      ${state.current > 0 ? `<button class="btn" onclick="prevStep()">${currentLang === 'hi' ? '← वापस' : '← Back'}</button>` : ''}
      <button class="btn btn-primary" onclick="nextStep()">${state.current === steps.length - 1 ? (currentLang === 'hi' ? 'पूर्वावलोकन →' : 'Preview →') : (currentLang === 'hi' ? 'अगला →' : 'Next →')}</button>
      ${state.current > 0 && state.current < steps.length - 1 ? `<button class="btn" onclick="skipStep()">${currentLang === 'hi' ? 'छोड़ें' : 'Skip'}</button>` : ''}
    </div>
  `;
  const inp = document.getElementById('step-input');
  const cc = document.getElementById('cc');
  if (!inp || !cc) return;
  
  function update() {
    const v = inp.value;
    cc.textContent = v.length;
    state.data[s.id] = v;
    updateLivePreview();
    if (s.id !== 'name') {
      const wc = countWords(v);
      const pct = Math.min(100, Math.round(wc / Math.round(s.max / 5) * 100));
      const wl = document.getElementById('wc-label');
      const wf = document.getElementById('wc-fill');
      if (wl) wl.textContent = wc + (wc !== 1 ? (currentLang === 'hi' ? ' शब्द' : ' words') : (currentLang === 'hi' ? ' शब्द' : ' word'));
      if (wf) {
        wf.style.width = pct + '%';
        wf.style.background = pct > 80 ? '#34d399' : '#7c6af7';
      }
    }
  }
  inp.addEventListener('input', update);
  update();
  inp.focus();
}

function insertPill(el, text) {
  const inp = document.getElementById('step-input');
  if (!inp) return;
  const cur = inp.value.trim();
  inp.value = cur ? (cur + ', ' + text) : text;
  inp.dispatchEvent(new Event('input'));
  el.classList.add('sel');
}

function updateLivePreview() {
  const parts = buildPitch(state.data);
  const el = document.getElementById('live-preview');
  if (!el) return;
  if (!parts.length) {
    el.innerHTML = `<span style="color:var(--text3);font-style:italic">${currentLang === 'hi' ? 'यहां आपका पिच दिखाई देगा...' : 'Your pitch will appear here...'}</span>`;
    return;
  }
  el.innerHTML = parts.map(p => `<span>${p.text} </span>`).join('');
}

function nextStep() {
  const steps = getSteps();
  const inp = document.getElementById('step-input');
  if (!inp) return;
  if (state.current === 0 && !inp.value.trim()) {
    showToast(currentLang === 'hi' ? 'कृपया पिच का नाम दें' : 'Please give your pitch a name');
    return;
  }
  state.data[steps[state.current].id] = inp.value.trim();
  if (state.current === steps.length - 1) {
    switchTab('preview');
    renderPreview();
    return;
  }
  state.current++;
  buildStepper();
  buildStepCard();
}

function prevStep() {
  const steps = getSteps();
  const inp = document.getElementById('step-input');
  if (!inp) return;
  state.data[steps[state.current].id] = inp.value.trim();
  state.current--;
  buildStepper();
  buildStepCard();
}

function skipStep() {
  state.current++;
  buildStepper();
  buildStepCard();
}

function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === name));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'tab-' + name));
  if (name === 'preview') renderPreview();
  if (name === 'saved') renderSaved();
  if (name === 'ask') {
    initAskTab();
    if (currentAskMode === 'prep') renderQAPrep();
  }
}

function renderPreview() {
  const parts = buildPitch(state.data);
  const fullText = parts.map(p => p.text).join(' ');
  const wc = countWords(fullText);
  const totalS = Math.round(wc / 130 * 60);
  const mins = Math.floor(totalS / 60);
  const secs = totalS % 60;
  const dur = `${mins}:${String(secs).padStart(2, '0')}`;
  
  document.getElementById('preview-title').textContent = state.data.name || (currentLang === 'hi' ? 'आपका पिच' : 'Your pitch');
  document.getElementById('final-text').textContent = fullText || (currentLang === 'hi' ? 'अभी तक कोई सामग्री नहीं।' : 'No content yet.');
  document.getElementById('timer-fill').style.width = Math.min(100, Math.round(wc / 260 * 100)) + '%';
  document.getElementById('timer-num').textContent = dur;
  
  const badge = document.getElementById('word-badge');
  const over = wc > 260;
  if (badge) badge.innerHTML = `<span class="badge ${over ? 'badge-warn' : 'badge-success'}">${wc} ${currentLang === 'hi' ? 'शब्द' : 'words'} · ~${dur}</span>`;
  
  const bc = document.getElementById('breakdown-cards');
  if (!bc) return;
  if (!parts.length) {
    bc.innerHTML = `<div style="color:var(--text3);font-size:13px">${currentLang === 'hi' ? 'अभी तक कोई सामग्री नहीं।' : 'No content yet.'}</div>`;
    return;
  }
  const colors = { main: '#a78bfa', traction: '#34d399', cta: '#fbbf24' };
  bc.innerHTML = parts.map(p => `<div class="breakdown-card"><div class="bd-label" style="color:${colors[p.key] || '#a78bfa'}">${p.label}</div><div class="bd-text">${p.text}</div></div>`).join('');
}

function changeStyle(styleKey) {
  state.style = styleKey;
  document.querySelectorAll('#style-pills .pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.style === styleKey);
  });
  updateLivePreview();
  if (document.getElementById('tab-preview')?.classList.contains('active')) renderPreview();
}

function loadTemplate(templateKey) {
  const templates = currentLang === 'hi' ? PREDEFINED_TEMPLATES_HI : PREDEFINED_TEMPLATES_EN;
  const tmpl = templates[templateKey];
  if (!tmpl) return;
  state.data = { ...tmpl.data };
  state.current = 0;
  state.editId = null;
  buildStepper();
  buildStepCard();
  updateLivePreview();
  showToast(`${UI_TEXT[currentLang].toast.loaded}: ${tmpl.name}`);
}

function copyPitch() {
  const text = buildPitch(state.data).map(p => p.text).join(' ');
  if (!text.trim()) {
    showToast(UI_TEXT[currentLang].toast.noContent);
    return;
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(UI_TEXT[currentLang].toast.copied));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(UI_TEXT[currentLang].toast.copied);
  }
}

function savePitch() {
  if (!state.data.name) {
    showToast(currentLang === 'hi' ? 'चरण 1 में नाम जोड़ें' : 'Add a name in step 1');
    return;
  }
  const pitches = JSON.parse(localStorage.getItem('pl_pitches') || '[]');
  const pitch = {
    id: state.editId || Date.now().toString(),
    name: state.data.name,
    data: { ...state.data },
    style: state.style,
    lang: currentLang,
    created: Date.now()
  };
  if (state.editId) {
    const i = pitches.findIndex(p => p.id === state.editId);
    if (i > -1) pitches[i] = pitch;
    else pitches.unshift(pitch);
  } else {
    pitches.unshift(pitch);
  }
  localStorage.setItem('pl_pitches', JSON.stringify(pitches));
  state.editId = pitch.id;
  showToast(UI_TEXT[currentLang].toast.saved);
}

function renderSaved() {
  const el = document.getElementById('saved-list');
  if (!el) return;
  const pitches = JSON.parse(localStorage.getItem('pl_pitches') || '[]');
  if (!pitches.length) {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">📋</div><div class="empty-title">${currentLang === 'hi' ? 'कोई सेव पिच नहीं' : 'No saved pitches'}</div><div class="empty-sub">${currentLang === 'hi' ? 'टेम्पलेट लोड करें या नया बनाएं' : 'Load a template or create new'}</div></div>`;
    return;
  }
  el.innerHTML = pitches.map(p => {
    const langLabel = p.lang === 'hi' ? 'हिंदी' : 'EN';
    return `<div class="pitch-card" onclick="loadSaved('${p.id}')"><div class="pitch-avatar">💡</div><div class="pitch-card-body"><div class="pitch-card-name">${p.name}</div><div class="pitch-card-meta">${p.style || 'Standard'} · ${langLabel}</div></div><div class="pitch-card-actions" onclick="event.stopPropagation()"><button class="icon-btn" onclick="loadSaved('${p.id}')">✏️</button><button class="icon-btn" onclick="deletePitch('${p.id}')">🗑️</button></div></div>`;
  }).join('');
}

function loadSaved(id) {
  const pitches = JSON.parse(localStorage.getItem('pl_pitches') || '[]');
  const p = pitches.find(x => x.id === id);
  if (!p) return;
  if (p.lang && p.lang !== currentLang) setLanguage(p.lang);
  state = { current: 0, data: { ...p.data }, editId: id, style: p.style || 'standard' };
  buildStepper();
  buildStepCard();
  updateLivePreview();
  switchTab('builder');
  showToast(UI_TEXT[currentLang].toast.loaded);
}

function deletePitch(id) {
  const pitches = JSON.parse(localStorage.getItem('pl_pitches') || '[]').filter(p => p.id !== id);
  localStorage.setItem('pl_pitches', JSON.stringify(pitches));
  renderSaved();
  showToast(UI_TEXT[currentLang].toast.deleted);
}

function resetPitch() {
  state = { current: 0, data: {}, editId: null, style: 'standard' };
  buildStepper();
  buildStepCard();
  updateLivePreview();
  switchTab('builder');
}

// ==========================================
// Q&A FEATURE FUNCTIONS
// ==========================================

let currentAskMode = 'chat';
let currentFilter = 'all';

function initAskTab() {
  const t = UI_TEXT[currentLang];
  const title = document.getElementById('ask-title');
  const subtitle = document.getElementById('ask-subtitle');
  const welcome = document.getElementById('welcome-text');
  const quickLabel = document.getElementById('quick-label');
  const input = document.getElementById('chat-input');
  const sendText = document.getElementById('send-text');
  const modeChat = document.getElementById('mode-chat-text');
  const modePrep = document.getElementById('mode-prep-text');
  
  if (title) title.textContent = t.askTitle;
  if (subtitle) subtitle.textContent = t.askSubtitle;
  if (welcome) welcome.textContent = t.welcomeText;
  if (quickLabel) quickLabel.textContent = currentLang === 'hi' ? 'त्वरित प्रश्न:' : 'Quick questions:';
  if (input) input.placeholder = t.askPlaceholder;
  if (sendText) sendText.textContent = t.sendBtn;
  if (modeChat) modeChat.textContent = currentLang === 'hi' ? 'चैट' : 'Chat';
  if (modePrep) modePrep.textContent = currentLang === 'hi' ? 'तैयारी' : 'Prep';
  
  renderQuickQuestions();
  
  if (input && !input.dataset.listenerAdded) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendQuestion();
    });
    input.dataset.listenerAdded = 'true';
  }
}

function setAskMode(mode) {
  currentAskMode = mode;
  document.getElementById('mode-chat').classList.toggle('active', mode === 'chat');
  document.getElementById('mode-prep').classList.toggle('active', mode === 'prep');
  document.getElementById('ask-chat-mode').classList.toggle('active', mode === 'chat');
  document.getElementById('ask-prep-mode').classList.toggle('active', mode === 'prep');
  if (mode === 'prep') renderQAPrep();
}

function renderQuickQuestions() {
  const container = document.getElementById('quick-chips');
  if (!container) return;
  const t = UI_TEXT[currentLang];
  container.innerHTML = t.quickQuestions.map(q => 
    `<div class="quick-chip" onclick="askQuickQuestion('${q}')">${q}</div>`
  ).join('');
}

function askQuickQuestion(question) {
  const input = document.getElementById('chat-input');
  if (input) input.value = question;
  sendQuestion();
}

function sendQuestion() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;
  
  addMessage(message, 'user');
  input.value = '';
  
  const welcome = document.getElementById('chat-welcome');
  if (welcome) welcome.style.display = 'none';
  
  showTyping();
  
  setTimeout(() => {
    hideTyping();
    const response = generateResponse(message);
    addMessage(response, 'assistant');
  }, 600 + Math.random() * 800);
}

function addMessage(text, sender) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.innerHTML = `
    <div class="message-bubble">${text.replace(/\n/g, '<br>')}</div>
    <div class="message-time">${time}</div>
  `;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById('chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;
}

function hideTyping() {
  const typing = document.getElementById('typing-indicator');
  if (typing) typing.remove();
}

function generateResponse(question) {
  const q = question.toLowerCase();
  const lang = currentLang;
  const responses = QA_RESPONSES[lang];
  const data = state.data;
  
  if (q.includes('long') || q.includes('length') || q.includes('word') || q.includes('minute') || q.includes('time') || (lang === 'hi' && (q.includes('लंबा') || q.includes('शब्द')))) {
    return responses.length_check(data);
  }
  if (q.includes('target') || q.includes('audience') || q.includes('market') || (lang === 'hi' && (q.includes('लक्षित') || q.includes('बाजार')))) {
    return responses.target_market(data);
  }
  if (q.includes('cta') || q.includes('call to action') || q.includes('improve') || (lang === 'hi' && (q.includes('सुधार') || q.includes('कार्रवाई')))) {
    return responses.improve_cta(data);
  }
  if (q.includes('summary') || q.includes('summarize') || (lang === 'hi' && (q.includes('सारांश') || q.includes('सार')))) {
    return responses.summarize(data);
  }
  return responses.default(data, question);
}

const QA_RESPONSES = {
  en: {
    length_check: (data) => {
      const parts = buildPitch(data);
      const text = parts.map(p => p.text).join(' ');
      const wc = countWords(text);
      if (wc === 0) return "You haven't created a pitch yet! Go to the Builder tab and fill in the steps.";
      if (wc > 260) return `Your pitch is ${wc} words, which might be too long for a 1-minute pitch. Try to keep it under 260 words (about 60 seconds at normal speaking speed).`;
      return `Your pitch is ${wc} words, which is perfect for a 60-second pitch! Great job keeping it concise.`;
    },
    target_market: (data) => `Your target audience is: ${data.audience || 'Not defined yet. Please fill Step 4 in the Builder.'}`,
    improve_cta: (data) => {
      if (!data.cta) return "You haven't added a call-to-action yet. Go to Step 6 in the Builder to add one.";
      return `Your current CTA is: "${data.cta}".\n\nTips to improve:\n• Make it specific: Instead of 'contact us', try 'Schedule a 15-minute demo this week'\n• Create urgency: Add a timeline\n• Use action verbs: Invest, Partner, Join, Download`;
    },
    summarize: (data) => {
      const parts = buildPitch(data);
      if (!parts.length) return "Your pitch is empty! Please build your pitch in the Builder tab first.";
      return `Here's your ${countWords(parts.map(p=>p.text).join(' '))}-word pitch:\n\n${parts.map(p => `• ${p.label}: ${p.text}`).join('\n')}`;
    },
    default: (data, question) => {
      const hasData = data.name || data.problem;
      if (!hasData) return "I need more information about your pitch to answer that. Please complete at least the first 2 steps in the Builder.";
      return `Based on your pitch "${data.name || 'Untitled'}": ${data.problem || '...'}.\n\nThat's a great question! Consider how your ${data.solution || 'solution'} addresses this specifically for ${data.audience || 'your target market'}.`;
    }
  },
  hi: {
    length_check: (data) => {
      const parts = buildPitch(data);
      const text = parts.map(p => p.text).join(' ');
      const wc = countWords(text);
      if (wc === 0) return "आपने अभी तक पिच नहीं बनाया है!";
      if (wc > 260) return `आपका पिच ${wc} शब्दों का है, जो बहुत लंबा हो सकता है। इसे 260 शब्दों से कम रखने का प्रयास करें।`;
      return `आपका पिच ${wc} शब्दों का है, जो 60-सेकंड के पिच के लिए बिल्कुल सही है!`;
    },
    target_market: (data) => `आपकी लक्षित दर्शक: ${data.audience || 'अभी तक परिभाषित नहीं। कृपया बिल्डर में चरण 4 भरें।'}`,
    improve_cta: (data) => {
      if (!data.cta) return "आपने अभी तक कॉल-टू-एक्शन नहीं जोड़ा है।";
      return `आपका वर्तमान CTA है: "${data.cta}।"\n\nसुधारने के लिए सुझाव:\n• विशिष्ट बनाएं: 'हमसे संपर्क करें' के बजाय 'इस सप्ताह 15-मिनट का डेमो शेड्यूल करें'\n• अतिथि बनाएं: समय सीमा जोड़ें\n• क्रिया शब्दों का उपयोग करें: निवेश, भागीदारी, शामिल हों`;
    },
    summarize: (data) => {
      const parts = buildPitch(data);
      if (!parts.length) return "आपका पिच खाली है!";
      return `यहाँ आपका ${countWords(parts.map(p=>p.text).join(' '))}-शब्द का पिच है:\n\n${parts.map(p => `• ${p.label}: ${p.text}`).join('\n')}`;
    },
    default: (data, question) => {
      const hasData = data.name || data.problem;
      if (!hasData) return "इसका उत्तर देने के लिए मुझे आपके पिच के बारे में अधिक जानकारी चाहिए।";
      return `"${data.name || 'अनाम'}" पिच के आधार पर: ${data.problem || '...'}।\n\nयह एक बढ़िया सवाल है!`;
    }
  }
};

function filterQuestions(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', 
      (category === 'all' && btn.id === 'filter-all') ||
      (category === 'basic' && btn.id === 'filter-basic') ||
      (category === 'investor' && btn.id === 'filter-investor') ||
      (category === 'technical' && btn.id === 'filter-technical') ||
      (category === 'market' && btn.id === 'filter-market')
    );
  });
  renderQAPrep();
}

function renderQAPrep() {
  const list = document.getElementById('qa-list');
  if (!list) return;
  
  const t = QA_DATABASE[currentLang] || QA_DATABASE.en;
  const filtered = currentFilter === 'all' ? t : t.filter(q => q.category === currentFilter);
  
  const readyCount = t.filter(q => {
    const ans = q.answer(state.data);
    return !ans.includes('⚠️') && !ans.includes('Complete your pitch') && !ans.includes('पहले');
  }).length;
  
  const totalEl = document.getElementById('total-questions');
  const readyEl = document.getElementById('ready-answers');
  if (totalEl) totalEl.textContent = t.length;
  if (readyEl) readyEl.textContent = readyCount;
  
  const labels = currentLang === 'hi' 
    ? {all: 'सभी', basic: 'बुनियादी', investor: 'निवेशक', technical: 'तकनीकी', market: 'बाजार'}
    : {all: 'All', basic: 'Basic', investor: 'Investor', technical: 'Technical', market: 'Market'};
    
  document.getElementById('filter-all').textContent = labels.all;
  document.getElementById('filter-basic').textContent = labels.basic;
  document.getElementById('filter-investor').textContent = labels.investor;
  document.getElementById('filter-technical').textContent = labels.technical;
  document.getElementById('filter-market').textContent = labels.market;
  
  list.innerHTML = filtered.map((item, index) => {
    const answerText = item.answer(state.data);
    const isDisabled = answerText.includes('⚠️') || answerText.includes('Complete your pitch') || answerText.includes('पहले');
    const categoryLabels = {
      basic: currentLang === 'hi' ? 'बुनियादी' : 'Basic',
      investor: currentLang === 'hi' ? 'निवेशक' : 'Investor',
      technical: currentLang === 'hi' ? 'तकनीकी' : 'Technical',
      market: currentLang === 'hi' ? 'बाजार' : 'Market'
    };
    
    return `
      <div class="qa-item ${isDisabled ? 'disabled' : ''}" id="qa-item-${index}" onclick="toggleQA(${index})">
        <div class="qa-header">
          <div>
            <div class="qa-category">${categoryLabels[item.category] || item.category}</div>
            <div class="qa-question-text">${item.question}</div>
          </div>
          <div class="qa-toggle">▼</div>
        </div>
        <div class="qa-answer">
          <div class="qa-answer-content">
            ${answerText.replace(/\n/g, '<br>')}
            <div class="qa-actions">
              <button class="qa-btn" onclick="copyQA('${index}', event)">
                <span>📋</span> ${currentLang === 'hi' ? 'कॉपी करें' : 'Copy Answer'}
              </button>
            </div>
            ${isDisabled ? `<div class="qa-status missing"><span class="status-dot"></span>${currentLang === 'hi' ? 'डेटा अधूरा' : 'Data Missing'}</div>` : 
              `<div class="qa-status"><span class="status-dot"></span>${currentLang === 'hi' ? 'तैयार' : 'Ready'}</div>`}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleQA(index) {
  const item = document.getElementById(`qa-item-${index}`);
  if (item) item.classList.toggle('open');
}

function copyQA(index, event) {
  event.stopPropagation();
  const qa = (QA_DATABASE[currentLang] || QA_DATABASE.en)[index];
  const text = qa.answer(state.data).replace(/<[^>]*>/g, '').replace(/⚠️/g, '');
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(currentLang === 'hi' ? 'उत्तर कॉपी हो गया!' : 'Answer copied!'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(currentLang === 'hi' ? 'उत्तर कॉपी हो गया!' : 'Answer copied!');
  }
}

// ==========================================
// INITIALIZATION
// ==========================================

window.setLanguage = setLanguage;
window.toggleTheme = toggleTheme;
window.toggleSpeech = toggleSpeech;
window.changeStyle = changeStyle;
window.loadTemplate = loadTemplate;
window.loadSaved = loadSaved;
window.deletePitch = deletePitch;
window.resetPitch = resetPitch;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.skipStep = skipStep;
window.insertPill = insertPill;
window.copyPitch = copyPitch;
window.savePitch = savePitch;
window.setAskMode = setAskMode;
window.filterQuestions = filterQuestions;
window.toggleQA = toggleQA;
window.copyQA = copyQA;
window.sendQuestion = sendQuestion;
window.askQuickQuestion = askQuickQuestion;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.addEventListener('click', () => switchTab(b.dataset.tab));
  });
  
  const copyBtn = document.getElementById('copy-btn');
  const saveBtn = document.getElementById('save-btn');
  if (copyBtn) copyBtn.addEventListener('click', copyPitch);
  if (saveBtn) saveBtn.addEventListener('click', savePitch);
  
  initTheme();
  initSpeech();
  setLanguage('en');
});



let currentAudio = null;

async function speakText(text) {
  if (!text) {
    alert("No content to read");
    return;
  }

  // Stop if already playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
    return;
  }

  const apiKey = "YOUR_GOOGLE_API_KEY"; // 🔥 put your key

  const isHindi = currentLang === 'hi';

  const body = {
    input: { text: text },
    voice: {
      languageCode: isHindi ? "hi-IN" : "en-US",
      name: isHindi ? "hi-IN-Wavenet-A" : "en-US-Wavenet-D"
    },
    audioConfig: {
      audioEncoding: "MP3",
      speakingRate: 1.0
    }
  };

  try {
    const res = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    const data = await res.json();

    currentAudio = new Audio("data:audio/mp3;base64," + data.audioContent);
    currentAudio.play();

    currentAudio.onended = () => currentAudio = null;

  } catch (err) {
    console.error(err);
    alert("Speech error");
  }
}
