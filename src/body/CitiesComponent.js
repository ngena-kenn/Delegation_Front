import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import api from "./api";
import download from 'downloadjs';
import '../css/page.css';
import tableau from './TableauCity'

class Cities extends Component{

    constructor(props) {
        super(props);
        this.state = {
          cities: [],
          loading:false,
          search : "",

        };
        
    }

    handleSearch = (e) =>{
        let value = e.target.value; 
        this.setState(prevState =>({...prevState,search:(value)}))
    }

    getCitiesData (){
        const {cities, search} = this.state;
         return cities.filter((row)=>{
            return row.local.toLowerCase().startsWith(search.toLowerCase());
        }) 
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
        
        
          }, (error) => {
            console.log(error);
            this.setState({
                loading:false,
                cities: []
    
            })
          })
       
    
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
        
    
    const paginationComponentOptions = {
        rowsPerPageText: 'Pagination',
        rangeSeparatorText: 'de',
        selectAllRowsItem: false,
        selectAllRowsItemText: 'Todos',
    };
    const {cities}=this.state;

    if (this.state.loading){
        return (<div className='loader'></div>);
    };
    
    if (cities.length === 0){
        return(<div className='erreur'><h1>oups !</h1><h2>Il y'a une erreur</h2>
        <h3>Merci de réessayer plus tard</h3></div>);
    };
   
        return(
        <div>
            <div className='search'>
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher un local"
                    onChange={this.handleSearch}
                />
            </div>
            <DataTable
                columns={tableau}
                data={this.getCitiesData()}
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