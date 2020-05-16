import Stack from 'types/stacks';
import { InitialStack } from 'types/stacks';

export default {
    get(id: string): Stack {
        // Axios or fetch call will go here once backend is proven out,
        // and return a promise instead.
        if (id === 'hEowVJjYagxvhWPNw9HbU5') {
            return {
                id: 'hEowVJjYagxvhWPNw9HbU5',
                name: 'Basic Website',
                wikipediaLink: 'https://en.wikipedia.org/wiki/Website',
                createdBy: 'EsdFcn36sj9qnhbPr2GtiE',
                createdAt: 1589154057,
                modifiedBy: 'EsdFcn36sj9qnhbPr2GtiE',
                modifiedAt: 1589154067,
                components: [
                    {
                        id: 'UEM8GvEgaMSNxQj3q3YFth',
                        name: 'HTML',
                        wikipediaLink: 'https://en.wikipedia.org/wiki/HTML',
                        technologies: [],
                    },
                    {
                        id: 'bEYcqoqNuJt9mmYqioQDzX',
                        name: 'Stylesheet',
                        wikipediaLink: 'https://en.wikipedia.org/wiki/Style_sheet_language',
                        technologies: [
                            {
                                id: '7EJEFU4JCzCBFkRNk2fKLQ',
                                name: 'CSS',
                                wikipediaLink: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
                                logoSource:
                                    'https://upload.wikimedia.org/wikipedia/commons/a/ad/Html5_css3_styling.svg',
                            },
                            {
                                id: 'gzE9RXCQ5D938YKcHKthCn',
                                name: 'Less',
                                wikipediaLink: 'https://en.wikipedia.org/wiki/Less_(stylesheet_language)',
                                logoSource: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg',
                            },
                            {
                                id: 'SFFqxr3AWBYFqiNCH2gzj6',
                                name: 'Sass',
                                wikipediaLink: 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)',
                                logoSource: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
                            },
                        ],
                    },
                    {
                        id: 'AqXXSJHNdk5cj8LVox6Mz9',
                        name: 'Code & Framework',
                        wikipediaLink: 'https://en.wikipedia.org/wiki/Web_framework',
                        technologies: [
                            {
                                id: 'H4pY7WMT9BbWc9fquWCHnR',
                                name: 'Ruby on Rails',
                                wikipediaLink: 'https://en.wikipedia.org/wiki/Ruby_on_Rails',
                                logoSource:
                                    'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg',
                            },
                            {
                                id: 'GHLZhM73PN43pXt4xNqrst',
                                name: 'Django',
                                wikipediaLink: 'https://en.wikipedia.org/wiki/Django_(web_framework)',
                                logoSource: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
                            },
                            {
                                id: 'WEhEtsUjQpc6XVft3ydcnj',
                                name: 'PHP',
                                wikipediaLink: 'https://en.wikipedia.org/wiki/PHP',
                                logoSource: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
                            },
                        ],
                    },
                    {
                        id: 'ETPGTijnRhgJqBire7uawa',
                        name: 'Web Server',
                        wikipediaLink: 'https://en.wikipedia.org/wiki/Web_server',
                        technologies: [],
                    },
                    {
                        id: 'gXJjXwNq4wstJRU8H7oihw',
                        name: 'Database',
                        wikipediaLink: 'https://en.wikipedia.org/wiki/Database',
                        technologies: [],
                    },
                    {
                        id: 'KPz9NbxRTmayQWRQc8Uszx',
                        name: 'DNS',
                        wikipediaLink: 'https://en.wikipedia.org/wiki/Domain_name',
                        technologies: [],
                    },
                    {
                        id: 'Lk8RAqEDaN7mXTkAEmiaxV',
                        name: 'Host',
                        wikipediaLink: 'https://en.wikipedia.org/wiki/Category:Web_hosting',
                        technologies: [],
                    },
                ],
            };
        }
        return InitialStack;
    },
};
