import React from "react";
import Proptypes from 'prop-types';

export function ShopItemFunc ({item}) {
    return (
    <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
            <div className="price">
                {item.currency + new Intl.NumberFormat("en-US", {minimumFractionDigits: 2}).format(item.price)}
            </div>
            <button>Добавить в корзину</button>
        </div>
    </div>
    )
}

ShopItemFunc.propTypes = {
    item: Proptypes.shape({
        brand: Proptypes.string.isRequired,
        title: Proptypes.string.isRequired,
        description: Proptypes.string,
        descriptionFull: Proptypes.string,
        price: Proptypes.number.isRequired,
        currency: Proptypes.string.isRequired
    })
}
