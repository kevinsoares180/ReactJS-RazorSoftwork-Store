import { Carousel } from 'react-responsive-carousel';
import React from "react";
import data from "../data.json";




export default class GamePage extends React.Component 
{
    constructor(props)
    {
        super(props)

        this.state = {
            barcodeArray:['']
          };

    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }

      
      
  render()
  {
      
  return (
      <div className="container">
    <div className="myscreenshots">
      <div class="row">
        <div class="col-xs-18 col-sm-12 col-md-8">
          <div class="img-thumbnail">
            <Carousel>
            {data.Games[this.props.id].Screenshots.map((Screens, index) =>
            {
                return(
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Screens}
                        alt="First slide"
                        
                    />
                    </Carousel.Item>

                )

            }
            
            )}
             
            </Carousel>
            <div class="card-body">
    <h1 class="card-title">Sobre</h1>
    <p class="card-text">{data.Games[this.props.id].Sobre}</p>

  </div>

          </div>
          
        </div>
       
        <div class="container myimg col-xs-18 col-sm-10 col-md-4">
                  <img
                    src={data.Games[this.props.id].Icon}
                    alt="..."
                    className="mythumb container"
                  ></img>
                  <div class="mycaption container caption">
                    <h3>{data.Games[this.props.id].Name}</h3>
                    <p>{data.Games[this.props.id].Date}</p>
                    <p>{data.Games[this.props.id].Developer}</p>
                    <p className="btn mybutton">{data.Games[this.props.id].Genre[0]}</p>
                    <p className="btn mybutton">{data.Games[this.props.id].Genre[1]}</p>
                    <p className="btn mybutton">{data.Games[this.props.id].Genre[2]}</p>
                    <p>
                     
                    </p>
                    
                    <a target="_blank" href={data.Games[this.props.id].DownloadURL} className="btn btn-success">Download</a>
                  </div>
            </div>
      </div>
    </div>

    </div>
  );}
}
