/* Illustrative project demo records. Role levels, weights and questions need faculty/practitioner review. */
window.SKILLPATH_ROLE_PACKS = [
  {
    id:"income-tax-officer",name:"Income Tax Officer",category:"public",icon:"₹",short:"A foundation path toward public-service and tax-administration work.",route:"Exam route varies",sourceNote:"Illustrative foundation skills. Verify the current route and syllabus with the official recruiting authority.",
    skills:[
      {id:"general-awareness",name:"General awareness",weight:1.0,group:"exam"},
      {id:"quantitative-aptitude",name:"Quantitative aptitude",weight:.9,group:"exam"},
      {id:"reasoning",name:"Reasoning",weight:.85,group:"exam"},
      {id:"english-comprehension",name:"English comprehension",weight:.8,group:"exam"},
      {id:"taxation-fundamentals",name:"Taxation fundamentals",weight:.75,group:"role"},
      {id:"digital-literacy",name:"Digital literacy",weight:.55,group:"role"}
    ],
    questions:[
      {skillId:"general-awareness",prompt:"Which institution is responsible for monetary policy in India?",options:["Reserve Bank of India","Election Commission of India","National Human Rights Commission","Finance Commission"],answer:0,explain:"The Reserve Bank of India is India's central bank and is responsible for monetary policy."},
      {skillId:"quantitative-aptitude",prompt:"A fee of ₹800 is reduced by 15%. What is the new amount?",options:["₹640","₹660","₹680","₹720"],answer:2,explain:"15% of ₹800 is ₹120; ₹800 − ₹120 = ₹680."},
      {skillId:"reasoning",prompt:"All auditors are graduates. Some graduates are accountants. Which statement must be true?",options:["All accountants are auditors","Some auditors are accountants","Every auditor is a graduate","No graduate is an auditor"],answer:2,explain:"The first statement directly says all auditors are graduates. It does not establish that auditors are accountants."},
      {skillId:"english-comprehension",prompt:"Choose the clearest formal sentence.",options:["The records was checked yesterday.","The records were checked yesterday.","The records is checked yesterday.","The records has checked yesterday."],answer:1,explain:"“Records” is plural, so the past-tense verb is “were checked.”"}
    ]
  },
  {
    id:"bank-po",name:"Bank Probationary Officer",category:"public",icon:"▤",short:"A sample foundation plan for banking-exam preparation and customer-facing work.",route:"Exam-based role",sourceNote:"Illustrative preparation areas. Verify the current exam pattern and syllabus with the official recruiting authority.",
    skills:[
      {id:"quantitative-aptitude",name:"Quantitative aptitude",weight:1,group:"exam"},
      {id:"reasoning",name:"Reasoning",weight:.95,group:"exam"},
      {id:"english-comprehension",name:"English comprehension",weight:.85,group:"exam"},
      {id:"banking-awareness",name:"Banking awareness",weight:.8,group:"exam"},
      {id:"digital-literacy",name:"Digital literacy",weight:.65,group:"role"},
      {id:"communication",name:"Communication",weight:.6,group:"role"}
    ],
    questions:[
      {skillId:"quantitative-aptitude",prompt:"A deposit of ₹10,000 earns simple interest at 5% per year for 2 years. What is the interest?",options:["₹500","₹1,000","₹1,500","₹2,000"],answer:1,explain:"Simple interest = principal × rate × time = ₹10,000 × 0.05 × 2 = ₹1,000."},
      {skillId:"reasoning",prompt:"If every branch is an office and some offices are open late, what must be true?",options:["Every office is a branch","Some branches are open late","Every branch is an office","No branch is open late"],answer:2,explain:"“Every branch is an office” is the only conclusion stated by the premise."},
      {skillId:"english-comprehension",prompt:"Choose the sentence with correct subject-verb agreement.",options:["The manager review the report.","The manager reviews the report.","The manager reviewing the report.","The manager have reviewed the report."],answer:1,explain:"The singular subject “manager” takes “reviews.”"},
      {skillId:"banking-awareness",prompt:"A central bank's repo rate is most directly connected to:",options:["The rate at which it lends short-term funds to banks","The tax on imported goods","The price of company shares","The rate of school fees"],answer:0,explain:"The repo rate is the policy rate at which a central bank lends funds to commercial banks against eligible securities."}
    ]
  },
  {
    id:"state-civil-services",name:"State Civil Services",category:"public",icon:"⌂",short:"A broad foundation plan for state-level public-service examination preparation.",route:"Exam-based role",sourceNote:"Each state has its own process. Use the latest notification and syllabus from the relevant State Public Service Commission.",
    skills:[
      {id:"general-studies",name:"General studies",weight:1,group:"exam"},
      {id:"current-affairs",name:"Current affairs",weight:.9,group:"exam"},
      {id:"writing",name:"Written communication",weight:.85,group:"exam"},
      {id:"reasoning",name:"Reasoning",weight:.7,group:"exam"},
      {id:"language",name:"Language proficiency",weight:.7,group:"exam"},
      {id:"digital-literacy",name:"Digital literacy",weight:.45,group:"role"}
    ],
    questions:[
      {skillId:"general-studies",prompt:"The Constitution of India came into effect on:",options:["15 August 1947","26 January 1950","26 November 1949","2 October 1950"],answer:1,explain:"The Constitution came into effect on 26 January 1950."},
      {skillId:"current-affairs",prompt:"When checking a recent public-policy announcement, which is the strongest first source?",options:["An undated social-media post","A forwarded message","The issuing ministry's official release","An anonymous forum comment"],answer:2,explain:"The issuing ministry's official release is a primary source and can be checked for its date and wording."},
      {skillId:"writing",prompt:"Which paragraph opening best states a clear argument?",options:["There are many things to say about water.","This essay is about water.","Reliable public water access improves health and school attendance.","Water is very important in many ways."],answer:2,explain:"This sentence makes a specific, supportable claim."},
      {skillId:"reasoning",prompt:"A district has 4 blocks with 3 clinics in each. How many clinics are there?",options:["7","10","12","16"],answer:2,explain:"4 blocks × 3 clinics per block = 12 clinics."}
    ]
  },
  {
    id:"school-teacher",name:"School Teacher",category:"professional",icon:"✎",short:"A sample pathway combining subject knowledge, teaching practice and communication.",route:"Qualification and recruitment vary",sourceNote:"Requirements vary by school, subject and jurisdiction. Verify official qualification and recruitment rules.",
    skills:[
      {id:"subject-knowledge",name:"Subject knowledge",weight:1,group:"role"},
      {id:"teaching-methods",name:"Teaching methods",weight:1,group:"role"},
      {id:"communication",name:"Communication",weight:.85,group:"role"},
      {id:"assessment-design",name:"Assessment design",weight:.8,group:"role"},
      {id:"classroom-management",name:"Classroom management",weight:.75,group:"role"},
      {id:"digital-literacy",name:"Digital literacy",weight:.55,group:"role"}
    ],
    questions:[
      {skillId:"teaching-methods",prompt:"A student has a misconception about fractions. Which first response best supports learning?",options:["Give the answer and move on","Ask the student to explain their thinking, then use a visual example","Remove the student from the lesson","Assign unrelated extra homework"],answer:1,explain:"Eliciting the student's thinking helps identify the misconception; a visual model can make the concept concrete."},
      {skillId:"assessment-design",prompt:"A teacher wants to check understanding during a lesson. Which is a formative check?",options:["A short exit question before students leave","The final report card only","A school-wide annual ranking","A certificate at graduation"],answer:0,explain:"A brief exit question gives feedback that can guide the next lesson."},
      {skillId:"communication",prompt:"Which instruction is clearest for a multi-step task?",options:["Do the usual activity","Complete steps 1–3, then compare your answer with a partner","Finish this soon","Read everything carefully"],answer:1,explain:"It gives concrete actions and a clear sequence."},
      {skillId:"classroom-management",prompt:"Several students are talking during independent work. What is a constructive first action?",options:["Stop the lesson for the whole day","Restate the task and expected noise level, then check in","Ignore all students","Give everyone a failing grade"],answer:1,explain:"A calm reminder and check-in re-establish expectations and help identify whether students need support."}
    ]
  },
  {
    id:"chartered-accountant",name:"Chartered Accountant",category:"professional",icon:"▧",short:"A sample learning map for accounting, audit and tax foundations.",route:"Professional qualification pathway",sourceNote:"Use current official qualification and examination material from the relevant professional body.",
    skills:[
      {id:"accounting",name:"Accounting",weight:1,group:"role"},
      {id:"taxation-fundamentals",name:"Taxation fundamentals",weight:.9,group:"role"},
      {id:"audit",name:"Audit fundamentals",weight:.9,group:"role"},
      {id:"business-law",name:"Business law",weight:.8,group:"role"},
      {id:"quantitative-aptitude",name:"Quantitative reasoning",weight:.65,group:"role"},
      {id:"digital-literacy",name:"Spreadsheets and digital tools",weight:.6,group:"role"}
    ],
    questions:[
      {skillId:"accounting",prompt:"A business buys equipment for cash. Which basic accounting effect is correct?",options:["Equipment increases; cash decreases","Equipment decreases; cash increases","Both equipment and cash increase","Neither account changes"],answer:0,explain:"The business gains an equipment asset and uses cash to pay for it."},
      {skillId:"taxation-fundamentals",prompt:"Why should a tax calculation use the rules for the relevant financial year?",options:["Tax rules and thresholds can change","The calculator requires it","All years have identical tax rules","It changes the person's name"],answer:0,explain:"The applicable tax rules, thresholds and provisions may differ by year."},
      {skillId:"audit",prompt:"Which provides stronger audit evidence for a bank balance?",options:["An unsupported verbal estimate","A bank confirmation received directly by the auditor","A note written by an unrelated person","A prior-year figure copied forward"],answer:1,explain:"Evidence obtained directly from an independent external source is generally more reliable than unsupported internal assertions."},
      {skillId:"business-law",prompt:"Before relying on a contract clause, what should a practitioner check?",options:["The signed agreement and applicable law","Only a social-media summary","A random template","The font used in the document"],answer:0,explain:"The actual agreement and applicable legal requirements are the relevant sources."}
    ]
  },
  {
    id:"software-engineer",name:"Software Engineer",category:"professional",icon:"⌘",short:"A broad software foundation pack; later versions should separate engineering specializations.",route:"Role varies by employer and specialization",sourceNote:"Illustrative skills. Validate against a defined specialization and current, permitted employer information.",
    skills:[
      {id:"programming",name:"Programming fundamentals",weight:1,group:"role"},
      {id:"problem-solving",name:"Problem solving",weight:.95,group:"role"},
      {id:"data-structures",name:"Data structures",weight:.9,group:"role"},
      {id:"software-design",name:"Software design",weight:.75,group:"role"},
      {id:"version-control",name:"Version control",weight:.65,group:"role"},
      {id:"communication",name:"Technical communication",weight:.55,group:"role"}
    ],
    questions:[
      {skillId:"programming",prompt:"What does a function usually provide in a program?",options:["A reusable block of instructions","A physical computer part","A database backup","A network cable"],answer:0,explain:"A function groups instructions that can be called and reused."},
      {skillId:"problem-solving",prompt:"A loop should process each item in a list once. What is the main factor affecting its work?",options:["The number of items","The monitor size","The variable name","The keyboard layout"],answer:0,explain:"If each list item is processed once, the work grows with the number of items."},
      {skillId:"data-structures",prompt:"Which structure is designed for last-in, first-out access?",options:["Queue","Stack","Sorted table","Graph"],answer:1,explain:"A stack returns the most recently added item first."},
      {skillId:"version-control",prompt:"What is a Git commit?",options:["A saved snapshot of tracked project changes","A production server","A programming language","A type of image"],answer:0,explain:"A commit records a snapshot of changes in version history."}
    ]
  }
];
