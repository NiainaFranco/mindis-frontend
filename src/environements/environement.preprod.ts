const apiUrl = import.meta.env['NG_APP_API_KEY'];

export const environment = {
  environement: 'PREPROD',
  apiUrl: apiUrl || 'http://localhost:5000',
};
