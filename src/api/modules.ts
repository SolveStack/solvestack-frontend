import Module from 'types/modules';
import { InitialModule } from 'types/modules';

export default {
    get(id: string): Module {
        // Axios or fetch call will go here once backend is proven out,
        // and return a promise instead.
        if (id === 'SgPw7783b5hD8yrQx4Z7cL') {
            return {
                id: 'SgPw7783b5hD8yrQx4Z7cL',
                name: 'HTML',
                blurb: 'The structure for building the functional foundation of your website',
                articles: [
                    {
                        id: 'KxSPU75ts6tRgPpXYbh4di',
                        name: 'Wikipedia - HTML',
                        blurb:
                            'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
                        link: 'https://en.wikipedia.org/wiki/HTML',
                    },
                ],
                videos: [
                    {
                        id: 'c45fTz9AmA523mXiPWjkBE',
                        name: 'Learn HTML in 12 Minutes',
                        blurb:
                            'In this short HTML tutorial, I explain the basic structure of an HTML webpage and introduce some important tags.',
                        link: 'https://www.youtube.com/watch?v=bWPMSSsVdPk',
                    },
                ],
            };
        } else if (id === '') {
        }
        return InitialModule;
    },
};
