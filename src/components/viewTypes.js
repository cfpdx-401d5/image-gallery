
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';
import ListImage from './ListImage';


const GALLERY_TYPE = 'gallery';
const THUMBNAIL_TYPE = 'thumbnail';
const LISTIMAGE_TYPE = 'listImage';

export default {
    [GALLERY_TYPE]: Gallery,
    [THUMBNAIL_TYPE]: Thumbnail,
    [LISTIMAGE_TYPE]: ListImage,
    types: [
        { key: GALLERY_TYPE, label: 'Gallery View' },
        { key: THUMBNAIL_TYPE, label: 'Thumbnail View' },
        { key: LISTIMAGE_TYPE, label: 'Detail View' },
    ]

};


