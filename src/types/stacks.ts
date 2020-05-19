interface Technology {
    id: string;
    name: string;
    logoSource: string;
    wikipediaLink: string;
}

interface Component {
    id: string;
    name: string;
    wikipediaLink: string;
    technologies: Array<Technology>;
}

export default interface Stack {
    id: string;
    name: string;
    wikipediaLink: string;
    components: Array<Component>;
    createdAt: number;
    createdBy: string;
    modifiedAt: number;
    modifiedBy: string;
}

export const InitialStack = {
    id: '',
    name: '',
    wikipediaLink: '',
    components: [],
    createdAt: 0,
    createdBy: '',
    modifiedAt: 0,
    modifiedBy: '',
};
