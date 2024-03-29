const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages)
//minAge
let minAge = ages[0]
console.log(minAge)
//maxAge
let maxAgeIndex = ages.length - 1
console.log(maxAgeIndex)
let maxAge = ages[maxAgeIndex]
console.log(maxAge)


// Find the median age(one middle item or two middle items divided by two)
// To get if array length is odd or even number
if (ages.length % 2 === 0) {
    console.log('ages array length is even number')
} else {
    console.log('ages array length is odd')
}

//get the middle items of the array is array length is even
let firstMiddleElementIndex = ages.length/2
console.log(firstMiddleElementIndex)
let firstMiddleElement = ages[firstMiddleElementIndex]
console.log(firstMiddleElement)
let secondMiddleElementIndex = firstMiddleElementIndex-1
console.log(secondMiddleElementIndex)
let secondMiddleElement = ages[secondMiddleElementIndex];
console.log(secondMiddleElement)

//Median
let median = (firstMiddleElement + secondMiddleElement) / 2
console.log(median)

// Find the average age(all items divided by number of items)
console.log(ages)
let sumOfItems = ages[0] + ages[1] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]
let numberOfItems = ages.length 
let averageAge = sumOfItems / numberOfItems;
console.log(averageAge)


// Find the range of the ages(max minus min)
ages.sort() 
console.log(ages)
//  maxAge having sorted the ages in the array
let maxAgeIndexx = ages.length - 1
console.log(maxAgeIndex)
let max = ages[maxAgeIndex]
console.log(max)

//minAge having sorted the ages in the array
let min = ages[0]
console.log(minAge)


// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

let minMinusAverage = min -averageAge;
minMinusAverage = Math.abs(minMinusAverage)
console.log(minMinusAverage)

let maxMinusAverage = max - averageAge;
console.log(maxMinusAverage)

let Compare = (maxMinusAverage < minMinusAverage);
console.log(Compare)



const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

//   Slice the first ten countries from the countries array

let firstTenCountries = countries.slice(0, 10)
console.log(firstTenCountries)



// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
//check if countries is even or not
if(countries % 2 === 0){
    console.log('Countries = even')
}else{
    console.log('Countries = odd')
}

countries.push('UAE')
console.log(countries.length / 2)

let arrayOne = countries.slice(0,97)
console.log(arrayOne)
let arrayTwo = countries.slice(98,194)
console.log(arrayTwo)


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age

// ages.sort()
// console.log(ages)

// let minAge = ages[0]
// console.log(minAge)

// let maxAge = ages[ages.length-1]
// console.log(maxAge)


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Find the median age(one middle item or two middle items divided by two)

//get middle item(s)
if(ages.length % 2 != 0){
    let middleAgeIndex = Math.floor(ages.length / 2) 
    let middleItem = parseInt(ages[middleAgeIndex])
    let median = middleItem/2
    console.log(median)
}else if(ages.length % 2 === 0){
   let  middleItem1Index = ages.length / 2
   let  middleItem2Index = middleItem1Index - 1
   middleItem1 = ages[middleItem1Index]
   middleItem2 = ages[middleItem2Index]
   let  median = (middleItem1 + middleItem2)/2
    console.log(median)
}else{
    console.log('Invalid Operation')
}


