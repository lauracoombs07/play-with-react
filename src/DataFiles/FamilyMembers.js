export const familyMembers = [
    { id: 'bob', name: 'Robert Egbert', relation: 'Father' },
    { id: 'diane', name: 'Diane Southworth', relation: 'Mother' },
    { id: 'rob', name: 'Rob Egbert', relation: 'Brother' },
    { id: 'laura', name: 'Laura Coombs', relation: 'ME' },
    { id: 'jesse', name: 'Jesse Egbert', relation: 'Brother' },
    { id: 'chris', name: 'Chris Egbert', relation: 'Brother' },
    { id: 'cameron', name: 'Cameron Egbert', relation: 'Brother' },
    { id: 'chaz', name: 'Chastin Egbert', relation: 'Brother' },
    { id: 'emily', name: 'Emily Chambers', relation: 'Sister' },
    { id: 'elizabeth', name: 'Elizabeth Davis', relation: 'Sister' },
    { id: 'ashlyn', name: 'Ashlyn Warren', relation: 'Sister' },
    { id: 'melissa', name: 'Melissa Egbert', relation: 'Sister' },
    { id: 'jennifer', name: 'Jennifer Egbert', relation: 'Sister' }
]

export const secondaryMembers = { 'rob': [
    { id: 1, name: 'Jocelyn Egbert', relation: 'Wife', relationId: 2.5, gender: 'F' },
    { id: 2, name: 'Rylee Egbert', relation: 'Daughter', relationId: 3, gender: 'F' },
    { id: 3, name: 'Cade Egbert', relation: 'Son', relationId: 3, gender: 'M' },
    { id: 4, name: 'Brayden Egbert', relation: 'Son', relationId: 3, gender: 'M' },
    { id: 5, name: 'Trey Egbert', relation: 'Son', relationId: 3, gender: 'M' },
    { id: 6, name: 'Kennedy Egbert', relation: 'Daughter', relationId: 3, gender: 'F' },
    { id: 7, name: 'Easton Egbert', relation: 'Son', relationId: 3, gender: 'M' },
],
'laura': [
    { id: 8, name: 'Ben Coombs', relation: 'Husband' },
    { id: 9, name: 'Cameron Coombs', relation: 'Son' },
    { id: 10, name: 'Sawyer Coombs', relation: 'Son' },
    { id: 11, name: 'Kylie Coombs', relation: 'Daughter' },
    { id: 12, name: 'Grayson Coombs', relation: 'Son' },
    { id: 13, name: 'Alexia Coombs', relation: 'Daughter' },
],
'jesse': [
    { id: 14, name: 'Landon Egbert', relation: 'Son' },
    { id: 15, name: 'Travis Egbert', relation: 'Son' },
    { id: 16, name: 'Kaitlyn Egbert', relation: 'Daughter' },
    { id: 17, name: 'Lincoln Egbert', relation: 'Son' },
    { id: 18, name: 'Madison Egbert', relation: 'Daughter' },
    { id: 19, name: 'James Egbert', relation: 'Son' },
    { id: 20, name: 'Rachelle Egbert', relation: 'Wife' },
],
'cameron': [
    { id: 21, name: 'Andrew Cameron', relation: 'Son' },
],
'chaz': [
    { id: 22, name: 'Chelsea Egbert', relation: 'Wife' },
    { id: 23, name: 'William Egbert', relation: 'Son' },
    { id: 24, name: 'Ayda Egbert', relation: 'Daughter' },
],
'emily': [
    { id: 25, name: 'Chris Chambers', relation: 'Husband' },
    { id: 26, name: 'Calvin Chambers', relation: 'Son' },
    { id: 27, name: 'Daniel Chambers', relation: 'Son' },
],
'elizabeth': [
    { id: 28, name: 'Ryan  Davis', relation: 'Husband' },
    { id: 29, name: 'Henry Davis', relation: 'Son' },
    { id: 30, name: 'Annie Davis', relation: 'Daughter' },
],
'ashlyn': [
    { id: 31, name: 'Derek Warren', relation: 'Husband' },
    { id: 32, name: 'Thomas Warren', relation: 'Son' },
], }

export const relationship = [
    'Spouse', 'Father', 'Mother', 'Son', 'Daughter', 'Cousin', 'Grandparent', 'Sibling'
]
//
// nameOne.id === 1 && nameTwo === 2
// setRelation('parent')
// nameOne.id === 1 && nameTwo === 2.5
// setRelation('parent-in-law')
// nameOne.id === 2.5 && nameTwo === 1
// setRelation('child-in-law')
// nameOne.id === 1 && nameTwo === 3
// setRelation('Grandparent')
// nameOne.id === 3 && nameTwo === 1
// setRelation('Grandchild')
// nameOne.id === 2 && nameTwo === 1
// setRelation('child')
// nameOne.id === nameTwo.id && genderOne !== genderTwo
// setRelation('Spouse')
// (nameOne.id === 3 && nameTwo.id === 3) && nameOne.parent !== nameTwo.parent
// setRelation('Siblings')

// data structure to access later #Chad
