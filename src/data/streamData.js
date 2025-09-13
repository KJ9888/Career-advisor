export const streamData = {
  medical: {
    title: "Science (Medical)",
    videoSrc: "../../videos/medical.mp4",
    documentation: `
      <p>The Medical stream is the gateway to the world of healthcare. The core curriculum revolves around <strong>Physics, Chemistry, and Biology (PCB)</strong>, providing a deep understanding of the principles that govern life.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Core Subjects</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Biology:</strong> The cornerstone of this stream, covering Botany, Zoology, human anatomy, and genetics.</li>
        <li><strong>Physics:</strong> Focuses on the principles behind medical technology like MRI and X-rays.</li>
        <li><strong>Chemistry:</strong> Essential for understanding pharmacology and biochemistry.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Potential Career Paths</h3>
      <p>Opportunities include Biotechnology, Genetic Engineering, Microbiology, and Forensic Science, beyond the traditional path of an MBBS doctor.</p>
    `,
    questionBank: [
      {
        q: "Which is the powerhouse of the cell?",
        o: ["Nucleus", "Mitochondria", "Ribosome"],
        a: "Mitochondria",
      },
      {
        q: "What is the main component of bones?",
        o: ["Iron", "Potassium", "Calcium"],
        a: "Calcium",
      },
      { q: "Botany is the study of?", o: ["Animals", "Plants", "Insects"], a: "Plants" },
      { q: "How many chambers are in the human heart?", o: ["2", "4", "6"], a: "4" },
      {
        q: "Which gas do plants absorb from the atmosphere?",
        o: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
        a: "Carbon Dioxide",
      },
      {
        q: "What type of lens is used to correct myopia?",
        o: ["Concave", "Convex", "Bifocal"],
        a: "Concave",
      },
      {
        q: "The pH of human blood is slightly?",
        o: ["Acidic", "Neutral", "Alkaline"],
        a: "Alkaline",
      },
      {
        q: "What is the full form of DNA?",
        o: ["Deoxyribonucleic Acid", "Deoxyribo Nutrient Acid", "Deribose Nucleic Acid"],
        a: "Deoxyribonucleic Acid",
      },
      {
        q: "Which vitamin is known as the sunshine vitamin?",
        o: ["Vitamin A", "Vitamin C", "Vitamin D"],
        a: "Vitamin D",
      },
      {
        q: "What is the study of fungi called?",
        o: ["Mycology", "Virology", "Phycology"],
        a: "Mycology",
      },
    ],
  },
  "non-medical": {
    title: "Science (Non-Medical)",
    videoSrc: "../../videos/non-medical.mp4",
    documentation: `<p>The Non-Medical stream, also known as PCM, is for students aiming for careers in engineering and technology. Core subjects are <strong>Physics, Chemistry, and Mathematics</strong>.</p><h3 class="text-xl font-bold mt-4 mb-2">Core Subjects</h3><ul class="list-disc list-inside space-y-1"><li><strong>Mathematics:</strong> The language of engineering and technology.</li><li><strong>Physics:</strong> The study of matter, energy, and their interactions.</li><li><strong>Chemistry:</strong> Foundational for fields like chemical and materials engineering.</li></ul>`,
    questionBank: [
      { q: "What is the value of Pi (π) approximately?", o: ["3.14", "2.71", "1.61"], a: "3.14" },
      { q: 'What does "F" stand for in F=ma?', o: ["Force", "Friction", "Frequency"], a: "Force" },
      { q: "What is H₂O?", o: ["Salt", "Sugar", "Water"], a: "Water" },
      {
        q: "The rate of change of velocity is called?",
        o: ["Speed", "Acceleration", "Displacement"],
        a: "Acceleration",
      },
      {
        q: "Who is known as the father of computers?",
        o: ["Albert Einstein", "Charles Babbage", "Isaac Newton"],
        a: "Charles Babbage",
      },
      { q: "What is the square root of 144?", o: ["12", "14", "16"], a: "12" },
      {
        q: "In programming, what does HTML stand for?",
        o: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup"],
        a: "HyperText Markup Language",
      },
      {
        q: "What is the law of inertia also known as?",
        o: ["Newtons First Law", "Newtons Second Law", "Newtons Third Law"],
        a: "Newtons First Law",
      },
      {
        q: "What is the SI unit of force?",
        o: ["Newton", "Joule", "Pascal"],
        a: "Newton",
      },
      {
        q: "Which physical quantity is measured in Joules?",
        o: ["Force", "Work", "Pressure"],
        a: "Work",
      },
    ],
  },
  "commerce-maths": {
    title: "Commerce (with Maths)",
    videoSrc: "../../videos/commerce-maths.mp4",
    documentation: `<p>Commerce with Maths is a powerful combination for students interested in finance and business analytics. The core subjects are <strong>Accountancy, Business Studies, Economics, and Mathematics</strong>.</p><h3 class="text-xl font-bold mt-4 mb-2">Career Paths</h3><p>This stream leads to careers like Chartered Accountancy (CA), Company Secretary (CS), investment banking, and financial analysis.</p>`,
    questionBank: [
      {
        q: "What is the formula for calculating profit?",
        o: ["Revenue - Expenses", "Assets - Liabilities", "Sales + Costs"],
        a: "Revenue - Expenses",
      },
      {
        q: "What does IPO stand for?",
        o: ["Initial Public Offering", "Internal Profit Order", "International Product Office"],
        a: "Initial Public Offering",
      },
      {
        q: "The study of scarcity and choice is?",
        o: ["Sociology", "Accounting", "Economics"],
        a: "Economics",
      },
      { q: "What is 15% of 200?", o: ["15", "30", "45"], a: "30" },
      { q: "Debit means?", o: ["What comes in", "What goes out", "Balance"], a: "What goes out" },
      {
        q: "Credit means?",
        o: ["What goes out", "What comes in", "Expense"],
        a: "What comes in",
      },
      {
        q: "Which account has a debit balance?",
        o: ["Assets", "Liabilities", "Capital"],
        a: "Assets",
      },
      {
        q: "Which account has a credit balance?",
        o: ["Expenses", "Assets", "Liabilities"],
        a: "Liabilities",
      },
      {
        q: "In which book are all journal entries first recorded?",
        o: ["Ledger", "Journal", "Cash Book"],
        a: "Journal",
      },
      {
        q: "Which is called the ‘King of Accounts’?",
        o: ["Ledger", "Trial Balance", "Cash Book"],
        a: "Ledger",
      },
    ],
  },
  "commerce-ip": {
    title: "Commerce (with IP)",
    videoSrc: "../../videos/commerce-ip.mp4",
    documentation: `<p>Commerce with Informatics Practices (IP) blends traditional business studies with modern computer applications. The core subjects are <strong>Accountancy, Business Studies, Economics, and IP</strong>.</p><h3 class="text-xl font-bold mt-4 mb-2">Career Paths</h3><p>This prepares students for roles in e-commerce, data management, and business process automation.</p>`,
    questionBank: [
      {
        q: "What does CPU stand for?",
        o: ["Central Processing Unit", "Computer Power Unit", "Central Power Utility"],
        a: "Central Processing Unit",
      },
      {
        q: "Which of these is an input device?",
        o: ["Monitor", "Printer", "Mouse"],
        a: "Mouse",
      },
      {
        q: "A collection of related data is a?",
        o: ["File", "Database", "Record"],
        a: "Database",
      },
      {
        q: "What does GST stand for?",
        o: ["General Sales Tax", "Goods and Services Tax", "Government Sales Treaty"],
        a: "Goods and Services Tax",
      },
      {
        q: "What is the brain of the computer?",
        o: ["CPU", "RAM", "Hard Disk"],
        a: "CPU",
      },
      {
        q: "Which key is used to delete characters to the left of the cursor?",
        o: ["Backspace", "Delete", "Shift"],
        a: "Backspace",
      },
      {
        q: "Which of these is a primary memory?",
        o: ["RAM", "Hard Disk", "Pen Drive"],
        a: "RAM",
      },
      {
        q: "What is the full form of URL?",
        o: ["Uniform Resource Locator", "Universal Record Link", "Unified Routing Language"],
        a: "Uniform Resource Locator",
      },
      {
        q: "Which Indian tax replaced VAT and Service Tax?",
        o: ["Income Tax", "GST", "Excise Duty"],
        a: "GST",
      },
      {
        q: "Which shortcut is used to copy selected text?",
        o: ["Ctrl + V", "Ctrl + C", "Ctrl + X"],
        a: "Ctrl + C",
      },
    ],
  },
  humanities: {
    title: "Humanities",
    videoSrc: "../../videos/humanities.mp4",
    documentation: `<p>The Humanities stream is dedicated to the study of human society and culture. Core subjects include <strong>History, Political Science, Sociology, and Economics</strong>.</p><h3 class="text-xl font-bold mt-4 mb-2">Career Paths</h3><p>It's an ideal choice for careers in civil services (IAS, IPS), law, journalism, and academia.</p>`,
    questionBank: [
      {
        q: 'Who wrote "Romeo and Juliet"?',
        o: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
        a: "William Shakespeare",
      },
      {
        q: "The first World War was fought between?",
        o: ["1914-1918", "1939-1945", "1905-1910"],
        a: "1914-1918",
      },
      {
        q: "What is the capital of France?",
        o: ["London", "Berlin", "Paris"],
        a: "Paris",
      },
      {
        q: "Democracy means rule by the?",
        o: ["King", "Army", "People"],
        a: "People",
      },
      {
        q: "The study of past events is called?",
        o: ["Geography", "History", "Civics"],
        a: "History",
      },
      {
        q: "Who was the first President of India?",
        o: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Mahatma Gandhi"],
        a: "Dr. Rajendra Prasad",
      },
      {
        q: "The largest planet in our solar system is?",
        o: ["Earth", "Jupiter", "Saturn"],
        a: "Jupiter",
      },
      {
        q: "Which is the national animal of India?",
        o: ["Elephant", "Tiger", "Lion"],
        a: "Tiger",
      },
      {
        q: "Who invented the light bulb?",
        o: ["Alexander Graham Bell", "Thomas Edison", "Isaac Newton"],
        a: "Thomas Edison",
      },
      {
        q: "The United Nations was founded in which year?",
        o: ["1945", "1919", "1950"],
        a: "1945",
      },
    ],
  },
};
