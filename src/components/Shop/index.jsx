import React, { Component } from 'react';
import './shop.scss';
import mensApparel from './images/men_apparel.jpg';
import womensApparel from './images/women_apparel.jpg';
import kidsApparel from './images/kid_apparel.jpg';
import unisexApparel from './images/unisex_apparel.jpg';
import hikingApparel from './images/hiking.jpg';
import winterApparel from './images/winter.jpg';
import outdoorGear from './images/outdoor.jpg';
import clearanceItems from './images/clearance.jpg';

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productSections: [
                {
                    category: "MENS",
                    image: mensApparel
                },
                {
                    category: "WOMENS",
                    image: womensApparel
                },
                {
                    category: "KIDS",
                    image: kidsApparel
                },
                {
                    category: "UNISEX",
                    image: unisexApparel
                },
                {
                    category: "HIKING",
                    image: hikingApparel
                },
                {
                    category: "WINTER",
                    image: winterApparel
                },
                {
                    category: "OUTDOOR GEAR",
                    image: outdoorGear
                },
                {
                    category: "CLEARANCE",
                    image: clearanceItems
                },
            ]
        };
    };

    render() {

        return (
            <section className="shop_container">
                <h3 className="shop_header">
                    Shop (Choose A Category)
                    <hr className="shop_header_underline" />
                </h3>

                <div className="shop_grid">
                    {this.state.productSections.map((item, index) => {
                        const styles = {
                            height: "40rem",
                            border: "solid 1px black",
                            background: `url(${item.image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end"
                        }
                        return (
                            <a href="/">
                                <div key={index} style={styles} className="shop_item">
                                    <div className="item_info">
                                        <h5>{item.category}</h5>
                                        <p className="shop">
                                            Shop Now
                                        </p>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Shop;