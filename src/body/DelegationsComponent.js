import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import api from "./api";
import download from 'downloadjs';
import "../css/page.css";

class Delegations extends Component{

    constructor(props) {
        super(props);
        this.state = {
          delegations: [],
          loading : false,
        };
    }

    componentDidMount() {
        console.log("Enter component.");
        this.setState(prevState => ({...prevState,loading:true}));
        /*
        explication
        prevState = this.state(les valeurs du state precedent)
        prevState.loading: true ( changer la valeur de loading a true)
        this.state = prevState(la nouvelle valeur de state sera prevstate)
        */
        api.getDelegations().then((json) => {
            console.log("response is :",json);
            this.setState({
                delegations:json, 
                loading:false
            })
            
        
          });
    
      }


      download(){
        console.log("Enter download");
        this.setState(prevState => ({...prevState,loading:true}));
        api.downloadFileDel().then((blob)=>{
            download(blob, "Alimention-delegations.json");
            this.setState({
                loading:false
            })
        })
            
        
      

      }

    render(){  

    
        console.log(this.state.loading)
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
      
    
    ]
    
    
    
    
    const paginationComponentOptions = {
        rowsPerPageText: 'Pagination',
        rangeSeparatorText: 'de',
        selectAllRowsItem: false,
        selectAllRowsItemText: 'Todos',
    };
    
    const {delegations, loading}=this.state;
    //equivalent const delegations = this.state.delegations
    //const laoding = this.state.loading


    //console.log("Enter render.");
     
    if (this.state.loading){
        return (<div className='loader'></div>);
    };
      

        return(
            <div >
            <DataTable
                columns={columns}
                data={delegations}
                //progressPending={loading}
                pagination 
                paginationComponentOptions={paginationComponentOptions}
            
        />
                
           
          <div className='footer'><button className='button' onClick={() =>this.download()}>Télécharger</button></div>
        

        </div>
          
        )
    
        
    }
    
    
}
export default Delegations;