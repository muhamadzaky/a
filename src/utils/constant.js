export const API = {
  education: [
    {
      id: 0,
      name: 'SMK Negeri 4 Bandung',
      year: '2014 - 2017',
      major: 'Software Engineering',
      link: 'https://smkn4bdg.sch.id/',
      show: true
    },
    {
      id: 1,
      name: 'SMP Negeri 268 Jakarta Timur',
      year: '2011 - 2014',
      major: null,
      link: 'https://smpn268jakarta.sch.id/',
      show: true
    }
  ],
  skill: [
    {
      id: 1,
      title: 'ReactJS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      show: true,
      type: 1
    },
    {
      id: 2,
      title: '.NET',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png',
      show: true,
      type: 2
    },
    {
      id: 4,
      title: 'SQL Server',
      logo: 'https://de.wikipedia.org/wiki/Microsoft_SQL_Server#/media/Datei:Microsoft_SQL_Server_Logo.svg',
      show: false,
      type: 3
    },
    {
      id: 5,
      title: 'AngularJS',
      logo: 'https://ja.wikipedia.org/wiki/AngularJS#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:AngularJS_logo.svg',
      show: false,
      type: 1
    },
    {
      id: 5,
      title: 'Flutter',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
      show: false,
      type: 1
    },
    {
      id: 6,
      title: 'NextJS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2000px-Nextjs-logo.svg.png',
      show: true,
      type: 1
    },
    {
      id: 7,
      title: 'VueJS',
      logo: 'https://ja.wikipedia.org/wiki/Vue.js#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Vue.js_Logo_2.svg',
      show: false,
      type: 1
    }
  ],
  experience: [
    {
      id: 0,
      file: 'wgs.svg',
      name: 'PT Walden Global Services',
      position: ['.NET Developer', 'Frontend Developer'],
      start: '2017-07-06',
      end: '2021-07-16',
      link: 'https://www.wgs.co.id/',
      show: true
    },
    {
      id: 1,
      file: 'ski.png',
      name: 'PT Solusi Konvergen Indonesia',
      position: ['Frontend Developer'],
      start: '2021-07-19',
      end: '2022-01-12',
      link: 'http://solusikonvergen.com/',
      show: false
    },
    {
      id: 2,
      file: 'telkom-indonesia.png',
      name: 'PT Telkom Indonesia (Persero) Tbk',
      position: ['Frontend Developer'],
      start: '2021-07-19',
      end: '2022-01-12',
      link: 'https://www.telkom.co.id/',
      show: true
    },
    {
      id: 3,
      file: 'otoklix.png',
      name: 'PT Otoklix',
      position: ['Freelance Frontend Developer'],
      start: '2021-07-19',
      end: null,
      link: 'https://otoklix.com/',
      show: true
    }
  ],
  project: [
    {
      id: 1,
      company: 'National Pilot Academy',
      name: 'Pilot School Management Application',
      start: 'Oct 01, 2016',
      end: 'Jan 03, 2017',
      tech: ['PHP', 'PHP MyAdmin', 'JQuery', 'Vanilla Javascript'],
      description: 'Internal application for pilot school management.',
      task: ['Build Fullstack App'],
      jobdesk: 'Fullstack PHP Developer',
      link: null,
      confidential: true
    },
    {
      id: 2,
      company: 'Automotive Manufacturer and Distributor Company',
      name: 'Sales Report System for Motorcycle Distributor',
      start: 'Jul 06, 2017',
      end: 'Apr 16, 2019',
      tech: [
        '.NET Framework 4.5',
        'EF 6',
        'ReactJS',
        'NPOI 2.3.0',
        'Crystal Report 13.0.15',
        'SQL Server'
      ],
      description: 'Internal application for company management',
      task: [
        'Build Back-end API',
        'Create Stored Procedure for simplified data',
        'Coordinate with team members to create better and optimized app',
        'Make sure the flow of the apps to working properly',
        'Update application according to client request',
        'Create Front-end mock up for H3 application'
      ],
      jobdesk: 'Backend .NET Developer',
      link: 'https://www.wgs.co.id/case_study/sales-report-system-for-motorcycle-distributor',
      confidential: true
    },
    {
      id: 3,
      company: 'Food & Beverage Chain Management',
      name: 'Loyalty Program Application for Convenience Store Chain',
      start: 'Dec 08, 2018',
      end: 'Mar 02, 2019',
      tech: ['.NET Framework 4.6', 'SQL Server', 'MySql'],
      description: 'Application for customer’s membership management',
      task: [
        'Build desktop apps',
        'Coordinate with team members to create better and optimized app',
        'Make sure the flow of the apps to working properly',
        'Update application according to client request',
        'Publish app to staging'
      ],
      jobdesk: 'Fullstack .NET Developer',
      link: 'https://www.wgs.co.id/case_study/loyalty-program-application-for-restaurant-chain',
      confidential: true
    },
    {
      id: 4,
      company: 'IT System Consultant',
      name: 'Merchant POS and Dashboard',
      start: 'Mar 09, 2019',
      end: 'Sep 28, 2019',
      tech: ['ReactJS', 'Firebase', 'ATI-REACT Framework'],
      description: 'Mobile banking application for merchant',
      task: [
        'Build web-apps with Back-end API integration',
        'Coordinate with team members to create better and optimized app',
        'Make sure the flow of the apps to working properly',
        'Responds to client needs for application and update application according to client request',
        'Review Code',
        'Do pull request / code merging',
        'Publish app to staging'
      ],
      jobdesk: 'Frontend Developer',
      link: null,
      confidential: true
    },
    {
      id: 5,
      company: 'American Multinational Technology Company',
      name: 'Document Text Reader for Dock Clearences',
      start: 'Oct 01, 2019',
      end: 'Nov 09, 2019',
      tech: ['ReactJS', 'Java'],
      description: 'AI application for trading system',
      task: [
        'List document',
        'Draw/highlight document text',
        'Input highlighted document text data into table',
        'Edit highlighted document text data',
        'Delete data table',
        'Build web-apps with Back-end API integration',
        'Coordinate with team members to create better and optimized app',
        'Make sure the flow of the apps to working properly',
        'Responds to client needs for application and update application according to client request',
        'Review Code',
        'Do pull request / code merging'
      ],
      jobdesk: 'Frontend Developer',
      link: null,
      confidential: true
    },
    {
      id: 6,
      company: 'Startup Company for E-Learning Management',
      name: 'Create and Publish E-Learning Certificate Application',
      start: 'Nov 16, 2019',
      end: 'Apr 02, 2020',
      tech: ['ReactJS', 'NodeJS', 'MySql'],
      description: 'Web to create certificate and to view certificate',
      task: [
        'Build web-apps with Back-end API integration',
        'Coordinate with team members to create better and optimized app',
        'Make sure the flow of the apps to working properly',
        'Responds to client needs for application and update application according to client request'
      ],
      jobdesk: 'Frontend Developer',
      link: null,
      confidential: true
    },
    {
      id: 7,
      company: 'Worldwide Trend Analyst Company',
      name: 'Food Trend Spotter',
      start: 'Apr 03, 2020',
      end: 'Jul 16, 2021',
      tech: [
        'ReactJS',
        'Go Lang',
        'IBM AppID SSO',
        'IBM Cloudant',
        'IBMCloud Object Storage',
        'MongoDB'
      ],
      description: 'Application for food trend prediction based on AI',
      task: [
        'Build web-apps with Back-end API integration',
        'Coordinate with team members to create better and optimized app',
        'Make sure the flow of the apps to working properly',
        'Update application according to client request'
      ],
      jobdesk: 'Frontend Developer',
      link: null,
      confidential: true
    },
    {
      id: 8,
      company: 'IT Company',
      name: 'Tech Talent Job Opportunities - Extra income for Freelancer',
      start: 'May 09, 2020',
      end: 'Oct 30, 2020',
      tech: ['ReactJS', 'Go Lang', 'MySql'],
      description: 'Application for IT resources management',
      task: [
        'Build web-apps with Back-end API integration',
        'Coordinate with team members to create better and optimized app',
        'Make sure the flow of the apps to working properly',
        'Update application according to client request',
        'Responds to client needs for application and update application according to client request',
        'Review Code',
        'Do pull request / code merging',
        'Publish app to staging'
      ],
      jobdesk: 'Frontend Developer',
      link: null,
      confidential: true
    },
    {
      id: 9,
      company: 'IT Company',
      name: 'Recruitment Management Application',
      start: 'Aug 01, 2020',
      end: 'Sept 18, 2020',
      tech: ['ReactJS', '.NET Core 3.1', 'SQL Server'],
      description: 'Application for hiring IT talent',
      task: [
        'Frontend and Backend Team Leader',
        'Build base code for Frontend and Backend',
        'Review Code',
        'Configure Windows 2012 Server',
        'Publish App (Frontend - Backend)'
      ],
      jobdesk: 'Frontend & Backend Team Lead',
      link: null,
      confidential: true
    },
    {
      id: 10,
      company: 'Health Consultant',
      name: 'Online-based Healthcare Platform',
      start: 'Aug 15, 2020',
      end: 'Sep 13, 2020',
      tech: ['AngularJS'],
      description: 'Application for health consultation',
      task: [
        'Build web-apps with Back-end API integration',
        'Coordinate with team members to create better and optimized app',
        'Make sure the flow of the apps to working properly',
        'Update application according to client request'
      ],
      jobdesk: 'Frontend Developer',
      link: null,
      confidential: true
    },
    {
      id: 11,
      company: 'Groceries Company',
      name: 'Landing Page Application',
      start: 'Dec 23, 2020',
      end: 'Jan 15, 2021',
      tech: ['NextJS'],
      description: 'A Landing Page Application for Company',
      task: ['Build web-apps'],
      jobdesk: 'Freelance Frontend Developer',
      link: null,
      confidential: true
    },
    {
      id: 12,
      company: 'Otoklix',
      name: 'Otoklix: Aplikasi Booking Bengkel & Servis Mobil',
      start: 'Apr 6, 2021',
      end: null,
      tech: ['NextJS', 'Python', 'Django'],
      description:
        'Aplikasi booking servis mobil dengan harga transparan 1.000+ Mitra Bengkel JABODETABEK',
      task: ['Build web-apps'],
      jobdesk: 'Freelance Frontend Developer',
      file: 'otoklix.png',
      link: 'https://otoklix.com/',
      confidential: false
    },
    {
      id: 13,
      company: 'PT Telkom Indonesia (Persero) Tbk',
      name: 'Inpoin Gamifications',
      start: 'Jul 21, 2021',
      end: 'Jan 12, 2022',
      tech: ['NextJS'],
      description:
        'Inpoin is a platform that help to boost your customer engagement, experience, and rewards to build loyalty through gamification approaches.',
      task: ['Build web-apps'],
      jobdesk: 'Frontend Developer',
      file: 'inpoin.png',
      link: 'https://inpoin.id/',
      confidential: false
    }
  ],
  otherApp: {
    show: true,
    list: [
      {
        id: 0,
        app: 'Member Birthday Countdown',
        desc: 'App to see Member Birthday Countdown',
        showButton: true,
        link: 'https://muhamadzaky.github.io/MemberBirthdayCountDown/',
        target: '_blank'
      }
    ]
  },
  sns: [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/zakysteinfeld/'
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/zakysteinfeld'
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/zakysteinfeld/'
    },
    {
      name: 'github',
      link: 'https://github.com/muhamadzaky'
    }
  ]
};

export const langList = [
  { value: 'en-US', label: 'en' },
  { value: 'ja', label: 'ja' },
  { value: 'id', label: 'id' }
];

export const menuList = [
  { name: 'about', offset: -350, show: true },
  { name: 'educations', offset: 0, show: true },
  { name: 'skills', offset: 0, show: true },
  { name: 'experiences', offset: 0, show: true },
  { name: 'projects', offset: 0, show: true },
  { name: 'contacts', offset: 0, show: false }
];
