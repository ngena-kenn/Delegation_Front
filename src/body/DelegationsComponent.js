import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import api from "./api";
import download from 'downloadjs';
import "../css/page.css";
import tableau from './TableauDel';


class Delegations extends Component{

    constructor(props) {
        super(props);
        this.state = {
          delegations: [],
          loading : false,
          search : "",
        };
    }

    handleSearch = (e) =>{
        let value = e.target.value; 
        this.setState(prevState =>({...prevState,search:(value)}))
    }
    getDelegationsData (){
        const {delegations, search} = this.state;
         return delegations.filter((row)=>{
            return row.nom.toLowerCase().startsWith(search.toLowerCase());
        }) 
    }

    componentDidMount() {
        console.log("Enter component.")
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
            
        
          }, (error) => {
            console.log(error);
            this.setState({
                loading:false,
                delegations: []
            })
          })
    
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
    if (delegations.length === 0 ){
        return(<div className='erreur'>
            <h1>oups !</h1>
            <h2>Il y'a une erreur</h2>
            <h3>Merci de réessayer plus tard</h3></div>);
    };

        return(
            <div >
                <div className='search'>
                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="Rechercher un nom"
                        onChange={this.handleSearch}
                    />
                </div>
                <DataTable
                    columns={tableau}
                    data={this.getDelegationsData()}
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