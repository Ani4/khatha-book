import React from "react";
import Card from "./Card";

export default function Gallery() {
    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Bill Gallery</h3>
            <div className="row mb-3">
                <div className="photo-gallery">
                    <div className="container-fluid">
                        <div className="px-lg-5">
                            <div className="row">
                                {/* Gallery item */}
                                <Card />
                                {/* End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
