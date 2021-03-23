
import React from 'react';
import { Link } from "react-router-dom";
import data from "../data.json";

export default class Games extends React.Component 
{

    render()
    {
    var handleToUpdate = this.props.handleToUpdate;
    return(
        <div class="mygames container" id="tourpackages-carousel">
            <div class="row">
            {data.Games.map((Gamx, index) =>
            {
                return(
                    <div class="col-xs-5 col-sm-6 col-md-4">
                    <div class="thumbnail"></div>
                    <Link to={`/games/appid/${Gamx.ID}`} onClick={() => handleToUpdate(Gamx.ID) }><img src={Gamx.Icon} alt="..." className="mymainthumb img-thumbnail"></img></Link>
            <div class="container caption">
                            <   h4>{Gamx.Name}</h4>
                                <p>{Gamx.Price}</p>
                                <p><Link to={`/games/appid/${Gamx.ID}`} class="btn mybutton" role="button" onClick={() => handleToUpdate(Gamx.ID) }>Acessar</Link></p>
                            </div>
                        </div>
           

                )

            }
            
            )}
                  
                  </div>

</div>
    
       
    );}
}