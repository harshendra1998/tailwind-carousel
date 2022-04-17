
# Tailwind-carousel

Easiest way to add carousel in you react js, next js with Tailwind project.




## Usage/Examples

```javascript
import TailwindCarousel from 'tailwind-carousel';

function App() {
  return <body >
  ....
  <TailwindCarousel
          styleClass={`my-3 mx-auto w-2/3 h-64 rounded-md `}      // tailwind class styles
          style={{height: '250px', width: '75%' }} // height and width can also be passed as style prop or as styleClass
          timespace={2500}      // time for each slide image in milli second
          carusal_cover={true}       // carousal image cover whole size (true) or contain inside (false)
          arrowVisible={true}      // Arrows on left and right visible ?
          hideArrowForMobile={true}      // Hide Arrows for mobile screens if arrowVisible is true ?
          pageIndicator={true}       //page number indicators at bootom as dots visible ?
          images={['https://example.com/image1.jpg',
          'https://example.com/image2.jpg',
          'https://example.com/image3.jpg']}       // images for carousal in Array format
        />
        .......
  </body>
}
```

## Demo
https://codesandbox.io/s/tailwind-carousel-46713p

## Screenshots

![App Screenshot](https://blogger.googleusercontent.com/img/a/AVvXsEihx_TX_y_LFXtV8weuCbOgSH6Uy8g8Z3IIffeYX2wb_bKp35XqNNuNV6MzYhl30JkiAJLD7t_hR8cENoNLNDzYnKx9cBxaG8MR1XzFExs2zB72D6UM5vldqNWpPJIwij4D-XjrLHqbjkBHIflIa2erNyREOV2fI7PsH6oXGw1NmBIugTLfra5O_LcR=w557-h148)


## Authors

- [@harshendra1998](https://www.github.com/harshendra1998)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://harshendra.web.app/)

