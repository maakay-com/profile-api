const users = [
    {
        uuid: "dc587541-1e60-4841-aed3-8f7de67d5e9f",
        username: "hussu010",
        description: "This is hussu's profile everyone",
        twitter: "hussu010",
        github: "hussu010",
        instagram: "hussu010",
        avatar_url: "https://url_of_the_avatar.com",
        is_verified: true,
        is_premium: true,
        addresses: [
            {
                asset: "btc",
                address: "btc_address",
                metadata: null,
            },
            {
                asset: "eth",
                address: "eth_address",
                metadata: null,
            },
            {
                asset: "tnbc",
                address: "tnbc_address",
                metadata: "memo",
            },
        ]

    },
    {
        uuid: "54507e62-ce3a-4cd2-a84c-3e65ca145844",
        username: "random",
        description: "This is random's profile everyone",
        twitter: "random",
        github: "random",
        instagram: "random",
        avatar_url: "https://url_of_the_avatar.com",
        is_verified: false,
        is_premium: false,
        addresses: [
            {
                asset: "btc",
                address: "btc_address",
                metadata: null,
            },
            {
                asset: "eth",
                address: "eth_address",
                metadata: null,
            },
            {
                asset: "tnbc",
                address: "tnbc_address",
                metadata: "memo",
            },
        ]

    },
    {
        uuid: "bbf7a4f5-e78b-4176-aae8-5dad11ec7b95",
        username: "randomuser",
        description: "This is randomuser's profile everyone",
        twitter: "randomuser",
        github: "randomuser",
        instagram: "randomuser",
        avatar_url: "https://url_of_the_avatar.com",
        is_verified: false,
        is_premium: false,
        addresses: [
            {
                asset: "btc",
                address: "btc_address",
                metadata: null,
            },
            {
                asset: "eth",
                address: "eth_address",
                metadata: null,
            },
            {
                asset: "tnbc",
                address: "tnbc_address",
                metadata: "memo",
            },
        ]

    }
]


assets = [
    {
        uuid: "bbf7a4f5-e78b-4176-aae8-5dad11ec7b95",
        name: "Bitcoin",
        symbol: "btc",
        logo_url: "url_of_logo.com",
        requires_metadata: false,
        token_info_url: "coingecko.com"
    },
    {
        uuid: "ab4eca3a-a318-405e-b88a-473fa4c950b1",
        name: "Ethereum",
        symbol: "eth",
        logo_url: "url_of_logo.com",
        requires_metadata: false,
        token_info_url: "coingecko.com"
    },
    {
        uuid: "833c9458-d364-4a4b-aca5-2e9fd5fb7118",
        name: "thenewboston",
        symbol: "tnbc",
        logo_url: "url_of_logo.com",
        requires_metadata: true,
        token_info_url: "official_website.com"
    }
]

module.exports = { users, assets }
