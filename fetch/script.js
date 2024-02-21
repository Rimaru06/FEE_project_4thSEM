const api = document.getElementById('api');
async function excersie() {
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest?limit=24';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b8eadd59dfmsh1a0d3a9f1c50669p151dedjsn0b366526076b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)

        result.map((item) => {
            api.innerHTML += `
            <div class="container">
                <div class="img" style="background-image: url(${item.gifUrl});">
                    <div class="img-details">
                        <ul>
                            <li> <span class="title">${item.bodyPart}</span> </li>
                            <li> <span class="equipement">equipement : ${item.equipment}</span> </li>
                            <li> <span class="targetMusle">Secondary Muscle : ${item.secondaryMuscles}</span> </li>
                        </ul>
                        <h1>instructions : </h1>
                        <ul>
                            <li> <span >1. ${item.instructions[0]}</span> </li>
                            <li> <span >2. ${item.instructions[1]}</span> </li>
                            <li> <span >3. ${item.instructions[2]}</span> </li>
                            <li> <span >4. ${item.instructions[3]}</span> </li>
                            <li> <span >5. ${item.instructions[4]}</span> </li>
                        </ul>
                    </div>
                </div>
                <div class="info">
                    <div class="challange">
                        <span><h4>Name : ${item.name}</h4></span>
                        <span><h4>Target : ${item.target}</h4></span>
                    </div>
                </div>
            </div>
            `;
        }); 
    } catch (error) {
        console.error(error);
    }
}
excersie();