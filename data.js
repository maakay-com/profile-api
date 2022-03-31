const users = [
  {
    uuid: "dc587541-1e60-4841-aed3-8f7de67d5e9f",
    accountNumber:
      "22d0f0047b572a6acb6615f7aae646b0b96ddc58bfd54ed2775f885baeba3d6a",
    nonce: "132324",
  },
  {
    uuid: "dc587541-1e60-4841-ae3-8f7de67d5e9f",
    accountNumber:
      "12d0f0047b572a6acb6615f7aae646b0b96ddc58bfd54ed2775f885baeba3d6a",
    nonce: "456436",
  },
];

const profile = [
  {
    uuid: "dc587541-1e60-4841-aed3-8f7de67d5e9f",
    username: "hussu010",
    description: "This is hussu's profile everyone",
    socialProfile: [
      {
        social_media: {
          title: "Facebook",
          logo: "logo_facebook.com",
          base_url: "facebook.com",
        },
        username: "hussu010",
      },
      {
        social_media: {
          title: "Twitter",
          logo: "logo_twitter.com",
          base_url: "twitter.com",
        },
        username: "hussu010",
      },
    ],
    profile_links: [
      {
        uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
        title: "Github",
        url: "github.com",
      },
      {
        uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
        title: "RandomSite",
        url: "RandomSite.com",
      },
    ],
    avatarUrl: "https://url_of_the_avatar.com",
    isVerified: true,
    addresses: [
      {
        token: {
          name: "Bitcoin",
          symbol: "BTC",
          logo_url: "btc_logo.com",
        },
        address: "btc_address",
        metadata: null,
      },
      {
        token: {
          name: "Ethereum",
          symbol: "ETH",
          logo_url: "btc_logo.com",
        },
        address: "eth_address",
        metadata: null,
      },
      {
        token: {
          name: "thenewboston",
          symbol: "TNBC",
          logo_url: "btc_logo.com",
        },
        address: "tnbc_address",
        metadata: "memo",
      },
    ],
  },
  {
    uuid: "dc587541-1e60-4841-aed3-8f7de67d5e9f",
    username: "random",
    description: "This is hussu's profile everyone",
    socialProfile: [
      {
        social_media: {
          title: "Facebook",
          logo: "logo_facebook.com",
          base_url: "facebook.com",
        },
        username: "hussu010",
      },
      {
        social_media: {
          title: "Twitter",
          logo: "logo_twitter.com",
          base_url: "twitter.com",
        },
        username: "hussu010",
      },
    ],
    profile_links: [
      {
        uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
        title: "Github",
        url: "github.com",
      },
      {
        uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
        title: "RandomSite",
        url: "RandomSite.com",
      },
    ],
    avatarUrl: "https://url_of_the_avatar.com",
    isVerified: true,
    addresses: [
      {
        token: {
          name: "Bitcoin",
          symbol: "BTC",
          logo_url: "btc_logo.com",
        },
        address: "btc_address",
        metadata: null,
      },
      {
        token: {
          name: "Ethereum",
          symbol: "ETH",
          logo_url: "btc_logo.com",
        },
        address: "eth_address",
        metadata: null,
      },
      {
        token: {
          name: "thenewboston",
          symbol: "TNBC",
          logo_url: "btc_logo.com",
        },
        address: "tnbc_address",
        metadata: "memo",
      },
    ],
  },
  {
    uuid: "dc587541-1e60-4841-aed3-8f7de67d5e9f",
    username: "random_user",
    description: "This is hussu's profile everyone",
    socialProfile: [
      {
        social_media: {
          title: "Facebook",
          logo: "logo_facebook.com",
          base_url: "facebook.com",
        },
        username: "hussu010",
      },
      {
        social_media: {
          title: "Twitter",
          logo: "logo_twitter.com",
          base_url: "twitter.com",
        },
        username: "hussu010",
      },
    ],
    profile_links: [
      {
        uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
        title: "Github",
        url: "github.com",
      },
      {
        uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
        title: "RandomSite",
        url: "RandomSite.com",
      },
    ],
    avatarUrl: "https://url_of_the_avatar.com",
    isVerified: true,
    addresses: [
      {
        token: {
          name: "Bitcoin",
          symbol: "BTC",
          logo_url: "btc_logo.com",
        },
        address: "btc_address",
        metadata: null,
      },
      {
        token: {
          name: "Ethereum",
          symbol: "ETH",
          logo_url: "btc_logo.com",
        },
        address: "eth_address",
        metadata: null,
      },
      {
        token: {
          name: "thenewboston",
          symbol: "TNBC",
          logo_url: "btc_logo.com",
        },
        address: "tnbc_address",
        metadata: "memo",
      },
    ],
  },
];

socialProfile = [
  {
    uuid: "dc587541-1e60-4841-aed3-8f7de67d5e9f",
    social_media: {
      title: "Facebook",
      logo: "logo_facebook.com",
      base_url: "facebook.com",
    },
    username: "hussu010",
  },
  {
    uuid: "dc587541-1e60-4841-aed3-8f7de67d5e9f",
    social_media: {
      title: "Twitter",
      logo: "logo_twitter.com",
      base_url: "twitter.com",
    },
    username: "hussu010",
  },
];

tokens = [
  {
    uuid: "bbf7a4f5-e78b-4176-aae8-5dad11ec7b95",
    name: "Bitcoin",
    symbol: "btc",
    logo_url: "url_of_logo.com",
    requires_metadata: false,
    token_info_url: "coingecko.com",
  },
  {
    uuid: "ab4eca3a-a318-405e-b88a-473fa4c950b1",
    name: "Ethereum",
    symbol: "eth",
    logo_url: "url_of_logo.com",
    requires_metadata: false,
    token_info_url: "coingecko.com",
  },
  {
    uuid: "833c9458-d364-4a4b-aca5-2e9fd5fb7118",
    name: "thenewboston",
    symbol: "tnbc",
    logo_url: "url_of_logo.com",
    requires_metadata: true,
    token_info_url: "official_website.com",
  },
];

address = [
  {
    uuid: "d6ef8ce9-d833-416a-82cd-161c0c518510",
    token: {
      uuid: "833c9458-d364-4a4b-aca5-2e9fd5fb7118",
      name: "thenewboston",
      symbol: "tnbc",
      logo_url: "url_of_logo.com",
      requires_metadata: true,
      token_info_url: "official_website.com",
    },
    address: "tnbc_address",
    metadata: "MEMO",
  },
  {
    uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
    token: {
      uuid: "bbf7a4f5-e78b-4176-aae8-5dad11ec7b95",
      name: "Bitcoin",
      symbol: "btc",
      logo_url: "url_of_logo.com",
      requires_metadata: false,
      token_info_url: "coingecko.com",
    },
    address: "bitcoin_address",
    metadata: null,
  },
];

profile_links = [
  {
    uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
    title: "Github",
    url: "github.com",
  },
  {
    uuid: "d6ef8de9-d833-416a-82cd-161c0c518510",
    title: "RandomSite",
    url: "RandomSite.com",
  },
];

module.exports = {
  users,
  tokens,
  address,
  profile,
  socialProfile,
  profile_links,
};
