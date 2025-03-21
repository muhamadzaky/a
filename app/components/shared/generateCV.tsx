'use client';

import { FC, useEffect } from 'react';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Button } from '..';
import axios from 'axios';
import toast from '../toast';

const GenerateCV: FC = () => {
  const fetchData = async () => {
    try {
      const [projectsResponse, experiencesResponse, educationsResponse] = await Promise.all([
        axios.get(`${process.env.NEXT_API_URL}projects`),
        axios.get(`${process.env.NEXT_API_URL}experiences`),
        axios.get(`${process.env.NEXT_API_URL}educations`)
      ]);

      const projects = projectsResponse.data;
      const experiences = experiencesResponse.data;
      const educations = educationsResponse.data;

      return { projects, experiences, educations };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const dd: any = {
    info: {
      title: 'Muhamad Zaky CV',
      author: 'Muhamad Zaky',
      subject: 'Curriculum Vitae',
      keywords: 'Muhamad Zaky, CV, Frontend Developer, Resume',
      language: 'en-US'
    },
    content: [
      {
        columns: [
          {
            stack: [
              { text: 'Muhamad Zaky', style: 'header' },
              {
                text: 'Frontend Developer',
                style: 'subheader'
              }
            ],
            width: '50%'
          },
          {
            stack: [
              {
                text: '+62 819-0454-6023',
                link: 'tel:+6281904546023'
              },
              {
                text: 'muhamadzaky1023@gmail.com',
                link: 'mailto:muhamadzaky1023@gmail.com'
              },
              {
                text: 'muhamadzaky.my.id',
                link: 'https://muhamadzaky.my.id/'
              },
              { text: 'Bandung, Indonesia' }
            ],
            width: '50%',
            alignment: 'right'
          }
        ],
        columnGap: 10,
        marginBottom: 4
      },
      '\n',

      {
        text: [
          { text: 'Hi! I’m Zaky! ', bold: true },
          '\n',
          'I have 7 years of experience in software development, with a strong focus on Frontend technologies, particularly React JS.'
          // "I have 7 years of experience in software development, with a strong focus on Frontend technologies, particularly React JS. My passion lies in crafting intuitive and responsive web applications that enhance user experiences.",
        ],
        margin: [0, 0, 0, 10]
      },
      { text: 'EXPERIENCES', style: 'sectionHeader' },

      // gc
      {
        columns: [
          { text: 'Frontend Developer', style: 'jobTitle' },
          { text: '11/2024 - Present', alignment: 'right' }
        ]
      },
      {
        columns: [
          {
            text: 'PT Inovasi Dunia Gim',
            link: 'https://game-consign.com/',
            style: 'companyInfo',
            alignment: 'left'
          },
          {
            text: 'Tangerang, Indonesia',
            style: 'companyInfo',
            alignment: 'right'
          }
        ],
        margin: [0, 0, 0, 8],
        marginBottom: 6
      },
      {
        ul: [
          {
            text: [
              { text: 'Redesign internal tools', bold: true },
              ' to update and enhance the overall design for improved usability and consistency.'
            ]
          },
          {
            text: [
              { text: 'Develop new components', bold: true },
              ' based on updated design specifications to align with the latest design guidelines.'
            ]
          },
          {
            text: [
              {
                text: 'Implement new features',
                bold: true
              },
              ' to extend functionality and meet evolving user or business requirements.'
            ]
          }
        ]
      },
      '\n\n',
      // Otoklix
      {
        columns: [
          {
            text: 'Sr. Associate Frontend Developer',
            style: 'jobTitle'
          },
          { text: '03/2021 - 01/2024', alignment: 'right' }
        ]
      },
      {
        columns: [
          {
            text: 'PT Oto Klix Indonesia',
            link: 'https://otoklix.com/',
            style: 'companyInfo',
            alignment: 'left'
          },
          {
            text: 'Bandung, Indonesia',
            style: 'companyInfo',
            alignment: 'right'
          }
        ],
        margin: [0, 0, 0, 8],
        marginBottom: 6
      },
      {
        ul: [
          {
            text: [
              { text: 'Developed otoklix.com', bold: true },
              ' and ',
              { text: 'internal tools ', bold: true },
              'from scratch.'
            ]
          },
          {
            text: [
              { text: 'Implement tracking systems ', bold: true },
              '(e.g., Google Tag Manager, Clever Tap, Amplitude).'
            ]
          },
          {
            text: [
              {
                text: 'Create microservice-based web applications ',
                bold: true
              },
              'such as payment gateways and FAQ pages.'
            ]
          },
          {
            text: [{ text: 'Integrate GraphQL ', bold: true }, 'alongside the use of RESTful APIs.']
          },
          {
            text: [
              { text: 'Optimize for SEO ', bold: true },
              'to improve search engine visibility.'
            ]
          },
          {
            text: [
              { text: 'Develop custom components ', bold: true },
              'following the design system.'
            ]
          }
        ]
      },
      '\n\n',
      // telkom
      {
        columns: [
          { text: 'Frontend Developer', style: 'jobTitle' },
          { text: '07/2021 - 12/2021', alignment: 'right' }
        ]
      },
      {
        columns: [
          {
            text: 'PT Telkom Indonesia (Persero) Tbk',
            link: 'https://www.telkom.co.id/',
            style: 'companyInfo',
            alignment: 'left'
          },
          {
            text: 'Bandung, Indonesia',
            style: 'companyInfo',
            alignment: 'right'
          }
        ],
        margin: [0, 0, 0, 8],
        marginBottom: 6
      },
      {
        ul: [
          {
            text: [
              {
                text: 'Build and maintain a gamification web app',
                bold: true
              },
              ' to enhance user engagement.'
            ]
          },
          {
            text: [
              { text: 'Implement RESTful APIs', bold: true },
              'to support seamless data exchange and integration.'
            ]
          },
          {
            text: [
              {
                text: 'Develop custom components',
                bold: true
              },
              ' adhering to the design system for consistency.'
            ]
          }
        ]
      },
      '\n\n',
      // wgs
      {
        columns: [
          { text: 'Full Stack Developer', style: 'jobTitle' },
          { text: '07/2017 - 07/2021', alignment: 'right' }
        ]
      },
      {
        columns: [
          {
            text: 'PT Walden Global Services',
            link: 'https://wgs.co.id/',
            style: 'companyInfo',
            alignment: 'left'
          },
          {
            text: 'Bandung, Indonesia',
            style: 'companyInfo',
            alignment: 'right'
          }
        ],
        margin: [0, 0, 0, 8],
        marginBottom: 6
      },
      {
        ul: [
          {
            text: [
              { text: 'Lead the team', bold: true },
              ' to achieve OKRs effectively and efficiently.'
            ]
          },
          {
            text: [
              { text: 'Build skeleton/base code', bold: true },
              ' to establish project structure and scalability.'
            ]
          },
          {
            text: [
              {
                text: 'Develop web applications',
                bold: true
              },
              ' using React JS, Vue JS, and C#.'
            ]
          },
          {
            text: [
              {
                text: 'Create RESTful APIs',
                bold: true
              },
              ' for multiple applications with .NET Core/.NET Framework.'
            ]
          },
          {
            text: [
              {
                text: 'Set up servers',
                bold: true
              },
              ' for frontend and backend applications to ensure smooth operations.'
            ]
          },
          {
            text: [
              {
                text: 'Design and implement custom components',
                bold: true
              },
              ' based on the design system for a consistent user experience.'
            ]
          }
        ]
      },
      '\n\n\n',
      // astra
      {
        columns: [
          { text: '.NET Developer', style: 'jobTitle' },
          { text: '01/2018 - 10/2018', alignment: 'right' }
        ]
      },
      {
        columns: [
          {
            text: 'PT Astra International Tbk',
            link: 'https://www.astra.co.id/',
            style: 'companyInfo',
            alignment: 'left'
          },
          {
            text: 'Jakarta, Indonesia',
            style: 'companyInfo',
            alignment: 'right'
          }
        ],
        margin: [0, 0, 0, 8],
        marginBottom: 6
      },
      {
        ul: [
          {
            text: [
              { text: 'Build RESTful APIs', bold: true },
              ' to support an ETL application using the ',
              { text: '.NET Framework', bold: true },
              ', ensuring efficient and scalable data processing.'
            ]
          },
          {
            text: [
              {
                text: 'Create and optimize Stored Procedures',
                bold: true
              },
              ' to simplify data operations and enhance performance.'
            ]
          },
          {
            text: [
              {
                text: 'Collaborate with the frontend team',
                bold: true
              },
              ' to ensure seamless integration and support for user-facing applications.'
            ]
          },
          {
            text: [
              {
                text: 'Assist in implementing frontend features',
                bold: true
              },
              ', even outside primary backend responsibilities, to meet tight deadlines and project goals.'
            ]
          }
        ]
      },
      '\n\n',
      // bia
      {
        columns: [
          { text: 'Intern Web Developer', style: 'jobTitle' },
          { text: '10/2016 - 12/2016', alignment: 'right' }
        ]
      },
      {
        columns: [
          {
            text: 'PT Bandung International Aviation',
            link: 'https://www.pt-bia.com/',
            style: 'companyInfo',
            alignment: 'left'
          },
          {
            text: 'Bandung, Indonesia',
            style: 'companyInfo',
            alignment: 'right'
          }
        ],
        margin: [0, 0, 0, 8],
        marginBottom: 6
      },
      {
        ul: [
          {
            text: [
              {
                text: 'Developed a comprehensive Flight Management System',
                bold: true
              },
              ' tailored for a pilot training school using ',
              { text: 'PHP Laravel', bold: true },
              '. This system enhanced operational efficiency, streamlined administrative tasks, and ensured better coordination across training schedules and resources.'
            ]
          }
        ]
      },
      '\n',
      { text: 'EDUCATIONS', style: 'sectionHeader' },
      {
        columns: [
          {
            stack: [
              {
                text: 'Computer Software Engineering',
                fontSize: 14,
                bold: true
              },
              {
                text: 'SMK Negeri 4 Bandung',
                fontSize: 12,
                link: 'https://smkn4bdg.sch.id/'
              }
            ],
            width: '70%'
          },
          {
            text: '07/2014 - 05/2017',
            fontSize: 12,
            color: '#555',
            alignment: 'right',
            width: '30%'
          }
        ]
      },
      '\n',
      { text: 'SERTIFICATES', style: 'sectionHeader' },
      {
        columns: [
          {
            stack: [
              {
                text: 'Skill Competency Test',
                fontSize: 14,
                bold: true
              },
              {
                text: 'PT Tristek Media Kreasindo',
                fontSize: 12
              }
            ],
            width: '70%'
          },
          {
            text: '01/2017',
            fontSize: 12,
            color: '#555',
            alignment: 'right',
            width: '30%'
          }
        ]
      },
      '\n',
      {
        columns: [
          {
            stack: [
              {
                text: 'Java Programming Fundamental Course Completion',
                fontSize: 14,
                bold: true
              },
              { text: 'Oracle Academy', fontSize: 12 },
              {
                text: 'ID-SMKN4BDG_JP2016_SO22_02',
                fontSize: 12
              }
            ],
            width: '70%'
          },
          {
            text: '12/2016',
            fontSize: 12,
            color: '#555',
            alignment: 'right',
            width: '30%'
          }
        ]
      },
      '\n',
      {
        columns: [
          {
            stack: [
              { text: 'ASP.NET', fontSize: 14, bold: true },
              { text: 'Geeksfarm', fontSize: 12 }
            ],
            width: '70%'
          },
          {
            text: '06/2017',
            fontSize: 12,
            color: '#555',
            alignment: 'right',
            width: '30%'
          }
        ]
      }
    ],
    styles: {
      header: {
        fontSize: 32,
        bold: true
      },
      subheader: {
        fontSize: 18,
        bold: true,
        margin: [0, 4, 0, 6]
      },
      sectionHeader: {
        fontSize: 14,
        bold: true,
        decoration: 'underline',
        margin: [0, 10, 0, 5]
      },
      jobTitle: {
        fontSize: 12,
        bold: true
      },
      companyInfo: {
        fontSize: 12,
        color: '#555'
      }
    }
  };

  const handleClickDownload = () => {
    // fetchData()
    //   .then(({ projects, experiences, educations }) => {
    //     console.log('Projects:', projects);
    //     console.log('Experiences:', experiences);
    //     console.log('Educations:', educations);

    //     // pdfMake.createPdf(dd).download('Muhamad Zaky CV.pdf')
    //     toast({
    //       id: 'success-download-cv',
    //       title: 'Success',
    //       body: 'Success Download CV!'
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Failed to fetch data:', error);
    //   });

    pdfMake.createPdf(dd).download('Muhamad Zaky CV.pdf');
  };

  useEffect(() => {
    if (pdfMake && pdfFonts && pdfFonts.pdfMake && pdfFonts.pdfMake.vfs) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    } else {
      console.error('Error: pdfMake or pdfFonts.vfs is undefined.');
    }
  }, []);

  return (
    <div className="flex justify-center mt-5">
      <Button variant="ghost" outline onClick={handleClickDownload}>
        Download CV
      </Button>
    </div>
  );
};

export default GenerateCV;
