const Settings = {
    baseUrl: 'https://app.gascertificate.app/',
    api: 'https://app.gascertificate.app/',
       
    endpoints: {
      login: 'api/v1/login',
      signup: 'api/v1/register',
      profile_update: 'api/v1/auth/profile/update',
      change_password: 'api/v1/auth/profile/update/password',
      draw_signature: 'api/v1/auth/profile/update/draw-signature',
      file_signature: 'api/v1/auth/profile/update/file-signature',
     },
  
    version: {
      android: '1.0.0',
      ios: '1.0.0',
    },
  
    
  };
  export default Settings;