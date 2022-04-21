import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import GalleryItem from "../gallery-item/GalleryItem";
import { fetchGallery } from "../../redux/actions";

const Gallery = () => {

    const dispatch = useDispatch();
    const gallery = useSelector((state) => {
        return state.gallery.gallery
    });

    useEffect(() => {
        dispatch(fetchGallery())
    });

    return (
        <div>
            <div className="container">
                <h1 className="mb-5">Галерея</h1>
                <div className="row justify-content-between flex-lg-wrap">
                    {gallery.map((item) => <div className="col-lg-4 mb-3">
                        <GalleryItem
                            key={item.id}
                            title={item.title}
                            url={item.url}
                            item={item}
                        />
                    </div>)}
                </div>
            </div>
        </div>
    )
};


export default Gallery;
