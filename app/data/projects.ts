const projects = [
    {
      name: "Crypto for Change",
      description: "A platform that leverages cryptocurrency donations to fund initiatives aimed at eradicating poverty, providing financial education and resources to the poorest communities worldwide, ensuring sustainable paths out of poverty.",
      sdg: "No Poverty",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA6",
      teamSize: 3,
      image: "google.com"
    },
    {
      name: "AgriChain Initiative",
      description: "A project using blockchain to improve food security by enhancing supply chain transparency and efficiency in the agricultural sector, promoting sustainable agriculture practices, and ensuring food reaches the most vulnerable communities",
      sdg: "Zero Hunger",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA6",
      teamSize: 2,
      image: "google.com"
    },
    {
      name: "Health Chain",
      description: "A decentralized platform for sharing health resources and information, facilitating global collaboration in medical research, and supporting health initiatives, especially in underserved areas to promote well-being for all ages.",
      sdg: "Good Health and Well-being",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA7",
      teamSize: 5,
      image: "google.com"
    },
    {
      name: "EduBlock",
      description: "A project focused on providing equitable access to quality education through an open-source platform that offers online courses, resources, and tools for learners worldwide, with a focus on lifelong learning opportunities.",
      sdg: "Quality Education",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA8",
      teamSize: 10,
      image: "google.com"
    },
    {
      name: "SecHERity",
      description: "An initiative aimed at closing the gender gap in blockchain security auditor, offering educational courses, mentorship programs, and job placement for women and girls.",
      sdg: "Gender Equality",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA9",
      teamSize: 8,
      image: "google.com"
    },
    {
      name: "WaterChain",
      description: "A decentralized solution for managing water resources efficiently, funding clean water projects, and improving sanitation facilities through blockchain-based tracking and allocation of resources.",
      sdg: "Clean Water and Sanitation",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA10",
      teamSize: 4,
      image: "google.com"
    },
    {
      name: "The Solar Foundation",
      description: "Accelerates access to decentralized clean energy for underserved communities, using blockchain to fund solar projects that reduce CO2e and increase climate resilience.",
      sdg: "Affordable and Clean Energy",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA11",
      teamSize: 3,
      image: "google.com"
    },
    {
      name: "Web3 Workforce",
      description: "A platform that connects freelancers with blockchain-based projects, promoting full and productive employment by leveraging the gig economy within the web3 ecosystem for sustainable economic growth.",
      sdg: "Decent Work and Economic Growth",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA12",
      teamSize: 2,
      image: "google.com"
    },
    {
      name: "InnovateChain",
      description: "Supports the development of resilient infrastructure and fosters innovation by funding projects that aim to build sustainable and inclusive industrialization within the web3 space.",
      sdg: "Industry, Innovation, and Infrastructure",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA13",
      teamSize: 8,
      image: "google.com"
    },
    {
      name: "EqualDApp",
      description: "Focuses on using decentralized applications to reduce inequality, providing tools and platforms that ensure fair access to opportunities and resources for underserved populations worldwide.",
      sdg: "Reduced Inequalities",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA14",
      teamSize: 5,
      image: "google.com"
    },
    {
      name: "SmartCityChain",
      description: "Aims at making cities inclusive, safe, resilient, and sustainable by funding smart city solutions that leverage blockchain for urban planning, governance, and community engagement.",
      sdg: "Sustainable Cities and Communities",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA15",
      teamSize: 6,
      image: "google.com"
    },
    {
      name: "EcoChain",
      description: "Promotes sustainable consumption and production patterns through a decentralized platform that tracks the environmental impact of products and encourages eco-friendly practices.",
      sdg: "Responsible Consumption and Production",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA16",
      teamSize: 10,
      image: "google.com"
    },
    {
      name: "Climate Ledger",
      description: "A project dedicated to combating climate change by funding initiatives that use blockchain to track carbon emissions, facilitate carbon trading, and support climate action projects.",
      sdg: "Climate Action",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA17",
      teamSize: 12,
      image: "google.com"
    },
    {
      name: "OceanArchive",
      description: "Utilizes blockchain to conserve and sustainably use the oceans, seas, and marine resources by supporting research, conservation projects, and sustainable fisheries.",
      sdg: "Life Below Water",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA18",
      teamSize: 4,
      image: "google.com"
    },
    {
      name: "GreenLedger",
      description: "Protects, restores, and promotes sustainable use of terrestrial ecosystems by funding reforestation, biodiversity conservation projects, and anti-desertification initiatives.",
      sdg: "Life on Land",
      walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA19",
      teamSize: 4,
      image: "google.com"
    },
    {
        name: "JusticeChain",
        description: "Enhances peace, justice, and strong institutions by supporting projects that use blockchain for transparency in governance, fighting corruption, and ensuring access to justice.",
        sdg: "Peace, Justice and Strong Institutions",
        walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA19",
        teamSize: 4,
        image: "google.com"
      },
      {
        name: "SDG Connect",
        description: "A platform that strengthens global partnerships for sustainable development by facilitating collaboration between projects, funders, and communities working towards the SDGs, leveraging blockchain for efficient and transparent cooperation.",
        sdg: "Partnerships for the Goals",
        walletAddress: "0x79e23EaCd27b1706D8C0Ce5dF45904177Fa64bA19",
        teamSize: 4,
        image: "google.com"
      }
]

  