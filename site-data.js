window.siteData = {
  name: "Teodora Dobos",
  email: "teodora.dobos@tum.de",
  profileImage: "assets/profile.png",
  profileImageAlt: "Portrait of Teodora Dobos",
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/teodora-dobos-48926b207/",
      icon: "assets/linkedin.svg"
    },
    {
      label: "GitHub",
      url: "https://github.com/teodora-dobos",
      icon: "assets/github.svg"
    },
    {
      label: "Google Scholar",
      url: "https://scholar.google.ch/citations?hl=en&user=Bbe4cjYAAAAJ",
      icon: "assets/google-scholar.svg"
    }
  ],
  software: [
    {
      title: "APEM",
      description: "Python framework for electricity market allocation and pricing.",
      url: "https://teodora-dobos.github.io/APEM/",
      links: [
        { label: "GitHub", url: "https://github.com/teodora-dobos/APEM" },
        { label: "Docs", url: "https://teodora-dobos.github.io/APEM/" }
      ]
    }
  ],

  bio: [
    'I am a PhD student in Informatics at the <a href="https://www.tum.de/">Technical University of Munich</a>, supervised by <a href="https://www.cs.cit.tum.de/en/dss/bichler/">Prof. Martin Bichler</a>.',
    'My research focuses on allocation and pricing algorithms for electricity markets, combining market design, optimization, and data-driven methods for large-scale power systems. I work on day-ahead market models, zonal and nodal pricing, redispatch forecasting, and demand-side flexibility.',
    'I am also involved in the Flexibility Marketing Cluster of the <a href="https://synergie-projekt.de/">Kopernikus SynErgie Project</a>. Before starting my PhD, I received my M.Sc. and B.Sc. in Informatics from TUM.',
  ],

  links: [
    {
      label: "TUM Profile",
      url: "https://www.cs.cit.tum.de/en/dss/members/teodora-dobos/"
    },
    {
      label: "DSS Chair",
      url: "https://www.cs.cit.tum.de/en/dss/home/"
    },
    {
      label: "SynErgie",
      url: "https://synergie-projekt.de/"
    }
  ],

  manuscripts: [],

  publicationNote: "",
  publications: [
    {
      title: "A Market-Based Analysis of Critical Nodes in Power Systems",
      authors: [
        { name: "Martin Bichler" },
        { name: "Teodora Dobos" }
      ],
      venue: "International Conference on the European Energy Market (EEM), 2026, Trondheim, Norway",
      links: []
    },
    {
      title: "Zonal vs. Nodal Pricing: An Analysis of Different Pricing Rules in the German Day-Ahead Market",
      authors: [
        { name: "Teodora Dobos" },
        { name: "Martin Bichler" },
        { name: "Johannes Knörr" }
      ],
      venue: "International Conference on the European Energy Market (EEM), 2026, Trondheim, Norway",
      // links: [
      //   {
      //     label: "arXiv",
      //     url: "https://arxiv.org/abs/2403.09265"
      //   }
      // ]
    },
    {
      title: "Probabilistic Forecasting of Regional Redispatch Volumes in Germany",
      authors: [
        { name: "Teodora Dobos" },
        { name: "Martin Bichler" }
      ],
      venue: "35th Workshop on Information Technologies and Systems (WITS), 2025, Nashville, USA",
      links: [
        {
          label: "paper",
          url: "assets/WITS_Camera_Ready.pdf"
        },
        {
          label: "slides",
          url: "assets/probabilistic_forecasting_slides.pdf"
        }
      ]
    },
    {
      title: "Challenges in Finding Stable Price Zones in European Electricity Markets: Aiming to Square the Circle?",
      authors: [
        { name: "Teodora Dobos" },
        { name: "Martin Bichler" },
        { name: "Johannes Knörr" }
      ],
      venue: "Applied Energy, 2025",
      links: [
        {
          label: "paper",
          url: "https://doi.org/10.1016/j.apenergy.2025.125315"
        },
        {
          label: "slides",
          url: "assets/applied_energy_slides.pdf"
        }
      ]
    },
    {
      title: "Solving Large-Scale Electricity Market Pricing Problems in Polynomial Time",
      authors: [
        { name: "Mete Şeref Ahunbay" },
        { name: "Martin Bichler" },
        { name: "Teodora Dobos" },
        { name: "Johannes Knörr" }
      ],
      venue: "European Journal of Operational Research (EJOR), 2024",
      links: [
        {
          label: "paper",
          url: "https://doi.org/10.1016/j.ejor.2024.05.020"
        },
        {
          label: "slides",
          url: "assets/EJOR_slides.pdf"
        }
      ]
    }
  ],

  teachingNote: "",
  teaching: [
    {
      course: "Operations Research (IN0024)",
      institution: "Teaching Assistant",
      term: "SS23, SS24, SS25, SS26",
      // links: [
      //   {
      //     label: "Sensitivity slides",
      //     url: "assets/Sensitivity_2026.pdf"
      //   }
      // ]
    },
    {
      course: "Thesis Supervision",
      institution: "B.Sc. and M.Sc. theses in electricity markets, pricing, forecasting, and optimization",
      // term: "Selected topics available on request",
      links: [
        {
          label: "Advised projects",
          url: "theses.html"
        }
      ]
    }
  ]
};
