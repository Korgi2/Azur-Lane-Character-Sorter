dataSetVersion = "2020-05-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Faction",
    key: "faction",
    tooltip: "Check this to restrict to certain nations.",
    checked: false,
    sub: [
      { name: "Universal", key: "UN" },
      { name: "Eagle Union", key: "EU" },
      { name: "Royal Navy", key: "RN" },
      { name: "Sakura Empire", key: "SE" },
      { name: "Ironblood", key: "IR" },
      { name: "Eastern Radiance", key: "ER" },
      { name: "North Union", key: "NU" },
      { name: "Iris Libre", key: "IL" },
      { name: "Vichiya Dominion", key: "VD" },
      { name: "Sardegna Empire", key: "SaE" },
      { name: "Collab Ships", key: "CS" },
      { name: "Siren", key: "SI" }
    ]
  },
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to restrict to rarity.",
    checked: false,
    sub: [ { name: "Normal Ship", key: "N" }, { name: "Rare Ship", key: "R" }, { name: "Elite ship", key: "E" }, { name: "Super Rare Ship", key: "SR" },  { name: "Priority Ship", key: "P" }, { name: "Decisive Ship", key: "D" }
    ]
  },
  {
    name: "Filter by Ship Class",
    key: "build",
    tooltip: "Check this to restrict to ship class.",
    checked: false,
    sub: [ { name: "Destroyer", key: "DD" }, { name: "Light Cruiser", key: "CL" }, { name: "Heavy Cruiser", key: "CA" }, { name: "Large Cruiser", key: "LC" }, { name: "Battleship", key: "BB" }, { name: "Battlecruiser", key: "BC" }, { name: "Aircraft Carrier", key: "CV" }, { name: "Light Aircraft Carrier", key: "CVL" }, { name: "Submarine", key: "SS" }, { name: "Monitor", key: "M" }, { name: "Repair Ship", key: "RS" } 
    ]
  },
];

dataSet[dataSetVersion].characterData = [

    {
    name: "Trial Bullin MKII",
    img: "PdnX160.png",
    opts: {
      faction: "UN",
      rarity: "SR",
	  build: "DD"
    }
  },
	{
    name: "Universal Bulin",
    img: "rAWm1I1.png",
    opts: {
      faction: "UN",
      rarity: "E",
	  build: "DD"
    }
  },
	{
    name: "Spence",
    img: "mVrywPj.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "DD"
    }
  },
{
    name: "Salt Lake City",
    img: "Hrmm89I.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "CA"
    }
  },
{
    name: "Richmond",
    img: "mjMmoqT.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "CL"
    }
  },
{
    name: "Ranger",
    img: "vOoBZMK.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "CVL"
    }
  },
{
    name: "Raleigh",
    img: "hTbIvNP.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "CL"
    }
  },
{
    name: "Pensacola",
    img: "kfnoRVW.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "CA"
    }
  },
{
    name: "Omaha",
    img: "JjG0A0V.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "CL"
    }
  },
{
    name: "Oklahoma",
    img: "unT3rBa.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "BB"
    }
  },
{
    name: "Nevada",
    img: "eHyi4IR.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "BB"
    }
  },
{
    name: "McCall",
    img: "O6f3dtz.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "DD"
    }
  },
{
    name: "Langley",
    img: "ndsw3hs.png",
    opts: {
      faction: "RU",
      rarity: "N",
	  build: "CVL"
    }
  },
{
    name: "Foote",
    img: "tUHNjGI.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "DD"
    }
  },
{
    name: "Downes",
    img: "v2pKkPK.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "DD"
    }
  },
{
    name: "Craven",
    img: "sC6dIIp.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "DD"
    }
  },
{
    name: "Cassin",
    img: "YXiYK4n.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "DD"
    }
  },
{
    name: "Bouge",
    img: "ShZorZu.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "CVL"
    }
  },
{
    name: "Aulick",
    img: "oYS3p4z.png",
    opts: {
      faction: "EU",
      rarity: "N",
	  build: "DD"
    }
  },
{
    name: "Thatcher",
    img: "VLxvmUd.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Tennesee",
    img: "yDEnbLW.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "BB"
    }
  },
{
    name: "Stanly",
    img: "go8BCaL.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Smalley",
    img: "aVhAqZV.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Sims",
    img: "XHXkqw9.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "San Juan",
    img: "XbJIO7q.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
{
    name: "Radford",
    img: "XIAy2OB.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Portland",
    img: "id9vJ9O.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CA"
    }
  },
{
    name: "Pheonix",
    img: "gJYdUbH.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
{
    name: "Pennsylvania",
    img: "p0xX5DN.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "BB"
    }
  },
{
    name: "Northampton",
    img: "",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CA"
    }
  },
{
    name: "Memphis",
    img: "",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },{
    name: "Marblehead",
    img: "",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },{
    name: "Long Island",
    img: "",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CVL"
    }
  },{
    name: "",
    img: "",
    opts: {
      faction: "",
      rarity: "",
	  build: ""
    }
  },
 ];