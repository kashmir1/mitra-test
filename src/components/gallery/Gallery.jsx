import React from "react";
import {connect} from 'react-redux'
import GalleryItem from "../gallery-item/GalleryItem";

const Gallery = ({ gallery }) => {

    // let items = [];
    //
    // for (let i = 1; i <= 6; i++) {
    //     items.push(i)
    // }

    return (
        <div>
            <div className="container">
                <h1 className="mb-5">Галерея</h1>
                <div className="row justify-content-between flex-lg-wrap">
                    {gallery.map((item) => <div className="col-lg-4 mb-3"><GalleryItem key={item} item={item}/></div>)}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        gallery: state.gallery.gallery
    }
};

export default connect(mapStateToProps, null)(Gallery);
