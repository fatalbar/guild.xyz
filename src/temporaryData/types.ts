type CoingeckoToken = {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI: string
}

type Poap = {
  id: number
  fancy_id: string
  name: string
  event_url?: string
  image_url: string
  country?: string
  city?: string
  description?: string
  year: number
  start_date: string
  end_date: string
  expiry_date: string
  from_admin: boolean
  virtual_event: boolean
  event_template_id: number
  event_host_id: number
}

type NFT = {
  name: string
  address: string
  logoURI: string
}

type RequirementType = "TOKEN" | "NFT" | "POAP"

type Requirement = {
  type: RequirementType
  address?: string
  method?: string
  data?: string
  value: string | number
}

type Level = {
  id: number
  requirements: Requirement[]
  telegramGroupId?: string
  discordRole?: string
}

type PlatformName = "TELEGRAM" | "DISCORD"

type Platform = {
  name: PlatformName
  active: boolean
  platformId: string
  inviteChannel?: string
}

type Guild = {
  id: number
  name: string
  urlName: string
  levels: Level[]
  members: number
  communityPlatforms: Platform[]
}

enum RequirementTypeColors {
  NFT = "#4ade80",
  POAP = "#60a5fa",
  TOKEN = "#818CF8",
}

export type {
  CoingeckoToken,
  Poap,
  NFT,
  PlatformName,
  Guild,
  Requirement,
  RequirementType,
}
export { RequirementTypeColors }