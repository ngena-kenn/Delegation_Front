import DataTable from 'react-data-table-component';
import React, {Component} from 'react';

class DelegationTab extends component{
    render(){
        
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
                selector: row => row.boitePostal,
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
                name:'codeNIC',
                selector: row => row.codeNIC,
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
                selector: row => row.manager.nom , 
            
            },
        
        ]
    }
}


export default DelegationTab;


