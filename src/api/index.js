

export const getMusicResults = async (searchString="Beyonce") => { 
    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchString}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
      );
      const data  = await response.json();
      if (response.ok) {
        console.log("General quary", data.data);
        return data.data;
      } else {
        console.log("there was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  export const getAlbum = async (albumID) => {

    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/album/${albumID}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      const data  = await response.json();
      if (response.ok) {
        console.log("Album fetch", data.data);
        return data.data;
      } else {
        console.log("there was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };
