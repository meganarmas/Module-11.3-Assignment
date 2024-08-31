 const ts = 1
 const privateKey = '4d52fb3fa1ef52af3d6b38218aff5477'
 const hash = 'a80ea7d0806646c1f3b6bf37422fc6fd'

 const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${privateKey}&hash=${hash}&ts=${ts}`)

