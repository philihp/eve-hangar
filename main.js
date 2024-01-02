import open from 'open'
import express from 'express'
import SingleSignOn from './sso.js'

const scopes = [
  'publicData',
  // 'esi-wallet.read_character_wallet.v1',
  'esi-assets.read_assets.v1',
  // 'esi-planets.manage_planets.v1',
  // 'esi-industry.read_character_jobs.v1',
  // 'esi-markets.read_character_orders.v1',
  // 'esi-characters.read_blueprints.v1',
  // 'esi-contracts.read_character_contracts.v1',
  // 'esi-killmails.read_corporation_killmails.v1',
]

const userAgent = 'Sir Cuddles <philihp@gmail.com> eve-hangar'
const sso = new SingleSignOn(process.env.EVE_CLIENT_ID, process.env.EVE_SECRET_KEY, process.env.EVE_CALLBACK_URL, {
  userAgent,
})

const app = express()
app.get('/callback', async (req, res) => {
  const code = req.query.code
  const { access_token, ...info } = await sso.getAccessToken(code)
  const characterID = info.decoded_access_token?.sub?.split(':')?.[2]
  console.log({ access_token })
  console.log(info)

  const assetResponse = await fetch(
    `https://esi.evetech.net/latest/characters/${characterID}/assets/?` +
      new URLSearchParams({
        page: 1,
        token: access_token,
      }),
    {
      method: 'GET',
      headers: {
        'User-Agent': userAgent,
      },
    }
  )
  const pages = assetResponse.headers.get('x-pages')
  console.log({ pages })

  if (assetResponse.ok) {
    const assets = await assetResponse.json()

    // OKAY so we got it, now what?

    // placeholder, just dump it to the browser
    res.json(assets)
    // but really we wanna save this.
  } else {
    res.send('ERROR')
  }
})

app.listen(3030)
open(sso.getRedirectUrl('state', scopes))
