const params = new URLSearchParams(window.location.search);
const param = params.get('name');
const api = document.getElementById('api');
async function excersie(name) {
    const url = `https://work-out-api1.p.rapidapi.com/search?Muscles=${name}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b8eadd59dfmsh1a0d3a9f1c50669p151dedjsn0b366526076b',
            'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const {"Beginner Sets" : sets} = result;
        console.log(result);
        result.map((item) => {
            api.innerHTML += `

<div class="container">
  <div>
    <h1>${item.WorkOut} : ${item.Intensity_Level}</h1>
  </div>
  <hr />
  <div class="sets">
    <div>
      <h3>Beginner sets :</h3>
      <p>${item["Beginner Sets"]}</p>
    </div>
    <div>
      <h3>Expert sets :</h3>
      <p>${item["Expert Sets"]}</p>
    </div>
  </div>
  <hr>
  <div class="about">
    <h2>About :</h2>
    <p>${item["Long Explanation"]}</p>
  </div>
  <hr>
  <div class="video">
    <a href="${item.Video}"><button>Watch Video</button></a>
  </div>
</div>

             `;
        }); 
    } catch (error) {
        console.error(error);
    }
}
excersie(param)


