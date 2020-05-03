import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Load from "./Loading";
import { baseUrl } from "../../config/config";
export default function Gallery(props) {
    const [cardItem, setCardItem] = useState(null);
    useEffect(() => {
        axios.get(baseUrl + "all").then(({ data }) => setCardItem(data));
    }, []);
    if (!cardItem) {
        return <Load />;
    }
    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Bill Gallery</h3>
            <div className="row mb-3">
                <div className="photo-gallery">
                    <div className="container-fluid">
                        <div className="px-lg-5">
                            <div className="row">
                                {/* Gallery item */}
                                {cardItem &&
                                    cardItem.map((item, i) => (
                                        <Card key={i} {...props} data={item} />
                                    ))}
                                {/* End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
