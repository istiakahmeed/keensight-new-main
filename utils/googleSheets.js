// utils/googleSheets.js

// Function to retrieve an access token using OAuth 2.0 refresh token
export async function getAccessToken() {
  const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;

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

// Function to add an email to a Google Sheet
export async function addEmailToSheet(email) {
  const accessToken = await getAccessToken();
  const spreadsheetId = process.env.SPREADSHEET_ID;

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:A:append?valueInputOption=RAW`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ values: [[email]] })
    }
  );

  const result = await response.json();

  if (response.ok) {
    console.log('Email added to Google Sheet:', email);
    return { message: 'Subscription successful!' };
  } else {
    console.error('Failed to add email to Google Sheet:', result);
    throw new Error('Failed to add email to the sheet');
  }
}
