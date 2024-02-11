const newsListMocks = [
    {
        id: 1,
        title: 'ВТБ вычел из своих активов En+ 1',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 2,
        title: 'ВТБ вычел из своих активов En+ 2',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 3,
        title: 'ВТБ вычел из своих активов En+ 3',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 4,
        title: 'ВТБ вычел из своих активов En+ 4',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 5,
        title: 'ВТБ вычел из своих активов En+ 5',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 6,
        title: 'ВТБ вычел из своих активов En+ 1',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 7,
        title: 'ВТБ вычел из своих активов En+ 2',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 8,
        title: 'ВТБ вычел из своих активов En+ 3',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 49,
        title: 'ВТБ вычел из своих активов En+ 4',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    },
    {
        id: 10,
        title: 'ВТБ вычел из своих активов En+ 5',
        content: 'lorem',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatinumlist.net%2Fguide%2Feverything-you-need-to-know-about-img-worlds-of-adventure&psig=AOvVaw3URw7MUmHZQYzkaFg6YAF6&ust=1704451102403000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICRl6XFw4MDFQAAAAAdAAAAABAD',
        source: 'meduza.com',
        date: '09',
        dateTwo: '02'
    }
];

export default newsListMocks;