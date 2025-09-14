export const streamData = {
  medical: {
    title: "Science (Medical)",
    videoId: "MGmOznk3LKE",
    documentation: `
      <p>The Medical stream is the foundational path for careers in healthcare and life sciences. It focuses on understanding the biological and chemical processes of living organisms.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Core Subjects</h3>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Biology:</strong> The cornerstone, covering Botany, Zoology, Human Anatomy, and Genetics.</li>
        <li><strong>Physics:</strong> Focuses on principles behind medical technology like MRI, X-rays, and lasers.</li>
        <li><strong>Chemistry:</strong> Essential for understanding pharmacology, biochemistry, and molecular processes.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Potential Career Paths</h3>
      <p>This stream leads to roles like Doctor (MBBS), Dentist (BDS), Pharmacist, and opens doors to Biotechnology, Genetic Engineering, and Forensic Science.</p>
    `,
    questionBank: [
      { q: "Which is the powerhouse of the cell?", o: ["Nucleus", "Mitochondria", "Ribosome"], a: "Mitochondria" },
      { q: "What is the main component of bones?", o: ["Iron", "Potassium", "Calcium"], a: "Calcium" },
      { q: "Botany is the study of?", o: ["Animals", "Plants", "Insects"], a: "Plants" },
      { q: "How many chambers are in the human heart?", o: ["2", "4", "6"], a: "4" },
      { q: "Which gas do plants absorb from the atmosphere?", o: ["Oxygen", "Carbon Dioxide", "Nitrogen"], a: "Carbon Dioxide" },
      { q: "What type of lens is used to correct myopia (nearsightedness)?", o: ["Concave", "Convex", "Bifocal"], a: "Concave" },
      { q: "The pH of human blood is slightly?", o: ["Acidic", "Neutral", "Alkaline"], a: "Alkaline" },
      { q: "What is the full form of DNA?", o: ["Deoxyribonucleic Acid", "Deoxyribo Nutrient Acid", "Deribose Nucleic Acid"], a: "Deoxyribonucleic Acid" },
      { q: "Which vitamin is known as the sunshine vitamin?", o: ["Vitamin A", "Vitamin C", "Vitamin D"], a: "Vitamin D" },
      { q: "What is the study of fungi called?", o: ["Mycology", "Virology", "Phycology"], a: "Mycology" },
      { q: "Which part of the brain controls balance and coordination?", o: ["Cerebrum", "Cerebellum", "Medulla"], a: "Cerebellum" },
      { q: "What is the chemical symbol for Gold?", o: ["Ag", "Au", "Gd"], a: "Au" },
    ],
  },
  "non-medical": {
    title: "Science (Non-Medical)",
    videoId: "fQTC-uY4L_g",
    documentation: `<p>The Non-Medical stream, also known as PCM, is for students aiming for careers in engineering, technology, and physical sciences. It emphasizes analytical and problem-solving skills.</p><h3 class="text-xl font-bold mt-4 mb-2">Core Subjects</h3><ul class="list-disc list-inside space-y-1"><li><strong>Mathematics:</strong> The language of engineering and the foundation of logical reasoning.</li><li><strong>Physics:</strong> The study of matter, energy, and their fundamental interactions.</li><li><strong>Chemistry:</strong> Foundational for fields like chemical, materials, and petroleum engineering.</li></ul><h3 class="text-xl font-bold mt-4 mb-2">Potential Career Paths</h3><p>Opens paths to all branches of Engineering (Computer, Mechanical, Civil), Architecture, Data Science, and scientific research.</p>`,
    questionBank: [
      { q: "What is the value of Pi (π) approximately?", o: ["3.14", "2.71", "1.61"], a: "3.14" },
      { q: 'What does "F" stand for in F=ma?', o: ["Force", "Friction", "Frequency"], a: "Force" },
      { q: "What is H₂O commonly known as?", o: ["Salt", "Sugar", "Water"], a: "Water" },
      { q: "The rate of change of velocity is called?", o: ["Speed", "Acceleration", "Displacement"], a: "Acceleration" },
      { q: "Who is known as the father of computers?", o: ["Albert Einstein", "Charles Babbage", "Isaac Newton"], a: "Charles Babbage" },
      { q: "What is the square root of 144?", o: ["12", "14", "16"], a: "12" },
      { q: "In programming, what does HTML stand for?", o: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup"], a: "HyperText Markup Language" },
      { q: "What is Newton's First Law of Motion also known as?", o: ["Law of Inertia", "Law of Acceleration", "Law of Action-Reaction"], a: "Law of Inertia" },
      { q: "Which planet is known as the Red Planet?", o: ["Mars", "Jupiter", "Venus"], a: "Mars" },
      { q: "What is the hardest natural substance on Earth?", o: ["Gold", "Iron", "Diamond"], a: "Diamond" },
    ],
  },
  "commerce-maths": {
    title: "Commerce (with Maths)",
    videoId: "tSi4pme44ig",
    documentation: `<p>Commerce with Maths is a powerful combination for students interested in finance, economics, and business analytics, blending business principles with strong quantitative skills.</p><h3 class="text-xl font-bold mt-4 mb-2">Core Subjects</h3><ul class="list-disc list-inside space-y-1"><li><strong>Accountancy:</strong> The practice of recording and reporting financial transactions.</li><li><strong>Business Studies:</strong> Covers the principles of management and business operations.</li><li><strong>Economics:</strong> The study of scarcity, choice, and economic behavior.</li><li><strong>Mathematics:</strong> Provides the analytical tools for finance and data analysis.</li></ul><h3 class="text-xl font-bold mt-4 mb-2">Potential Career Paths</h3><p>This stream leads to high-demand careers like Chartered Accountancy (CA), Company Secretary (CS), investment banking, and financial analysis.</p>`,
    questionBank: [
      { q: "What is the formula for calculating profit?", o: ["Revenue - Expenses", "Assets - Liabilities", "Sales + Costs"], a: "Revenue - Expenses" },
      { q: "What does IPO stand for?", o: ["Initial Public Offering", "Internal Profit Order", "International Product Office"], a: "Initial Public Offering" },
      { q: "The study of scarcity and choice is?", o: ["Sociology", "Accounting", "Economics"], a: "Economics" },
      { q: "What is 15% of 200?", o: ["15", "30", "45"], a: "30" },
      { q: "In accounting, what does debit usually mean?", o: ["An increase in assets", "An increase in liabilities", "An increase in capital"], a: "An increase in assets" },
      { q: "Which financial statement shows a company's assets, liabilities, and equity?", o: ["Income Statement", "Balance Sheet", "Cash Flow Statement"], a: "Balance Sheet" },
      { q: "What is the law of demand?", o: ["Price and quantity demanded are directly related", "Price and quantity demanded are inversely related", "Price and supply are inversely related"], a: "Price and quantity demanded are inversely related" },
      { q: "What type of market has many buyers and sellers of a homogeneous product?", o: ["Monopoly", "Oligopoly", "Perfect Competition"], a: "Perfect Competition" },
      { q: "What is the main purpose of a 'Journal' in accounting?", o: ["To summarize transactions", "To record transactions chronologically", "To post transactions to accounts"], a: "To record transactions chronologically" },
      { q: "A 'bull market' is characterized by?", o: ["Falling prices", "Rising prices", "Stagnant prices"], a: "Rising prices" },
    ],
  },
  "commerce-ip": {
    title: "Commerce (with IP)",
    videoId: "jsrV2kGfDrQ",
    documentation: `<p>Commerce with Informatics Practices (IP) blends traditional business studies with modern computer applications, preparing students for the digital economy.</p><h3 class="text-xl font-bold mt-4 mb-2">Core Subjects</h3><ul class="list-disc list-inside space-y-1"><li><strong>Accountancy & Economics:</strong> Core commerce subjects.</li><li><strong>Informatics Practices:</strong> Focuses on data handling, SQL, and computer networks.</li></ul><h3 class="text-xl font-bold mt-4 mb-2">Career Paths</h3><p>This prepares students for modern roles in e-commerce, data management, business process automation, and systems analysis.</p>`,
    questionBank: [
      { q: "What does CPU stand for?", o: ["Central Processing Unit", "Computer Power Unit", "Central Power Utility"], a: "Central Processing Unit" },
      { q: "Which of these is an input device?", o: ["Monitor", "Printer", "Mouse"], a: "Mouse" },
      { q: "A collection of related data is a?", o: ["File", "Database", "Record"], a: "Database" },
      { q: "What does GST stand for?", o: ["General Sales Tax", "Goods and Services Tax", "Government Sales Treaty"], a: "Goods and Services Tax" },
      { q: "What is the brain of the computer?", o: ["CPU", "RAM", "Hard Disk"], a: "CPU" },
      { q: "Which language is used for styling web pages?", o: ["HTML", "CSS", "JavaScript"], a: "CSS" },
      { q: "What does 'SQL' stand for?", o: ["Structured Query Language", "Simple Question Language", "Standard Query Logic"], a: "Structured Query Language" },
      { q: "Which of the following is a web browser?", o: ["Microsoft Word", "Google Chrome", "Adobe Photoshop"], a: "Google Chrome" },
      { q: "What does 'LAN' stand for?", o: ["Large Area Network", "Local Area Network", "Logical Area Network"], a: "Local Area Network" },
      { q: "1 Gigabyte (GB) is equal to how many Megabytes (MB)?", o: ["100 MB", "1024 MB", "10000 MB"], a: "1024 MB" },
    ],
  },
  humanities: {
    title: "Humanities",
    videoId: "UzuwowEK5P4",
    documentation: `<p>The Humanities (or Arts) stream is dedicated to the study of human society, culture, and expression. It is ideal for creative minds and those aspiring for careers in public service and media.</p><h3 class="text-xl font-bold mt-4 mb-2">Core Subjects</h3><ul class="list-disc list-inside space-y-1"><li><strong>History:</strong> The study of past events and their impact on the present.</li><li><strong>Political Science:</strong> Focuses on systems of government and political behavior.</li><li><strong>Sociology & Economics:</strong> Study of social structures and resource management.</li></ul><h3 class="text-xl font-bold mt-4 mb-2">Career Paths</h3><p>It's the most common stream for careers in civil services (IAS, IPS), law, journalism, academia, and social work.</p>`,
    questionBank: [
      { q: 'Who wrote "Romeo and Juliet"?', o: ["Charles Dickens", "William Shakespeare", "Mark Twain"], a: "William Shakespeare" },
      { q: "The first World War was fought between?", o: ["1914-1918", "1939-1945", "1905-1910"], a: "1914-1918" },
      { q: "What is the capital of France?", o: ["London", "Berlin", "Paris"], a: "Paris" },
      { q: "Democracy means rule by the?", o: ["King", "Army", "People"], a: "People" },
      { q: "The study of past events is called?", o: ["Geography", "History", "Civics"], a: "History" },
      { q: "Who was the first President of India?", o: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Mahatma Gandhi"], a: "Dr. Rajendra Prasad" },
      { q: "The largest planet in our solar system is?", o: ["Earth", "Jupiter", "Saturn"], a: "Jupiter" },
      { q: "In which continent is the Sahara Desert located?", o: ["Asia", "Africa", "South America"], a: "Africa" },
      { q: "Who invented the light bulb?", o: ["Alexander Graham Bell", "Thomas Edison", "Isaac Newton"], a: "Thomas Edison" },
      { q: "The United Nations (UN) was founded in which year?", o: ["1945", "1919", "1950"], a: "1945" },
    ],
  },
};