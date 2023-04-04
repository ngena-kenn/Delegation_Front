const columns = [
    {
        name:'id',
        selector: row => row.id,
    },
    {
        name:'nom',
        selector: row => row.nom,
    },
    {
        name:'numero',
        selector: row => row.numero,
    },
    {
        name:'complement',
        selector: row => row.complement,
    },
    {
        name:'voie',
        selector: row => row.voie,
    },
    {
        name:'boitePostal',
        selector: row => row.boitePostale,
    },
    {
        name:'etabAdresse4',
        selector: row => row.etabAdresse4,
    },
    {
        name:'codePostal',
        selector: row => row.codePostal,
    },
    {
        name:'ville',
        selector: row => row.ville,
    },
    {
        name:'codeNic',
        selector: row => row.codeNic,
    },
    {
        name:'telephone',
        selector: row => row.telephone,
    },
    {
        name:'email',
        selector: row => row.email,
    },
    {
        name:'longitude',
        selector: row => row.longitude,
    },
    {
        name:'latitude',
        selector: row => row.latitude,
    },
    {
        name:'manager',
        selector:  row =>  [row.manager.nom, " " ,row.manager.prenom], 
    },
  

];
 export default columns;
  