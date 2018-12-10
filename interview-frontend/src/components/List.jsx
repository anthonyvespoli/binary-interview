import React from 'react';
import {ListItem} from "./ListItem";
import ApiService from "../ApiService";
import Loader from 'react-loader-spinner';

export class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            baths: null,
            type: null,
            search: "",
            allResults: [], //todo doesn't necessarily need to be in state if we never make a call to locations api again
            filteredResults: [],
            loading: true
        };

        this.bathsList = [];
        this.typesList = [];

        this.getLocations = this.getLocations.bind(this);
        this.buildListItems = this.buildListItems.bind(this);
        this.filterText = this.filterText.bind(this);
        this.filterResults = this.filterResults.bind(this);
    }

    componentDidMount() {
        //We use promise.all to ensure all data is loaded before displaying the screen
        Promise.all([this.getLocations(), ApiService.getBaths(), ApiService.getTypes()]).then((res) => {
            this.bathsList = res[1].data;
            this.typesList = res[2].data;
            this.setState({allResults: res[0].data, loading: false});
        });
    }

    getLocations(baths = null, type = null) {
        this.setState({loading: true});
        return ApiService.getLocations(baths, type);
    }


    filterText(text) {
        this.setState({
            filteredResults: text.length ? this.state.allResults.filter(r => this.formatText(r.address).indexOf(this.formatText(text)) > -1) : [],
            search: text
        });
    }

    filterResults(){

    }

    //strips punctuation and makes it lower case to provide better search matches
    formatText(text){
        return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    }

    buildListItems() {
        const items = this.state.filteredResults.length ? this.state.filteredResults : this.state.allResults;

        //used options object to allow for abstraction in the future if we end up having multiple list item types
        return items.map(i => <ListItem key={i.id} options={{
            address: i.address,
            baths: i.baths,
            type: this.typesList[i.types] ? this.typesList[i.types].name : 'Other'
        }}/>);
    }

    render() {
        const listItems = this.buildListItems();
        return (
            <section className={"location-search-results"}>
                {
                    this.state.loading ? <Loader type="Circles" color="#fd6b0d" height={80} width={80}/>
                        : <div>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className={"form-group"}>
                                    <input onChange={(e)=>{this.filterText(e.target.value)}} placeholder={'Enter Search Text'} value={this.state.search} type={"text"}/>
                                </div>
                                <div className={"form-group"}>
                                    <select>
                                        <option value={this.state.baths} selected>Select Number of Baths</option>
                                        {
                                            this.bathsList.map((b, i)=>{
                                                return <option key={i} value={i}>{b.name}+</option>
                                            })
                                        }
                                    </select>
                                </div>

                            </form>
                            <ul>{listItems}</ul>
                        </div>
                }
            </section>
        )
    }

}