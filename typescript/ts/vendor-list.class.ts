import { Vendor } from './vendor.class';

let vendors: Vendor[] = [
    new Vendor(1, "AMAZ", "Amazon", "1 Main Street", "Cincinnati", "OH", "45150", "513-200-8899", "amazon@amazon.com", true, true),
    new Vendor(2, "WLMT", "Walmart", "2 Main Street", "Cincinnati", "OH", "45150", "513-200-8899", "walmart@walmart.com", true, true),
    new Vendor(3, "EBAY", "Ebay", "3 Main Street", "Cincinnati", "OH", "45150", "513-200-8899", "ebay@ebay.com", true, true),
    new Vendor(4, "CRDS", "Crossroads Church", "4 Main Street", "Cincinnati", "OH", "45150", "513-200-8899", "crossroads@church.com", true, true)
];

vendors.forEach(v => {
    v.PrintList();
});