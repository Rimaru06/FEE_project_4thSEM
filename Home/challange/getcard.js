let id = '';

async function getParams() {
    try {
        const muscleName = new URLSearchParams(window.location.search).get('id')
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscleName}?limit=10`;

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "916531ba40msh7bc4bdfc846058cp191e1cjsn66d202ebf942",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        if(!data) return;
        const cardContainer = document.getElementById("showCurr");
        cardContainer.innerHTML = "";

        data.forEach(item => {
            cardContainer.innerHTML += `
            
                <div class="card">
                    <div class="gif">
                        <img src="${item.gifUrl}" alt="Exercise Gif">
                    </div>
                    <div class="details">
                        <ul>
                            <li>Exercise Name: ${item.name}</li>
                            <li>Body Part: ${item.bodyPart}</li>
                            <li>Equipment: ${item.equipment}</li>
                            <li>Target: ${item.target}</li>
                        </ul>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error(error);
    }

    const urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get('id');
}

getParams();
