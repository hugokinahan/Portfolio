import React from 'react'
import Sky from 'react-sky'

function App() {
  return (
    <main className='page-layout'>
      <div>
        <h1>Hugo Kinahan</h1>
        <Sky
          images={{
          /* FORMAT AS FOLLOWS */
            0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png',  /* You can pass as many images as you want */
            1: 'https://lh3.googleusercontent.com/proxy/D7pBHFG2wpBDSrmrpFwfDCfh04Kk01m8Epcb4kNDAi4uYMYQ6BmbtMvgMAGcWmjKxwnh13iNNLcDHWc7YaxvvV5zxettoxWK9F149Xh5MBFapT6rewIRXTzI9g7I06EJ-lzM3riA85k',
            2: 'https://www.freepngimg.com/download/golf_ball/1-2-golf-ball-transparent.png', /* you can pass images in any form: link, imported via webpack... */
            3: 'https://lh3.googleusercontent.com/proxy/nisZCNXX80LlXdEVzs0MZr_L_5j0DlAhgi8Bev9RFqG7rmlzAuYY6LdKVry46naUPu0mbL2OpCFJZf765xPpztm2MkmrSsPzhQW_YbfjiXatVYa7iN0JqXLeQNqjk8fgWdAf',
            4: 'https://freepngimg.com/thumb/tennis_ball/4-2-tennis-ball-free-download-png.png',
            5: 'https://www.jing.fm/clipimg/full/165-1659542_formula-one-clipart-formula-1-race-car-transparent.png',
          /* 4: your other image... */
          /* 5: your other image... */
          /* ... */
          }}
          how={100} /* Pass the number of images Sky will render chosing randomly */
          time={10} /* time of animation */
          size={'50px'} /* size of the rendered images */
          background={'palettedvioletred'} /* color of background */
        />
      </div>
    </main>
  )
}

export default App
