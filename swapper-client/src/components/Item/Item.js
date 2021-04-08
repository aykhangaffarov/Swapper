import React from 'react';
import './Item.css';
const Item = (props) => {


    return (
      <div class="card">
            <img src=""/>
            <div class="descriptions">
                <h1>John Wick 3</h1>
                <p>
                    After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.
                </p>
                <button>
                    <i class="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
            </div>
      </div>
    );
};

export default Item;

