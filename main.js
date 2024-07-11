let countMessage = document.getElementById('view-count');

async function getViewCount(){
	try {
    const response = await fetch('https://rbkhdintlclmwfjyaedlvx5psq0yzhxo.lambda-url.us-west-2.on.aws/');
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
		countMessage.innerText = `Number of views: ${json}`;
  } catch (error) {
    console.error(error.message);
		countMessage.innerText = "Cannot load view count"
  }
}

getViewCount();