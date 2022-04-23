import React from 'react';
import axios from 'axios';
import Hightlight from './Highlight';
import Loader from './Loader'
import '../index.css';

const MAX_VALUE = process.env.REACT_APP_MAX_VALUE || 1000;

class DisplayBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            loader: false
        };
    }

    componentDidMount() {
        //will initialize count here

        axios.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json")
            .then(res => {
                if (res.data !== null) {
                    this.setState({ count: res.data },);
                }

            })

    }

    putRequest = async () => {

        this.setState({ loader: true })
        let requestBody = {
            "sachinthakan001": this.state.count
        }

        try {
            let res = await axios.put("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", requestBody)

            this.setState({ loader: false })
            console.log(res.data)
            console.log(this.state.count)
        } catch (error) {
            console.log(error)
        }

    }

    increament() {
        this.setState((prevState) => {
            return { count: Math.min(prevState.count + 1, MAX_VALUE) };
        }, function () {
            this.putRequest();
        });

    }

    decreament() {
        this.setState((prevState) => {
            return { count: Math.min(prevState.count - 1, MAX_VALUE) };
        },  function () {
            this.putRequest();
        });
    }

    handleManualInput(event) {
        this.setState({ count: Math.min(event.target.value, MAX_VALUE) },  function () {
            this.putRequest();
        });
    }

    render() {
        return (
            <div>
                <div className="rect">
                    {
                        this.state.loader === true ? <Loader /> : <div style={{ minHeight: '50px' }}></div>
                    }

                    <div className="main">

                        <button className="block" id="minus" onClick={this.decreament.bind(this)}>
                            <b>-</b>
                        </button>

                        <input className="block" id="display" type="number" value={this.state.count} onChange={this.handleManualInput.bind(this)}></input>

                        <button className="block" id="plus" onClick={this.increament.bind(this)}>
                            <b>+</b>
                        </button>

                    </div>
                    <Hightlight myStyle="main" count={this.state.count} />
                </div>

            </div>
        );
    }
}

export default DisplayBlock;