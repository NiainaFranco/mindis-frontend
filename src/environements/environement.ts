const apiUrl = import.meta.env['NG_APP_API_URL'];

export const environment = {
  environement: 'DEV',
  apiUrl: apiUrl || 'http://localhost:3000',
};
