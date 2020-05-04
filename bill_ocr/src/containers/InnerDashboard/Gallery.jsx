import React, { useState, useEffect } from "react";
import Card from "./Card";
import { api } from "../../config/api";
import Load from "./Loading";
import { baseUrl } from "../../config/config";
export default function Gallery(props) {
    const [userID] = useState(
        JSON.parse(localStorage.getItem("user_for_bill_ocr"))._id
    );
    const [cardItem, setCardItem] = useState(null);
    useEffect(() => {
        api.post(baseUrl + "all", { customer_id: userID }).then(({ data }) =>
            setCardItem(data)
        );
    }, [userID]);
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
