// 电影数据 - 请用你的真实数据替换这里的内容
const movieData = {
    stats: {
        total: 100,
        avgRating: 8.7,
        yearRange: "1994-2023",
        completeness: "98%"
    },
    
    decades: [
        { name: '1990年前', value: 5 },
        { name: '1990年代', value: 15 },
        { name: '2000年代', value: 25 },
        { name: '2010年代', value: 45 },
        { name: '2020年代', value: 10 }
    ],
    
    ratings: [
        { name: '9.0分以上', value: 22 },
        { name: '8.5-9.0分', value: 48 },
        { name: '8.0-8.5分', value: 26 },
        { name: '8.0分以下', value: 4 }
    ],
    
    regions: [
        { name: '中国大陆', value: 65 },
        { name: '中国香港', value: 15 },
        { name: '美国', value: 12 },
        { name: '其他地区', value: 8 }
    ],
    
    actors: [
        { name: '周星驰', value: 8 },
        { name: '刘德华', value: 6 },
        { name: '梁朝伟', value: 5 },
        { name: '张国荣', value: 4 },
        { name: '周润发', value: 4 },
        { name: '巩俐', value: 3 },
        { name: '章子怡', value: 3 },
        { name: '李连杰', value: 3 },
        { name: '成龙', value: 3 },
        { name: '葛优', value: 2 }
    ],
    
    top10: [
        { name: '肖申克的救赎', rating: 9.7 },
        { name: '霸王别姬', rating: 9.6 },
        { name: '这个杀手不太冷', rating: 9.5 },
        { name: '阿甘正传', rating: 9.4 },
        { name: '美丽人生', rating: 9.4 },
        { name: '泰坦尼克号', rating: 9.3 },
        { name: '千与千寻', rating: 9.3 },
        { name: '辛德勒的名单', rating: 9.3 },
        { name: '盗梦空间', rating: 9.2 },
        { name: '忠犬八公的故事', rating: 9.2 }
    ],
    
    movies: [
        { rank: 1, name: '肖申克的救赎', rating: 9.7, actors: '蒂姆·罗宾斯,摩根·弗里曼', year: 1994, region: '美国' },
        { rank: 2, name: '霸王别姬', rating: 9.6, actors: '张国荣,张丰毅,巩俐', year: 1993, region: '中国大陆' },
        { rank: 3, name: '这个杀手不太冷', rating: 9.5, actors: '让·雷诺,加里·奥德曼,娜塔莉·波特曼', year: 1994, region: '法国' },
        { rank: 4, name: '阿甘正传', rating: 9.4, actors: '汤姆·汉克斯,罗宾·怀特', year: 1994, region: '美国' },
        { rank: 5, name: '美丽人生', rating: 9.4, actors: '罗伯托·贝尼尼,尼可莱塔·布拉斯基', year: 1997, region: '意大利' },
        { rank: 6, name: '泰坦尼克号', rating: 9.3, actors: '莱昂纳多·迪卡普里奥,凯特·温丝莱特', year: 1997, region: '美国' },
        { rank: 7, name: '千与千寻', rating: 9.3, actors: '柊瑠美,入野自由', year: 2001, region: '日本' },
        { rank: 8, name: '辛德勒的名单', rating: 9.3, actors: '连姆·尼森,本·金斯利', year: 1993, region: '美国' },
        { rank: 9, name: '盗梦空间', rating: 9.2, actors: '莱昂纳多·迪卡普里奥,玛丽昂·歌迪亚', year: 2010, region: '美国' },
        { rank: 10, name: '忠犬八公的故事', rating: 9.2, actors: '理查·基尔,琼·艾伦', year: 2009, region: '美国' }
        // 请在这里继续添加你的100部电影数据
    ]
};