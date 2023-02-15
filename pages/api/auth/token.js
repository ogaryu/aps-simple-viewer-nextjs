export default function handler(req, res) {

  try {

    const getAccessToken = async () => {
      let basic = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');
    
      const response = await fetch('https://developer.api.autodesk.com/authentication/v2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${basic}`
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          scope: 'viewables:read data:read'
        }),
    
      });

      var data = await response.json();

      console.log(data);

      res.status(200).json(data);
    }

    getAccessToken();

  }
  catch (e) {
    console.log(e);
  }
}

