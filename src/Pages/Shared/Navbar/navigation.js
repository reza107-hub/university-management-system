export const navigation = [
    { name: "Home", to: "/" },
    {
        name: "About",
        nested_links: [
            { name: 'Overview', to: '/overview' },
            { name: 'History', to: '/history' },
            { name: 'Vision & mission', to: '/vision-mission' },
            { name: 'Photo Gallery', to: '/photo-gallery' }
        ]
    },
    {
        name: "Academics",
        nested_links: [
            { name: 'Computer Science & Engineering', to: '/cse' },
            { name: 'Software Engineering', to: '/software-engineering' },
            { name: 'English', to: '/english' }
        ]
    },
    {
        name: "Facilities",
        nested_links: [
            { name: 'One Stop', to: '/one-stop' },
            { name: 'Library', to: '/library' },
            { name: 'Laboratory', to: '/laboratory' },
            { name: 'Cafeteria', to: '/cafeteria' }
        ]
    },
    {
        name: "Club & Organization",
        nested_links: [
            { name: 'MU Sports Club', to: '/mu-sports-club' },
            { name: 'MU Social Service', to: '/mu-social-service' },
            { name: 'MU Cultural Club', to: '/mu-cultural-club' },
            { name: 'MU Photographic Society', to: '/mu-photographic-society' },
            {name:' MU Robotics Club',to:'/mu-robotics-club'}
        ]
    },
    { name: "Contacts", to: "#contact" },
];
