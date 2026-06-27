type theme = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';

// Colors reference theme-aware CSS variables (see _themes.scss) so the bars
// adapt to light / dark mode.
function skills(confidence: number): { confidence: number; color: string; theme: theme } {
  if (confidence >= 85) return { confidence, color: 'var(--bar-primary)', theme: 'primary' };
  if (confidence >= 60) return { confidence, color: 'var(--bar-secondary)', theme: 'secondary' };
  if (confidence >= 40) return { confidence, color: 'var(--bar-success)', theme: 'success' };
  if (confidence >= 20) return { confidence, color: 'var(--bar-warning)', theme: 'warning' };
  else return { confidence, color: 'var(--bar-error)', theme: 'error' };
}

export default [
  {
    name: 'NodeJs',
    ...skills(85),
  },
  {
    name: 'NestJs',
    // confidence: 70,
    // color: '#6C6CE5',
    ...skills(70),
  },
  {
    name: 'React',
    ...skills(65),
  },
  {
    name: 'Next',
    ...skills(50),
  },
  {
    name: 'MongoDB',
    ...skills(85),
  },
  {
    name: 'Mongo Atlas',
    ...skills(80),
  },
  {
    name: 'MySql',
    ...skills(80),
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
    name: 'Firebase',
    ...skills(60),
  },
  {
    name: 'Heroku',
    ...skills(50),
  },
  {
    name: 'Azure DevOps',
    ...skills(70),
  },
  {
    name: 'Git',
    ...skills(75),
  },
  {
    name: 'Postman',
    ...skills(80),
  },
  {
    name: 'Keycloak',
    ...skills(40),
  },
];
