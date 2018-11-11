var uuid = guid();
function guid() {
  function random() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
}

export const packages = [
  {
    id: 1,
    packageName: '1',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },
  {
    id: 2,
    packageName: '2',
    status: "Bidding",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "2 Outlet",
      "2 Wirings",
    ]
  },
  {
    id: 3,
    packageName: '3',
    status: "For Deployment",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "5 Lights",
      "5 Outlet",
      "4 Wirings",
    ]
  },
  {
    id: 4,
    packageName: '4',
    status: "Accomplish",
    location: "3008 Lapidsville Tambuong, Pampanga, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "3 Lights",
      "5 Outlet",
    ]
  },
  {
    id: 5,
    packageName: '5',
    status: "Pending",
    location: "3008 Lapidsville II Blk 5 Lot 8 Tambuong, San Rafael, Bulacan",
    packagePrice: 10000,
    service: "Installation",
    type: "All In",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
    ]
  }
]

export const dataSource = [
  {
    id: 1,
    applicationId: 4,
    packageName: 'A',
    status: "Bidding",
    location: "Bulacan",
    packagePrice: 10000,
    // bidderAssigned: "Maridin Association",
    biddingEnd: "March 2, 2018",
    myRank: '2nd',
    leastBid: 8000,
    myBid: 9000,
    service: "Installation",
    type: "Service",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },
  {
    id: 1,
    applicationId: 1,
    packageName: 'A',
    status: "Bidding",
    location: "Bulacan",
    packagePrice: 10000,
    biddingEnd: "May 2, 2018",
    // bidderAssigned: "Maridin Association",
    // accomplishDate: "March 2, 1996",
    myRank: '1st',
    leastBid: 8000,
    myBid: 9000,
    service: "Installation",
    type: "Service",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },{
    id: 1,
    applicationId: 3,
    packageName: 'A',
    status: "Bidding",
    location: "Bulacan",
    packagePrice: 10000,
    // bidderAssigned: "Maridin Association",
    // accomplishDate: "March 2, 1996",
    
    biddingEnd: "April 2, 2018",
    myRank: '3rd',
    leastBid: 8000,
    myBid: 9000,
    service: "Installation",
    type: "Service",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },{
    id: 1,
    applicationId: 2,
    packageName: 'A',
    status: "Bidding",
    location: "Bulacan",
    packagePrice: 10000,
    biddingEnd: "March 2, 2018",
    // bidderAssigned: "Maridin Association",
    // accomplishDate: "March 2, 1996",
    myRank: '6th',
    leastBid: 8000,
    myBid: 9000,
    service: "Installation",
    type: "Service",
    details:[
      "2 Lights",
      "5 Outlet",
      "4 Wirings",
      "2 Light walls",
      "10 Lamps",
    ]
  },
  
]