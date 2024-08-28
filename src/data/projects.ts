const companyProjects = [
  {
    company: 2,
    title: 'Spruce',
    period: 'May 2024 - Sept 2024',
    tech: '<p><b>Technology:</b> Typescript, Nest, Postgres, Prisma, AWS</p>',
    description:
      '<p>A web app designed to offer customers a platform for everyday services such as home cleaning, pet walking, and more.</p>' +
      '<ul style="margin-bottom: unset;"><li>Designed a sophisticated schema to effectively manage services, including their variations and categories.</li><li>Determined which companies will offer these services and at what capacity they can accept bookings.</li><li>Managed the assignment of services and companies to specific properties and established their pricing.</li><li>Utilized Braze for generating emails and notifications.</li><li>Set up AWS trigger functions for image thumbnail creation.</li><li>Implemented AWS cron jobs for payment settlements two days before the booking date.</li><li>Managed service blackouts on holidays using AWS cron jobs.</li></ul>',
  },
  {
    company: 2,
    title: 'GFS',
    period: 'Feb 2024 - Apr 2024',
    tech: '<p><b>Technology:</b> Typescript, Nest, Postgres, Prisma, AWS</p>',
    description:
      '<p>Web app designed to automate documentation facilities such as taxation for end clients</p>' +
      '<ul style="margin-bottom: unset;"><li>Worked on existing product, implementing new features and resolving bug improving applications overall performance and security.</li><li>New features included custom pdf and html forms creation for admin to help in creating realtime forms and avoid moving to development phase for new forms. Another feature was the addition of invoices emailing system to users and further processing it as a guest user and many more.</li></ul>',
  },
  {
    company: 2,
    title: 'RxPak',
    period: 'Sept 2023 - Mar 2024',
    tech: '<p><b>Technology:</b> Typescript, Nest, Postgres, Prisma, AWS</p>',
    description:
      '<p>Web app designed to provide B2C model e-commerce platform offering variety of medical products</p>' +
      '<ul style="margin-bottom: unset;"><li>Single-handedly developed the backend application using Postgres with Prisma</li><li>Designed sophisticated schema to effectively manage user`s wallet details with functionalities to refund & reward points to them. Moreover, to allow them to upload their medical details and prescriptions for purchase.</li><li>Implemented AWS serverless functions to update users of their product delivery status and to remind them when they maybe running low on medicines.</li></ul>',
  },
  {
    company: 1,
    title: 'Aster',
    period: 'July 2022 - Feb 2023',
    tech: '<p><b>Technology:</b> Typescript, Nest, React, MongoDB</p>',
    description:
      '<p>Web app designed to provide assistance to farmers and help them navigate through their issues and needs with ease to help them overcome challenges and achieve their goals.</p>' +
      '<ul style="margin-bottom: unset;"><li>REST APIs for CRUD operations, logger middleware, user activity logs, login module, and session management using Keycloak.</li><li>Implemented mongoose aggregation pipeline for generating comprehensive reports, ensuring efficient data analysis and reporting capabilities.</li><li>Utilized Swagger for API documentation, mongoose triggers for efficient database event handling, and Azure Functions for scalable and serverless application development.</li></ul>',
  },
  {
    company: 1,
    title: 'Kisaan Madadgar',
    period: 'Sep 2021 - June 2022',
    tech: '<p><b>Technology:</b> Typescript, Node, React, MongoDB</p>',
    description:
      '<p>Our platform aimed to empower farmers with the knowledge and tools necessary to make informed decisions about their crops and livestock.</p>' +
      '<ul style="margin-bottom: unset;"><li>Single-handedly designed the back-end server and engineered the database using Typescript, Node and mongoose</li><li>Implemented login module with middleware and authorization tokens</li><li>Automated notification generations on mobile app using Node-cron and firebase.</li><li>Setup mongoose scheduled triggers for efficiently updating user records.</li></ul>',
  },
  {
    company: 1,
    title: 'Concave Crafts',
    period: 'May 2021 - Sep 2021',
    tech: '<p><b>Technology:</b> Javascript, Node, Next, MongoDB</p>',
    description:
      '<p>Concave Craft is an e-commerce platform that operates on a B2C model. It provides a seamless online shopping experience to its customers, offering a wide range of products.</p>' +
      `<ul style="margin-bottom: unset;"><li>Designed a sophisticated schema to effectively manage multiple categories of products and application users.</li><li>Implemented email generation functionality for essential activities such as product purchases and password recovery.</li><li>Seamlessly integrated third-party services, including movex and TCS, to enhance the platform's capabilities.</li><li>Configured efficient CSV handlers to facilitate seamless reading and writing of product data.</li><li>Implemented server-side rendering to optimize page transitions, resulting in improved speed and enhanced SEO performance.</li></ul>`,
  },
  {
    company: 1,
    title: 'NayaPay Helpdesk',
    period: 'Mar 2021 - Aug 2021',
    tech: '<p><b>Technology:</b> .Net Webforms, Entity Framework, JQuery, SQL</p>',
    description:
      '<p>The NayaPay Helpdesk is a CRM web application designed to effectively automate and manage the customer’s entire dispute life cycle.</p>' +
      `<ul style="margin-bottom: unset;"><li>Developed a robust multiple roles application that simplifies the resolution of end-customer disputes, providing a user-friendly and hassle-free experience.</li><li>Implemented automated email generation for clients and agents, serving as reminders for timely resolution of disputes within the assigned working days.</li><li>Created and integrated multiple stored procedures to generate comprehensive reports, enabling data-driven insights and informed decision-making.</li><li>Utilized industry-standard technologies such as Bootstrap and jQuery to craft intuitive user interfaces, ensuring a seamless and engaging user experience.</li></ul>`,
  },
];

export default companyProjects;
