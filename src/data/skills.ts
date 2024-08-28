type theme = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';

function skills(confidence: number): { confidence: number; color: string; theme: theme } {
  if (confidence >= 85) return { confidence, color: '#6C6CE5', theme: 'primary' };
  if (confidence >= 60) return { confidence, color: '#CE93D8', theme: 'secondary' };
  if (confidence >= 40) return { confidence, color: '#66CC66', theme: 'success' };
  if (confidence >= 20) return { confidence, color: '#FFD15C', theme: 'warning' };
  else return { confidence, color: '#f44336', theme: 'error' };
}

export default [
  {
    name: 'NodeJs',
    ...skills(75),
  },
  {
    name: 'NestJs',
    ...skills(80),
  },
  {
    name: 'React',
    ...skills(65),
  },
  {
    name: 'Next',
    ...skills(40),
  },
  {
    name: 'Micro Services',
    ...skills(50),
  },
  {
    name: 'RabbitMQ',
    ...skills(30),
  },
  {
    name: 'Kafka',
    ...skills(25),
  },
  {
    name: 'PostgreSql',
    ...skills(70),
  },
  {
    name: 'MongoDB',
    ...skills(80),
  },
  {
    name: 'MySql',
    ...skills(70),
  },
  {
    name: 'Mongo Atlas',
    ...skills(75),
  },
  {
    name: 'SSMS',
    ...skills(50),
  },
  {
    name: 'MySql Workbench',
    ...skills(50),
  },
  // {
  //   name: 'Sequelize',
  //   ...skills(60),
  // },
  // {
  //   name: 'Socketio',
  //   ...skills(60),
  // },
  // {
  //   name: 'Twilio',
  //   ...skills(50),
  // },
  // {
  //   name: 'css',
  //   ...skills(40),
  // },
  // {
  //   name: 'Bootstrap',
  //   ...skills(60),
  // },
  // {
  //   name: 'Flexbox',
  //   ...skills(40),
  // },
  {
    name: 'Prisma',
    ...skills(75),
  },
  {
    name: 'Mongoose',
    ...skills(70),
  },
  {
    name: 'TypeORM',
    ...skills(40),
  },
  {
    name: 'Sequelize',
    ...skills(40),
  },
  {
    name: 'Firebase',
    ...skills(50),
  },
  {
    name: 'AWS',
    ...skills(40),
  },
  {
    name: 'Azure DevOps',
    ...skills(30),
  },
  {
    name: 'Git',
    ...skills(65),
  },
  {
    name: 'Postman',
    ...skills(70),
  },
  {
    name: 'Keycloak',
    ...skills(40),
  },
  {
    name: '.Net Core',
    ...skills(30),
  },
  {
    name: 'Entity Framework',
    ...skills(25),
  },
];
