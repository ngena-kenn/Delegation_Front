function api (){
    const getDelegations = () =>{
        return fetch(process.env.REACT_APP_API_URL + "/delegations",
        {type: "GET"}).then((res)=>res.json());
    };

    const getCities = () =>{
        return fetch(process.env.REACT_APP_API_URL + "/cities",
        {type: "GET"}).then((res)=>res.json());
    };

    const downloadFileCity = () =>{
        return fetch(process.env.REACT_APP_API_URL + "/downloadCities",
            {type: "GET"}).then((res)=>res.blob());
    };

    const downloadFileDel = () =>{
        return fetch(process.env.REACT_APP_API_URL + "/downloadDelegations",
            {type: "GET"}).then((res)=>res.blob());
    };

    return {getDelegations, getCities, downloadFileCity, downloadFileDel};
}
export default api();