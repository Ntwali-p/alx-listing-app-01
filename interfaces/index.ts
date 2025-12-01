export interface Address {
state: string;
city: string;
country: string;
}


export interface Offers {
bed: string;
shower: string;
occupants: string;
}


export interface PropertyProps {
name: string;
address: Address;
rating: number;
category: string[];
price: number; // per night
offers: Offers;
image: string;
discount?: string; // percentage as string or empty
}