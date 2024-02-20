const api = document.getElementById('api');
async function excersie() {
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=9';
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
                <div class="img" background-image: url(https://chloeting.com/_next/image?url=https%3A%2F%2Fstatic.chloeting.com%2Fprograms%2F61bd4e9158da74df97000e58%2Fada5d060-86d3-11ed-84dc-29ccec71f3d3.jpeg&w=1920&q=90)>
                    <div class="img-details">
                        <ul>
                            <li> <span class="title">title</span> </li>
                            <li> <span class="equipement">equipement</span> </li>
                            <li> <span class="targetMusle">Target Muscle</span> </li>
                        </ul>
                    </div>
                </div>
                <div class="info">
                    <div class="duration">
                        <div class="days">
                            <span><i class="fa-regular fa-calendar"></i> 25 day</span>
                        </div>
                        <div class="time">
                            <span><i class="fa-regular fa-clock"></i> 20-45 min/day</span>
                        </div>
                    </div>
                    <div class="challange">
                        <span><h4>2024 Weight Loss Challenge</h4></span>
                        <span>Lorem ipsum dolor sit amet consec...</span>
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