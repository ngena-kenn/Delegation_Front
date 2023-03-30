import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import api from "./api";
import download from 'downloadjs';
import '../css/page.css'

class Cities extends Component{

    constructor(props) {
        super(props);
        this.state = {
          cities: [],
          loading:false,

        };
        
    }

    componentDidMount() {
        console.log("Enter component.");
        this.setState(prevState => ({...prevState,loading:true}));
        api.getCities().then((json) => {
            console.log("response is :",json);
            this.setState({
                cities:json,
                loading:false
            })
        
        
          });
       
    
      }

      download(){
        console.log("Enter download");
        this.setState(prevState => ({...prevState,loading:true}));
        api.downloadFileCity().then((blob)=>{
            download(blob, "Alimention-insptt.json");
            this.setState({
                loading:false
            })

        })
            
        
      

      }

    
    

    render(){  
        
        const columns = [
            {
                name:'insptt',
                selector: row => row.insptt,
            },
            {
                name:'local',
                selector: row => row.local,
            },
            {
                name:'codePostal',
                selector: row => row.codePostal,
            },
            {
                name:'cdeuo',
                selector: row => row.cdeuo,
            },
       
    ]
    
    const paginationComponentOptions = {
        rowsPerPageText: 'Pagination',
        rangeSeparatorText: 'de',
        selectAllRowsItem: false,
        selectAllRowsItemText: 'Todos',
    };
    const {cities, loading}=this.state;

    if (this.state.loading){
        return (<div className='loader'></div>);
    }
      
   
        return(
        <div>
            <DataTable
            columns={columns}
            data={cities}
            //progressPending={loading}
            pagination 
            paginationComponentOptions={paginationComponentOptions}
        />
        
        <div className='footer'> 
        <button className='button' onClick={() =>this.download()}>Télécharger</button>
        </div>
        
        </div>
    
          
        )
        

    }
    
    
}
export default Cities;