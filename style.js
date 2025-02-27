var family = new FamilyTree(document.getElementById("tree"), {
    showXScroll: FamilyTree.scroll.visible,
    showYScroll: FamilyTree.scroll.visible,
    mouseScrool: FamilyTree.action.zoom,
    enableSearch: false,
    nodeBinding: {
        field_0: "name",
        field_1: "birthDate",
        img_0 : "photo"
    },
});

family.load([
    { 
        id: 0, 
        gender: 'male', 
        name: 'Sangkala Palallo',
        fid: null, 
        mid: null,
        pids: [1], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 1, 
        gender: 'female', 
        name: 'Djohari',
        fid: null, 
        mid: null,
        pids: [0], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 2, 
        gender: 'male', 
        name: 'Achmad Palallo', 
        fid: 0, 
        mid: 1 ,
        pids: [3], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 3, 
        gender: 'female', 
        name: 'Suahrtiningsih',
        fid: 23,
        mid: 24,
        pids: [2], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 6, 
        gender: 'female', 
        name: 'Sarty', 
        fid: 3, 
        mid: 2,
        pids: [18], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 18, 
        gender: 'male', 
        name: 'Hasanuddin',
        fid: null, 
        mid: null,
        pids: [6],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 7, 
        gender: 'female', 
        name: 'Lely', 
        fid: 3, 
        mid: 2,
        pids: [27],
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 4, 
        gender: 'female', 
        name: 'Sukmawati', 
        fid: 3, 
        mid: 2,
        pids: [5], 
        birthDate: '18 Maret 1985',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 12, 
        gender: 'female', 
        name: 'Yanti',
        fid: 3,
        mid: 2,
        pids: [15],
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 13, 
        gender: 'male', 
        name: 'M. Fakhri Adnan',
        fid: 5,
        mid: 4,
        pids: [null],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 14, 
        gender: 'male', 
        name: 'M. Rizky Adnan', 
        fid: 5, 
        mid: 4 ,
        pids: [null],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 15, 
        gender: 'male', 
        name: 'Taufik',
        fid: null,
        mid: null,
        pids: [12],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 16, 
        gender: 'male', 
        name: 'Zaidan', 
        fid: 15, 
        mid: 12 ,
        pids: [null],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 17, 
        gender: 'female', 
        name: 'Zia', 
        fid: 15, 
        mid: 12 ,
        pids: [null],
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 19, 
        gender: 'male', 
        name: 'Hasan' ,
        fid: null,
        mid: null,
        pids: [20], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 20, 
        gender: 'female', 
        name: 'Saipa',
        fid: null,
        mid: null,
        pids: [19], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 21, 
        gender: 'male', 
        name: 'Abdul Kadir Hasan', 
        fid: 19, 
        mid: 20 ,
        pids: [22], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 22, 
        gender: 'female', 
        name: 'Hamsinah',
        fid: 25, 
        mid: 26,
        pids: [21], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 23, 
        gender: 'male', 
        name: 'Fadoli' ,
        fid: null,
        mid: null,
        pids: [24], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 24, 
        gender: 'female', 
        name: 'Mariana',
        fid: null,
        mid: null,
        pids: [23], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 25, 
        gender: 'male', 
        name: 'Borahima' ,
        fid: null,
        mid: null,
        pids: [26], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 26, 
        gender: 'female', 
        name: 'Zaenab',
        fid: null,
        mid: null,
        pids: [25], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 27, 
        gender: 'male', 
        name: 'Yadi' ,
        fid: null,
        mid: null,
        pids: [7], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 28, 
        gender: 'female', 
        name: 'Nur Bety' ,
        fid: 21,
        mid: 22,
        pids: [31], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 29, 
        gender: 'male', 
        name: 'Nur Syamsu' ,
        fid: 21,
        mid: 22,
        pids: [32], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 30, 
        gender: 'male', 
        name: 'Adi' ,
        fid: 21,
        mid: 22,
        pids: [36], 
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 5, 
        gender: 'male', 
        name: 'Nur Adnan', 
        fid: 21, 
        mid: 22 ,
        pids: [4],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 31, 
        gender: 'male', 
        name: 'Wahyu', 
        fid: null, 
        mid: null,
        pids: [28],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 32, 
        gender: 'female', 
        name: 'Taty' ,
        fid: null,
        mid: null,
        pids: [29], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 33, 
        gender: 'male', 
        name: 'Fauzan', 
        fid: 29, 
        mid: 32,
        pids: [],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 34, 
        gender: 'female', 
        name: 'Fika' ,
        fid: 29,
        mid: 32,
        pids: [], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 35, 
        gender: 'male', 
        name: 'Fauzi', 
        fid: 29, 
        mid: 32,
        pids: [],
        birthDate: '10 Maret 1950',
        photo: 'https://i.pinimg.com/736x/58/a3/fa/58a3fa65f253cb12244a2e51d4e74cbf.jpg'
    },
    { 
        id: 36, 
        gender: 'female', 
        name: 'Nur Caya' ,
        fid: null,
        mid: null,
        pids: [30], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },
    { 
        id: 37, 
        gender: 'female', 
        name: 'Tiwi' ,
        fid: 30,
        mid: 36,
        pids: [], 
        birthDate: '12 Desember 1951',
        photo: 'https://i.pinimg.com/736x/42/a7/e4/42a7e4a91672121998a35dc79a53ecfc.jpg'
    },

    ]);
