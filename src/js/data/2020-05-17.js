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
    sub: [ { name: "Normal Ship", key: "N" }, { name: "Rare Ship", key: "R" }, { name: "Elite ship", key: "E" }, { name: "Super Rare Ship", key: "SR" },  { name: "Priority Ship", key: "P" }, { name: "Decisive Ship", key: "D" }, { name: "Ultra Rare Ship", key: "UR" }
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
    img: "kBCi6MA.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CA"
    }
  },
{
    name: "Memphis",
    img: "9LttGIm.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
 {
    name: "Marblehead",
    img: "dX8imPO.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
 {
    name: "Long Island",
    img: "MH7bH8F.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CVL"
    }
  },
 {
    name: "Kimberly",
    img: "xKLR0ZR.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
 {
    name: "Kalk",
    img: "8yRNO8p.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
 {
    name: "Juneau",
    img: "NUWg1wz.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
 {
    name: "Jenkins",
    img: "EG93aHo.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
 {
    name: "Hammann",
    img: "HXY3e48.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
 {
    name: "Honolulu",
    img: "0T7OF5T.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
 {
    name: "Hobby",
    img: "aPXCJlz.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
 {
    name: "Hazelwood",
    img: "Sv5QquG.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
 {
    name: "Halsey Powell",
    img: "Us4KqPO.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Gridley",
    img: "9bRxk9x.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Fletcher",
    img: "SL9zkp8.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Dewey",
    img: "Lj78UaB.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Concord",
    img: "i3wdEUZ.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
{
    name: "Chicago",
    img: "tasAfzA.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CA"
    }
  },
{
    name: "Casablanca",
    img: "Itwfznx.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CVL"
    }
  },
{
    name: "California",
    img: "2bI6Ini.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "BB"
    }
  },
{
    name: "Bush",
    img: "cBnzUlS.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Brooklyn",
    img: "uWudL8n.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
 {
    name: "Benson",
    img: "LM2OCsf.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
 {
    name: "Bailey",
    img: "y2SsKR2.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Bache",
    img: "aLP12rs.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Aylwin",
    img: "9KtC4PR.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "DD"
    }
  },
{
    name: "Atlanta",
    img: "K90w3bh.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CL"
    }
  },
{
    name: "Yorktown",
    img: "t9PrrPB.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CV"
    }
  },
{
    name: "Wichita",
    img: "JVWXKQw.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CA"
    }
  },
{
    name: "West Virginia",
    img: "DMdoWDG.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "BB"
    }
  },
{
    name: "Vincennes",
    img: "QhdgS16.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CA"
    }
  },
{
    name: "Vestal",
    img: "XASCQmU.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "RS"
    }
  },
{
    name: "Wasp",
    img: "V87dfvP.png",
    opts: {
      faction: "EU",
      rarity: "R",
	  build: "CV"
    }
  },
{
    name: "St. Louis",
    img: "Q9XYOEv.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Saratoga",
    img: "WnRbjWn.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CV"
    }
  },
{
    name: "Quincy",
    img: "nHpIESI.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CA"
    }
  },
{
    name: "Nicholas",
    img: "MfrbCuO.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "DD"
    }
  },
{
    name: "Mullany",
    img: "PTKNfZo.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "DD"
    }
  },
{
    name: "Maury",
    img: "xPARifg.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "DD"
    }
  },
{
    name: "Maryland",
    img: "Qr6nY5y.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "BB"
    }
  },
{
    name: "Lil Sandy",
    img: "AjJmwSu.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Lexington",
    img: "ugbfi9A.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CV"
    }
  },
{
    name: "Lena",
    img: "L4zau1L.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Laffey",
    img: "x9da2zV.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "DD"
    }
  },
{
    name: "Indianapolis",
    img: "xMcgiYC.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CA"
    }
  },
{
    name: "Independence",
    img: "L8fHalT.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CVL"
    }
  },
{
    name: "Houston",
    img: "uztfY84.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CA"
    }
  },
{
    name: "Hornet",
    img: "ge8Knua.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CV"
    }
  },
{
    name: "Helena",
    img: "WPa4EPx.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Denver",
    img: "yvoCZOI.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Dace",
    img: "hfnI42I.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "SS"
    }
  },
{
    name: "Cooper",
    img: "dMCPpej.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "DD"
    }
  },
{
    name: "Columbia",
    img: "1O5FyqK.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Colorado",
    img: "cXidy7B.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "BB"
    }
  },
{
    name: "Cleveland (Muse)",
    img: "N6wWoP6.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Cleveland",
    img: "Ar494HL.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Clevelad",
    img: "IqWiIFF.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Charles Ausburne",
    img: "v2e6XAt.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "DD"
    }
  },
{
    name: "Bluegill",
    img: "q5LaScU.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "SS"
    }
  },
{
    name: "Birmingham",
    img: "WPJTvYw.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Biloxi",
    img: "JSvV1j5.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CL"
    }
  },
{
    name: "Bataan",
    img: "aDecWta.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CVL"
    }
  },
{
    name: "Astoria",
    img: "UHY7Jvp.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "CA"
    }
  },
{
    name: "Arizona",
    img: "6RurxCU.png",
    opts: {
      faction: "EU",
      rarity: "E",
	  build: "BB"
    }
  },
{
    name: "Washington",
    img: "zAE6tst.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "BB"
    }
  },
{
    name: "South Dakota",
    img: "XBwWl8m.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "BB"
    }
  },
{
    name: "Shangri-La",
    img: "wrE0JG9.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CV"
    }
  },
{
    name: "San Diego",
    img: "WmSBw6q.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CL"
    }
  },
{
    name: "Reno",
    img: "cPBvplo.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CL"
    }
  },
{
    name: "North Carolina",
    img: "m4cYLtu.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "BB"
    }
  },
{
    name: "Montpelier",
    img: "DyYZPzL.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CL"
    }
  },
{
    name: "Minneapolis",
    img: "9s7jCGl.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CA"
    }
  },
{
    name: "Massachusetts",
    img: "Gjud8Fu.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "BB"
    }
  },
{
    name: "Intrepid",
    img: "WcGcQ5e.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CV"
    }
  },
{
    name: "Essex",
    img: "ZSsQcVe.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CV"
    }
  },
{
    name: "Enterprise",
    img: "6D3oLof.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CV"
    }
  },
{
    name: "Eldridge",
    img: "sJzcidf.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "DD"
    }
  },
{
    name: "Cavalla",
    img: "ZyF6czf.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "SS"
    }
  },
{
    name: "Bunker Hill",
    img: "UsUoTDj.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CV"
    }
  },
{
    name: "Bremeron",
    img: "oYYXAvF.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CA"
    }
  },
{
    name: "Baltimore",
    img: "igbPgge.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "CA"
    }
  },
{
    name: "Albacore",
    img: "E6peXya.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "SS"
    }
  },
{
    name: "Alabama",
    img: "by6pqXy.png",
    opts: {
      faction: "EU",
      rarity: "SR",
	  build: "BB"
    }
  },
{
    name: "Seattle",
    img: "wcRuN6d.png",
    opts: {
      faction: "EU",
      rarity: "P",
	  build: "CL"
    }
  },
{
    name: "Georgia",
    img: "DRrGZi6.png",
    opts: {
      faction: "EU",
      rarity: "P",
	  build: "BB"
    }
  },
 ];