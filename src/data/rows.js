const nestedDataStructureJon = {
  otherInfo: {
    additionalInfo: {
      funFacts: ['Knows nothing', 'Likes dogs', 'King in the north?'],
      motto: "I know nothing",
      moreInfo: {
        episodes: [1, 2, 3, 4],
        appearance: {
          eyeColour: 'brown',
          hairColour: 'black',
          height: '190cm'
        }
      }
    }
  }
}

const nestedDataStructureCersei = {
  otherInfo: {
    additionalInfo: {
      favouritePeople: [{
        Jamie: {
          fullName: 'Jaime Lannister',
          relationship: 'its complicated'
        }
      }],
      moreInfo: {
        episodes: [2, 3, 4, 7],
        appearance: {
          eyeColour: 'brown',
          hairColour: 'black',
          height: '190cm'
        }
      }
    }
  }
}

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, otherInfo: nestedDataStructureJon },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, otherInfo: nestedDataStructureCersei },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
export default rows;