import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink, ButtonGroup
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { ArrowLeft, ChevronDown, Cart3, ChevronRight } from 'react-bootstrap-icons';
import Modal from 'react-modal';
import ReactLiveSearch from 'react-live-search'

const customStyles = {
  content: {
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    zindex: '1000',
    width: '100%',
    left: 0,
    position: 'fixed',
    bottom: 0
  }
};

class App extends Component {
  state = {
    number: 10,
  }

  constructor() {
    super();
    this.state = {
      showModal: false,
      value: '',
      data: [
        { label: 'google', value: 1 },
        { label: 'work', value: 2 },
        { label: 'great', value: 3 },
        { label: 'bar', value: 4 },
        { label: 'foo', value: 5 }
      ],
    };
  }

  onChange = value => {
    this.setState({
      value
    });
  };

  onSelect = v => {
  };


  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  handleNumber = number => this.setState({ number });
  handleOpenModal = this.handleOpenModal.bind(this);
  handleCloseModal = this.handleCloseModal.bind(this);

  data = [
    {
      url: "https://i.pinimg.com/236x/cc/d2/63/ccd2632a3dfcee04c32ee2bee8655502--senin-boxes.jpg",
      name: "Roasted Chicken with Scramble Egg1",
      score: 4,
      price: "20.000",
    },
    {
      url: "https://i.pinimg.com/236x/07/08/42/0708428bfac5bc7ecb466ca3f0fa7c92.jpg",
      name: "Roasted Chicken with Scramble Egg2",
      score: 4,
      price: "20.000",
    },
    {
      url: "https://pbs.twimg.com/media/C6NTwvGU0AAZOnc.jpg",
      name: "Roasted Chicken with Scramble Egg3",
      score: 4.5,
      price: "20.000",
    },
    {
      url: "https://selular.id/wp-content/uploads/2016/09/kulina-box-1200x900.jpg",
      name: "Roasted Chicken with Scramble Egg4",
      score: 2.1,
      price: "20.000",
    },
  ]

  datas = [{ name: 'Jhon', age: 28, city: 'HO' },
  { name: 'Onhj', age: 82, city: 'HN' },
  { name: 'Nohj', age: 41, city: 'IT' }
  ];

  render() {
    return (
      <div className="App">
        <div className="row header-select m-0">
          <div className="top-header"><ArrowLeft color="royalblue" size={20} className="mr-3" />
            <div >
              <p className="p-0 m-0 text-left"><small>ALAMAT PENGANTARAN</small></p>
              <p className="p-0 m-0 text-left" onClick={this.handleOpenModal}><strong>Tokopedia Tower</strong> <ChevronDown color="red" size={15} /> </p>
            </div>
          </div>
        </div>
        <div id="navbar">
          <a href="#lunch" className="col-md-6" active>Lunch</a>
          <a href="#dinner" className="col-md-6">Dinner</a>
        </div>
        <div className="conta">
          <ul className="container-top">
            {this.data.map(function (img, x) {
              return <li className="row m-0 mb-2" key={x}>
                <Card key={x}>
                  <img className="list-image" width="100%" src={img.url} alt="Card image cap" />
                  <CardBody className="text-align-left">
                    <CardText className="text-sub">
                      <div className="row m-0">
                        <div className="text-sub pr-3 pt-1">{img.score}</div>
                        <StarRatings
                          rating={img.score}
                          starDimension="20px"
                          starSpacing="2px"
                          starRatedColor="#f9234a"
                        />
                      </div>
                      <p className="mb-0 mt-1">
                        <strong>{img.name}</strong>
                      </p>
                      <small className="mb-2">by. Kulina - Uptown Lunch</small>
                    </CardText>
                    <span className="text-sub"><strong> Rp.  {img.price}</strong></span>
                    <Button color="danger" className="float-right pl-3 pr-3 pb-1 pt-1 btn-add-bg" >Add +</Button>
                  </CardBody>
                </Card>
              </li>
            })}
          </ul>
        </div>
        <div>
          <Modal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            style={customStyles}
          >
            <button onClick={this.handleCloseModal} className="btn-close-modal" >X</button>
            <p>Cek makanan yang tersedia di lokasi kamu!</p>
            <ReactLiveSearch
              value={this.state.value}
              onChange={this.onChange}
              onSelect={this.onSelect}
              data={this.state.data}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
