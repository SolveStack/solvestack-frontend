interface Venue {
    id?: number | string;
    name?: string;
    lat?: number;
    lon?: number;
    repinned?: boolean;
    address_1?: string;
    city?: string;
    country?: string;
    localized_country_name?: string;
    zip?: string;
    state?: string;
}

interface FeaturedPhoto {
    id: number | string;
    highres_link: string;
    photo_link: string;
    thumb_link: string;
    type: string;
    base_url: string;
}

interface Group {
    created: number;
    name: string;
    id: number | string;
    join_mode: string;
    lat: number;
    lon: number;
    urlname: string;
    who: string;
    localized_location: string;
    state: string;
    country: string;
    region: string;
    timezone: string;
}

export default interface MeetupEvent {
    created: number;
    duration: number;
    id: string | number;
    name: string;
    date_in_series_pattern: boolean;
    status: string;
    time: number;
    local_date: string;
    local_time: string;
    updated: number;
    utc_offset: number;
    waitlist_count: number;
    yes_rsvp_count: number;
    venue?: Venue;
    group: Group;
    featured_photo: FeaturedPhoto;
    link: string;
    description: string;
    visibility: string;
    member_pay_fee: boolean;
}

export const initialEventData = {
    created: 0,
    duration: 0,
    id: '',
    name: '',
    date_in_series_pattern: false,
    status: '',
    time: 0,
    local_date: '',
    local_time: '',
    updated: 0,
    utc_offset: 0,
    waitlist_count: 0,
    yes_rsvp_count: 0,
    venue: {
        id: '',
        name: '',
        lat: 0,
        lon: 0,
        repinned: false,
        address_1: '',
        city: '',
        country: '',
        localized_country_name: '',
        zip: '',
        state: '',
    },
    featured_photo: {
        id: '',
        highres_link: '',
        photo_link: '',
        thumb_link: '',
        type: 'event',
        base_url: '',
    },
    is_online_event: false,
    group: {
        created: 0,
        name: '',
        id: '',
        join_mode: '',
        lat: 0,
        lon: 0,
        urlname: '',
        who: '',
        localized_location: '',
        state: '',
        country: '',
        region: '',
        timezone: '',
    },
    link: '',
    description: '',
    visibility: '',
    member_pay_fee: false,
};
