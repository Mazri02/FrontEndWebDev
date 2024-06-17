import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function GalleryImage() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://s3-ap-southeast-1.amazonaws.com/motoristprod/editors%2Fimages%2F1643078091681-how_to_choose_the_right_car_workshop_malaysia_featured.jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.shutterstock.com/image-photo/adult-man-blue-colored-uniform-600nw-2282240017.jpg',

  },
  {
    img: 'https://thumbs.dreamstime.com/b/car-workshop-repairs-setups-47490219.jpg',
   
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpXJEpgwCnr2PR6DCKaqxhb6zm_zDoNxBUg&s',
    
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHSZ-vtB2ijJpKyXowFXI62_H6DLgjxPx9g&s',
   
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbt7X1QIIp-JpqJBx9d7OtziMqVBa9VeZgxQ&s',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFlvNsfSuRxC7whNc_T-qG4rDGnCQ4ZWBMA&s',
  },

  {
    img: 'https://c0.wallpaperflare.com/preview/765/33/117/adult-auto-automobile-body.jpg',

  },
  {
    img: 'https://img.freepik.com/free-photo/car-being-taking-care-workshop_23-2149580532.jpg',

    rows: 2,
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7X6rtOexPCuyz58pIpglhF0bezLmQqmYmA&s',

  },
  {
    img: 'https://img.freepik.com/free-photo/car-being-taking-care-workshop_23-2149580554.jpg',
 
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSbD9Use8_zxXUVv5FGFYcY6ZcuYgPa81Cg&s',
    cols: 2,
  },
];
