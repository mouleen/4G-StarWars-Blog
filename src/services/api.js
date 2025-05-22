const apiBaseUrl = "https://www.swapi.tech/api"

// servicio para obtener elemento

export const getElement = async (type,id) => {   
    
    const newElement = await fetch(apiBaseUrl + "/" + type + "/" + id );
    const response = await newElement.json();
    return response.results;

}

// servicio para obtener listado de elementos

export const getElementIndex = async (type) => {
    
    const newElementList = await fetch(apiBaseUrl + "/" + type  );
    const response = await newElementList.json();
    //console.log(response.results);
    return response.results;
}
