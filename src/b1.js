import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img6 from './components/images/res1.webp';
import './body.css';
class Body extends Component{

    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            resname: '',
        };
    }

    onChangeHandeler = () => {
        return async (e) => {
            const  { value:_id } = e.target;
            await this.setState({ _id });
        }
    }

    handleSubmit = () => {
        return async (e) => {
            const { keyCode } = e;
            const { _id } = this.state;
        //0
            if(keyCode !== 13 && _id) return;
            const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${_id}&entity_type=city`;
            //ca11f3179ff24e27cd60c149e9ca900c
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'user-key': 'ca11f3179ff24e27cd60c149e9ca900c',
                     'content-type':'application-json'
                }
            });
            const data = await res.json();
        }
    }

    render()
    {     
            return (
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-6">
                  <p className="quote"><span></span><br/>
                 <h3>Search for your favourite restaurants</h3><br/>
                 <form class="example" onSubmit={(e) => e.preventDefault()} >
                  <input type="text" 
                    placeholder="Search.." 
                    name="search"
                    onChange={this.onChangeHandeler()}
                    onKeyDown={this.handleSubmit()}
                    />
                  <button type="submit"><b>Search</b></button></form>
                  <br/><br/>
                  <h2>Want To Promote Your Restaurant?</h2>
                  <a href="/log" className="simple-text">Add Your Restaurant here.</a>
                 </p>
                </div>
                <div className="col-md-6">
                <img src={img6} alt="test" className="img-responsive"  height="400px" width="650px"  />
                </div>
                </div>
                </div>
            );
        }
    }
export default Body;