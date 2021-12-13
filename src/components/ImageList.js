import React from 'react'

const ImageList = props => {
    const images = props.images.map((image) => {
        return (
            <div>
                <li>
                    <img src={image.urls.regular} />
                </li>
            </div>
        )
    });

    return <div><ul>{images}</ul></div>
}

export default ImageList;
