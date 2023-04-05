import axios from 'axios';

function UploadButton() {
  const handleClick = async () => {

    const response = await fetch('maison.png');
    const fileBuffer = await response.arrayBuffer();
    const file = new Blob([fileBuffer], { type: 'image/png' });


    // Create a new FormData object and append the file and any other form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', 'File name');
    formData.append('cidVersion', 0);

    const API_KEY = `ba7982d3d1680b7fff21`
    const API_SECRET = `15bcc356dfa03f63dcbf6e59b7dbd88c1dbb703583733e15cafa7d107fbea86c`

    try {
      // Send a POST request to upload the file
      const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'pinata_api_key': API_KEY,
          'pinata_secret_api_key': API_SECRET
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleClick}>Upload File</button>
  );
}

export default UploadButton;