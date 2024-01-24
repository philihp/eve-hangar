import open from 'open'
import express from 'express'
import SingleSignOn from './sso.js'
import { authenticate, upsertCharacter, upsertToken } from './supabase.js'

const scopes = [
  'publicData',
  'esi-wallet.read_character_wallet.v1',
  'esi-assets.read_assets.v1',
  // 'esi-planets.manage_planets.v1',
  'esi-industry.read_character_jobs.v1',
  'esi-markets.read_character_orders.v1',
  // 'esi-characters.read_blueprints.v1',
  // 'esi-contracts.read_character_contracts.v1',
  // 'esi-killmails.read_corporation_killmails.v1',
]

const EVE_CLIENT_ID = process.env.EVE_CLIENT_ID
const EVE_SECRET_KEY = process.env.EVE_SECRET_KEY
const EVE_CALLBACK_URL = process.env.EVE_CALLBACK_URL

const userAgent = 'Sir Cuddles <philihp@gmail.com> eve-hangar'
const sso = new SingleSignOn(EVE_CLIENT_ID, EVE_SECRET_KEY, EVE_CALLBACK_URL, {
  userAgent,
})

const app = express()
app.get('/callback', async (req, res, next) => {
  const code = req.query.code
  const { access_token, refresh_token, ...info } = await sso.getAccessToken(code)
  const {
    decoded_access_token: { name, owner, sub, scp = [], iat, exp },
  } = info
  const issued_at = new Date(iat * 1000).toISOString()
  const expires_at = new Date(exp * 1000).toISOString()
  const response = await sso.getAccessToken(refresh_token, true)

  const {
    user: { id: user_id },
  } = await authenticate()

  const character_id = await upsertCharacter({ user_id, owner, name })
  const token_id = await upsertToken({
    user_id,
    character_id,
    access_token,
    refresh_token,
    issued_at,
    expires_at,
    scope: [scp].flat(),
  })
  console.log({ character_id, token_id })

  res.json(response)
})

app.listen(3030)
open(sso.getRedirectUrl('state', scopes))

// const assetResponse = await fetch(
//   `https://esi.evetech.net/latest/characters/${characterID}/assets/?` +
//     new URLSearchParams({
//       page: 1,
//       token: access_token,
//     }),
//   {
//     method: 'GET',
//     headers: {
//       'User-Agent': userAgent,
//     },
//   }
// )
// const pages = assetResponse.headers.get('x-pages')
// console.log({ pages })
