
const specialPatterns = [
    // 00 Japanese
    {
        threading: [11, 4, 3, 8, 2, 6, 5, 10, 7, 10, 5, 6, 2, 8, 3, 4, 9, 1],
        treadling: [1, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10, 9, 8, 7, 6, 5],
        tieUp: [
            [1,0,0,1, 0,0,0,0, 0,0,0,0],
            [1,0,0,0, 0,0,0,0, 0,0,0,0],
            [1,1,1,1, 1,1,1,1, 0,1,0,0],
            [1,0,0,1, 0,0,0,0, 0,0,0,0],

            [1,0,1,1, 1,1,0,1, 0,1,0,0],
            [1,0,0,0, 0,1,0,1, 0,1,0,0],
            [1,1,1,1, 0,1,0,1, 0,1,0,0],
            [1,0,0,1, 0,0,0,1, 0,1,0,0],

            [1,1,0,1, 0,1,0,1, 1,1,1,0],
            [0,0,0,0, 0,1,0,0, 0,1,0,0],
            [1,1,1,1, 0,1,0,1, 1,1,1,0],
            [0,0,0,0, 0,0,0,0, 0,1,0,0],
        ]
    },
    // 01 Space Invaders :)
    {
        threading: [5,4,1,2,3,8,3,2,1,4,5,9,10,11,12],
        treadling: [1,2,3,4,5,6,7,8,9,10,11,12],
        tieUp: [
            [1,0,0,0, 0,0,0,0, 0,0,0,0],
            [0,1,0,0, 0,0,0,0, 0,0,0,0],
            [1,1,1,0, 0,0,0,1, 0,0,0,0],
            [1,0,1,1, 0,0,0,1, 0,0,0,0],

            [1,1,1,1, 1,0,0,1, 0,0,0,0],
            [1,1,1,0, 1,1,0,1, 0,0,0,0],
            [1,0,0,0, 1,0,0,0, 0,0,0,0],
            [0,1,1,0, 0,0,0,0, 0,0,0,0],

            [0,0,0,0, 0,0,0,0, 1,0,0,1],
            [0,0,0,0, 0,0,0,0, 0,1,1,0],
            [0,0,0,0, 0,0,0,0, 0,1,1,0],
            [0,0,0,0, 0,0,0,0, 1,0,0,1],
        ]
    },
    // 02 Tribal
    {
        threading: [1,2,3,4,1,2,3,4,1,2,3,4, 
            5,6,7,8,7,6,5,6,7,8, 
            5,6,7,8, 5,6,7,8,7,6,5, 8,7,6,5, 
            8,7,6,5,6,7,8,7,6,5,4,3,2,1, 
            4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,
            5,6,7,8, 5,6,7,8, 5,6,7,8, 5,
            8,7,6,5,6,7,8, 5,
            8,7,6,5, 8,7,6,5, 8,7,6,5,
        ],
        treadling: [
            1,2,3,4, 1,2,3,4, 1,2,3,4, 1,2,3,4,5,6,
            1,2,3,4, 1,2,3,4, 1,2,3,4,5,6, 1,2,3,4,5,6,
            1,2,3,4, 1,2,3,4, 1,2,3,4, 1,2,3,4,5,6, 1,2,3,4,5,6, 1,2,3,4,5,6,
            1,2,3,4, 1,2,3,4, 1,2,3,4,5,6, 1,2,3,4,5,6,
        ],
        tieUp: [
            [1,0,1,0, 1,1,0,0],
            [0,1,0,1, 0,1,1,0],
            [1,0,1,0, 0,0,1,1],

            [0,1,0,1, 1,0,0,1],
            [1,0,1,0, 0,0,1,1],
            [0,1,0,1, 0,1,1,0],
        ]
    },
    // 03 Mosaic
    {

        threading: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
                     15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,16 ],
        treadling: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
                        15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,16 ],
        tieUp: [                
            [0,1,1,1, 1,1,0,1, 1,1,0,1, 0,1,0,1],
            [1,0,1,1, 1,1,1,0, 1,0,1,0, 1,0,1,0],
            [1,1,0,1, 1,1,1,1, 0,1,0,1, 0,1,0,0],
            [1,1,1,0, 1,1,1,0, 1,0,1,0, 1,0,1,0],

            [1,1,1,1, 0,1,0,1, 0,1,0,1, 0,1,0,0],
            [1,1,1,1, 1,0,1,0, 1,0,1,0, 1,0,1,0],
            [0,1,1,1, 0,1,0,1, 0,1,0,1, 0,1,0,1],
            [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,1],

            [1,1,0,1, 0,1,0,1, 0,1,0,1, 0,0,0,1],
            [1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,1,1],
            [0,1,0,1, 0,1,0,1, 0,1,0,0, 0,1,1,1],
            [1,0,1,0, 1,0,1,0, 1,0,0,0, 1,1,1,0],

            [0,1,0,1, 0,1,0,1, 0,0,0,1, 0,1,1,1],
            [1,0,1,0, 1,0,1,0, 0,0,1,1, 1,0,1,0],
            [0,1,0,1, 0,1,0,0, 0,1,1,1, 1,1,0,1],
            [1,0,0,0, 0,0,1,1, 1,1,1,0, 1,0,1,0],
        ]
    },
    // 04 Trippy
    {
        threading: [1,2,3,4,5,4,3,2, 3,4,5,6,5,4,3, 4,5,6,7,6,5,4, 5,6,7,8,7,6,5, 6,7,8,1,8,7,6, 7,8,1,2,1,8,7, 8,1,2,3,2,1,8, ],
        treadling: [1,2,3,4,5,4,3,2, 3,4,5,6,5,4,3, 4,5,6,7,6,5,4, 5,6,7,8,7,6,5, 6,7,8,1,8,7,6, 7,8,1,2,1,8,7, 8,1,2,3,2,1,8, ],
        tieUp: [
            [ 1,1,1,0, 1,0,0,0 ],
            [ 0,1,1,1, 0,1,0,0 ],
            [ 0,0,1,1, 1,0,1,0 ],
            [ 0,0,0,1, 1,1,0,1 ],

            [ 1,0,0,0, 1,1,1,0 ],
            [ 0,1,0,0, 0,1,1,1 ],
            [ 1,0,1,0, 0,0,1,1 ],
            [ 1,1,0,1, 0,0,0,1 ],
        ]
    },
    // 05 Diagonal bars
    {
        threading: [ 4,3,2,1,4,1,2,3,4,1 ],
        treadling: [ 1,2,1,2,1,2,1,6,2,6,1,5,2,5,1,4,2,4,1,3,2,3,1,6,2,6,1,4,2,4,1,3,2,3,1,6,2,6,1,2,1,2,1,2, ],
        tieUp: [
            [1,0,1,0],
            [0,1,0,1],
            [1,0,0,1],

            [1,1,0,0],
            [0,1,1,0],
            [0,0,1,1],
        ]
    },
];


const eightsSeries = [
    [1,2,3,4,5,6,7,8],
    [8,7,6,5,4,3,2,1],
    [1,2,3,4,1,4,5,6,7,4],
    [1,2,3,4,5,6,7,6,5,8, 5,6,7,6,5,8, 5,6,7,6,5,8, 5,6,7,6,5,4,3,2 ],
    [1,2,3,4,5,6,5,4,7,   4,5,6,5,4,7, 4,5,6,5,4,7, 4,5,6,5,4,3,2,1, 8 ],
    [1,2,3,4,1,2,3,4,1,2,3,4,5,6,7,8,5,6,7,8,5,6,7,8],
    [ 1,2,3,4,2,5,4,6,5,7,6,8,7,1,8,3 ],
    [1,2,3,4,3,2,1,2,3,4,5,6,7,8,7,6,5,6,7,8,7,6,5,4,3,2],
    [1,2,3,4,5,6,7,8,7,6,5,4,3,2,1],
];

const eightsTieUps = [
    [
        [0,0,0,1, 0,1,0,1],
        [1,0,0,0, 1,0,1,0],
        [0,1,0,0, 0,1,0,0],
        [1,0,1,0, 0,0,1,0],

        [0,1,0,1, 0,0,0,1],
        [1,0,1,0, 1,0,0,1],
        [0,1,0,0, 0,1,1,0],
        [0,0,1,0, 1,0,1,0],
    ],
    [
        [1,0,0,0, 0,0,0,0],
        [0,1,0,0, 0,0,0,0],
        [0,0,1,0, 0,0,0,0],
        [0,0,0,1, 0,0,0,0],

        [0,0,0,0, 1,0,0,0],
        [0,0,0,0, 0,1,0,0],
        [0,0,0,0, 0,0,1,0],
        [0,0,0,0, 0,0,0,1],
    ],
    [
        [0,1,0,0, 0,0,0,0],
        [0,0,0,0, 0,0,0,1],
        [1,0,0,0, 0,0,0,0],
        [0,0,0,0, 0,0,1,0],

        [0,0,0,0, 0,1,0,0],
        [0,0,0,0, 1,0,0,0],
        [0,0,0,1, 0,0,0,0],
        [0,0,1,0, 0,0,0,0],
    ],
    [
        [0,0,0,0, 0,1,0,0],
        [0,0,1,0, 0,0,0,0],
        [0,0,0,0, 0,0,0,1],
        [0,0,0,0, 1,0,0,0],

        [0,1,0,0, 0,0,0,0],
        [0,0,0,0, 0,0,1,0],
        [0,0,0,1, 0,0,0,0],
        [1,0,0,0, 0,0,0,0],
    ],
    [
        [0,1,0,0, 1,1,0,1],
        [0,1,1,0, 1,0,1,0],
        [0,1,0,1, 0,0,1,1],
        [1,0,0,1, 1,0,1,0],

        [1,1,0,1, 0,1,0,0],
        [1,0,1,0, 0,1,1,0],
        [0,0,1,1, 0,1,0,1],
        [1,0,1,0, 1,0,0,1],
    ],
    [
        [0,1,0,0, 1,1,0,1],
        [1,0,1,0, 1,1,0,0],
        [0,1,0,1, 0,0,1,1],
        [0,0,1,0, 0,0,1,1],

        [1,1,0,0, 0,1,0,0],
        [1,1,0,0, 1,0,1,0],
        [0,0,1,1, 0,1,0,1],
        [1,0,1,1, 0,0,1,0],
    ],
    [
        [1,1,0,0, 1,1,0,0],
        [1,0,1,1, 0,0,1,0],
        [0,1,1,0, 1,0,0,1],
        [0,1,0,1, 0,1,0,1],

        [1,0,1,0, 1,0,1,0],
        [1,0,0,1, 0,1,1,0],
        [0,1,0,0, 1,1,0,1],
        [0,0,1,1, 0,0,1,1],
    ],
    [
        [0,1,1,1, 1,1,1,1],
        [1,0,0,0, 0,0,0,0],
        [1,0,0,0, 0,0,0,0],
        [1,0,0,0, 0,0,0,0],

        [1,0,0,0, 0,0,0,0],
        [1,0,0,0, 0,0,0,0],
        [1,0,0,0, 0,0,0,0],
        [1,0,0,0, 0,0,0,0],
    ],
    [
        [1,1,1,1, 0,0,0,0],
        [1,1,1,0, 0,0,0,1],
        [1,1,0,0, 0,0,1,1],
        [1,0,0,0, 0,1,1,1],

        [0,0,0,0, 1,1,1,1],
        [0,0,0,1, 1,1,1,0],
        [0,0,1,1, 1,1,0,0],
        [0,1,1,1, 1,0,0,0],
    ],
    [
        [1,1,1,1, 1,0,0,0],
        [1,1,1,1, 0,0,0,1],
        [1,1,1,0, 0,0,1,1],
        [1,1,0,0, 0,1,1,1],

        [1,0,0,0, 1,1,1,1],
        [0,0,0,1, 1,1,1,1],
        [0,0,1,1, 1,1,1,0],
        [0,1,1,1, 1,1,0,0],
    ],
    [
        [1,0,0,0, 0,0,0,1],
        [0,1,0,0, 0,0,1,0],
        [0,0,1,0, 0,1,0,0],
        [0,0,0,1, 1,0,0,0],

        [0,0,0,1, 1,0,0,0],
        [0,0,1,0, 0,1,0,0],
        [0,1,0,0, 0,0,1,0],
        [1,0,0,0, 0,0,0,1],
    ],
    [
        [1,1,0,0, 0,0,1,1],
        [1,1,1,0, 0,1,1,1],
        [0,1,1,1, 1,1,1,0],
        [0,0,1,1, 1,1,0,0],

        [0,0,1,1, 1,1,0,0],
        [0,1,1,1, 1,1,1,0],
        [1,1,1,0, 0,1,1,1],
        [1,1,0,0, 0,0,1,1],
    ],
    [
        [1,1,0,0, 0,0,0,1],
        [1,1,1,0, 0,0,1,0],
        [0,1,1,1, 0,1,0,0],
        [0,0,1,1, 1,0,0,0],

        [0,0,0,1, 1,1,0,0],
        [0,0,1,0, 1,1,1,0],
        [0,1,0,0, 0,1,1,1],
        [1,0,0,0, 0,0,1,1],
    ],
    [
        [1,0,0,1, 0,0,1,1],
        [0,1,0,1, 0,1,0,1],
        [0,0,1,0, 1,0,1,0],
        [1,1,0,1, 1,1,0,0],

        [0,0,1,1, 1,0,1,1],
        [0,1,0,1, 0,1,0,0],
        [1,0,1,0, 1,0,1,0],
        [1,1,0,0, 1,0,0,1],
    ],
    [
        [1,0,1,0, 0,0,1,1],
        [0,0,0,1, 0,0,1,1],
        [1,0,0,1, 1,1,0,0],
        [0,1,1,1, 1,1,0,0],

        [0,0,1,1, 1,1,1,0],
        [0,0,1,1, 1,0,0,1],
        [1,1,0,0, 1,0,0,0],
        [1,1,0,0, 0,1,0,1],
    ],
    [
        [0,0,1,1, 0,0,0,1],
        [0,1,1,0, 0,0,1,0],
        [1,1,0,0, 0,1,0,0],
        [1,1,1,1, 1,0,0,0],

        [0,0,1,1, 1,0,0,1],
        [0,0,1,1, 1,0,1,1],
        [0,1,0,0, 1,1,1,0],
        [1,0,0,0, 1,1,0,0],
    ],
];

const foursSeries = [
    [1,2,3,4],
    [1,1,2,2,3,3,4,4],
    [4,3,2,1],
    [4,4,3,3,2,2,1,1],
    [4,3,2,1,2,3,4,3,2,1,4,3,2,1],
    [1,4,3,2,3,4,1],
    [4,3,2,1,2,3],
    [1,2,2,3,3,4,4,1],
    [1,2,3,2,3,4,3,4,1,4],
    [1,2,3,4,2,1,4,3,1,2,1,2,3,4,3,4,2,1,2,1,4,3,4,3,1,2,1,2,1,2,3,4,3,4,3,4,2,1,2,1,4,3,4,3, 1,2,3,4,2,1,4,3,1,2,1,2,3,4,3,4,2,1,2,1, 4,3,4,3, 1,2,1,2,1,2,3,4,3,4,3,4],
];

const foursTieUps = [
[
    [ 1,1,0,0 ],
    [ 1,0,1,0 ],
    [ 0,1,0,1 ],
    [ 0,0,1,1 ],
],
[
    [1,1,0,0],
    [0,1,1,0],
    [0,0,1,1],
    [1,0,0,1],
],
[
    [1,1,0,0],
    [0,1,0,0],
    [0,1,1,0],
    [1,0,0,1],
],
[
    [1,0,0,1], 
    [0,1,1,0], 
    [0,1,1,0], 
    [1,0,0,1],
],

[
    [0,0,1,0],
    [1,0,0,1],
    [0,1,0,0],
    [1,0,1,0],
],

[
    [1,0,1,0],
    [0,0,0,1],
    [0,1,0,0],
    [1,0,0,1],
],

[
    [1,0,0,1],
    [0,0,0,1],
    [0,1,0,0],
    [1,0,1,0],
],

[
    [1,0,0,0],
    [0,0,0,1],
    [0,1,0,0],
    [0,0,1,0],
],

[
    [1,1,0,0],
    [0,0,0,1],
    [0,1,0,0],
    [1,0,0,1],
],
[
    [0,1,0,1],
    [1,0,1,0],
    [1,0,0,1],
    [0,1,1,0],
],
[
    [1,0,0,1],
    [0,1,1,0],
    [1,0,0,1],
    [0,1,1,0],
],
[
    [1,0,0,1],
    [0,1,1,0],
    [1,0,0,1],
    [1,0,0,1],
],
];

const sixteensSeries = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
    [ 1,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,8,  9,10,10,11,11,11,12,12,12,12,13,13,13,13,14,14,14,15,15,16],
    [1,2,3,4,5,6,7,8,7,6,5,4,3,2,1,16,15,14,13,12,11,10,9,10,11,12,13,14,15,16],
    [1,2,3,4,1,2,3,4,1,2,3,4, 5,6,7,8,5,6,7,8,5,6,7,8, 9,10,11,12,9,10,11,12,9,10,11,12, 13,14,15,16,13,14,15,16,13,14,15,16,],
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
];

const sixteensTieUps = [
    [
        [ 1,1,1,1, 1,0,0,1, 0,1,1,0, 0,0,0,0 ],
        [ 0,0,1,1, 1,0,0,1, 0,1,1,0, 0,0,1,1 ],
        [ 0,0,0,0, 0,0,1,1, 0,0,1,1, 1,1,1,1 ],
        [ 1,1,0,0, 0,0,1,1, 0,0,1,1, 1,1,0,0 ],
        [ 1,1,0,0, 0,0,1,1, 0,0,1,1, 1,1,0,0 ],
        [ 1,1,0,0, 0,0,0,0, 1,1,1,1, 1,1,0,0 ],
        [ 1,0,0,1, 1,1,0,0, 1,1,0,0, 0,1,1,0 ],
        [ 1,0,0,1, 1,1,1,1, 0,0,0,0, 0,1,1,0 ],
        [ 0,1,1,0, 0,0,0,0, 1,1,1,1, 1,0,0,1 ],
        [ 0,1,1,0, 0,0,1,1, 0,0,0,1, 1,0,0,1 ],
        [ 0,0,1,1, 1,1,1,1, 0,0,0,0, 0,0,1,1 ],
        [ 0,0,1,1, 1,1,0,0, 1,1,0,0, 0,0,1,1 ],
        [ 0,0,1,1, 1,1,0,0, 1,1,0,0, 0,0,1,1 ],
        [ 1,1,1,1, 1,1,0,0, 1,1,0,0, 0,0,0,0 ],
        [ 1,1,0,0, 0,1,1,0, 1,0,0,1, 1,1,0,0 ],
        [ 0,0,0,0, 0,1,1,0, 1,0,0,1, 1,1,1,1 ],
    ],
    [
        [ 0,0,1,1, 0,1,1,0, 0,0,1,1, 1,1,1,0 ],
        [ 1,1,1,1, 0,0,0,1, 1,0,1,1, 0,0,0,1 ],
        [ 1,0,0,0, 1,1,1,1, 1,0,0,0, 1,1,0,1 ],
        [ 0,1,1,0, 1,1,0,0, 0,1,1,1, 1,1,0,0 ],
        [ 1,1,1,0, 0,0,1,1, 0,1,1,0, 0,0,1,1 ],
        [ 0,0,0,1, 1,1,1,1, 0,0,0,1, 1,0,1,1 ],
        [ 1,1,0,1, 1,0,0,0, 1,1,1,1, 1,0,0,0 ],
        [ 1,1,0,0, 0,1,1,0, 1,1,0,0, 0,1,1,1 ],
        [ 0,0,1,1, 1,1,1,0, 0,0,1,1, 0,1,1,0 ],
        [ 1,0,1,1, 0,0,0,1, 1,1,1,1, 0,0,0,1 ],
        [ 1,0,0,0, 1,1,0,1, 1,0,0,0, 1,1,1,1 ],
        [ 0,1,1,1, 1,1,0,0, 0,1,1,0, 1,1,0,0 ],
        [ 0,1,1,0, 0,0,1,1, 1,1,1,0, 0,0,1,1 ],
        [ 0,0,0,1, 1,0,1,1, 0,0,0,1, 1,1,1,1 ],
        [ 1,1,1,1, 1,0,0,0, 1,1,0,1, 1,0,0,0 ],
        [ 1,1,0,0, 0,1,1,1, 1,1,0,0, 0,1,1,0 ],
    ],
    [
        [ 0,1,1,1, 1,1,0,1, 1,0,0,0, 0,0,1,1 ],
        [ 1,1,1,0, 1,1,0,0, 0,0,0,1, 1,0,1,1 ],
        [ 0,1,1,0, 0,0,0,0, 1,1,0,1, 1,1,1,1 ],
        [ 0,0,0,0, 0,1,1,0, 1,1,1,1, 1,0,1,1 ],
        [ 0,0,1,1, 0,1,1,1, 1,1,0,1, 1,0,0,0 ],
        [ 1,0,1,1, 1,1,1,0, 1,1,0,0, 0,0,0,1 ],
        [ 1,1,1,1, 0,1,1,0, 0,0,0,0, 1,1,0,1 ],
        [ 1,0,1,1, 0,0,0,0, 0,1,1,0, 1,1,1,1 ],
        [ 1,0,0,0, 0,0,1,1, 0,1,1,1, 1,1,0,1 ],
        [ 0,0,0,1, 1,0,1,1, 1,1,1,0, 1,1,0,0 ],
        [ 1,1,0,1, 1,1,1,1, 0,1,1,0, 0,0,0,0 ],
        [ 1,1,1,1, 1,0,1,1, 0,0,0,0, 0,1,1,0 ],
        [ 1,1,0,1, 1,0,0,0, 0,0,1,1, 0,1,1,1 ],
        [ 1,1,0,0, 0,0,0,1, 1,0,1,1, 1,1,1,0 ],
        [ 0,0,0,0, 1,1,0,1, 1,1,1,1, 0,1,1,0 ],
        [ 0,1,1,0, 1,1,1,1, 1,0,1,1, 0,0,0,0 ],
    ],
    [
        [ 1,0,0,0, 1,1,0,1, 1,0,0,1, 1,0,1,1 ],
        [ 0,1,1,0, 1,1,0,0, 0,1,1,0, 0,0,1,1 ],
        [ 0,0,1,1, 0,1,1,0, 1,1,0,0, 0,1,1,0 ],
        [ 1,0,1,1, 0,0,0,1, 1,1,0,1, 1,0,0,0 ],
        [ 1,1,0,1, 1,0,0,0, 1,0,1,1, 0,0,0,1 ],
        [ 1,1,0,0, 0,1,1,0, 0,0,1,1, 0,1,1,0 ],
        [ 0,1,1,0, 0,0,1,1, 0,1,1,0, 1,1,0,0 ],
        [ 1,0,0,1, 1,0,1,1, 1,0,0,0, 1,1,0,1 ],
        [ 1,0,1,1, 0,0,0,1, 1,1,0,1, 1,0,0,1 ],
        [ 0,0,1,1, 0,1,1,0, 1,1,0,0, 0,1,1,0 ],
        [ 0,1,1,0, 1,1,0,0, 0,1,1,0, 0,0,1,1 ],
        [ 1,0,0,0, 1,1,0,1, 0,0,0,1, 1,0,1,1 ],
        [ 0,0,0,1, 1,0,1,1, 1,0,0,0, 1,1,0,1 ],
        [ 0,1,1,0, 0,0,1,1, 0,1,1,0, 1,1,0,0 ],
        [ 1,1,0,0, 0,1,1,0, 0,0,1,1, 0,1,1,0 ],
        [ 1,1,0,1, 1,0,0,1, 1,0,1,1, 0,0,0,1 ],
    ],
    [
        [ 1,1,0,0, 1,0,1,0, 1,0,0,1, 1,0,1,0 ],
        [ 0,0,1,1, 0,1,0,1, 0,1,1,0, 0,1,0,1 ],
        [ 1,1,0,0, 1,0,1,0, 1,0,0,1, 1,0,1,0 ],
        [ 0,0,1,1, 0,1,0,1, 0,1,1,0, 0,1,0,1 ],
        [ 1,1,0,1, 0,1,0,1, 0,1,0,1, 1,0,1,0 ],
        [ 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0 ],
        [ 0,1,0,1, 1,0,1,0, 1,1,0,1, 0,1,0,1 ],
        [ 0,1,1,0, 0,1,0,1, 0,0,1,1, 0,1,0,1 ],
        [ 1,0,0,1, 1,0,1,0, 1,1,0,0, 1,0,1,0 ],
        [ 0,1,1,0, 0,1,0,1, 0,0,1,1, 0,1,0,1 ],
        [ 1,0,0,1, 1,0,1,0, 1,1,0,0, 1,0,1,0 ],
        [ 0,1,1,0, 0,1,0,1, 0,0,1,1, 0,1,0,1 ],
        [ 0,1,0,1, 1,0,1,0, 1,1,0,1, 0,1,0,1 ],
        [ 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0 ],
        [ 1,1,0,1, 0,1,0,1, 0,1,0,1, 1,0,1,0 ],
        [ 0,0,1,1, 0,1,0,1, 0,1,1,0, 0,1,0,1 ],
    ],
    [
        [ 0,0,1,1, 0,0,0,1, 1,0,1,1, 1,0,1,1 ],
        [ 0,1,1,1, 0,1,1,0, 0,0,1,1, 0,0,1,1 ],
        [ 0,1,1,0, 1,1,1,0, 1,1,0,0, 1,1,0,0 ],
        [ 1,0,0,0, 1,1,0,0, 1,1,0,1, 1,1,0,1 ],
        [ 1,0,1,1, 0,0,1,1, 0,0,0,1, 1,0,1,1 ],
        [ 0,0,1,1, 0,1,1,1, 0,1,1,0, 0,0,1,1 ],
        [ 1,1,0,0, 0,1,1,0, 1,1,1,0, 1,1,0,0 ],
        [ 1,1,0,1, 1,0,0,0, 1,1,0,0, 1,1,0,1 ],
        [ 1,0,1,1, 1,0,1,1, 0,0,1,1, 0,0,0,1 ],
        [ 0,0,1,1, 0,0,1,1, 0,1,1,1, 0,1,1,0 ],
        [ 1,1,0,0, 1,1,0,0, 0,1,1,0, 1,1,1,0 ],
        [ 1,1,0,1, 1,1,0,1, 1,0,0,0, 1,1,0,0 ],
        [ 0,0,0,1, 1,0,1,1, 1,0,1,1, 0,0,1,1 ],
        [ 0,1,1,0, 0,0,1,1, 0,0,1,1, 0,1,1,1 ],
        [ 1,1,1,0, 1,1,0,0, 1,1,0,0, 0,1,1,0 ],
        [ 1,1,0,0, 1,1,0,1, 1,1,0,1, 1,0,0,0 ],
    ],
    [
        [ 1,1,1,1, 0,0,1,1, 0,0,1,1, 0,1,0,1 ],
        [ 1,1,1,0, 1,0,1,0, 0,0,1,0, 1,0,1,1 ],
        [ 1,1,0,1, 0,1,1,0, 0,1,1,0, 0,1,1,1 ],
        [ 1,0,1,0, 0,1,0,0, 0,1,0,0, 1,1,1,1 ],
        [ 0,1,0,0, 1,1,0,0, 1,1,0,1, 1,1,1,1 ],
        [ 1,0,0,0, 1,0,0,0, 1,0,1,1, 1,1,1,0 ],
        [ 1,0,0,1, 1,0,0,1, 0,1,1,1, 1,1,0,1 ],
        [ 0,0,0,1, 0,0,1,0, 1,1,1,1, 1,0,0,1 ],
        [ 0,0,1,1, 0,1,0,1, 1,1,1,1, 0,0,1,1 ],
        [ 0,0,1,0, 1,0,1,1, 1,1,1,0, 1,0,1,0 ],
        [ 0,1,1,0, 0,1,1,1, 1,1,0,1, 0,1,1,0 ],
        [ 0,1,0,0, 1,1,1,1, 1,0,1,0, 0,1,0,0 ],
        [ 1,1,0,1, 1,1,1,1, 0,1,0,0, 1,1,0,0 ],
        [ 1,0,1,1, 1,1,1,0, 1,0,0,0, 1,0,0,0 ],
        [ 0,1,1,1, 1,1,0,1, 1,0,0,1, 1,0,0,1 ],
        [ 1,1,1,1, 1,0,0,1, 0,0,0,1, 0,0,1,0 ],
    ],
    [
        [ 1,0,0,0, 0,0,1,0, 0,0,1,1, 1,1,1,0 ],
        [ 0,0,0,0, 0,1,0,1, 0,1,1,1, 1,1,0,1 ],
        [ 1,0,0,0, 1,0,1,0, 1,1,1,1, 1,0,1,1 ],
        [ 1,1,0,1, 0,1,0,0, 0,1,1,1, 0,1,1,1 ],
        [ 1,0,1,0, 1,0,0,0, 0,0,1,0, 1,1,1,1 ],
        [ 0,0,0,1, 0,0,0,0, 0,1,0,1, 1,1,1,1 ],
        [ 0,0,0,0, 1,0,0,0, 1,0,1,0, 1,1,1,0 ],
        [ 0,0,0,1, 1,1,0,1, 0,1,0,0, 0,1,0,0 ],
        [ 0,0,1,1, 1,1,1,0, 1,0,0,0, 0,0,1,0 ],
        [ 0,1,1,1, 1,1,0,1, 0,0,0,0, 0,1,0,1 ],
        [ 1,1,1,1, 1,0,1,1, 1,0,0,0, 1,0,1,0 ],
        [ 0,1,1,1, 0,1,1,1, 1,1,0,1, 0,1,0,0 ],
        [ 0,0,1,0, 1,1,1,1, 1,0,1,0, 1,0,0,0 ],
        [ 0,1,0,1, 1,1,1,1, 0,0,0,1, 0,0,0,0 ],
        [ 1,0,1,0, 1,1,1,0, 0,0,0,0, 1,0,0,0 ],
        [ 0,1,0,0, 0,1,0,0, 0,0,0,1, 1,1,0,1 ],
    ],
    [
        [ 1,1,0,0, 1,1,0,0, 1,1,0,0, 1,1,0,0 ],
        [ 0,1,1,0, 0,1,1,0, 0,1,0,1, 0,1,1,0 ],
        [ 0,0,1,1, 0,0,1,1, 0,0,1,1, 0,0,1,1 ],
        [ 1,0,0,1, 1,0,0,1, 0,1,1,0, 0,1,0,1 ],
        [ 1,1,0,0, 1,1,0,0, 1,1,0,0, 1,1,0,0 ],
        [ 0,1,1,0, 0,1,0,1, 1,0,0,1, 1,0,0,1 ],
        [ 0,0,1,1, 0,0,1,1, 0,0,1,1, 0,0,1,1 ],
        [ 0,1,0,1, 0,1,1,0, 0,1,1,0, 0,1,1,0 ],
        [ 1,1,0,0, 1,1,0,0, 1,1,0,0, 1,1,0,0 ],
        [ 1,0,0,1, 1,0,0,1, 1,0,1,0, 1,0,0,1 ],
        [ 0,0,1,1, 0,0,1,1, 0,0,1,1, 0,0,1,1 ],
        [ 0,1,1,0, 0,1,1,0, 1,0,0,1, 1,0,1,0 ],
        [ 1,1,0,0, 1,1,0,0, 1,1,0,0, 1,1,0,0 ],
        [ 1,0,0,1, 1,0,1,0, 0,1,1,0, 0,1,1,0 ],
        [ 0,0,1,1, 0,0,1,1, 0,0,1,1, 0,0,1,1 ],
        [ 1,0,1,0, 1,0,0,1, 1,0,0,1, 1,0,0,1 ],
    ],
    [
        [ 0,1,0,1, 0,0,0,1, 1,0,0,1, 1,1,0,1 ],
        [ 0,1,0,1, 1,1,1,0, 0,1,1,0, 0,0,0,1 ],
        [ 1,0,1,0, 0,0,0,1, 1,0,0,1, 1,1,1,0 ],
        [ 1,0,1,0, 1,1,1,0, 0,1,1,0, 0,0,1,0 ],
        [ 0,1,0,1, 0,0,0,1, 1,0,0,1, 1,1,0,1 ],
        [ 0,1,0,1, 0,1,1,0, 1,0,1,0, 0,1,0,1 ],
        [ 0,1,0,1, 1,0,1,0, 1,0,1,0, 1,0,0,1 ],
        [ 0,1,1,0, 0,0,1,0, 1,0,1,0, 1,1,1,0 ],
        [ 1,0,0,1, 1,1,0,1, 0,1,0,1, 0,0,0,1 ],
        [ 0,1,1,0, 0,0,0,1, 0,1,0,1, 1,1,1,0 ],
        [ 1,0,0,1, 1,1,1,0, 1,0,1,0, 0,0,0,1 ],
        [ 0,1,1,0, 0,0,1,0, 1,0,1,0, 1,1,1,0 ],
        [ 1,0,0,1, 1,1,0,1, 0,1,0,1, 0,0,0,1 ],
        [ 1,0,1,0, 0,1,0,1, 0,1,0,1, 0,1,1,0 ],
        [ 1,0,1,0, 1,0,0,1, 0,1,0,1, 1,0,1,0 ],
        [ 1,0,1,0, 1,1,1,0, 0,1,1,0, 0,0,1,0 ],
    ],
    [
        [ 1,0,1,0, 0,1,1,0, 1,1,0,0, 1,0,1,0 ],
        [ 0,1,0,1, 1,0,0,1, 1,0,1,1, 1,0,1,1 ],
        [ 0,1,1,0, 0,1,1,0, 0,1,0,1, 1,1,0,1 ],
        [ 1,0,0,1, 0,1,0,1, 1,1,0,1, 0,0,1,0 ],
        [ 1,0,1,1, 1,0,1,0, 1,1,1,0, 1,1,1,0 ],
        [ 0,1,0,1, 0,0,1,0, 1,0,0,1, 0,1,1,1 ],
        [ 1,1,0,0, 1,1,0,1, 0,1,1,1, 0,1,0,0 ],
        [ 0,0,1,1, 0,1,0,1, 1,0,1,1, 1,0,1,1 ],
        [ 1,1,0,0, 1,0,1,0, 1,0,1,0, 0,1,1,0 ],
        [ 1,0,1,1, 1,0,1,1, 0,1,0,1, 1,0,0,1 ],
        [ 0,1,0,1, 1,1,0,1, 0,1,1,0, 0,1,1,0 ],
        [ 1,1,0,1, 0,0,1,0, 1,0,0,1, 0,1,0,1 ],
        [ 1,1,1,0, 1,1,1,0, 1,0,1,1, 1,0,1,0 ],
        [ 1,0,0,1, 0,1,1,1, 0,1,0,1, 0,0,1,0 ],
        [ 0,1,1,1, 0,1,0,0, 1,1,0,0, 1,1,0,1 ],
        [ 1,0,1,1, 1,0,1,1, 0,0,1,1, 0,1,0,1 ],
    ],
    [
        [ 0,1,1,1, 0,0,1,1, 0,1,0,1, 0,1,0,1 ],
        [ 1,0,1,1, 0,0,1,1, 1,0,1,0, 1,0,1,0 ],
        [ 0,1,0,1, 0,1,0,1, 1,1,0,0, 1,1,0,1 ],
        [ 1,0,1,0, 1,0,1,0, 1,1,0,0, 1,1,1,0 ],
        [ 0,0,1,1, 0,1,0,1, 0,1,0,1, 0,1,1,1 ],
        [ 0,0,1,1, 1,0,1,0, 1,0,1,0, 1,0,1,1 ],
        [ 0,1,0,1, 1,1,0,0, 1,1,0,1, 0,1,0,1 ],
        [ 1,0,1,0, 1,1,0,0, 1,1,1,0, 1,0,1,0 ],
        [ 0,1,0,1, 0,1,0,1, 0,1,1,1, 0,0,1,1 ],
        [ 1,0,1,0, 1,0,1,0, 1,0,1,1, 0,0,1,1 ],
        [ 1,1,0,0, 1,1,0,1, 0,1,0,1, 0,1,0,1 ],
        [ 1,1,0,0, 1,1,1,0, 1,0,1,0, 1,0,1,0 ],
        [ 0,1,0,1, 0,1,1,1, 0,0,1,1, 0,1,0,1 ],
        [ 1,0,1,0, 1,0,1,1, 0,0,1,1, 1,0,1,0 ],
        [ 1,1,0,1, 0,1,0,1, 0,1,0,1, 1,1,0,0 ],
        [ 1,1,1,0, 1,0,1,0, 1,0,1,0, 1,1,0,0 ],
    ],
    [
        [ 0,0,1,1, 0,1,1,0, 0,1,0,1, 1,1,0,1 ],
        [ 0,0,1,0, 1,1,1,0, 1,0,0,1, 1,0,1,1 ],
        [ 0,1,0,0, 1,1,0,1, 1,0,0,1, 0,1,1,1 ],
        [ 1,1,0,0, 1,0,1,1, 1,0,1,0, 0,1,1,0 ],
        [ 1,1,0,1, 0,0,1,1, 0,1,1,0, 0,1,0,1 ],
        [ 1,0,1,1, 0,0,1,0, 1,1,1,0, 1,0,0,1 ],
        [ 0,1,1,1, 0,1,0,0, 1,1,0,1, 1,0,0,1 ],
        [ 0,1,1,0, 1,1,0,0, 1,0,1,1, 1,0,1,0 ],
        [ 0,1,0,1, 1,1,0,1, 0,0,1,1, 0,1,1,0 ],
        [ 1,0,0,1, 1,0,1,1, 0,0,1,0, 1,1,1,0 ],
        [ 1,0,0,1, 0,1,1,1, 0,1,0,0, 1,1,0,1 ],
        [ 1,0,1,0, 0,1,1,0, 1,1,0,0, 1,0,1,1 ],
        [ 0,1,1,0, 0,1,0,1, 1,1,0,1, 0,0,1,1 ],
        [ 1,1,1,0, 1,0,0,1, 1,0,1,1, 0,0,1,0 ],
        [ 1,1,0,1, 1,0,0,1, 0,1,1,1, 0,1,0,0 ],
        [ 1,0,1,1, 1,0,1,0, 0,1,1,0, 1,1,0,0 ],
    ],
    [
        [ 1,1,1,0, 0,0,1,1, 0,0,1,1, 1,1,1,0 ],
        [ 1,1,1,1, 0,0,0,1, 0,1,1,1, 1,1,0,0 ],
        [ 1,1,1,1, 1,0,0,0, 1,1,1,1, 1,0,0,0 ],
        [ 0,1,1,1, 1,1,0,0, 1,1,1,1, 0,0,0,1 ],
        [ 0,0,1,1, 1,1,1,0, 1,1,1,0, 0,0,1,1 ],
        [ 0,0,0,1, 1,1,1,1, 0,0,0,1, 1,1,1,1 ],
        [ 1,0,0,0, 1,1,1,1, 1,0,0,0, 1,1,1,1 ],
        [ 1,1,0,0, 0,1,1,1, 1,1,0,0, 0,1,1,1 ],
        [ 0,0,1,1, 1,0,1,1, 1,1,1,0, 0,1,1,0 ],
        [ 0,1,1,1, 1,0,0,1, 1,1,1,1, 0,1,0,0 ],
        [ 1,1,1,1, 1,0,0,0, 1,1,1,1, 1,0,0,0 ],
        [ 1,1,1,1, 0,1,0,0, 0,1,1,1, 1,0,0,1 ],
        [ 1,1,1,0, 0,1,1,0, 0,0,1,1, 1,0,1,1 ],
        [ 1,1,0,0, 0,1,1,1, 1,1,0,0, 0,1,1,1 ],
        [ 1,0,0,0, 1,1,1,1, 1,0,0,0, 1,1,1,1 ],
        [ 0,0,0,1, 1,1,1,1, 0,0,0,1, 1,1,1,1 ],
    ],
    [
        [ 1,0,0,0, 1,1,0,1, 1,1,1,0, 0,0,0,1 ],
        [ 0,0,0,1, 1,0,0,1, 1,1,1,0, 0,0,1,1 ],
        [ 0,0,1,1, 0,0,0,1, 1,1,1,0, 0,1,1,0 ],
        [ 0,1,1,0, 0,0,0,1, 1,1,1,0, 1,1,0,0 ],
        [ 1,1,0,1, 1,1,1,0, 0,0,0,1, 1,0,0,0 ],
        [ 1,0,0,1, 1,1,1,0, 0,0,1,1, 0,0,0,1 ],
        [ 0,0,0,1, 1,1,1,0, 0,1,1,0, 0,0,1,1 ],
        [ 0,0,0,1, 1,1,1,0, 1,1,0,0, 0,1,1,0 ],
        [ 1,1,1,0, 0,0,0,1, 1,0,0,0, 1,1,0,1 ],
        [ 1,1,1,0, 0,0,1,1, 0,0,0,1, 1,0,0,1 ],
        [ 1,1,1,0, 0,1,1,0, 0,0,1,1, 0,0,0,1 ],
        [ 1,1,1,0, 1,1,0,0, 0,1,1,0, 0,0,0,1 ],
        [ 0,0,0,1, 1,0,0,0, 1,1,0,1, 1,1,1,0 ],
        [ 0,0,1,1, 0,0,0,1, 1,0,0,1, 1,1,1,0 ],
        [ 0,1,1,0, 0,0,1,1, 0,0,0,1, 1,1,1,0 ],
        [ 1,1,0,0, 0,1,1,0, 0,0,0,1, 1,1,1,0 ],
    ],
    [
        [ 1,0,1,0, 0,0,0,0, 1,0,0,0, 0,1,0,1 ],
        [ 0,1,0,1, 0,0,0,1, 0,0,0,0, 0,0,1,0 ],
        [ 1,0,1,0, 0,0,1,0, 0,1,0,0, 0,1,0,1 ],
        [ 0,1,0,1, 0,1,0,0, 0,0,1,0, 1,0,0,0 ],
        [ 0,0,0,0, 1,0,0,0, 0,0,0,1, 0,0,0,0 ],
        [ 0,0,0,1, 0,1,0,0, 0,0,1,0, 1,0,0,0 ],
        [ 0,0,1,0, 0,0,1,0, 0,1,0,0, 0,1,0,0 ],
        [ 1,0,0,0, 0,0,0,1, 1,0,0,0, 0,0,1,0 ],
        [ 0,1,0,0, 0,0,0,1, 1,0,0,0, 0,0,0,1 ],
        [ 0,0,1,0, 0,0,1,0, 0,1,0,0, 0,1,0,0 ],
        [ 0,0,0,1, 0,1,0,0, 0,0,1,0, 1,0,0,0 ],
        [ 0,0,0,0, 1,0,0,0, 0,0,0,1, 0,0,0,0 ],
        [ 0,0,0,1, 0,1,0,0, 0,0,1,0, 1,0,1,0 ],
        [ 1,0,1,0, 0,0,1,0, 0,1,0,0, 0,1,0,1 ],
        [ 0,1,0,0, 0,0,0,0, 1,0,0,0, 1,0,1,0 ],
        [ 1,0,1,0, 0,0,0,1, 0,0,0,0, 0,1,0,1 ],
    ],
];






const twentyFoursSeries = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    [24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
    [1,2,3,4,1,2,3,4, 5,6,7,8,5,6,7,8, 9,10,11,12,9,10,11,12, 13,14,15,16,13,14,15,16, 17,18,19,20,17,18,19,20, 21,22,23,24,21,22,23,24],
    [1,2,3,4,4,3,2,1,5,6,7,8,8,7,6,5,9,10,11,12,12,11,10,9,13,14,15,16,16,15,14,13,17,18,19,20,20,19,18,17,21,22,23,24,24,23,22,21],
];

const twentyFoursTieUps = [
    [
        [ 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0 ],
        [ 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0 ],
        [ 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0 ],
        [ 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1 ],
        [ 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0 ],
        [ 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0 ],
        [ 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1 ],
        [ 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1 ],
        [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1 ],
        [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1 ],
        [ 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ],
        [ 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0 ],
        [ 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0 ],
        [ 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0 ],
        [ 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1 ],
        [ 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0 ],
        [ 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0 ],
        [ 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1 ],
        [ 0, 0, 1, , 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1 ],
        [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1 ],
        [ 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1 ],
        [ 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0 ],
    ],
    [
        [ 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0 ],
        [ 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1 ],
        [ 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0 ],
        [ 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0 ],
        [ 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1 ],
        [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1 ],
        [ 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1 ],
        [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ],
        [ 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
        [ 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0 ],
        [ 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1 ],
        [ 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1 ],
        [ 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1 ],
        [ 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0 ],
        [ 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0 ],
        [ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0 ],
        [ 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
        [ 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1 ],
    ],
    [
        [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1 ],
        [ 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1 ],
        [ 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0 ],
        [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1 ],
        [ 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1 ],
        [ 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0 ],
        [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0 ],
        [ 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0 ],
        [ 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0 ],
        [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0 ],
        [ 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1 ],
        [ 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1 ],
        [ 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0 ],
        [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1 ],
        [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1 ],
        [ 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0 ],
        [ 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0 ],
        [ 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0 ],
        [ 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1 ],
        [ 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0 ],
        [ 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0 ],
        [ 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0 ],
    ],
    [
        [ 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0 ],
        [ 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1 ],
        [ 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0 ],
        [ 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1 ],
        [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1 ],
        [ 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1 ],
        [ 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0 ],
        [ 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0 ],
        [ 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1 ],
        [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1 ],
    ],
    [
        [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1 ],
        [ 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
        [ 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1 ],
        [ 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0 ],
        [ 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ],
        [ 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0 ],
        [ 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1 ],
        [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
        [ 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1 ],
        [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
        [ 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1 ],
        [ 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0 ],
        [ 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ],
        [ 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0 ],
        [ 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1 ],
        [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
        [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0 ],
    ],
    [
        [ 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1 ],
    ]
];


function combineSeriesWithTieUps(series, tieUps) {
    const result = [];

    for (let i = 0; i < tieUps.length; i++) {
        const tieUp = tieUps[i];
        for (let j = 0; j < series.length; j++) {
            const threadSeries = series[j];
            for (let k = j; k < series.length; k++) {
                const treadleSeries = series[k];
                result.push({
                    threading: threadSeries,
                    treadling: treadleSeries,
                    tieUp: tieUp
                })
            }
            
        }
    }
    
    return result;
}

const foursPatterns = combineSeriesWithTieUps(foursSeries, foursTieUps);
const eightsPatterns = combineSeriesWithTieUps(eightsSeries, eightsTieUps);
const sixteensPatterns = combineSeriesWithTieUps(sixteensSeries, sixteensTieUps);
const twentyFoursPatterns = combineSeriesWithTieUps(twentyFoursSeries, twentyFoursTieUps);