export async function getAccessToken() {
    const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;
  
    console.log('CLIENT_ID:', CLIENT_ID);
    console.log('CLIENT_SECRET:', CLIENT_SECRET ? 'Provided' : 'Not provided');
    console.log('REFRESH_TOKEN:', REFRESH_TOKEN ? 'Provided' : 'Not provided');
  
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        grant_type: 'refresh_token'
      })
    });
  
    const data = await response.json();
    if (data.access_token) {
      console.log('Access token obtained:', data.access_token);
      return data.access_token;
    } else {
      console.error('Failed to obtain access token:', data);
      throw new Error('Could not get access token');
    }
  }
  