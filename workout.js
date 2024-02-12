
async function workout() {
    const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b8eadd59dfmsh1a0d3a9f1c50669p151dedjsn0b366526076b',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


async function work()
{
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
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
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

